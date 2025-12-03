import React from 'react';
import { Sprout, School, CloudSun } from 'lucide-react';

const UsesSection: React.FC = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6 text-gray-900 border-l-4 border-orange-500 pl-3">
        ५. उपयोग व फायदे
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-orange-50 p-6 rounded-xl border border-orange-100 hover:shadow-md transition-shadow">
          <div className="mb-4 bg-orange-200 w-12 h-12 rounded-lg flex items-center justify-center text-orange-700">
             <Sprout size={28} />
          </div>
          <h3 className="font-bold text-lg text-orange-900 mb-2">शेतीसाठी</h3>
          <p className="text-sm text-orange-800 leading-relaxed">
            मातीतील ओलावा तपासून पाण्याची गरज ओळखते, ज्यामुळे पाण्याची बचत होते आणि पिकांचे नुकसान टळते.
          </p>
        </div>
        
        <div className="bg-green-50 p-6 rounded-xl border border-green-100 hover:shadow-md transition-shadow">
          <div className="mb-4 bg-green-200 w-12 h-12 rounded-lg flex items-center justify-center text-green-700">
             <School size={28} />
          </div>
          <h3 className="font-bold text-lg text-green-900 mb-2">शिक्षण</h3>
          <p className="text-sm text-green-800 leading-relaxed">
            शाळा व प्रयोगशाळेत विद्यार्थ्यांना हवामानशास्त्राचे व्यावहारिक ज्ञान देण्यासाठी आणि प्रयोगांसाठी उपयुक्त.
          </p>
        </div>
        
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 hover:shadow-md transition-shadow">
          <div className="mb-4 bg-blue-200 w-12 h-12 rounded-lg flex items-center justify-center text-blue-700">
             <CloudSun size={28} />
          </div>
          <h3 className="font-bold text-lg text-blue-900 mb-2">हवामान अंदाज</h3>
          <p className="text-sm text-blue-800 leading-relaxed">
            स्थानिक पातळीवर वाऱ्याचा वेग आणि तापमानातील बदलांवरून हवामानाचा प्राथमिक अंदाज वर्तवता येतो.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UsesSection;