import React, { useRef, useEffect } from 'react';
import MapView from '@arcgis/core/views/MapView';
import Map from '@arcgis/core/Map';
import config from '@arcgis/core/config';
import Locate from '@arcgis/core/widgets/Locate';
import Search from '@arcgis/core/widgets/Search';
import * as locator from '@arcgis/core/rest/locator';
import Graphic from '@arcgis/core/Graphic';
import {
  API, BASEMAP, LOCATION, ZOOM_LEVEL,
} from '../config/arcgis_config';

function App() {
  const mapDiv = useRef(null);

  useEffect(() => {
    if (mapDiv.current) {
      config.apiKey = API;

      const map = new Map({
        basemap: BASEMAP,
      });

      const view = new MapView({ // eslint-disable-line
        container: mapDiv.current,
        center: LOCATION, // Longitude, latitude (Astana)
        zoom: ZOOM_LEVEL,
        map,
      });

      const locate = new Locate({
        view,
        useHeadingEnabled: false,
        goToOverride(view, options) { // eslint-disable-line
          options.target.scale = 1500; // eslint-disable-line
          return view.goTo(options.target);
        },
      });
      view.ui.add(locate, 'top-left');

      const search = new Search({
        view,
      });
      view.ui.add(search, 'top-right');

      // craete select options
      const places = [
        'Choose a place type...',
        'Parks and Outdoors',
        'Coffee shop',
        'Gas station',
        'Food',
        'Hotel',
      ];

      const select = document.createElement('select');
      select.classList.add('esri-widget', 'esri-select');
      select.style.width = '175px';
      select.style.fontFamily = 'sans-serif';
      select.style.fontSize = '1em';

      places.forEach((value) => {
        const option = document.createElement('option');
        option.value = value;
        option.textContent = value;
        select.appendChild(option);
      });

      view.ui.add(select, 'top-right');

      const locatorUrl = 'http://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer';

      // Find places and add them to the map
      function findPlaces(category, pt) { // eslint-disable-line
        locator.addressToLocations(locatorUrl, {
          location: pt,
          categories: [category],
          maxLocations: 25,
          outFields: ['Place_addr', 'PlaceName'],
        }).then((results) => {
          view.popup.close();
          view.graphics.removeAll();

          results.forEach((result) => {
            view.graphics.add(
              new Graphic({
                attributes: result.attributes, // Data attributes returned
                geometry: result.location, // Point returned
                symbol: {
                  type: 'simple-marker',
                  color: '#000000',
                  size: '12px',
                  outline: {
                    color: '#ffffff',
                    width: '2px',
                  },
                },

                popupTemplate: {
                  title: '{PlaceName}', // Data attribute names
                  content: '{Place_addr}',
                },
              }),
            );
          });
        });
      }

      // Search for places in center of map
      view.watch('stationary', (val) => {
        if (val) {
          findPlaces(select.value, view.center);
        }
      });

      // Listen for category changes and find places
      select.addEventListener('change', (event) => {
        findPlaces(event.target.value, view.center);
      });
    }
  }, []);

  return <div className="mapDiv" style={{ height: '100%' }} ref={mapDiv} />;
}

export default App;
