import { useParams } from "react-router-dom"
import { useCountry } from "../hooks/hooks"
import { useNavigate } from "react-router-dom"

const CountryDetail = () => {
    const { cca2 } = useParams()
    const navigate = useNavigate()
    const countryData = useCountry(null, null, cca2)

    if (countryData.length === 0) return <div className="dark:text-white">Loading...</div>

    const country = countryData[0]

    const nativeNames = country.name.nativeName
    const commonNativeName = nativeNames ? Object.values(nativeNames)[0]?.common : "N/A"


    return (
        <div>
            {/*Back button*/}
            <button 
                onClick={() => navigate('/')}
                className="mb-10 border border-white text-black dark:text-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 mt-10 p-1 pl-5 pr-5 rounded-sm shadow-lg"
            >
                &larr;Back
            </button>

            <div className="flex flex-col md:flex-row lg:items-start gap-12 xl:gap-28  pt-5">
                
                <img src={country.flags.png} alt={`${country.name.common} flag`} className="w-full max-w-md md:w-1/2 md:h-72 shadow-md mb-4 md:mb-0"/>
                
                {/*Country details*/}
                <div className="flex flex-col space-y-2 w-full">
                    <h1 className="text-3xl font-bold mb-4 dark:text-gray-200 pt-4">{country.name.common}</h1>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 lg:gap-y-0 gap-x-6 md:gap-x-18">
                        <p className="text-sm mb-1 dark:text-gray-400"><span className="font-semibold dark:text-gray-300">Native Name: </span>{commonNativeName}</p>
                        <p className="text-sm mb-1 dark:text-gray-400"><span className="font-semibold dark:text-gray-300">Population: </span>{new Intl.NumberFormat('de-DE').format(country.population)}</p>
                        <p className="text-sm mb-1 dark:text-gray-400"> <span className="font-semibold dark:text-gray-300">Region: </span>{country.region}</p>
                        <p className="text-sm mb-1 dark:text-gray-400"><span className="font-semibold dark:text-gray-300">Sub Region: </span>{country.region}</p>
                        <p className="text-sm mb-1 dark:text-gray-400"><span className="font-semibold dark:text-gray-300"> Capital: </span>{country.capital}</p>
                        <p className="text-sm mb-1 dark:text-gray-400"><span className="font-semibold dark:text-gray-300">Currency: </span>{Object.values(country.currencies)[0]?.name}</p>
                        <p className="text-sm mb-1 dark:text-gray-400"><span className="font-semibold dark:text-gray-300">Languages: </span>{Object.values(country.languages).join(', ')}</p>
                        <p className="text-sm mb-1 dark:text-gray-400"><span className="font-semibold dark:text-gray-300">Timezones: </span>{Object.values(country.timezones).join(', ')}</p>
                    </div>
                    
                
                    <div>
                        <div className="flex flex-wrap gap-5 mt-16">
                        <p className="text-black dark:text-gray-200 whitespace-nowrap">Border Countries:</p>
                        {country.borders && country.borders.length > 0 ? (
                            country.borders.map((code) => (
                                <span
                                    key={code}
                                    className="px-4 dark:bg-gray-700 text-gray-800 dark:text-gray-400 rounded-sm shadow-around-element"
                                >
                                    {code}
                                </span>
                            ))
                        ) : (
                            <span
                                className="text-gray-800 dark:text-gray-400"
                            >No bordering countries</span>
                        )}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CountryDetail