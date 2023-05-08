import Flag from './Flag'
import WeatherDisplay from './WeatherDisplay'

const CountryView = ({ country, setCountry }) => {

    if (country) {
        return (
            <div>
                <h1>{country.name.common}</h1>
                <div>Capital: {country.capital} </div>
                <div>Area: {country.area} </div>
                <h3>languages: </h3>
                <ul>
                    {Object.values(country.languages).map(language =>
                        <li key={language}>{language}</li>
                    )}
                </ul>
                <Flag img={country.flags.png} />
                <WeatherDisplay country={country}/>
            </div>
        )
    }
}

export default CountryView