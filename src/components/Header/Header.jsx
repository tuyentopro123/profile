import React from 'react'
import logo from '../../assets/logo.svg'

const Header = ({closeHeader}) => {
   
    return (
        <div className={`header ${closeHeader}`}>
            <div className="header__logo">
                <img src={logo}/>
            </div>
            <div className="header__menu">
                <ul>
                    <li><a className="header__menu__link" href="#home">Home</a></li>
                    <li><a className="header__menu__link" href="#about">About</a></li>
                    <li><a className="header__menu__link" href="#education">Education</a></li>
                    <li><a className="header__menu__link" href="#product">Product</a></li>
                    <li><a className="header__menu__link" href="#contact">Contact</a></li>
                </ul>
            </div>
            <span className="header__bar">
                <button className="header__bar__button">
                    <div className="header__bar__section"></div>
                    <div className="header__bar__section"></div>
                    <div className="header__bar__section"></div>
                </button>
            </span>
        </div>
    )
}

export default Header
