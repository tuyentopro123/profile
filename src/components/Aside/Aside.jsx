import React from 'react'
import logo from '../../assets/logo.svg'


const Aside = () => {
    return (
        <aside className="aside">
            <div className="aside__overlay"></div>
            <div className="aside__navbar">
                <div className="aside__logo">
                    <img src={logo}/>
                </div>
                <div className="aside__menu">
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
