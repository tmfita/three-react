import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import * as three from 'three'
import { ReactThreeFiber } from '@react-three/fiber'
import { Canvas } from '@react-three/fiber'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useLoader, useFrame } from '@react-three/fiber'
function App() {
  //ROTATIN CUBE
  // const scene = new three.Scene();
  // const camera = new three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  // const renderer = new three.WebGLRenderer();
  // renderer.setSize(200, 200);
  // document.body.appendChild( renderer.domElement )
  // const geometry = new three.BoxGeometry( 1, 1, 1 );
  // const material = new three.MeshBasicMaterial( { color: 0x00ff00 } );
  // const cube = new three.Mesh( geometry, material );
  // scene.add ( cube );
  // camera.position.z = 5;
  // const animate = () => {
  //   requestAnimationFrame( animate );
  //   cube.rotation.x += 0.01;
  //   cube.rotation.y += 0.01;
  //   renderer.render( scene, camera );
  // }
  // animate()

  //const lime = 'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/tree-lime/model.gltf'
  const obj = useLoader(OBJLoader, 'http://localhost:5555/src/assets/build6.obj')
  function MyRotatingBox() {
    const myMesh = useRef();
  
    useFrame(({ clock }) => {
      const a = clock.getElapsedTime();
      myMesh.current.rotation.y += 0.01;
    });
  
    return (
      
        <primitive ref={myMesh} object={obj} scale={0.1} />
      
    );
  }
  return (
    <div className="App">
      
      
      
      <div style={{ width: "100vw", height: "100vh" }}>
        <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [3, 3, 0] }}>
          <ambientLight intensity={0.1} />
          <directionalLight color="white" position={[0, 0, 5]} />
          <MyRotatingBox />
          {/* <mesh position={[1,1,0]}>
            <sphereGeometry />
            <meshStandardMaterial />
          </mesh> */}
        </Canvas>
      </div>
    </div>
  )
}
function Scene() {
  return <primitive object={obj} />
}
export default App
