import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Cylinder, Sphere } from '@react-three/drei';

const PrintingModel = ({ position = [0, 0, 0], scale = 1, rotation = [0, 0, 0] }) => {
  const groupRef = useRef();
  const printerHeadRef = useRef();
  
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2;
    }
    
    if (printerHeadRef.current) {
      // Make the printer head move up and down
      printerHeadRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.3;
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale} rotation={rotation}>
      {/* Printer Base */}
      <Box args={[2, 0.2, 2]} position={[0, -1, 0]}>
        <meshStandardMaterial color="#333333" />
      </Box>
      
      {/* Printer Platform */}
      <Box args={[1.5, 0.1, 1.5]} position={[0, -0.8, 0]}>
        <meshStandardMaterial color="#666666" />
      </Box>
      
      {/* Vertical Supports */}
      <Cylinder args={[0.1, 0.1, 2, 8]} position={[-0.8, 0, -0.8]}>
        <meshStandardMaterial color="#444444" metalness={0.7} roughness={0.3} />
      </Cylinder>
      
      <Cylinder args={[0.1, 0.1, 2, 8]} position={[0.8, 0, -0.8]}>
        <meshStandardMaterial color="#444444" metalness={0.7} roughness={0.3} />
      </Cylinder>
      
      <Cylinder args={[0.1, 0.1, 2, 8]} position={[-0.8, 0, 0.8]}>
        <meshStandardMaterial color="#444444" metalness={0.7} roughness={0.3} />
      </Cylinder>
      
      <Cylinder args={[0.1, 0.1, 2, 8]} position={[0.8, 0, 0.8]}>
        <meshStandardMaterial color="#444444" metalness={0.7} roughness={0.3} />
      </Cylinder>
      
      {/* Top Frame */}
      <Box args={[1.8, 0.1, 0.1]} position={[0, 1, -0.8]}>
        <meshStandardMaterial color="#444444" />
      </Box>
      
      <Box args={[1.8, 0.1, 0.1]} position={[0, 1, 0.8]}>
        <meshStandardMaterial color="#444444" />
      </Box>
      
      <Box args={[0.1, 0.1, 1.7]} position={[-0.8, 1, 0]}>
        <meshStandardMaterial color="#444444" />
      </Box>
      
      <Box args={[0.1, 0.1, 1.7]} position={[0.8, 1, 0]}>
        <meshStandardMaterial color="#444444" />
      </Box>
      
      {/* Printer Head Assembly */}
      <group ref={printerHeadRef} position={[0, 0.5, 0]}>
        {/* Horizontal Bar */}
        <Box args={[1.7, 0.1, 0.1]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#555555" />
        </Box>
        
        {/* Printer Head */}
        <Box args={[0.3, 0.3, 0.3]} position={[0, -0.2, 0]}>
          <meshStandardMaterial color="#cc0000" />
        </Box>
        
        {/* Nozzle */}
        <Cylinder args={[0.03, 0.01, 0.2, 8]} position={[0, -0.4, 0]}>
          <meshStandardMaterial color="#888888" metalness={0.9} roughness={0.1} />
        </Cylinder>
      </group>
      
      {/* 3D Printed Object (in progress) */}
      <Sphere args={[0.3, 16, 16]} position={[0, -0.5, 0]}>
        <meshStandardMaterial color="#00aaff" metalness={0.2} roughness={0.8} />
      </Sphere>
    </group>
  );
};

export default PrintingModel;