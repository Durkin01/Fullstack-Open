import { useEffect } from 'react'

const CountryList = ({ countryListLength, countryList, setCountry }) => {


    useEffect(() => {
        if (countryListLength == 1) { 
            setCountry(countryList[0])
        }
        else {
            setCountry(null)
        }

    }, [countryList])

    if (countryListLength > 10) {
        return (
            <div>Too many matches, specify another filter</div>
        )
    }
    else if (countryListLength > 1) {
        return (
            countryList.map(country => 
                <div key={country.name.common}> {country.name.common}

                    <button onClick={ () => {
                        console.log("country list", country)
                        setCountry(country)}}>

                        show
                    </button> 
                </div> 
            )        
        )
    }
}

export default CountryList