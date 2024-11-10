import { useField, useCountry } from './hooks/hooks'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import './index.css'
import Header from './components/Header'
import Filter from './components/Filter'
import CountryList from './components/CountryList'
import CountryDetail from './components/CountryDetail'

const App = () => {
  const location = useLocation()
  const name = useField('text')
  const region = useField('text')
  const countries = useCountry(name.value, region.value)

  return (
    <div className='flex flex-col min-h-screen bg-body-custom-gray dark:bg-dark-body-custom-gray'>
       <Header/>

      <main className='container mx-auto px-4 lg:px-16'>

        {/*Root page*/}

         {location.pathname === '/' && (
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
                 className='dark:text-white dark:placeholder-gray-200 w-full placeholder-gray-900 max-w-64 sm:max-w-xs md:max-w-sm p-2 md:p-4 pl-14 md:pl-14 mb-4 rounded-md focus:outline-none shadow-lg dark:bg-gray-700'
              />
             </div>
             
             <Filter region={region}></Filter>
          </div>
      )}
      
         <Routes>
           <Route path='/' element={<CountryList countries={countries}/>}/>
           <Route path='/country/:cca2' element={<CountryDetail/>}/>
         </Routes>
      </main>
    </div>
  )
}

export default App