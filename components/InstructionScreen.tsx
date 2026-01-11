
import React from 'react';

interface InstructionScreenProps {
  onConfirm: () => void;
}

const InstructionScreen: React.FC<InstructionScreenProps> = ({ onConfirm }) => {
  return (
    <div className="max-w-lg w-full p-10 bg-white/90 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-white/50 animate-in fade-in zoom-in duration-500 text-center">
      <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-8 text-amber-500 shadow-inner">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      
      <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">实验须知</h2>
      
      <div className="space-y-4 mb-10">
        <p className="text-gray-600 text-lg leading-relaxed font-medium">
          随后的一系列任务是你生活中的经常遇到的一些小事，请尽可能<span className="text-blue-600 font-bold">代入真实生活</span>。
        </p>
        <p className="text-gray-600 text-lg leading-relaxed font-medium">
          请根据给定的条件，做出符合你<span className="text-blue-600 font-bold">日常生活的选择</span>。
        </p>
      </div>

      <button 
        onClick={onConfirm}
        className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-lg transition-all shadow-xl shadow-blue-200 hover:bg-blue-700 active:scale-[0.98] flex items-center justify-center gap-2 group"
      >
        我已了解，进入实验
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </button>

      <div className="mt-8">
        <span className="text-[10px] font-black text-gray-300 uppercase tracking-[0.3em]">
          Simulation Guidance Mode
        </span>
      </div>
    </div>
  );
};

export default InstructionScreen;
