const Country = ({ country }) => {
    if (!country) {
      return <div>not found...</div>
    }
  
    return (
      <div className='w-full mx-auto max-w-xs border border-gray-200 dark:border-gray-700 rounded-lg shadow-md overflow-hidden bg-white dark:bg-gray-700'>
        <img 
          src={country.flags.png}
          className='w-full mx-auto h-48 shadow-md'
          alt={`flag of ${country.name.common}`}/>
        <div className='p-10'>
          <h3 className='text-lg font-bold mb-2 dark:text-gray-200'>{country.name.common} </h3>
          <p className='text-sm mb-1 dark:text-gray-200'><span className='font-semibold'>Population: </span>{new Intl.NumberFormat('de-DE').format(country.population)}</p>
          <p className='text-sm mb-1 dark:text-gray-200'><span className='font-semibold'>Region: </span> {country.region} </p>
          <p className='text-sm mb-1 dark:text-gray-200'><span className='font-semibold'>Capital: </span> {country.capital?.[0]} </p>
        </div>
      </div>
    )
  }

  export default Country