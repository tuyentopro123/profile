import React from 'react'
import space from '../../assets/space.gif'

const Space = () => {
    return (
        <div>
            <section className="space" style={{backgroundImage: `url(${space})`}}>
                <div className="space__text container">
                    <div className="row">
                        <h2>Are you wanna work with me</h2>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Space
