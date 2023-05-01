import React, { useRef, useEffect } from 'react';
import MapView from '@arcgis/core/views/MapView';
import Map from '@arcgis/core/Map';
import config from '@arcgis/core/config';
import * as locator from '@arcgis/core/rest/locator';
import Graphic from '@arcgis/core/Graphic';
import {
  API_KEY, BASEMAP, LOCATION, ZOOM_LEVEL, LOCATOR_URL,
} from '../config/arcgis_config';
import getLocateWidget from '../widgets/Locate';
import getSearchWidet from '../widgets/Search';
import getSelectPlace from '../widgets/SelectPlace';

function App() {
  const mapDiv = useRef(null);

  useEffect(() => {
    if (mapDiv.current) {
      config.apiKey = API_KEY;

      const map = new Map({
        basemap: BASEMAP,
      });

      const view = new MapView({ // eslint-disable-line
        container: mapDiv.current,
        center: LOCATION, // Longitude, latitude (Astana)
        zoom: ZOOM_LEVEL,
        map,
      });

      // Locate widget
      const locate = getLocateWidget(view);
      view.ui.add(locate, 'top-left');

      // Search widget
      const search = getSearchWidet(view);
      view.ui.add(search, 'top-right');

      // Select widget
      const select = getSelectPlace();
      view.ui.add(select, 'top-right');

      // Find places and add them to the map
      function findPlaces(category, pt) { // eslint-disable-line
        locator.addressToLocations(LOCATOR_URL, {
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
