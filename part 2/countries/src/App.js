import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Display from './components/Display'
import axios from 'axios'

function App() {

  const [nameFilter, setNameFilter] = useState('')
  const [countries, setCountries] = useState(null)
  const [filteredCountries, setFilteredCountries] = useState(null)

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)

        // console.log(countries)
        if (countries && (nameFilter != '')) {
          setFilteredCountries(countries.filter(country => filterCountry(country)))
        }
      })
  }, [nameFilter])


  function filterCountry(country) {
    const countryName = country.name.common
    if (countryName.length < nameFilter.length) {
      return false
    }
    for (let i = 0; i < nameFilter.length; i++) {
      if (nameFilter[i] != countryName[i]) {
        return false
      }
    }
    return true
  }

  return (
    <div className="App">
      <Filter value={nameFilter} onChange={x => setNameFilter(x.target.value)} />

      <Display countryList={filteredCountries} />
    </div>
  );
}

export default App;
