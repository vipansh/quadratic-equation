import React from 'react'
import { About } from './about/About'
import { Main } from './main/Main'
import { ValueOfEq } from './FindValues/ValueOfEq'
import { AboutEquation } from './about/AboutEquation'

export const HomePage = () => {
    return (
        <div className="">
            <div className="container-main">

                <Main />
            </div>
            <div className="about">

                <About />
            </div>

                <ValueOfEq />

                <AboutEquation />

                <div>
                Made with Love❤ by Vipansh
                </div>
        </div>
    )
}
