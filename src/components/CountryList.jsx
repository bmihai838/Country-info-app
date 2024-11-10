import { useNavigate } from "react-router-dom";
import Country from './Country'

const CountryList = ({ countries }) => {
    const navigate = useNavigate()

    const handleCardClick = (cca2) => {
        navigate(`/country/${cca2}`)
    }

    return (
        <div className='grid grid-cols-auto-fit gap-20 mt-4'>
            {countries?.length > 0 && (
              countries.map(country => (
                <div
                    key={country.cca2}
                    onClick={() => handleCardClick(country.cca2)}
                    className="cursor-pointer"    
                >
                    <Country key={country.name.common} country={country}/>
                </div>
              ))
            )}
          </div>
    )
}

export default CountryList