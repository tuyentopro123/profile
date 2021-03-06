import React from 'react'
// import { GithubOutlined } from '@ant-design/icons'
import Aos from 'aos'
import "aos/dist/aos.css"
import chatApp from '../../assets/chat_app.png'
import count from '../../assets/countdown_time.png'
import resto from '../../assets/resto.png'
import calculator from '../../assets/caculator.png'
import music from '../../assets/music_app.png'
import Slider from './Slider';

const products = [
    {   
        name: 'Chat App',
        href:   'https://tealiveapp.firebaseapp.com/login',
        Img : chatApp,
        p:'first product with firebase',
        span: ['HTML','ReactJS','CSS','Firebase']
    },
    {   
        name: 'Countdown Timer',
        href:   'https://tuyentopro123.github.io/Countdown-timer-main/',
        Img : count,
        p:'Countdown Timer, challenge by frontend mentor',
        span: ['HTML','JS','CSS']
    },{   
        name: 'Resto',
        href:   'https://tuyentopro123.github.io/Food_web/',
        Img : resto,
        p:'The first product I learned responsive on mobile,tablet',
        span: ['HTML','CSS','JS','Responsive']
    },{   
        name: 'Calculator',
        href:   'https://tuyentopro123.github.io/Calculator_app/',
        Img : calculator,
        p:'first project using React JS',
        span: ['HTML','CSS','ReactJS']
    },{   
        name: 'Music player',
        href:   'https://tuyentopro123.github.io/music_sesson2/',
        Img : music,
        p:'first project using Javascript',
        span: ['HTML','CSS','JS']
    },
]

const Product = () => {
    React.useEffect(() => {
        Aos.init( { 
            delay: 100,
            duration: 400,
        })
        }, [])
    return (
        <section id="product" className="product">
            <header className="product__header">
                <h1 className="h1">
                    <p data-aos="fade-left">Product</p> 
                </h1>
            </header>
      
            <div className="product__content">
                <Slider
                    options={{
                    autoPlay: false,
                    pauseAutoPlayOnHover: true,
                    wrapAround: true,
                    lazyLoad: true,
                    // fullscreen: true,
                    adaptiveHeight: true,
                    }}
                >
                    {products.map((product,i) => (
                        <a data-aos="zoom-in" key={i}  href={product.href} style={{backgroundImage: `url(${product.Img})`}} target="_blank" className={`product__item`}>
                            <div className="product__item__descreption">
                                <h1>{product.name}</h1>
                                <p>{product.p}</p>
                                <div>
                                    {product.span.map((e) => (
                                        <h4>{e}</h4>
                                    ))}
                                </div>
                            </div>
                        </a>
                ))}   
                </Slider>
            </div>
        </section>
    )
}

export default Product
