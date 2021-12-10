import './App.scss';
import React,{ useState } from 'react'
import Header from './components/Header/Header'
import Header_column from './components/Header/Header_column'
import Home from './components/Home/Home'
import About from './components/About/About'
import Education from './components/Education/Education'
import Product from './components/Product/Product'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Space from './components/Space/Space'
import Aside from './components/Aside/Aside'




function App() {
  const [openHeader,setOpenHeader] = useState('')
  const [closeHeader,setCloseHeader] = useState('active')

  window.addEventListener('scroll',() => {
    if(window.pageYOffset > 300) {
        setOpenHeader('')
        setCloseHeader('active')
    } else {
        setOpenHeader('active')
        setCloseHeader('')
    }
})
  return (
    <div className="App">
      <Header openHeader= {openHeader} closeHeader= {closeHeader} />
      <Header_column openHeader= {openHeader} closeHeader= {closeHeader} />
      <Aside/>
      <main>
        <Home/>
        <About/>
        <Space/>
        <Education/>
        <Product/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
