import React from 'react';
import { CloudSun } from 'lucide-react';
import SimulationDashboard from './components/SimulationDashboard';
import ComponentExplorer from './components/ComponentExplorer';
import LogicFlow from './components/LogicFlow';
import UsesSection from './components/UsesSection';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800 selection:bg-blue-100">
      
      {/* Header Section */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50 opacity-95 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 md:py-6 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <span className="inline-block px-3 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-800 mb-2">
                तालुकास्तरीय विज्ञान प्रदर्शन -२०२५-२६ (कराड तालुका )
              </span>
              <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-1 flex items-center justify-center md:justify-start gap-3">
                <CloudSun className="text-blue-500" size={32} />
                वातावरण निरीक्षण यंत्र
              </h1>
              <p className="text-sm md:text-lg text-gray-600">
                विषय: विकसित आणि आत्मनिर्भर भारतासाठी | उपविषय: उद्योन्मुख तंत्रज्ञान
              </p>
            </div>
            <div className="text-center md:text-right bg-gray-50 px-4 py-2 rounded-lg border border-gray-100">
              <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">सादरकर्ते</p>
              <p className="font-bold text-gray-800">श्री. पवार एस. ए.</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="flex-grow container mx-auto px-4 py-8 max-w-6xl space-y-12">

        {/* Introduction Section */}
        <section className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold mb-4 text-blue-900 border-l-4 border-blue-600 pl-3">
            प्रस्तावना
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            सध्याच्या काळात शेती आणि दैनंदिन जीवनात हवामानातील बदलांची माहिती असणे अत्यंत आवश्यक झाले आहे. 
            हे ॲप्लिकेशन तुम्हाला <strong>'वातावरण निरीक्षण यंत्र'</strong> कसे काम करते हे समजून घेण्यास मदत करेल. 
            हे यंत्र कमी खर्चात तापमान, आर्द्रता, हवेचा वेग आणि जमिनीतील ओलावा मोजते आणि 'उद्योन्मुख तंत्रज्ञान' या संकल्पनेवर आधारित आहे.
          </p>
        </section>

        {/* Core Components */}
        <SimulationDashboard />
        <ComponentExplorer />
        <LogicFlow />
        <UsesSection />

      </main>

      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-200 mt-12">
        <div className="container mx-auto px-4 py-12 max-w-6xl text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-4">निष्कर्ष</h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
                हे 'वातावरण निरीक्षण यंत्र' आधुनिक तंत्रज्ञानाचा वापर करून बनवलेले एक स्मार्ट उपकरण आहे. 
                हे केवळ माहितीच देत नाही, तर 'आत्मनिर्भर भारत' स्वप्नाला बळ देते.
            </p>
            <div className="text-sm text-gray-400 border-t border-gray-200 pt-6">
                &copy; २०२५ वातावरण निरीक्षण यंत्र प्रोजेक्ट | डिझाइन: React & Tailwind
            </div>
        </div>
      </footer>

    </div>
  );
};

export default App;