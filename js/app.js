// app.js
import { fetchCountries } from './data.js';
import {
  createCountryCard,
  addCountryCardEventListeners,
  displayCountryCards,
  displayCountryDetailsInModal,
  toggleDarkMode,
  displayCountryCards2
} from './dom.js';

// Resto del código...
document.querySelector('form').addEventListener('submit', async (event) => {
  // ...
  event.preventDefault();
  const keywords = document.getElementById('search-keywords').value.toLowerCase();
  const region = document.getElementById('search-region').value.toLowerCase();
  const countries = await fetchCountries();

  const filteredCountries = countries.filter((country) => {
    const countryName = country.name.common.toLowerCase();
    const countryRegion = country.region.toLowerCase();

    const matchesKeywords = !keywords || countryName.includes(keywords);
    const matchesRegion = !region || countryRegion === region;

    return matchesKeywords && matchesRegion;
  });

  displayCountryCards2(filteredCountries);
});




// Llama a la función para mostrar las tarjetas de países
(async () => {
  const countries = await fetchCountries();
  displayCountryCards2(countries);
})();


