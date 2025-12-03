import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Sun, CloudRain, Wind, Smile, Droplets, Zap, Leaf, Sprout } from 'lucide-react';
import { ScenarioType, WeatherState } from '../types';
import LCDScreen from './LCDScreen';

// Detailed Crop Data based on user input
const cropsData = [
  { 
    id: 'wheat', 
    name: 'गहू (Wheat)', 
    icon: '🌾',
    stages: [
      { name: 'पेरणी (Germination)', temp: '20°C - 25°C', hum: '50% - 70%', wind: 'मंद ते मध्यम', idealTemp: 22, idealHum: 60, idealSoil: 60, idealWind: 10 },
      { name: 'दाणे भरणे (Grain Filling)', temp: '14°C - 16°C', hum: '20% - 40%', wind: 'मंद', idealTemp: 15, idealHum: 30, idealSoil: 50, idealWind: 5 }
    ]
  },
  { 
    id: 'paddy', 
    name: 'भात/धान (Rice)', 
    icon: '🍚',
    stages: [
      { name: 'वाढीचा काळ', temp: '21°C - 36°C', hum: '70% - 80%', wind: 'मंद', idealTemp: 28, idealHum: 75, idealSoil: 90, idealWind: 8 },
      { name: 'फुलोरा', temp: '26°C - 29°C', hum: 'मध्यम ते जास्त', wind: 'मंद', idealTemp: 27, idealHum: 65, idealSoil: 85, idealWind: 8 }
    ]
  },
  { 
    id: 'sugarcane', 
    name: 'ऊस (Sugarcane)', 
    icon: '🎋',
    stages: [
      { name: 'वाढीचा काळ', temp: '21°C - 27°C', hum: '> 70%', wind: 'मंद ते मध्यम', idealTemp: 25, idealHum: 75, idealSoil: 80, idealWind: 12 },
      { name: 'पिकण्याचा काळ', temp: '18°C - 21°C', hum: 'कमी', wind: 'मंद', idealTemp: 20, idealHum: 40, idealSoil: 60, idealWind: 8 }
    ]
  },
  { 
    id: 'cotton', 
    name: 'कपाशी (Cotton)', 
    icon: '☁️',
    stages: [
      { name: 'उगवण', temp: '> 16°C', hum: 'कमी ते मध्यम', wind: 'मंद', idealTemp: 20, idealHum: 50, idealSoil: 40, idealWind: 10 },
      { name: 'चांगली वाढ', temp: '21°C - 27°C', hum: '60% - 70%', wind: 'मंद', idealTemp: 24, idealHum: 65, idealSoil: 55, idealWind: 10 },
      { name: 'बोंडे पक्व होणे', temp: '27°C - 32°C', hum: 'कमी (महत्त्वाचे)', wind: 'मंद', idealTemp: 30, idealHum: 30, idealSoil: 35, idealWind: 8 }
    ]
  },
  { 
    id: 'soybean', 
    name: 'सोयाबीन', 
    icon: '🌱',
    stages: [
      { name: 'पेरणी', temp: '25°C - 32°C', hum: 'मध्यम', wind: 'मंद', idealTemp: 28, idealHum: 60, idealSoil: 60, idealWind: 10 },
      { name: 'शेंगा भरणे', temp: '28°C - 34°C', hum: '50% - 70%', wind: 'मंद', idealTemp: 31, idealHum: 60, idealSoil: 55, idealWind: 10 }
    ]
  },
  { 
    id: 'sunflower', 
    name: 'सूर्यफूल', 
    icon: '🌻',
    stages: [
      { name: 'वाढीचा काळ', temp: '24°C - 30°C', hum: 'मध्यम', wind: 'मंद', idealTemp: 27, idealHum: 55, idealSoil: 50, idealWind: 12 },
      { name: 'दाणे भरणे', temp: '15°C - 20°C', hum: '20% - 40%', wind: 'मंद', idealTemp: 18, idealHum: 30, idealSoil: 45, idealWind: 10 }
    ]
  },
  { 
    id: 'maize', 
    name: 'मका (Maize)', 
    icon: '🌽',
    stages: [
      { name: 'वाढीचा काळ', temp: '21°C - 27°C', hum: 'मध्यम', wind: 'मंद ते मध्यम', idealTemp: 24, idealHum: 60, idealSoil: 60, idealWind: 15 }
    ]
  },
];

