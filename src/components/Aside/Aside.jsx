import React from 'react'
import logo from '../../assets/logo.svg'


const Aside = ({navBar,setNavBar}) => {
    return (
        <aside className="aside">
            <div className={`aside__overlay ${navBar ? 'active' : ''}`} onClick={() => setNavBar(!navBar)}></div>
            <div className={`aside__navbar ${navBar ? 'active' : ''}`}>
                <div className="aside__logo">
                    <img src={logo}/>
                </div>
                <div className="aside__menu" onClick={() => setNavBar(!navBar)}>
                    <ul>
                        <li><a className="aside__menu__link" href="#home">Home</a></li>
                        <li><a className="aside__menu__link" href="#about">About</a></li>
                        <li><a className="aside__menu__link" href="#education">Education</a></li>
                        <li><a className="aside__menu__link" href="#product">Product</a></li>
                        <li><a className="aside__menu__link" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </aside>
    )
}

export default Aside
