// VrHeadset.tsx
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const VrHeadset: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const currentMount = mountRef.current;

    // Set up the scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);

    // Set up the renderer with alpha to make the background transparent
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setClearColor(0x000000, 0); // Set clear color to black with 0 opacity
    currentMount.appendChild(renderer.domElement);

    // Add VR headset model (replace with your model)
    const geometry = new THREE.BoxGeometry(1, 1, 1); // Temporary geometry
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // Temporary material
    const vrHeadset = new THREE.Mesh(geometry, material);
    scene.add(vrHeadset);

    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      vrHeadset.rotation.x += 0.01;
      vrHeadset.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup on component unmount
    return () => {
      currentMount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '300px' }} />;
};

export default VrHeadset;
