import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Cylinder, Sphere, Torus } from '@react-three/drei';

const EngineeringScene = ({ position = [0, 0, 0], scale = 1, rotation = [0, 0, 0] }) => {
  const groupRef = useRef();
  
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.05;
    }
  });

  // Generate a grid of engineering elements
  const gridSize = 5;
  const spacing = 2;
  
  const elements = [];
  for (let x = -gridSize; x <= gridSize; x += 2) {
    for (let z = -gridSize; z <= gridSize; z += 2) {
      // Calculate distance from center
      const distance = Math.sqrt(x * x + z * z);
      
      // Skip elements that are too close to center
      if (distance < 2) continue;
      
      // Random element type
      const elementType = Math.floor(Math.random() * 4);
      
      // Random properties
      const size = 0.2 + Math.random() * 0.3;
      const height = 0.2 + Math.random() * 0.8;
      const color = [
        '#0a2463', '#3e92cc', '#fffaff', '#2a628f', '#16324f', 
        '#ff5400', '#00a8e8', '#7400b8'
      ][Math.floor(Math.random() * 8)];
      
      // Y position with slight variation based on distance from center
      const y = Math.sin(distance * 0.5) * 0.3;
      
      // Create different engineering elements based on type
      switch (elementType) {
        case 0:
          elements.push(
            <Box 
              key={`box-${x}-${z}`} 
              args={[size, height, size]} 
              position={[x, y, z]}
              rotation={[0, Math.random() * Math.PI, 0]}
            >
              <meshStandardMaterial color={color} transparent opacity={0.7} />
            </Box>
          );
          break;
        case 1:
          elements.push(
            <Cylinder 
              key={`cylinder-${x}-${z}`}
              args={[size / 2, size / 2, height, 8]} 
              position={[x, y, z]}
              rotation={[Math.PI / 2 * Math.random(), 0, 0]}
            >
              <meshStandardMaterial color={color} transparent opacity={0.7} />
            </Cylinder>
          );
          break;
        case 2:
          elements.push(
            <Sphere 
              key={`sphere-${x}-${z}`}
              args={[size / 2, 16, 16]} 
              position={[x, y, z]}
            >
              <meshStandardMaterial color={color} transparent opacity={0.7} />
            </Sphere>
          );
          break;
        case 3:
          elements.push(
            <Torus 
              key={`torus-${x}-${z}`}
              args={[size, size / 4, 8, 16]} 
              position={[x, y, z]}
              rotation={[Math.PI / 2, 0, 0]}
            >
              <meshStandardMaterial color={color} transparent opacity={0.7} />
            </Torus>
          );
          break;
      }
    }
  }

  return (
    <group ref={groupRef} position={position} scale={scale} rotation={rotation}>
      {elements}
    </group>
  );
};

export default EngineeringScene;