import React, { useEffect, useRef } from 'react';
import { useMousePosition } from '../../hooks/useMousePosition';
import { RobotHead } from './RobotHead';
import { RobotEyes } from './RobotEyes';
import { RobotAntenna } from './RobotAntenna';

export function RobotMascot() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { x, y } = useMousePosition();

  const calculateEyePosition = () => {
    if (!containerRef.current) return { x: 0, y: 0 };

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate angle between robot and cursor
    const angle = Math.atan2(y - centerY, x - centerX);
    
    // Limit eye movement radius
    const maxRadius = 3;
    const eyeX = Math.cos(angle) * maxRadius;
    const eyeY = Math.sin(angle) * maxRadius;

    return { x: eyeX, y: eyeY };
  };

  const eyePosition = calculateEyePosition();

  return (
    <div 
      ref={containerRef}
      className="relative w-12 h-12 mr-4"
    >
      <RobotHead>
        <RobotAntenna />
        <RobotEyes eyePosition={eyePosition} />
      </RobotHead>
    </div>
  );
}