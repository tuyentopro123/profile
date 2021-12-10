import React from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"

const Contact = () => {
    React.useEffect(() => {
        Aos.init( { 
            delay: 200,
            duration: 600,
        })
        }, [])
    return (
        <section id="contact" className="contact">
            <header className="contact__header">
                <h1 className="h1">
                    <p data-aos="fade-left">Contact</p> 
                </h1>
            </header>

            <div className="contact__body">
                <h3>Thanks for watching, do you like it?</h3>
                <div data-aos="zoom-in-up" className="contact__content">
                    <p>Send me a message</p>
                    <form className="contact__content__form">
                            <input type="text" placeholder="Name" className="contact__content__input"/>
                            <input type="email" placeholder="Email" className="contact__content__input"/>
                            <input type="subject" placeholder="Subject" className="contact__content__input"/>
                            <textarea placeholder='Message' className="contact__content__input"/>
                            <button type="submit" className="contact__content__button">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
