import Locate from '@arcgis/core/widgets/Locate';

export default function getLocateWidget(view) {
  return new Locate({
    view,
    useHeadingEnabled: false,
    goToOverride(view, options) { // eslint-disable-line
      options.target.scale = 1500; // eslint-disable-line
      return view.goTo(options.target);
    },
  });
}
