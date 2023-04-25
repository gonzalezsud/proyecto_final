// // dom.js
// export function createCountryCard(country, index) {
//     // ...
//   }
  
//   export function addCountryCardEventListeners(countries) {
//     // ...
//   }
  
//   export async function displayCountryCards(filteredCountries) {
//     // ...
//   }
  
//   export function displayCountryDetailsInModal(country) {
//     // ...
//   }
  
//   export function toggleDarkMode() {
//     // ...
//   }
  
//   export async function displayCountryCards2(filteredCountries) {
//     // ...
//   }
  






  // dom.js
export function createCountryCard(country, index) {
    const card = `
      <div class="col-12 col-md-4">
        <div class="card mb-3" data-country-index="${index}" data-bs-toggle="modal" data-bs-target="#countryModal">
          <img src="${country.flags.svg}" class="card-img-top" alt="${country.name.common}">
          <div class="card-body">
            <h5 class="card-title">${country.name.common}</h5>
            <p class="card-text">Capital: ${country.capital}</p>
            <p class="card-text">Región: ${country.region}</p>
            <p class="card-text">Población: ${country.population.toLocaleString()}</p>
          </div>
        </div>
      </div>
    `;
    return card;
  }
  
  export function addCountryCardEventListeners(countries) {
    const countryCards = document.querySelectorAll('.card');
  
    countryCards.forEach((card) => {
      card.addEventListener('click', (event) => {
        const target = event.currentTarget;
        const countryIndex = parseInt(target.getAttribute('data-country-index'), 10);
        const country = countries[countryIndex];
  
        displayCountryDetailsInModal(country);
      });
    });
  }
  
  export async function displayCountryCards(filteredCountries) {
    const countriesRow = document.getElementById('countriesRow');
    countriesRow.innerHTML = '';
  
    filteredCountries.forEach((country, index) => {
      const card = createCountryCard(country, index);
      countriesRow.innerHTML += card;
    });
  
    addCountryCardEventListeners(filteredCountries);
  }
  
  export function displayCountryDetailsInModal(country) {
    document.getElementById('modal-flag').src = country.flags.svg;
    document.getElementById('modal-name').innerText = country.name.common;
    document.getElementById('modal-native-name').innerText = `Nombre nativo: ${Object.values(country.name.nativeName)[0].common}`;
    document.getElementById('modal-population').innerText = `Población: ${country.population.toLocaleString()}`;
    document.getElementById('modal-region').innerText = `Región: ${country.region}`;
    document.getElementById('modal-subregion').innerText = `Subregión: ${country.subregion}`;
    document.getElementById('modal-capital').innerText = `Capital: ${country.capital}`;
    document.getElementById('modal-tld').innerText = `Dominio de nivel superior: ${country.tld.join(', ')}`;
    document.getElementById('modal-currencies').innerText = `Monedas: ${Object.values(country.currencies).map(currency => currency.name).join(', ')}`;
    document.getElementById('modal-languages').innerText = `Idiomas: ${Object.values(country.languages).join(', ')}`;
  
    const borderCountriesList = document.getElementById('modal-border-countries');
    borderCountriesList.innerHTML = '';
  
    if (country.borders.length === 0) {
      borderCountriesList.innerHTML = '<li class="list-inline-item">No hay países fronterizos.</li>';
    } else {
      country.borders.forEach(border => {
        const listItem = document.createElement('li');
        listItem.classList.add('list-inline-item');
        listItem.textContent = border;
        borderCountriesList.appendChild(listItem);
      });
    }
  }
  
  export function toggleDarkMode() {
        const body = document.body;
        const cards = document.querySelectorAll('.card');
        const modalContent = document.querySelector('.modal-content');
      
        body.classList.toggle('bg-dark');
        body.classList.toggle('text-white');
        modalContent.classList.toggle('bg-dark');
        modalContent.classList.toggle('text-white');
      
        cards.forEach(card => {
          card.classList.toggle('bg-dark');
          card.classList.toggle('text-white');
        });
      }
      
      const toggleDarkModeButton = document.getElementById('toggleDarkMode');
      toggleDarkModeButton.addEventListener('click', toggleDarkMode);


      





      export async function displayCountryCards2(filteredCountries) {
        const countriesRow = document.getElementById('countriesRow');
        countriesRow.innerHTML = '';
      
        filteredCountries.forEach((country, index) => {
          const card = createCountryCard(country, index);
          countriesRow.innerHTML += card;
        });
      
        addCountryCardEventListeners(filteredCountries);
      }