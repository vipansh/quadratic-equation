import React from 'react'

export const AboutEquation = () => {
    return (
        <div className="container about-equation ">
            <div className="formula">

            Formula used is
        
            <p class="center">x = <span class="intbl">
                <em>−b ± √(b<sup>2 </sup>− 4ac)</em> /
                </span>
                <strong>2a</strong>
            </p>

            </div>
            <h2 class="recommendation-sub-headline" >
                Every odd degree equation has at least one real root whose sign is opposit to that of its last term, when coefficient of highedt degree ternis (+)ve (if not then make (+)ve)
                
            </h2>

            <h2 class="recommendation-sub-headline" >
               Even degree polynomial whose last term is (-ve) & coefficint of highest degree term is (+ve) has two real root, one (+ve) & one(-ve).
                
            </h2>
            <h2 class="recommendation-sub-headline" >
            If equation contains only ecen power of x & all cofficient are (+ve), then all roots are imaginary                
            </h2>
        </div >
    )
}
