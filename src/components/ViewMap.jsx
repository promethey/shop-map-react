import React, { useRef, useEffect } from 'react';
import MapView from '@arcgis/core/views/MapView';
import Map from '@arcgis/core/Map';
import config from '@arcgis/core/config';
import Locate from '@arcgis/core/widgets/Locate';
import Search from '@arcgis/core/widgets/Search';

function App() {
  const mapDiv = useRef(null);

  useEffect(() => {
    if (mapDiv.current) {
      config.apiKey = 'AAPKbd9a79f566894b5492c6806b30a5e6d54OE0-02gqGXr7sat33IWZ684YcUjNVdNPyIB9Bi59dBE3HIZ--hZZOvgamjm1sRf';

      const map = new Map({
        basemap: 'arcgis-topographic',
      });

      const view = new MapView({ // eslint-disable-line
        container: mapDiv.current,
        center: [71.449074, 51.169392], // Longitude, latitude (Astana)
        zoom: 11, // Zoom level
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
    }
  }, []);

  return <div className="mapDiv" style={{ height: '100%' }} ref={mapDiv} />;
}

export default App;
