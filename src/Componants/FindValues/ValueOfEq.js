import React, { useState, useEffect } from 'react'
import './ValuesOfEq.css'
import Desmos from 'desmos'

export const ValueOfEq = () => {

    const [a, setA] = useState(1)
    const [b, setB] = useState(2)
    const [c, setC] = useState(1)

    const [aboutRoot, setAboutRoot] = useState()
    const [root, setroot] = useState()
    const [imgRoots, setImgRoots] = useState()

    let d = (b * b) - (4 * a * c);




    useEffect(() => {

        let rootOne = (-b + Math.sqrt(d)) / (2 * a);

        let rootTwo = (-b - Math.sqrt(d)) / (2 * a);

        if (d > 0) {
            setAboutRoot("Roots are real & distint(unequal)")
            let imgRootOne = (`(${-b} + √ ${(d)}) / ${(2 * a)}`);
            let imgRootTwo = (`(${-b} - √ ${(d)}) / ${(2 * a)}`);
            setImgRoots(() => {
                return (` Roots are ${rootOne} & ${rootTwo} `)
            })
            setroot(() => {
                return (` Roots are ${imgRootOne} & ${imgRootTwo} `)
            })


        }
        else if (d === 0) {
            let imgRootOne = (`(${-b} + √ ${(d)}) / ${(2 * a)}`);
            let imgRootTwo = (`(${-b} - √ ${(d)}) / ${(2 * a)}`);

            setAboutRoot("Roots are real & coindent(equal)")


            setroot(() => {
                return (` Roots are ${imgRootOne} & ${imgRootTwo} `)
            })
            setImgRoots(() => {
                return (` Roots are ${rootOne} & ${rootTwo} `)
            })


        } else if (d < 0) {
            setAboutRoot("Roots are Imaginary")

            let imgRootOne = (`(${-b} + i√ ${(-d)})/${(2 * a)}`)



            let imgRootTwo = (`(${-b} - i√ ${(-d)})/${(2 * a)}`);
            let rootOne = (`${-b / (2 * a)} + i√ ${Math.sqrt(-d)}/ ${(2 * a)}`);

            let rootTwo = (`${-b / (2 * a)} - i√ ${Math.sqrt(-d)} /${(2 * a)}`);

            setroot(() => {
                return (` Roots are ${imgRootOne} & ${imgRootTwo} `)
            })
            setImgRoots(() => {

                return (` Roots are ${rootOne} & ${rootTwo} `)

            })
        }









    }, [d])


    useEffect(() => {

        if (a || b || c) {
            const elt = document.getElementById('calculator')

            elt.innerHTML = null
            const calculator = Desmos.GraphingCalculator(elt);

            calculator.setExpression({
                id: "graph1",
                latex: "y=" + a + "x^2+" + b + "x+" + c
            });
        }

    }, [d])



    return (
        <div className="equation-sol">

            <h1>Quadratic Root Finder</h1>
            <h2>Given a quadratic function in the form of <span id="equation">y = ax<sup>2</sup>+bx+c,</span> enter the values for a, b, and c below to find the real roots of the function.</h2>

            <div className="input-values">
                <h3> <input className="input-box" type="number" id="a" value={a} onChange={(e) => { setA(e.target.value) }} /> x<sup>2</sup> + <input className="input-box" type="number" id="b" value={b} onChange={(e) => { setB(e.target.value) }} /> x +
            <input className="input-box" type="number" id="c" value={c} onChange={(e) => { setC(e.target.value) }} />=0
                    </h3>
                <h3 style={{ margin: "1rem auto" }}>   Solution of the equation is :</h3>
                <div><h3 className="roots">{aboutRoot}</h3>
                    <h3 className="roots"> {root}  </h3>
                    <h3 className="roots"> {imgRoots}  </h3>
                </div>

                <div className="container">

                    <div id="calculator" style={{ width: "100%", height: "50vh", margin: " 0 auto" }}>

                    </div>
                </div>
            </div>



        </div>

    )
}
