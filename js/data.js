// data.js
export async function fetchCountries() {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const countries = await response.json();
      return countries;
    } catch (error) {
      console.error('Error al obtener datos de países:', error);
    }
  }
  