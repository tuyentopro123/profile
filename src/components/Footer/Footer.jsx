import React from 'react'
import Facebook from '../../assets/facebook.png'
import Github from '../../assets/github.png'
import Gmail from '../../assets/gmail.png'


const Footer = () => {
    // React.useEffect(() => {
    //     Aos.init( { 
    //         delay: 100,
    //         duration: 600,
    //     })
    //     }, [])
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <span>© Copyright 2021 by Tuyên</span>
                    <div className="home__info__social footer__icon">
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
            </div>
        </div>
    )
}

export default Footer