const SimulationDashboard: React.FC = () => {
  const [scenario, setScenario] = useState<ScenarioType>('normal');
  const [selectedCropId, setSelectedCropId] = useState<string | null>(null);
  
  // Default values for dashboard visualization
  const [data, setData] = useState<WeatherState>({
    temp: 30,
    humidity: 55,
    soilMoisture: 60,
    windSpeed: 10,
    status: "System Normal."
  });

  const activeCrop = cropsData.find(c => c.id === selectedCropId);

  const handleScenarioChange = (newScenario: ScenarioType) => {
    setScenario(newScenario);
    setSelectedCropId(null);

    let newData: WeatherState;
    switch (newScenario) {
      case 'sunny':
        newData = { temp: 38, humidity: 30, soilMoisture: 20, windSpeed: 15, status: "Soil Dry. Need Water!" };
        break;
      case 'rainy':
        newData = { temp: 24, humidity: 95, soilMoisture: 90, windSpeed: 25, status: "Raining. Soil Wet." };
        break;
      case 'windy':
        newData = { temp: 28, humidity: 60, soilMoisture: 50, windSpeed: 85, status: "Alert! High Wind." };
        break;
      case 'normal':
      default:
        newData = { temp: 30, humidity: 55, soilMoisture: 60, windSpeed: 10, status: "System Normal." };
        break;
    }
    setData(newData);
  };

  const handleCropClick = (cropId: string) => {
    setScenario('custom');
    setSelectedCropId(cropId);
    
    // Find crop data and set the dashboard simulation to the first stage's ideal values
    const crop = cropsData.find(c => c.id === cropId);
    if (crop && crop.stages.length > 0) {
        const stage = crop.stages[0];
        setData({
            temp: stage.idealTemp,
            humidity: stage.idealHum,
            soilMoisture: stage.idealSoil,
            windSpeed: stage.idealWind,
            status: `${crop.name}: ${stage.name}`
        });
    }
  };

  const chartData = [
    { name: 'तापमान (°C)', value: data.temp, color: '#ef4444' },
    { name: 'आर्द्रता (%)', value: data.humidity, color: '#3b82f6' },
    { name: 'माती (%)', value: data.soilMoisture, color: '#10b981' },
    { name: 'वारा (km/h)', value: data.windSpeed, color: '#f59e0b' },
  ];

  const isRedOn = scenario === 'sunny' || (data.soilMoisture < 30);
  const isGreenOn = scenario === 'rainy' || scenario === 'normal' || (data.soilMoisture >= 30 && scenario !== 'windy');
  const isAlertBlink = scenario === 'windy' || (data.windSpeed > 50);

  return (
    <section className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-200 shadow-inner">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-2 flex items-center gap-2">
            <Zap className="text-yellow-500" />
            कृषी हवामान दर्शक (Agro-Climatic Monitor)
        </h2>
        <p className="text-gray-600 mb-6">
          खालील वर्तुळातील पिकांवर क्लिक करा. मध्यभागी त्या पिकाची <strong>आदर्श हवामान स्थिती</strong> दिसेल.
        </p>
        
        {/* CIRCULAR LAYOUT CONTAINER */}
        <div className="relative w-full max-w-4xl mx-auto h-[500px] md:h-[600px] bg-white rounded-full border border-gray-200 shadow-xl overflow-hidden hidden md:block">
            {/* Center Content Circle (Info Panel) */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] bg-slate-50 rounded-full border-4 border-blue-100 flex items-center justify-center z-10 shadow-inner p-8 text-center overflow-y-auto">
                {activeCrop ? (
                    <div className="animate-fade-in w-full">
                        <div className="text-4xl mb-2">{activeCrop.icon}</div>
                        <h3 className="text-xl font-bold text-green-800 mb-3 border-b border-green-200 pb-2">
                            {activeCrop.name}
                        </h3>
                        <div className="text-xs text-left space-y-3">
                            {activeCrop.stages.map((stage, idx) => (
                                <div key={idx} className="bg-white p-2 rounded border border-gray-100 shadow-sm">
                                    <p className="font-bold text-gray-700 mb-1">🔸 {stage.name}</p>
                                    <div className="grid grid-cols-2 gap-1 text-gray-600">
                                        <span>🌡️ {stage.temp}</span>
                                        <span>💧 {stage.hum}</span>
                                        <span className="col-span-2">🌬️ वारा: {stage.wind}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="text-gray-400">
                        <Leaf size={48} className="mx-auto mb-4 opacity-30" />
                        <p className="text-lg font-medium">कोणत्याही एका पिकावर क्लिक करा</p>
                        <p className="text-sm mt-2">त्या पिकाचे आदर्श हवामान प्रमाण येथे दिसेल.</p>
                    </div>
                )}
            </div>

            {/* Orbiting Crops */}
            {cropsData.map((crop, index) => {
                const total = cropsData.length;
                const radius = 240; // Distance from center
                const angle = (index / total) * 2 * Math.PI - (Math.PI / 2); // Start from top
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                    <button
                        key={crop.id}
                        onClick={() => handleCropClick(crop.id)}
                        className={`absolute top-1/2 left-1/2 w-24 h-24 -ml-12 -mt-12 rounded-full shadow-lg flex flex-col items-center justify-center transition-all duration-300 z-20 border-2
                            ${selectedCropId === crop.id 
                                ? 'bg-green-600 text-white scale-110 border-green-700 shadow-green-500/50' 
                                : 'bg-white text-gray-700 hover:scale-105 hover:bg-green-50 border-gray-200'}`}
                        style={{
                            transform: `translate(${x}px, ${y}px)`
                        }}
                    >
                        <span className="text-2xl mb-1">{crop.icon}</span>
                        <span className="text-[10px] font-bold text-center leading-tight px-1">
                            {crop.name.split(' ')[0]}
                        </span>
                    </button>
                );
            })}
            
            {/* Decoration Circles */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] border border-dashed border-gray-300 rounded-full pointer-events-none"></div>
        </div>

        {/* Mobile View (Grid instead of Circle) */}
        <div className="md:hidden grid grid-cols-2 gap-3 mb-6">
            {cropsData.map((crop) => (
                <button
                    key={crop.id}
                    onClick={() => handleCropClick(crop.id)}
                    className={`p-3 rounded-lg border flex flex-col items-center text-center
                        ${selectedCropId === crop.id 
                            ? 'bg-green-100 border-green-500 text-green-900' 
                            : 'bg-white border-gray-200 text-gray-600'}`}
                >
                    <span className="text-2xl">{crop.icon}</span>
                    <span className="text-sm font-bold mt-1">{crop.name}</span>
                </button>
            ))}
            {activeCrop && (
                <div className="col-span-2 bg-blue-50 p-4 rounded-lg border border-blue-200 mt-2">
                    <h3 className="font-bold text-blue-900 mb-2 border-b border-blue-200 pb-1">{activeCrop.name} - माहिती</h3>
                    <div className="space-y-3 text-sm">
                        {activeCrop.stages.map((stage, idx) => (
                            <div key={idx} className="bg-white p-2 rounded">
                                <p className="font-bold">{stage.name}</p>
                                <p>🌡️ {stage.temp} | 💧 {stage.hum}</p>
                                <p>🌬️ {stage.wind}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Controls Side */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
            <h3 className="font-semibold text-gray-700 mb-4 border-b pb-2">१. हवामान स्थिती (मॅन्युअल):</h3>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => handleScenarioChange('sunny')}
                className={`p-3 rounded-lg border transition-all flex flex-col items-center justify-center gap-2 text-center h-20
                    ${scenario === 'sunny' ? 'bg-yellow-100 border-yellow-400' : 'bg-yellow-50 border-yellow-200 hover:bg-yellow-100'}`}
              >
                <Sun size={20} className="text-yellow-600" />
                <span className="font-medium text-xs">सूर्यप्रकाश</span>
              </button>
              
              <button
                onClick={() => handleScenarioChange('rainy')}
                className={`p-3 rounded-lg border transition-all flex flex-col items-center justify-center gap-2 text-center h-20
                    ${scenario === 'rainy' ? 'bg-blue-100 border-blue-400' : 'bg-blue-50 border-blue-200 hover:bg-blue-100'}`}
              >
                <CloudRain size={20} className="text-blue-600" />
                <span className="font-medium text-xs">पावसाळी</span>
              </button>

              <button
                onClick={() => handleScenarioChange('windy')}
                className={`p-3 rounded-lg border transition-all flex flex-col items-center justify-center gap-2 text-center h-20
                    ${scenario === 'windy' ? 'bg-teal-100 border-teal-400' : 'bg-teal-50 border-teal-200 hover:bg-teal-100'}`}
              >
                <Wind size={20} className="text-teal-600" />
                <span className="font-medium text-xs">वादळी वारा</span>
              </button>

              <button
                onClick={() => handleScenarioChange('normal')}
                className={`p-3 rounded-lg border transition-all flex flex-col items-center justify-center gap-2 text-center h-20
                    ${scenario === 'normal' ? 'bg-gray-100 border-gray-400' : 'bg-gray-50 border-gray-200 hover:bg-gray-100'}`}
              >
                <Smile size={20} className="text-gray-600" />
                <span className="font-medium text-xs">सामान्य</span>
              </button>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
            <h3 className="font-semibold text-gray-700 mb-3 border-b pb-2">२. स्थिती दर्शक (LED):</h3>
            <div className="flex items-center justify-around py-4 bg-gray-50 rounded-lg">
              <div className="flex flex-col items-center gap-2">
                <div className={`w-4 h-4 rounded-full shadow-inner transition-all duration-300 ${isRedOn ? 'bg-red-500 shadow-[0_0_12px_#ef4444]' : 'bg-gray-700'}`}></div>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wide text-center">पाणी<br/>(Red)</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className={`w-4 h-4 rounded-full shadow-inner transition-all duration-300 ${isGreenOn ? 'bg-green-500 shadow-[0_0_12px_#22c55e]' : 'bg-gray-700'}`}></div>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wide text-center">ओलावा<br/>(Green)</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className={`w-4 h-4 rounded-full shadow-inner transition-all duration-300 ${isAlertBlink ? 'animate-blink-red' : 'bg-gray-700'}`}></div>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wide text-center">अलर्ट<br/>(Blink)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Display Side */}
        <div className="lg:col-span-8 space-y-6">
          {/* Virtual LCD */}
          <LCDScreen data={data} />

          {/* Live Chart */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wide flex items-center gap-2">
                <Droplets size={16} />
                सेन्सर डेटा विश्लेषण (Live Data)
            </h3>
            <div className="h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                  <XAxis dataKey="name" stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip 
                    cursor={{fill: 'transparent'}}
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                  />
                  <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimulationDashboard;