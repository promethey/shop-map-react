import { PLACES } from '../config/arcgis_config';

const select = document.createElement('select');
select.classList.add('esri-widget', 'esri-select');
select.style.width = '175px';
select.style.fontFamily = 'sans-serif';
select.style.fontSize = '1em';

PLACES.forEach((value) => {
  const option = document.createElement('option');
  option.value = value;
  option.textContent = value;
  select.appendChild(option);
});

export default select;
