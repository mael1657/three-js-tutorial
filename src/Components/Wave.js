import { Canvas, extend, useFrame, useLoader } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';
import React, { Suspense, useRef } from 'react';
import * as THREE from 'three';
import glsl from 'babel-plugin-glsl/macro';

const WaveShaderMaterial = shaderMaterial(
    //Uniform
    { 
        uTime:0, 
        uColor: new THREE.Color(0,0,0), 
        uTexture: new THREE.Texture()
    },
    //vertexShader
    glsl`
    precision mediump float;

    varying vec2 vUv;
    varying float vWave;

    uniform float uTime;

    #pragma glslify: snoise3 = require(glsl-noise/simplex/3d);

    void main() {
        vUv = uv;

        vec3 pos = position;
        float noiseFreq = 1.5;
        float noiseAmp = 0.25;
        vec3 noisePos = vec3(pos.x * noiseFreq + uTime, pos.y, pos.z);
        pos.z += snoise3(noisePos) * noiseAmp;
        vWave = pos.z;

        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
    `,
    //FragmentShader
    glsl`
    precision mediump float;
    
    uniform vec3 uColor;
    uniform float uTime;
    uniform sampler2D uTexture;

    varying vec2 vUv;
    varying float vWave;

    void main() {
        float wave = vWave * 0.1;
        vec3 texture = texture2D(uTexture, vUv + wave).rgb;
        gl_FragColor = vec4(texture, 1.0);
    }
    `
)

extend({ WaveShaderMaterial })


const Cont = () => {
    const ref = useRef()
    useFrame(({clock}) => (ref.current.uTime = clock.getElapsedTime()));

    const [image] = useLoader(THREE.TextureLoader, ['https://images.unsplash.com/photo-1553272725-086100aecf5e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=765&q=80',])
    return(
        <mesh>
            <planeGeometry args={[0.4,0.6,16,16]}/>
            <waveShaderMaterial uColor={"lightblue"} ref={ref} uTexture={image}/>
        </mesh>
    )
}

const Wave = () => {
    return(
        <div className="wave-div">
            <h1>wave example</h1>
            <Canvas style={{width:"100vw",height:"100vh"}} camera={{fov : 10, position: [0,0,5]}}>
                <Suspense fallback={null}>
                    <Cont/>
                </Suspense>
            </Canvas>
        </div>
    )
}

export default Wave;