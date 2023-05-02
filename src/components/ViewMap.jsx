import React, { useRef, useEffect, useContext } from 'react';
import MapView from '@arcgis/core/views/MapView';
import Map from '@arcgis/core/Map';
import config from '@arcgis/core/config';
import Graphic from '@arcgis/core/Graphic';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import {
  API_KEY, BASEMAP, LOCATION, ZOOM_LEVEL,
} from '../config/arcgisConfig';
import getLocateWidget from '../widgets/Locate';
import getSearchWidet from '../widgets/Search';
import shopList from '../data/shopList';
import AppContext from '../context/AppContext';

function App() {
  const mapDiv = useRef(null);
  const [currentShop, setCurrentShop] = useContext(AppContext); // eslint-disable-line

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

      view.on('click', (event) => {
        // Get the coordinates of the click on the view
        const lat = event.mapPoint.latitude;
        const lon = event.mapPoint.longitude;

        // !!!!! console.log(view.popup);

        view.popup.open({
          // Set the popup's title to the coordinates of the location
          title: `Reverse geocode: [${lon}, ${lat}]`,
          location: event.mapPoint, // Set the location of the popup to the clicked location
          content: 'This is a point of interest', // content displayed in the popup
        });
      });

      // Locate widget
      const locate = getLocateWidget(view);
      view.ui.add(locate, 'top-left');

      // Search widget
      const search = getSearchWidet(view);
      view.ui.add(search, 'top-right');

      // Add graphic layer
      const graphicsLayer = new GraphicsLayer();
      map.add(graphicsLayer);

      function createPoligon(layer, data) { // eslint-disable-line
        // Create a polygon geometry
        const polygon = {
          type: 'polygon',
          rings: data.rings,
        };

        const popupTemplate = {
          title: '{Name}',
          content: '{Description}',
        };

        const attributes = {
          Name: data.name,
          Description: data.description,
        };

        const polygonGraphic = new Graphic({
          geometry: polygon,
          symbol: {
            type: 'simple-fill',
            color: [227, 139, 79, 0.8], // Orange, opacity 80%
            outline: {
              color: [255, 255, 255],
              width: 1,
            },
          },
          attributes,
          popupTemplate,
        });
        graphicsLayer.add(polygonGraphic);
      }

      shopList.forEach((shop) => createPoligon(graphicsLayer, shop));
    }
  }, []);

  return <div style={{ height: '100%' }} ref={mapDiv} />;
}

export default App;
