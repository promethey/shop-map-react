import React, { useRef, useEffect } from 'react';
import MapView from '@arcgis/core/views/MapView';
import Map from '@arcgis/core/Map';
import config from '@arcgis/core/config';

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
    }
  }, []);

  return <div className="mapDiv" style={{ height: '100%' }} ref={mapDiv} />;
}

export default App;
