import React, { useRef, useEffect, useContext } from 'react';
import MapView from '@arcgis/core/views/MapView';
import Map from '@arcgis/core/Map';
import config from '@arcgis/core/config';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import {
  API_KEY, BASEMAP, LOCATION, ZOOM_LEVEL,
} from '../config/arcgisConfig';
import getLocateWidget from '../widgets/Locate';
import getSearchWidet from '../widgets/Search';
import shopList from '../data/shopList';
import AppContext from '../context/AppContext';
import getPoligonAndPoint from '../helpers/poligonAndPoint';

function App() {
  const mapDiv = useRef(null);
  const setCurrentShopId = useContext(AppContext); // eslint-disable-line

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

      // Add graphic layer
      const graphicsLayer = new GraphicsLayer();
      map.add(graphicsLayer);

      // Get the screen point from the view's click event
      view.on('click', (event) => {
        const screenPoint = {
          x: event.x,
          y: event.y,
        };

        view.hitTest(screenPoint).then((response) => {
          if (response.results.length === 2) {
            const { graphic } = response.results.filter(
              (result) => result.graphic.layer === graphicsLayer,
            )[0];
            // console.log(graphic.attributes?.Id);
            setCurrentShopId(graphic.attributes?.Id);
            return;
          }
          setCurrentShopId(null);
        });
      });

      // Add finally poligons and points
      shopList.forEach((shop) => getPoligonAndPoint(graphicsLayer, shop));
    }
  }, []);

  return <div style={{ height: '100%' }} ref={mapDiv} />;
}

export default App;
