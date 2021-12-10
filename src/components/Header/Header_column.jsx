import React from 'react'
import home from '../../assets/home.png'
import about from '../../assets/about.png'
import education from '../../assets/education.png'
import product from '../../assets/product.png'
import contact from '../../assets/contact.png'


const Header_column = ({openHeader}) => {
    return (
        <div className={`header_column ${openHeader}`}>
            <div className="header__menu">
                <ul>
                    <li>
                        <a href="#home">
                            <img src={home} />
                        </a>
                    </li>
                    <li>
                        <a href="#about">
                            <img src={about} />
                        </a>
                    </li>
                    <li>
                        <a href="#education">
                            <img src={education} />
                        </a>
                    </li>
                    <li>
                        <a href="#product">
                            <img src={product} />
                        </a>
                    </li>
                    <li>
                        <a href="#contact">
                            <img src={contact} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header_column
