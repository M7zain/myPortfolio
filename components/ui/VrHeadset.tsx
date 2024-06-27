// VrHeadset.tsx
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three-stdlib';

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

    // Load the OBJ model
    const loader = new OBJLoader();
    loader.load(
      '/quest.obj', // Replace with the path to your OBJ file
      (obj) => {
        // Apply black material to the model
        obj.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            (child as THREE.Mesh).material = new THREE.MeshBasicMaterial({ color: 0x000000 });
          }
        });
        scene.add(obj);
        obj.position.set(0, 0, 0);

        // Animation loop
        const animate = () => {
          requestAnimationFrame(animate);
          obj.rotation.x += 0.01;
          obj.rotation.y += 0.01;
          renderer.render(scene, camera);
        };
        animate();
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
      },
      (error) => {
        console.error('An error happened', error);
      }
    );

    camera.position.z = 5;

    // Cleanup on component unmount
    return () => {
      currentMount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '100px' }} />;
};

export default VrHeadset;
