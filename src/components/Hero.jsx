import React, {useEffect, useRef} from 'react'

const Hero = () => {
    const videoRef = useRef();

    useEffect(() => {
        if(videoRef.current) videoRef.current.playbackRate=2
    }, []);
    return (
        <section id="hero">
            <div>
                <h1> Hi, I'm Chinyere</h1>
                <img src="/title.png" alt="My Intro"/>
            </div>

            <video ref={videoRef} src="/videos/hero.mp4" autoPlay={true} muted playsInline={true} />

            <button>Buy</button>
            <p>For 1.99 / or more for it .</p>

        </section>
    )
}
export default Hero
