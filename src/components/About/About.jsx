import React from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import Image from "../../assets/about_img.jpg"
import {UpCircleOutlined} from "@ant-design/icons"


const skills = [
    {
        name:'HTML5/CSS3',
        percents:'75%',
        color:'#5ea3ec'
    },
    {
        name:'ReactJS',
        percents:'30%',
        color:'#f64444'
    },    {
        name:'Javascript',
        percents:'30%',
        color:'#ffb400'
    },
]

const skills_2 = [
    {
        name:'Adobe Photoshop',
        percents:'40%',
        color:'#5ea3ec'
    },
    {
        name:'Adobe Illustrator',
        percents:'50%',
        color:'#f64444'
    },    
    {
        name:'Adobe Fireworks',
        percents:'0%',
        color:'#ffb400'
    },
]
const About = () => {
    React.useEffect(() => {
        Aos.init( { 
            delay: 100,
            duration: 400,
        })
        }, [])
    const handleUP = () => {
        document.querySelectorAll('.about__description__skills')[0].classList.toggle('active')
        Array.prototype.slice.call(document.querySelectorAll('.about__description__skills__progesser')).map((e) => {
            e.classList.toggle('active') 
        })
        document.querySelector('.about__description__profile').classList.toggle('active')
    }

    // const handleDown = () => {
    //     document.querySelectorAll('.about__description__skills')[0].classList.remove('active')
    //     document.querySelector('.icon').classList.remove('active')
    //     Array.prototype.slice.call(document.querySelectorAll('.about__description__skills__progesser')).map((e) => {
    //         console.log(e.classList.remove('active')   )
    //     })
    //     document.querySelector('.about__description__profile').classList.remove('active')
    // }
    return (
        <section id="about" className="about">
            <header className="about__header">
                <h1 className="h1">
                    <p data-aos="fade-left">About</p> 
                </h1>
            </header>
            <div  data-aos="zoom-in-up" className="about__description">
                <picture className="about__description__img">
                    <img src={Image}/>
                </picture>
                <div className="about__description__text">
                    <div>
                        <h1>Let me introduce myself</h1>
                        <span>
                        A young development engineer, eager to learn and strive for self-development.
                        </span>
                        <p>
                         I am in the process of self-studying and learning about front end with tools like HTML,CSS,JS,ReactJS,FireBase,...
                        </p>
                    </div>
                    <button className="about__description__button" onClick={handleUP}>
                    <span>My infomation</span>
                    </button>
                </div>

                <div className="about__description__skills">
                        <h4>Skills</h4>
                        <div>
                            <h3>Code Skills</h3>
                            {skills.map((e,i) => (
                            
                                <div key={i} className="about__description__skills__progess">
                                <div className="about__description__skills__progessbar" style={{width: `${e.percents}`}}>
                                    <div className={`about__description__skills__progesser`} style={{backgroundColor: `${e.color}`}}>
                                        <p>{e.name}</p>
                                    </div>
                                </div>
                                <span>{e.percents}</span>
                            </div>
                            ))}  
                        </div>

                        <div>
                            <h3>Software Skills</h3>
                            {skills_2.map((e,i) => (
                                <div key={i} className="about__description__skills__progess">
                                <div className="about__description__skills__progessbar" style={{width: `${e.percents}`}}>
                                    <div className="about__description__skills__progesser"  style={{backgroundColor: `${e.color}`}}>
                                        <p>{e.name}</p>
                                    </div>
                                </div>
                                <span>{e.percents}</span>
                            </div>
                            ))}  
                        </div>
                    </div>
                    <div className="about__description__profile">
                            <h4>Profile</h4>
                            <ul>
                                <li>
                                    <label>Full Name:</label>
                                    <span>Nguyễn Văn Tuyên</span>
                                </li>
                                <li>
                                    <label>Birth Date:</label>
                                    <span>08 May</span>
                                </li>
                                <li>
                                    <label>Website:</label>
                                    <span>Nguyễn Văn Tuyên</span>
                                </li>
                                <li>
                                    <label>Email:</label>
                                    <span>Tuyentopro123@gmail.com</span>
                                </li>
                            </ul>
                    </div>

            </div>
        </section>
    )
}

export default About
