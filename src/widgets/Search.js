import Search from '@arcgis/core/widgets/Search';

export default function getSearchWidet(view) {
  return new Search({ view });
}
