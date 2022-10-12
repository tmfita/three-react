import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import * as three from 'three'
import { ReactThreeFiber } from '@react-three/fiber'
function App() {
  const scene = new three.Scene();
  const camera = new three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new three.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild( renderer.domElement )
  const geometry = new three.BoxGeometry( 1, 1, 1 );
  const material = new three.MeshBasicMaterial( { color: 0x00ff00 } );
  const cube = new three.Mesh( geometry, material );
  scene.add ( cube );
  camera.position.z = 5;
  const animate = () => {
    requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render( scene, camera );
  }
  animate()

  return (
    <div className="App">
      
      <h1>Vite + React</h1>
    
    </div>
  )
}

export default App
