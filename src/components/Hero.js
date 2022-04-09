import React from 'react'

const Hero = () => {
    return (
        <section id="hero">
            <h1 className='title'>
            Hello <span role="img" aria-label="emoji">👋</span><br />
            I'm Cody Perry  
            </h1>
            <h2 className="subtitle">
                I design and build <span className="highlighted">things for the web</span>.
            </h2>
            <div className="description">
                Product Manager and Freelance Web Developer. Based in Hamburg.
            </div>
        </section>
    )
}

export default Hero