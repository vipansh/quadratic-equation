import React, { useState, useEffect } from 'react'
import './About.css'


export const About = () => {
    const [activeClass, setActiveClass] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            setActiveClass(window.scrollY > 50);
        });
    }, [])

    return (
        <div className="container-about">
            <h1 className={activeClass ? "rise-text" : "hidden"}>  Quadratic Equation Solution </h1>
            <div className={activeClass ? "text-about" : "hidden"}>

                <span className="about-note"> (a, b, and c can have any value, except that a can't be 0.)</span>


                An example of a Quadratic Equation:
<span className="about-note equation">

                    ax<sup>2</sup>+bx+c=0
</span>
            </div>
        </div>
    )
}
