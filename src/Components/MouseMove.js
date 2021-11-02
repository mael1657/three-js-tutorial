import React, { Suspense } from 'react';
import * as THREE from 'three';
import { Canvas, useLoader } from '@react-three/fiber';
import { useSpring, animated} from '@react-spring/three';

const Scene = ({...props}) => {

    const texture = useLoader(THREE.TextureLoader, 'https://cdn.pixabay.com/photo/2013/08/09/05/54/layer-170971_960_720.jpg')

    return(
        <animated.mesh {...props}>
            <planeBufferGeometry attach="geometry" args={[5,3]}/>
            <meshBasicMaterial attach="material" map={texture}/>
        </animated.mesh>
    )
}

const MouseMove = () => {

    const [props, set] = useSpring(() => ({
        pos:[0,0,0],
        scale:[1,1,1],
        rotation:[0,0,0],
        config:{mass:10, tension: 1000, friction:300, precision:0.00001}
    }))
    return(
        <div 
            className="global-div"
            onMouseMove={({clientX, clientY}) => {
                const x = (clientX / window.innerWidth) * 2 - 1;
                const y = -(clientY / window.innerHeight) * 2 + 1;

                set({
                    pos: [x,0,0],
                    scale: [1 - y * 0.1, 1 - y *0.1, 1],
                    rotation: [- y * (Math.PI / 3) * 0.3, x * (Math.PI / 3) * 0.3, 0]
                })
            }}
        >
            <Canvas>
                <Suspense fallback={null}>
                    <Scene {...props}/>
                </Suspense>
            </Canvas>
        </div>
    )
}

export default MouseMove;