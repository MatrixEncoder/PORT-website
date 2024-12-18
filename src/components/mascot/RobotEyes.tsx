import React from 'react';

interface RobotEyesProps {
  eyePosition: {
    x: number;
    y: number;
  };
}

export function RobotEyes({ eyePosition }: RobotEyesProps) {
  return (
    <div className="absolute inset-0 flex items-center justify-center space-x-2">
      {/* Left eye */}
      <div className="relative w-3 h-3 bg-gray-900 rounded-full">
        <div 
          className="absolute w-2 h-2 bg-cyan-500 rounded-full transition-transform duration-100"
          style={{ 
            transform: `translate(${eyePosition.x}px, ${eyePosition.y}px)`,
            boxShadow: '0 0 8px rgba(34, 211, 238, 0.6)'
          }}
        >
          <div className="absolute top-0 left-1/4 w-1 h-1 bg-white rounded-full opacity-70" />
        </div>
      </div>
      
      {/* Right eye */}
      <div className="relative w-3 h-3 bg-gray-900 rounded-full">
        <div 
          className="absolute w-2 h-2 bg-cyan-500 rounded-full transition-transform duration-100"
          style={{ 
            transform: `translate(${eyePosition.x}px, ${eyePosition.y}px)`,
            boxShadow: '0 0 8px rgba(34, 211, 238, 0.6)'
          }}
        >
          <div className="absolute top-0 left-1/4 w-1 h-1 bg-white rounded-full opacity-70" />
        </div>
      </div>
    </div>
  );
}