import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Cylinder, Sphere, Torus } from '@react-three/drei';

const AcademyModel = ({ position = [0, 0, 0], scale = 1, rotation = [0, 0, 0] }) => {
  const groupRef = useRef();
  const rotatingPartRef = useRef();
  
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1;
    }
    
    if (rotatingPartRef.current) {
      rotatingPartRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale} rotation={rotation}>
      {/* Base */}
      <Box args={[2, 0.2, 2]} position={[0, -1, 0]}>
        <meshStandardMaterial color="#0a2463" />
      </Box>
      
      {/* Main Book Stack */}
      <Box args={[1.2, 0.15, 0.9]} position={[0, -0.8, 0]}>
        <meshStandardMaterial color="#ff5400" />
      </Box>
      
      <Box args={[1.3, 0.15, 1]} position={[0, -0.65, 0]} rotation={[0, Math.PI / 12, 0]}>
        <meshStandardMaterial color="#00a8e8" />
      </Box>
      
      <Box args={[1.1, 0.15, 0.85]} position={[0, -0.5, 0]} rotation={[0, -Math.PI / 8, 0]}>
        <meshStandardMaterial color="#7400b8" />
      </Box>
      
      {/* Central Education Pillar */}
      <Cylinder args={[0.1, 0.1, 1.5, 8]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#aaaaaa" />
      </Cylinder>
      
      {/* Graduation Cap */}
      <Box args={[0.6, 0.05, 0.6]} position={[0, 0.8, 0]}>
        <meshStandardMaterial color="#333333" />
      </Box>
      
      <Cylinder args={[0.05, 0.05, 0.2, 8]} position={[0, 0.9, 0]}>
        <meshStandardMaterial color="#333333" />
      </Cylinder>
      
      <Box args={[0.2, 0.02, 0.2]} position={[0, 1, 0]}>
        <meshStandardMaterial color="#333333" />
      </Box>
      
      {/* Tassel */}
      <Cylinder args={[0.01, 0.01, 0.3, 4]} position={[0.15, 0.85, 0.15]} rotation={[0, 0, Math.PI / 8]}>
        <meshStandardMaterial color="#ffca3a" />
      </Cylinder>
      
      {/* Orbital Educational Elements */}
      <group ref={rotatingPartRef}>
        {/* Atom-like Structure */}
        <Torus args={[0.8, 0.02, 8, 24]} position={[0, 0.3, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#ffca3a" emissive="#ffca3a" emissiveIntensity={0.3} />
        </Torus>
        
        <Torus args={[0.8, 0.02, 8, 24]} position={[0, 0.3, 0]} rotation={[Math.PI / 3, Math.PI / 4, 0]}>
          <meshStandardMaterial color="#00a8e8" emissive="#00a8e8" emissiveIntensity={0.3} />
        </Torus>
        
        <Torus args={[0.8, 0.02, 8, 24]} position={[0, 0.3, 0]} rotation={[Math.PI / 4, Math.PI / 2, 0]}>
          <meshStandardMaterial color="#7400b8" emissive="#7400b8" emissiveIntensity={0.3} />
        </Torus>
        
        {/* Electrons */}
        <Sphere args={[0.06, 16, 16]} position={[0, 0.3, 0.8]}>
          <meshStandardMaterial color="#ffca3a" emissive="#ffca3a" emissiveIntensity={0.5} />
        </Sphere>
        
        <Sphere args={[0.06, 16, 16]} position={[0.7, 0.3, -0.4]}>
          <meshStandardMaterial color="#00a8e8" emissive="#00a8e8" emissiveIntensity={0.5} />
        </Sphere>
        
        <Sphere args={[0.06, 16, 16]} position={[-0.7, 0.3, -0.4]}>
          <meshStandardMaterial color="#7400b8" emissive="#7400b8" emissiveIntensity={0.5} />
        </Sphere>
      </group>
      
      {/* Additional Educational Elements */}
      <Box args={[0.2, 0.3, 0.1]} position={[-0.8, -0.6, -0.7]} rotation={[0, Math.PI / 6, 0]}>
        <meshStandardMaterial color="#4cc9f0" />
      </Box>
      
      <Cylinder args={[0.15, 0.15, 0.1, 16]} position={[0.9, -0.7, -0.6]}>
        <meshStandardMaterial color="#f72585" />
      </Cylinder>
      
      <Box args={[0.15, 0.15, 0.15]} position={[-0.7, -0.7, 0.7]} rotation={[Math.PI / 4, 0, Math.PI / 4]}>
        <meshStandardMaterial color="#4361ee" />
      </Box>
    </group>
  );
};

export default AcademyModel;