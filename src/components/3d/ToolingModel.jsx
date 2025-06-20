import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Cylinder, Torus } from '@react-three/drei';

const ToolingModel = ({ position = [0, 0, 0], scale = 1, rotation = [0, 0, 0] }) => {
  const groupRef = useRef();
  const gearRef = useRef();
  
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2;
    }
    
    if (gearRef.current) {
      gearRef.current.rotation.z += delta * 0.5;
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale} rotation={rotation}>
      {/* Base Plate */}
      <Box args={[2.5, 0.2, 2.5]} position={[0, -1, 0]}>
        <meshStandardMaterial color="#555555" metalness={0.7} roughness={0.3} />
      </Box>
      
      {/* Main Tool Body */}
      <Box args={[1.2, 0.8, 1.2]} position={[0, -0.5, 0]}>
        <meshStandardMaterial color="#0066aa" metalness={0.4} roughness={0.6} />
      </Box>
      
      {/* Vertical Support */}
      <Cylinder args={[0.15, 0.15, 1.5, 16]} position={[0, 0.2, 0]}>
        <meshStandardMaterial color="#888888" metalness={0.8} roughness={0.2} />
      </Cylinder>
      
      {/* Horizontal Arm */}
      <Box args={[1.5, 0.15, 0.15]} position={[0, 0.7, 0]}>
        <meshStandardMaterial color="#888888" metalness={0.8} roughness={0.2} />
      </Box>
      
      {/* Tool Head */}
      <Box args={[0.4, 0.4, 0.4]} position={[0.7, 0.7, 0]}>
        <meshStandardMaterial color="#cc0000" metalness={0.6} roughness={0.4} />
      </Box>
      
      {/* Gear System */}
      <group ref={gearRef} position={[-0.5, 0, 0]}>
        <Torus args={[0.3, 0.05, 16, 32, Math.PI * 2]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#dddddd" metalness={0.9} roughness={0.1} />
        </Torus>
        
        {/* Gear Teeth */}
        {Array.from({ length: 8 }).map((_, index) => {
          const angle = (index / 8) * Math.PI * 2;
          const x = Math.cos(angle) * 0.3;
          const z = Math.sin(angle) * 0.3;
          
          return (
            <Box key={index} args={[0.08, 0.05, 0.08]} position={[x, 0, z]}>
              <meshStandardMaterial color="#dddddd" metalness={0.9} roughness={0.1} />
            </Box>
          );
        })}
      </group>
      
      {/* Workpiece */}
      <Box args={[0.6, 0.3, 0.6]} position={[0, -0.2, 0]}>
        <meshStandardMaterial color="#996633" metalness={0.3} roughness={0.7} />
      </Box>
      
      {/* Control Panel */}
      <Box args={[0.5, 0.3, 0.15]} position={[-0.6, -0.3, 0.6]}>
        <meshStandardMaterial color="#333333" />
      </Box>
      
      {/* Buttons */}
      <Cylinder args={[0.04, 0.04, 0.05, 8]} position={[-0.7, -0.3, 0.6]}>
        <meshStandardMaterial color="#ff0000" emissive="#ff0000" emissiveIntensity={0.5} />
      </Cylinder>
      
      <Cylinder args={[0.04, 0.04, 0.05, 8]} position={[-0.6, -0.3, 0.6]}>
        <meshStandardMaterial color="#00ff00" emissive="#00ff00" emissiveIntensity={0.5} />
      </Cylinder>
      
      <Cylinder args={[0.04, 0.04, 0.05, 8]} position={[-0.5, -0.3, 0.6]}>
        <meshStandardMaterial color="#0000ff" emissive="#0000ff" emissiveIntensity={0.5} />
      </Cylinder>
    </group>
  );
};

export default ToolingModel;