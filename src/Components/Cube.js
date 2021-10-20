import React from "react";
import {Canvas} from '@react-three/fiber';
import {OrbitControls,Stars} from '@react-three/drei';


const Cube = () => {
    return(
        <div className="global-div" style={{backgroundColor:"#222"}}>
            <Canvas>
                <OrbitControls/>
                <Stars/>
                <ambientLight intensity={0.5}/>
                <spotLight position={[10, 15, 10]} angle={0.3}/>
                <mesh position={[0,0,0]}>
                    <boxBufferGeometry attatch="geometry" />
                    <meshLambertMaterial attatch="material" color="orange" />
                </mesh>
            </Canvas>
        </div>
    );
}

export default Cube;
