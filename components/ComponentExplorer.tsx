import React, { useState } from 'react';
import { Cpu, Thermometer, Sprout, Wind, Info, ChevronRight } from 'lucide-react';
import { ComponentData } from '../types';

const componentsList: ComponentData[] = [
  {
    id: 'arduino',
    title: 'Arduino Uno',
    icon: 'cpu',
    desc: 'हा उपकरणाचा "मेंदू" (Brain) आहे. हे एक मायक्रोकंट्रोलर आहे जे सर्व सेन्सर्सकडून येणारी माहिती वाचते आणि त्यावर प्रक्रिया करून योग्य तो निर्णय घेते (उदा. मोटर चालू करणे किंवा माहिती डिस्प्ले करणे).',
    color: 'bg-blue-100 text-blue-600 border-blue-300'
  },
  {
    id: 'dht11',
    title: 'DHT11 Sensor',
    icon: 'thermometer',
    desc: 'हा एक डिजिटल सेन्सर आहे जो हवेतील तापमान (Temperature) आणि आर्द्रता (Humidity) मोजतो. पिकांच्या वाढीसाठी हे दोन्ही घटक नियंत्रित असणे आवश्यक असते.',
    color: 'bg-red-100 text-red-600 border-red-300'
  },
  {
    id: 'soil',
    title: 'Soil Moisture Sensor',
    icon: 'sprout',
    desc: 'हा सेन्सर जमिनीतील ओलावा (Water Content) मोजतो. जेव्हा जमिनीतील पाणी कमी होते, तेव्हा हा सेन्सर कंट्रोलरला सिग्नल पाठवतो, ज्यामुळे पाण्याचे नियोजन करणे सोपे जाते.',
    color: 'bg-green-100 text-green-600 border-green-300'
  },
  {
    id: 'anemo',
    title: 'Anemometer',
    icon: 'wind',
    desc: 'हे उपकरण वाऱ्याचा वेग (Wind Speed) मोजण्यासाठी वापरले जाते. जास्त वेगाचा वारा पिकांचे नुकसान करू शकतो, त्यामुळे वाऱ्याची गती समजणे महत्त्वाचे आहे.',
    color: 'bg-teal-100 text-teal-600 border-teal-300'
  }
];

const ComponentExplorer: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('arduino');

  const getIcon = (name: string, size: number = 32) => {
    switch(name) {
      case 'cpu': return <Cpu size={size} />;
      case 'thermometer': return <Thermometer size={size} />;
      case 'sprout': return <Sprout size={size} />;
      case 'wind': return <Wind size={size} />;
      default: return <Info size={size} />;
    }
  };

  const activeComponent = componentsList.find(c => c.id === activeId);

  return (
    <section className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
      <div className="mb-8 text-center md:text-left">
        <h2 className="text-2xl font-bold text-gray-900 mb-2 border-l-4 border-purple-600 pl-3 inline-block md:block">
          ३. वापरलेले साहित्य (Hardware Components)
        </h2>
        <p className="text-gray-600 mt-2">
           खालील आयकॉन्सवर (Icons) क्लिक करा आणि त्या घटकाची माहिती खालील बॉक्समध्ये पहा.
        </p>
      </div>

      {/* Horizontal Interactive Row */}
      <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 mb-8">
        {componentsList.map((comp) => {
           const isActive = activeId === comp.id;
           return (
            <button
              key={comp.id}
              onClick={() => setActiveId(comp.id)}
              className={`group relative p-4 md:p-5 rounded-2xl border-2 transition-all duration-300 ease-out flex flex-col items-center justify-center w-24 h-24 md:w-28 md:h-28
                ${isActive 
                  ? `${comp.color} shadow-lg scale-110 ring-2 ring-offset-2 ring-purple-200` 
                  : 'bg-white border-gray-200 text-gray-400 hover:border-purple-300 hover:bg-purple-50 hover:text-purple-600 hover:scale-105'
                }`}
            >
              <div className="mb-1 transform transition-transform duration-300 group-hover:scale-110">
                {getIcon(comp.icon, 36)}
              </div>
              <span className={`text-[10px] font-bold uppercase tracking-wide text-center leading-tight ${isActive ? 'opacity-100' : 'opacity-70'}`}>
                {comp.title.split(' ')[0]}
              </span>
              
              {/* Active Indicator Dot */}
              {isActive && (
                <div className="absolute -bottom-2 bg-purple-600 w-2 h-2 rounded-full animate-bounce"></div>
              )}
            </button>
           );
        })}
      </div>

      {/* Info Display Box */}
      <div className="relative min-h-[220px]">
        {activeComponent && (
            <div 
                key={activeComponent.id} // Key change triggers animation
                className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] flex flex-col md:flex-row gap-6 md:gap-8 items-center animate-fade-in"
            >
                {/* Large Visual Icon */}
                <div className={`w-24 h-24 md:w-32 md:h-32 rounded-full flex-shrink-0 flex items-center justify-center border-4 border-white shadow-inner ${activeComponent.color.replace('text-', 'bg-opacity-20 ')}`}>
                    <div className={activeComponent.color.split(' ')[1]}> {/* Extract text color class */}
                        {getIcon(activeComponent.icon, 64)}
                    </div>
                </div>

                {/* Text Content */}
                <div className="flex-grow text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                            {activeComponent.title}
                        </h3>
                        <ChevronRight className="text-gray-300" />
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed font-medium">
                        {activeComponent.desc}
                    </p>
                </div>
            </div>
        )}
      </div>
    </section>
  );
};

export default ComponentExplorer;