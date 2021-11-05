import React, { useRef } from 'react';

const Scroll = () => {
    let speed = 0;
    let pos = 0;
    window.addEventListener('wheel',(e) => {
        speed += e.deltaY*0.003;
    })

    const ref = useRef()

    function raf(){
        console.log(pos);
        pos += speed;
        speed *= 0.8;
        window.requestAnimationFrame(raf);
    }
    raf()
    
    
    return(
        <div className="global-div">
            <div 
            className="box" 
            ref={ref}
            style={{transform:`translate(0,${pos * 100})px`}}
            ></div>
        </div>
    )
}

export default Scroll;