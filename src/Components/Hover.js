import React, {Suspense, useState} from 'react';
import * as THREE from 'three';
import { Canvas, useLoader} from '@react-three/fiber';
import {useSpring, animated, config} from '@react-spring/three';


const Scene = () => {
    const [hovered, setHover] = useState(false);

    
    const handlerOver = (e) => {
        setHover(true);
    };

    const handlerOut = (e) => {
        setHover(false);
    };

    const { scale } = useSpring({
        scale: hovered ? 1.2 : 1,
        config : config.wobbly
    });

    const texture = useLoader(THREE.TextureLoader, 'https://cdn.pixabay.com/photo/2013/08/09/05/54/layer-170971_960_720.jpg')
   
    return(
        <animated.mesh 
            onPointerOver = {(event) => {handlerOver()}}
            onPointerOut = {(event) => {handlerOut()}}
            rotation={[0,0,0]}
            scale = {scale}
        >
            <planeBufferGeometry attach="geometry" args={[3, 5]}/>
            <meshBasicMaterial map={texture}/>
        </animated.mesh>
    );
};


const Hover = () => {

    return(
        <div className="global-div">
            <Canvas camera = {{fov:75, position:[0,0,7]}}>
                {/* <ambientLight /> */}
                <Suspense fallback={null}>
                    <Scene />
                </Suspense>
            </Canvas>
        </div>
    )
}

export default Hover;