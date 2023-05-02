import Graphic from '@arcgis/core/Graphic';

export default function createPoligonAndPoint(layer, data) {
  // Crate a point marker
  const point = {
    type: 'point',
    longitude: [data.location[0]],
    latitude: [data.location[1]],
  };

  const simpleMarkerSymbol = {
    type: 'simple-marker',
    color: [226, 119, 40], // Orange
    outline: {
      color: [255, 255, 255], // White
      width: 1,
    },
  };

  const pointGraphic = new Graphic({
    geometry: point,
    symbol: simpleMarkerSymbol,
  });

  // Create a polygon geometry
  const polygon = {
    type: 'polygon',
    rings: data.rings,
  };

  const popupTemplate = {
    title: '{Name} ({Id})',
    content: '{Description}',
  };

  const attributes = {
    Id: data.id,
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

  layer.add(polygonGraphic);
  layer.add(pointGraphic);
}
