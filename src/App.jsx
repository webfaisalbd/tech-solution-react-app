import React from 'react'
import AboutCompany from './components/AboutCompany'
import Banner from './components/Banner'
import Experts from './components/Experts'
import Header from './components/Header'
import NewsLetter from './components/NewsLetter'
import Plans from './components/Plans'

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Experts />
      <Plans />
      <AboutCompany />
      <NewsLetter />
    </div>
  )
}

export default App