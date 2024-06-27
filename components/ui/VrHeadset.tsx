// VrHeadset.tsx
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { FBXLoader } from 'three-stdlib';
import { OrbitControls } from 'three-stdlib';

const VrHeadset: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const controls = useRef<OrbitControls | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const currentMount = mountRef.current;

    // Set up the scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(70, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);

    // Set up the renderer with alpha to make the background transparent
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setClearColor(0x000000, 0); // Set clear color to black with 0 opacity
    currentMount.appendChild(renderer.domElement);

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1).normalize();
    scene.add(directionalLight);
  
    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(-1, -1, -1).normalize();
    scene.add(directionalLight2);

     
    const directionalLight3 = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 0, 1).normalize();
    scene.add(directionalLight3);
    // Load the FBX model
    const loader = new FBXLoader();
    loader.load(
      '/object/quest.fbx', // Replace with the path to your FBX file
      (fbx) => {
        // Scale the object to a manageable size
        fbx.scale.set(0.04, 0.04, 0.04);

        // Apply black material to the model
        fbx.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            (child as THREE.Mesh).material = new THREE.MeshPhongMaterial({ color: 0xffffff });
          }
        });
        scene.add(fbx);
        fbx.position.set(0, 0, 0);

        // Add OrbitControls
        controls.current = new OrbitControls(camera, renderer.domElement);
        controls.current.enableDamping = true; // optional smooth damping of rotation
        controls.current.rotateSpeed = 0.2; // adjust rotation speed

        // Animation loop
        const animate = () => {
          requestAnimationFrame(animate);

          // Automatic rotation
          fbx.rotation.x += 0.01;
          fbx.rotation.y += 0.01;

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
    camera.near = 0.1; // Adjust the near clipping plane
    camera.far = 1000; // Adjust the far clipping plane
    camera.updateProjectionMatrix(); // Update the projection matrix

    // Resize handling
    const handleResize = () => {
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      currentMount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '150px' }} />;
};

export default VrHeadset;
