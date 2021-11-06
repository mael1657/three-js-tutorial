import React, { useRef } from 'react';

const Scroll = () => {
    let y = 0;
    let position = 0;
    window.addEventListener('wheel',(e) => {
        y += e.deltaY*0.0003;
    })

    const ref = useRef()

    function raf(){
        console.log(position);
        position += y;
        y *= 0.8;
        window.requestAnimationFrame(raf);
    }
    raf()

    
    
    return(
        <div className="global-div">
            <div 
            className="box" 
            ref={ref}
            // style={{transform:`translate(0,${pos * 100})px`}}
            ></div>
        </div>
    )
}

export default Scroll;