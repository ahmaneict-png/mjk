import React from 'react';
import { WeatherState } from '../types';

interface LCDScreenProps {
  data: WeatherState;
}

const LCDScreen: React.FC<LCDScreenProps> = ({ data }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg border-4 border-gray-600 relative">
      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-gray-400 text-xs font-bold tracking-widest uppercase">
        LCD Display 20x4
      </div>
      
      <div className="font-lcd bg-[#9ca3af] p-4 rounded text-black text-lg md:text-xl leading-relaxed h-40 flex flex-col justify-center items-start shadow-[inset_2px_2px_5px_rgba(0,0,0,0.2)]">
        <div className="w-full flex justify-between">
          <span>Temp: {data.temp}°C</span>
          <span>Hum: {data.humidity}%</span>
        </div>
        <div className="w-full flex justify-between mt-2">
          <span>Soil: {data.soilMoisture}%</span>
          <span>Wind: {data.windSpeed}</span>
        </div>
        <div className="mt-4 text-sm font-bold opacity-80 border-t border-black/20 pt-2 w-full">
          {data.status}
        </div>
      </div>
      
      <div className="mt-4 flex justify-between items-center text-gray-400 text-xs font-mono">
        <span>ARDUINO POWERED</span>
        <div className="flex items-center gap-1">
            <span className="text-[10px]">PWR</span>
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_5px_rgba(239,68,68,0.8)]"></div>
        </div>
      </div>
    </div>
  );
};

export default LCDScreen;