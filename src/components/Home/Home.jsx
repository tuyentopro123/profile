import React,{ useEffect,useRef } from 'react'
import Avatar from '../../assets/avatar_auto_x2.jpg'
import Facebook from '../../assets/facebook.png'
import Github from '../../assets/github.png'
import Gmail from '../../assets/gmail.png'
import Background from '../../assets/background.jpg'
import Frames from '../../assets/frames.png'
import Aos from 'aos'
import "aos/dist/aos.css"
import { init } from 'ityped'



const Home = () => {
    const text = useRef(null)

    useEffect(() => {
        init(text.current, { 
            showCursor: true,
            backSpeed:  50,
            backDelay:  1500,
            strings: ['Developer', 'Designer', 'Content Credictor'] }
        )
    }, [])
    useEffect(() => {
        Aos.init( { 
            delay: 200,
            duration: 600,
        })
        }, [])
    return (
        <section id="home" className="home" style={{backgroundImage:`url(${Background})`}}>
            <div data-aos="fade-left" className="home__avatar">
                <div className="home__avatar__frames" style={{backgroundImage:`url(${Frames})`}}>
                    <div className="home__avatar__item" style={{backgroundImage:`url(${Avatar})`}}> </div>
                </div>
                {/* <img src={Avatar}/> */}
            </div>
            <div data-aos="fade-right" className="home__info">
                <div className="home__info__description">
                    <p>Hello! I am</p>
                    <h1>Nguyễn Văn Tuyên</h1>
                    <h3>I am a <span ref = {text}></span>
                    </h3>
                </div>
                
                <div className="home__info__social">
                    <div className="home__info__link">
                        <div>
                            <a target="_blank" href="https://github.com/tuyentopro123">
                                <img src={Github}/>
                            </a>
                        </div>

                        <div>
                            <a target="_blank" href="https://www.facebook.com/tea.live.167/">
                                <img src={Facebook}/>
                            </a>
                        </div>

                        <div>
                            <a target="_blank" href="https://mail.google.com/mail/u/0/#inbox">
                                <img src={Gmail}/>
                            </a>
                        </div>  
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home
