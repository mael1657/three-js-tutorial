import { Canvas } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";
import Coolvetica from "../fonts/Coolvetica.json";
import {FontLoader} from "three/examples/jsm/loaders/FontLoader";

const Text = () => {

    const loader = new THREE.FontLoader();
    let json = JSON.parse(Coolvetica);
    let font = loader.parse(json);

    const fontOption = {
        font,
        size:5,
        height:1
    }
    return(
        <Canvas style={{width:"100vw",height:"100vh"}}>
            <mesh position={[0,0,0]}>
                <textBufferGeometry attach="geometry" args={["Text example", fontOption]}/>
                <meshStandardMaterial attach="material"/>
            </mesh>
        </Canvas>
    )
}

export default Text;