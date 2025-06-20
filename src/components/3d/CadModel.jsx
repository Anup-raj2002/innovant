import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Cylinder, Torus } from '@react-three/drei';

const CadModel = ({ position = [0, 0, 0], scale = 1, rotation = [0, 0, 0], onLoad = () => {} }) => {
  const groupRef = useRef();
  
  // Simulate loading
  React.useEffect(() => {
    onLoad && onLoad();
  }, [onLoad]);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale} rotation={rotation}>
      {/* Base */}
      <Box args={[3, 0.2, 3]} position={[0, -1.5, 0]}>
        <meshStandardMaterial color="#0066cc" />
      </Box>
      
      {/* Central Cylinder */}
      <Cylinder args={[0.5, 0.5, 2, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#00b3b3" metalness={0.5} roughness={0.3} />
      </Cylinder>
      
      {/* Top Ring */}
      <Torus args={[1, 0.1, 16, 32]} position={[0, 1, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#ff8000" metalness={0.5} roughness={0.3} />
      </Torus>
      
      {/* Components */}
      <Box args={[0.3, 0.3, 0.3]} position={[1, 0, 0]}>
        <meshStandardMaterial color="#cc0000" />
      </Box>
      
      <Box args={[0.3, 0.3, 0.3]} position={[-1, 0, 0]}>
        <meshStandardMaterial color="#cc0000" />
      </Box>
      
      <Box args={[0.3, 0.3, 0.3]} position={[0, 0, 1]}>
        <meshStandardMaterial color="#cc0000" />
      </Box>
      
      <Box args={[0.3, 0.3, 0.3]} position={[0, 0, -1]}>
        <meshStandardMaterial color="#cc0000" />
      </Box>
      
      {/* Connecting Rods */}
      <Cylinder args={[0.05, 0.05, 2, 8]} position={[0.5, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <meshStandardMaterial color="#666666" metalness={0.8} roughness={0.2} />
      </Cylinder>
      
      <Cylinder args={[0.05, 0.05, 2, 8]} position={[-0.5, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <meshStandardMaterial color="#666666" metalness={0.8} roughness={0.2} />
      </Cylinder>
      
      <Cylinder args={[0.05, 0.05, 2, 8]} position={[0, 0, 0.5]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#666666" metalness={0.8} roughness={0.2} />
      </Cylinder>
      
      <Cylinder args={[0.05, 0.05, 2, 8]} position={[0, 0, -0.5]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#666666" metalness={0.8} roughness={0.2} />
      </Cylinder>
    </group>
  );
};

export default CadModel;