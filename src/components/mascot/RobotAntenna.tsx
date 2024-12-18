import React from 'react';

export function RobotAntenna() {
  return (
    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-1 h-4">
      {/* Antenna base */}
      <div className="absolute bottom-0 w-full h-2 bg-gray-700 rounded-full" />
      
      {/* Antenna rod */}
      <div className="absolute bottom-1 w-0.5 h-full bg-gray-600 left-1/2 -translate-x-1/2">
        {/* Antenna tip */}
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-cyan-500 rounded-full animate-pulse">
          <div className="absolute inset-0 bg-cyan-500 rounded-full animate-ping opacity-75" />
        </div>
      </div>
    </div>
  );
}