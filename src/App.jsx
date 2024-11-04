import { useField, useCountry } from './hooks/hooks'
import './index.css'
import Header from './components/Header'
import Filter from './components/Filter'

const Country = ({ country }) => {
  if (!country) {
    return <div>not found...</div>
  }

  return (
    <div className='w-full border border-gray-200 dark:border-gray-700 rounded-lg shadow-md overflow-hidden bg-white dark:bg-gray-700'>
      <img 
        src={country.flags.png}
        className='w-full h-48 shadow-md'
        alt={`flag of ${country.name.common}`}/>
      <div className='p-10'>
        <h3 className='text-lg font-bold mb-2 dark:text-gray-200'>{country.name.common} </h3>
        <p className='text-sm mb-1 dark:text-gray-200'><span className='font-semibold'>Population: </span>{country.population} </p>
        <p className='text-sm mb-1 dark:text-gray-200'><span className='font-semibold'>Region: </span> {country.region} </p>
        <p className='text-sm mb-1 dark:text-gray-200'><span className='font-semibold'>Capital: </span> {country.capital?.[0]} </p>
      </div>
    </div>
  )
}

const App = () => {
  const name = useField('text')
  const region = useField('text')
  const countries = useCountry(name.value, region.value)

  return (
    <div className='flex flex-col min-h-screen bg-body-custom-gray dark:bg-dark-body-custom-gray'>
      <Header/>

      <main className='container mx-auto px-4 md:px-16'>
        <div className='flex justify-between items-center mt-8'>
          <div className='relative w-full max-w-md'>

            <svg 
              className='absolute left-4 transform -translate-y-1 top-[30%] text-gray-900 dark:text-gray-200 w-5 h-5'
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>


            <input 
              {...name.inputProps}
              placeholder="Search for a country..."
              className='dark:placeholder-gray-200 w-full placeholder-gray-900 max-w-md h-12 pl-14 mb-4 rounded-md focus:outline-none shadow-lg dark:bg-gray-700'
            />
          </div>
          <Filter region={region}></Filter>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 mt-4'>
          {countries?.length > 0 && (
            countries.map(country => (
              <Country key={country.name.common} country={country}/>
            ))
          )}
        </div>
      </main>
    </div>
  )
}

export default App