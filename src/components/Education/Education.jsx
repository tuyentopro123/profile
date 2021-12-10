import React from 'react'
import { EnvironmentOutlined } from '@ant-design/icons'
import cap1 from '../../assets/cap1.jpg'
import cap2 from '../../assets/cap2.jpg'
import cap3 from '../../assets/cap3.jpg'
import DH from '../../assets/dai_hoc.jpg'
import edu from '../../assets/education-icon.png'
import Aos from 'aos'
import "aos/dist/aos.css"


const educations = [    
    {
        img: cap2,
        name:'Trung học cơ sở A Hải Anh',
        address:'Xóm 3, Hải Hậu, Nam Định, Việt Nam',
        description:'dsfasfsdfasfdasssssssssssssssssssssaaaaaaaaaaaaaaaaaaaaaaaaaaaddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
        title:'Trung học',
        year:'2015-2016',
        path:'https://www.facebook.com/thcshaianh'
    },    {
        img: cap3,
        name:'Trung học phổ thông A Hải Hậu',
        address:'672R+28V, TT. Yên Định, Hải Hậu, Nam Định, Việt Nam',
        description:'dsfasfsdfasfdasssssssssssssssssssssaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        title:'Trung học',
        year:'2015-2016',
        path:'https://www.facebook.com/truongthptahaihau/'
    },    {
        img: DH,
        name:'Học Viện Công Nghệ Bưu Chính Viễn Thông',
        address:'30 Trần Phú, P. Mộ Lao, Hà Đông, Hà Nội, Việt Nam',
        description:'dsfasfsdfasfdasssssssssssssssssssssaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        title:'Trung học',
        year:'2015-2016',
        path:'https://www.facebook.com/HocvienPTIT'
    },
]

const Education = () => {
    React.useEffect(() => {
        Aos.init( { 
            delay: 100,
            duration: 400,
        })
        }, [])
    return (
        <section id="education" className="education">
            <header className="education__header">
                <h1 className="h1">
                    <p data-aos="fade-right">Education</p> 
                </h1>
            </header>
            {educations.map((e,i) => (
            <div key={i} className={`education__content ${i%2===1?'reverse':''}`}>
                    <a href={e.path} target="_blank" rel="noreferrer" className="education__link">
                    <div data-aos="flip-left" className="education__link__body hovereffect">
                        <img  className="education__link__img img-responsive" src={e.img}/>
                        <div className="education__link__description overlay">
                            <h2>{e.name}</h2>
                            <p>
                                <EnvironmentOutlined style={{margin: 5}}/>
                                {e.address}</p>
                        </div>
                    </div>
                    </a>
                    <div className="education__icon">
                        <img src={edu}/>
                    </div>
                    <div data-aos={`${i%2===0 ?'fade-left':'fade-right'}`}  className="education__body">
                            <div data-aos={`${i%2===0 ?'fade-left':'fade-right'}`} className={`education__body__description draw ${i%2===1 ?'reverse':''}`}>
                                <h3>{e.year}</h3>
                                <div className="education__body__description__text">
                                    <h4>{e.title}</h4>
                                    <p>{e.description}</p>
                                </div>
                            </div>
                    </div>     
            </div>
             ))}
        </section>
    )
}

export default Education
