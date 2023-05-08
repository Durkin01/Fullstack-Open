import { useState } from 'react'
import CountryView from './CountryView'
import CountryList from './CountryList'

const Display = ({ countryList }) => {
    const [country, setCountry] = useState(null)
    // console.log("inside display");
    // console.log(countryList);
    const countryListOn = true;

    if (countryList) {
        const countryListLength = countryList.length        

        return (
            <div>
                <CountryList 
                    countryList={countryList} 
                    countryListLength={countryListLength} 
                    setCountry={setCountry} 
                    />
                <CountryView 
                    country={country} 
                    setCountry={setCountry}
                    />
            </div>
        )
    }
}

export default Display 