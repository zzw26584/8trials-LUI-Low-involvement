
import React, { useState, useRef, useEffect } from 'react';
import { Message, Product, TrialTask } from '../types';
import { getHotelRecommendation } from '../services/geminiService';
import ProductCard from './HotelCard';

interface ChatInterfaceProps {
  task: TrialTask;
  trialNumber: number;
  totalTrials: number;
  onFirstMessage: () => void;
  onFinalSelection: (product: Product, interactionCount: number) => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ 
  task, 
  trialNumber, 
  totalTrials, 
  onFirstMessage, 
  onFinalSelection 
}) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [interactionCount, setInteractionCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping, errorMessage]);

  // --- 核心修复：通用筛选逻辑 ---
  // 无论 API 返回多少个，强制处理成 2 个展示对象
  const processCandidatesToFixedCount = (allProducts: Product[], apiCandidateIds: string[] | undefined): Product[] => {
    const TARGET_COUNT = 2;
    const safeIds = Array.isArray(apiCandidateIds) ? apiCandidateIds : [];
    
    // 1. 先找出 API 推荐的有效产品
    let selection = allProducts.filter(p => safeIds.includes(p.id));

    // 2. 如果数量不足 2 个，用评分最高的其他产品补齐
    if (selection.length < TARGET_COUNT) {
      const selectedIds = new Set(selection.map(p => p.id));
      const remaining = allProducts
        .filter(p => !selectedIds.has(p.id))
        .sort((a, b) => b.rating - a.rating); // 按评分降序
      
      const needed = TARGET_COUNT - selection.length;
      selection = [...selection, ...remaining.slice(0, needed)];
    }

    // 3. 如果数量超过 2 个，按评分降序截取前 2 个
    if (selection.length > TARGET_COUNT) {
      selection.sort((a, b) => b.rating - a.rating);
      selection = selection.slice(0, TARGET_COUNT);
    }

    return selection;
  };

  const handleSend = async () => {
    const input = inputValue.trim();
    if (!input || isTyping) return;

    setErrorMessage(null);

    if (interactionCount === 0) {
      onFirstMessage();
    }

    setInteractionCount(prev => prev + 1);

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // ==========================================
    // 逻辑 A：匹配任务指令（展示筛选后的结构化对比）
    // ==========================================
    if (input === task.instruction) {
      const result = await getHotelRecommendation(input, task.products, task.instruction, task.objectCount);
      
      // 使用通用函数处理 candidates，强制锁定为 2 个
      const finalCandidates = processCandidatesToFixedCount(task.products, result?.candidates);

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `根据您的具体要求（${task.reminder}），我为您精选了 2 款最符合条件的方案。请查看以下详细参数对比：`,
        suggestedProducts: finalCandidates,
        isFullComparison: true
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
      return;
    }

    // ==========================================
    // 逻辑 B：匹配特定调试/拦截指令
    // ==========================================
    const specialTriggers: Record<string, string> = {
      "查看最优解": "根据实验设定，在这个任务中，最符合您所有要求的方案已经高亮显示。请重点关注该选项的性能参数。",
      "DEBUG": "系统当前处于调试模式，API 连接正常。请继续进行测试任务。",
      "你好": "您好！我是您的 AI 决策助手，我会帮您在多个选项中进行权衡分析。请告诉我您的需求。"
    };

    if (specialTriggers[input]) {
      await new Promise(resolve => setTimeout(resolve, 800));
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: specialTriggers[input]
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
      return;
    }

    // ==========================================
    // 逻辑 C：正常调用 Gemini API (普通对话模式)
    // ==========================================
    const result = await getHotelRecommendation(input, task.products, task.instruction, task.objectCount);
    
    // 修复点：即使是普通对话，也强制使用通用函数限制为 2 个
    const finalCandidates = processCandidatesToFixedCount(task.products, result?.candidates);
    
    if (result && !result.error) {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: result.analysis || "根据您的需求，以下是为您筛选的 2 个最佳选项：",
        suggestedProducts: finalCandidates,
        recommendationId: result.recommendationId,
        analysis: result.recommendationSlogan,
        isFullComparison: false
      };
      setMessages(prev => [...prev, aiMessage]);
    } else {
      let errorText = "抱歉，系统暂时无法响应，请稍后再试。";
      if (result?.error === "RATE_LIMIT_EXCEEDED") {
        errorText = "【系统繁忙】由于免费版 API 限制（每分钟 15 次），请等待约 10 秒后再尝试发送。";
      } else if (result?.error === "API_KEY_MISSING") {
        errorText = "【配置错误】API 密钥未生效，请检查环境变量设置。";
      }
      setErrorMessage(errorText);
    }
    
    setIsTyping(false);
  };

  return (
    <div className="flex flex-col h-full max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-5 text-white flex justify-between items-center shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </div>
          <div>
            <h1 className="text-lg font-bold text-white">AI 决策助手</h1>
            <p className="text-xs opacity-75">正在为您进行深度权衡对比</p>
          </div>
        </div>
        <div className="px-4 py-1.5 bg-white/20 rounded-full text-sm font-black backdrop-blur-md border border-white/10 text-white">
          {trialNumber} / {totalTrials}
        </div>
      </div>

      <div className="bg-blue-50 px-6 py-3 border-b border-blue-100">
        <p className="text-[11px] font-bold text-blue-400 uppercase tracking-widest mb-1">当前任务目标</p>
        <p className="text-sm text-blue-900 font-medium">{task.instruction}</p>
      </div>

      <div ref={scrollRef} className="flex-grow overflow-y-auto p-6 space-y-8 bg-gray-50/30">
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-4 opacity-60">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </div>
            <p className="text-sm max-w-xs">请告诉助手您的筛选标准，或直接发送任务指令以查看对比。</p>
          </div>
        )}

        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[95%] ${msg.role === 'user' ? 'bg-blue-600 text-white rounded-2xl rounded-tr-none' : 'bg-white border border-gray-100 rounded-2xl rounded-tl-none'} p-5 shadow-sm`}>
              <div className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</div>
              
              {/* 模式一：结构化全量对比视图（现已改为筛选后对比视图） */}
              {msg.isFullComparison && msg.suggestedProducts && (
                <div className="mt-8 space-y-12">
                  {msg.suggestedProducts.map((product, pIdx) => (
                    <div key={product.id} className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-500" style={{ animationDelay: `${pIdx * 150}ms` }}>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-black text-xs">
                          {pIdx + 1}
                        </div>
                        <h4 className="text-lg font-black text-gray-800">{product.name}</h4>
                      </div>
                      
                      <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-inner bg-gray-50">
                        <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-orange-50 p-3 rounded-xl border border-orange-100">
                          <p className="text-[10px] text-orange-400 font-bold uppercase tracking-wider mb-1">价格费用</p>
                          <p className="text-lg font-black text-orange-600">¥ {product.price}</p>
                        </div>
                        <div className="bg-blue-50 p-3 rounded-xl border border-blue-100">
                          <p className="text-[10px] text-blue-400 font-bold uppercase tracking-wider mb-1">用户评分</p>
                          <p className="text-lg font-black text-blue-600">{product.rating} / 5.0</p>
                        </div>
                      </div>

                      <div className="bg-white rounded-xl border border-gray-100 p-4 space-y-3">
                         <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest border-b border-gray-50 pb-2">详细参数列表</p>
                         <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                            {product.attributes.map((attr, aIdx) => (
                              <div key={aIdx} className="flex flex-col">
                                <span className="text-[10px] text-gray-400 font-medium">{attr.label}</span>
                                <span className="text-sm font-bold text-gray-700">{attr.value}</span>
                              </div>
                            ))}
                         </div>
                      </div>

                      <button 
                        onClick={() => onFinalSelection(product, interactionCount)}
                        className="w-full py-3 bg-gray-900 text-white rounded-xl font-bold text-sm hover:bg-black transition-all active:scale-[0.98] shadow-lg shadow-gray-200"
                      >
                        选择此方案作为最终结果
                      </button>

                      {pIdx < msg.suggestedProducts.length - 1 && (
                        <div className="flex justify-center py-4">
                          <div className="w-1 h-8 bg-gradient-to-b from-gray-200 to-transparent rounded-full"></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* 模式二：常规 AI 推荐视图 */}
              {!msg.isFullComparison && msg.suggestedProducts && msg.suggestedProducts.length > 0 && (
                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="h-px bg-gray-200 flex-grow"></div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">推荐方案</span>
                    <div className="h-px bg-gray-200 flex-grow"></div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {msg.suggestedProducts.map(product => (
                      <ProductCard 
                        key={product.id} 
                        product={product} 
                        isRecommended={product.id === msg.recommendationId}
                        onSelect={() => onFinalSelection(product, interactionCount)}
                      />
                    ))}
                  </div>
                  {msg.analysis && (
                    <div className="bg-orange-50 border border-orange-100 p-3 rounded-xl text-orange-800 text-xs font-medium italic">
                      “ {msg.analysis} ”
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white border border-gray-100 rounded-2xl rounded-tl-none p-4 shadow-sm flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"></span>
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
            </div>
          </div>
        )}

        {errorMessage && (
          <div className="flex justify-center animate-in fade-in slide-in-from-top-2">
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-xs font-bold flex items-center gap-2 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errorMessage}
            </div>
          </div>
        )}
      </div>

      <div className="p-6 bg-white border-t border-gray-100 shrink-0">
        <div className="flex gap-3 items-center">
          <input 
            type="text" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder={isTyping ? "助手正在整理资料..." : "输入需求或直接发送任务指令..."}
            disabled={isTyping}
            className="flex-grow p-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none text-sm transition-all shadow-inner disabled:opacity-50"
          />
          <button 
            onClick={handleSend}
            disabled={!inputValue.trim() || isTyping}
            className={`p-4 rounded-2xl transition-all ${
              !inputValue.trim() || isTyping ? 'bg-gray-100 text-gray-300' : 'bg-blue-600 text-white shadow-xl hover:bg-blue-700 active:scale-95'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
