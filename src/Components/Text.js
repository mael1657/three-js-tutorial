import { Canvas } from "@react-three/fiber";
import React from "react";
import {OrbitControls ,Text} from '@react-three/drei';

const TextItem = () => {

    return(
        <Canvas style={{width:"100vw",height:"100vh",backgroundColor:"#dddddd"}}>
            <OrbitControls/>
            <Text 
            scale={[10,10,10]}
            color="#f00">
                drei text example
            </Text>
        </Canvas>
    )
}

export default TextItem;