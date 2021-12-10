import React from 'react'

const Space = ({text,background}) => {
    return (
        <div>
            <section className="space" style={{backgroundImage: `url(${background})`}}>
                <div className="space__text container">
                    <div className="row">
                        <h2>{text}</h2>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Space
