import React from 'react';

interface RobotHeadProps {
  children: React.ReactNode;
}

export function RobotHead({ children }: RobotHeadProps) {
  return (
    <div className="relative w-full h-full">
      {/* Robot head base */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg border-2 border-cyan-500/50 shadow-lg shadow-cyan-500/20">
        {/* Face plate */}
        <div className="absolute inset-1 bg-gradient-to-b from-gray-700 to-gray-800 rounded-md" />
      </div>
      
      {children}
    </div>
  );
}