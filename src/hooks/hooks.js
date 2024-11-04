import { useState, useEffect } from "react";
import axios from "axios";

export const useField = (type) => {
    const [value, setValue] = useState('')

    const onChange = (event) => {
        setValue(event.target.value)
    }

    const reset = () => {
        setValue('')
    }

    return {
        inputProps: { type, value, onChange},
        value,
        reset
    }
}

export const useCountry =  (name, region) => {
    const [countries, setCountries] = useState([])

   useEffect(() => {
    const fetchCountries = async () => {
        try {
            const response = await axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
            let filteredCountries = response.data

            if (name) {
                 filteredCountries = response.data.filter(c => 
                    c.name.common.toLowerCase().includes(name.toLowerCase())
                )
            }
            if (region) {
                filteredCountries = filteredCountries.filter(c => c.region === region)
            }
            
            setCountries(filteredCountries)
        }
        catch (error) {
            console.error('Error fetching countries:', error)
            setCountries([])
        }
    }
    fetchCountries()
   }, [name, region])

   return countries
}