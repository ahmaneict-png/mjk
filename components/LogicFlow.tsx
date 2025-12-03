import React, { useState } from 'react';
import { ArrowDown } from 'lucide-react';

const LogicFlow: React.FC = () => {
  const [step, setStep] = useState<number>(1);

  const steps = [
    {
      id: 1,
      title: "माहिती संकलन (Input)",
      desc: "सेन्सर्स (DHT11, Soil, Anemometer) हवेतील आणि जमिनीतील माहिती गोळा करतात."
    },
    {
      id: 2,
      title: "प्रक्रिया (Process)",
      desc: "Arduino Uno मायक्रोकंट्रोलर या कच्च्या माहितीचे विश्लेषण करून मानवी भाषेत रूपांतरित करतो."
    },
    {
      id: 3,
      title: "आउटपुट (Output)",
      desc: "LCD स्क्रीनवर आकडे दिसतात आणि गरजेनुसार LED लाईट्स (लाल/हिरवा) लागतात."
    }
  ];

  return (
    <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 border-l-4 border-green-600 pl-3">
        ४. कार्याची पद्धत (Logic Flow)
      </h2>
      <p className="mb-8 text-gray-600">
        हे यंत्र 'Input-Process-Output' तत्त्वावर कसे काम करते ते पाहा (टप्प्यावर क्लिक करा):
      </p>

      <div className="relative max-w-2xl mx-auto">
        {/* Connecting Line */}
        <div className="absolute left-6 md:left-8 top-4 bottom-4 w-1 bg-gray-200 rounded"></div>

        <div className="space-y-8">
          {steps.map((s, idx) => (
            <div
              key={s.id}
              onClick={() => setStep(s.id)}
              className={`relative pl-20 pr-6 py-6 rounded-xl border-2 cursor-pointer transition-all duration-300
                ${step === s.id 
                  ? 'bg-green-50 border-green-500 shadow-md scale-105' 
                  : 'bg-white border-transparent hover:bg-gray-50'}`}
            >
              {/* Step Number Bubble */}
              <div 
                className={`absolute left-3 md:left-5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm z-10 border-2 transition-colors
                  ${step === s.id ? 'bg-green-600 border-green-600 text-white' : 'bg-white border-gray-300 text-gray-500'}`}
              >
                {s.id}
              </div>

              <h3 className={`font-bold text-lg mb-1 ${step === s.id ? 'text-green-800' : 'text-gray-800'}`}>
                {s.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {s.desc}
              </p>

              {/* Arrow Indicator for active step */}
               {step === s.id && idx !== steps.length - 1 && (
                  <div className="absolute -bottom-7 left-6 md:left-8 transform -translate-x-1/2 text-green-500 animate-bounce z-20">
                      <ArrowDown size={20} />
                  </div>
               )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogicFlow;