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
import space from './assets/space.gif'
import space2 from './assets/space2.gif'



function App() {
  const [openHeader,setOpenHeader] = useState('')
  const [closeHeader,setCloseHeader] = useState('active')
  const [navBar,setNavBar] = useState(false)

  window.addEventListener('scroll',() => {
    if(window.pageYOffset > 200) {
        setOpenHeader('')
        setCloseHeader('active')
    } else {
        setOpenHeader('active')
        setCloseHeader('')
    }
})
  return (
    <div className="App">
      <Header navBar = {navBar} setNavBar= {setNavBar} openHeader= {openHeader} closeHeader= {closeHeader} />
      <Header_column openHeader= {openHeader} closeHeader= {closeHeader} />
      <Aside navBar = {navBar} setNavBar= {setNavBar}/>
      <main>
        <Home/>
        <About/>
        <Space text={'Are you wanna work with me'} background={space}/>
        <Education/>
        <Space text={'some of my debut products'} background={space2}/>
        <Product/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
