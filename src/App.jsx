import React from 'react'
import { Navbar } from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'

const App = () => {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
      <Navbar/>
      <Hero/>
      <Services/>
    </div>
  )
}

export default App
