import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Cylinder, Sphere, Torus } from '@react-three/drei';

const CompanyModel = ({ position = [0, 0, 0], scale = 1, rotation = [0, 0, 0] }) => {
  const groupRef = useRef();
  const rotatingPartRef = useRef();
  
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1;
    }
    
    if (rotatingPartRef.current) {
      rotatingPartRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale} rotation={rotation}>
      {/* Base Platform */}
      <Box args={[3, 0.2, 3]} position={[0, -1.5, 0]}>
        <meshStandardMaterial color="#0a2463" />
      </Box>
      
      {/* Central Building */}
      <Box args={[1.5, 2, 1.5]} position={[0, -0.4, 0]}>
        <meshStandardMaterial color="#bcd2ff" metalness={0.2} roughness={0.8} />
      </Box>
      
      {/* Windows */}
      {Array.from({ length: 4 }).map((_, i) => (
        <React.Fragment key={i}>
          <Box 
            args={[0.2, 0.3, 0.1]} 
            position={[0.5, -0.9 + i * 0.5, 0.8]} 
          >
            <meshStandardMaterial color="#3a86ff" metalness={0.9} roughness={0.1} />
          </Box>
          <Box 
            args={[0.2, 0.3, 0.1]} 
            position={[0, -0.9 + i * 0.5, 0.8]} 
          >
            <meshStandardMaterial color="#3a86ff" metalness={0.9} roughness={0.1} />
          </Box>
          <Box 
            args={[0.2, 0.3, 0.1]} 
            position={[-0.5, -0.9 + i * 0.5, 0.8]} 
          >
            <meshStandardMaterial color="#3a86ff" metalness={0.9} roughness={0.1} />
          </Box>
        </React.Fragment>
      ))}
      
      {/* Top of Building */}
      <Box args={[1.7, 0.2, 1.7]} position={[0, 0.6, 0]}>
        <meshStandardMaterial color="#0a2463" />
      </Box>
      
      {/* Roof Structure */}
      <Cylinder args={[0.8, 0.8, 0.3, 32]} position={[0, 0.75, 0]}>
        <meshStandardMaterial color="#bcd2ff" metalness={0.2} roughness={0.8} />
      </Cylinder>
      
      {/* Antenna/Tower */}
      <Cylinder args={[0.05, 0.05, 1, 8]} position={[0, 1.4, 0]}>
        <meshStandardMaterial color="#888888" metalness={0.8} roughness={0.2} />
      </Cylinder>
      
      {/* Spherical Top */}
      <Sphere args={[0.15, 16, 16]} position={[0, 1.9, 0]}>
        <meshStandardMaterial color="#ff0066" emissive="#ff0066" emissiveIntensity={0.5} />
      </Sphere>
      
      {/* Surroundings */}
      <group ref={rotatingPartRef}>
        {/* Smaller Buildings */}
        <Box args={[0.6, 0.8, 0.6]} position={[-1.2, -1.1, -0.8]}>
          <meshStandardMaterial color="#e5e5e5" />
        </Box>
        
        <Box args={[0.5, 1.2, 0.5]} position={[1.3, -0.9, -0.7]}>
          <meshStandardMaterial color="#e5e5e5" />
        </Box>
        
        <Box args={[0.7, 0.6, 0.5]} position={[0.9, -1.2, 1]}>
          <meshStandardMaterial color="#e5e5e5" />
        </Box>
        
        {/* 3D Printing Element */}
        <Box args={[0.4, 0.4, 0.4]} position={[-1, -1.3, 0.7]}>
          <meshStandardMaterial color="#00a8e8" />
        </Box>
        
        <Cylinder args={[0.15, 0.15, 0.2, 16]} position={[-1, -1, 0.7]}>
          <meshStandardMaterial color="#00a8e8" />
        </Cylinder>
        
        {/* CAD Design Element */}
        <Torus args={[0.3, 0.05, 8, 24]} position={[1.5, -0.2, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#ff9500" metalness={0.5} roughness={0.5} />
        </Torus>
      </group>
    </group>
  );
};

export default CompanyModel;