import { useState } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { cn } from "../lib/utils";
import Markdown from 'react-markdown';

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm your RajivGandhiSMS assistant. How can I help you today?", isBot: true }
  ]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;
    
    // Add user message
    const newMsg = { id: Date.now(), text: input, isBot: false };
    const updatedMessages = [...messages, newMsg];
    setMessages(updatedMessages);
    setInput("");
    
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: updatedMessages }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to get response');
      }
      
      const data = await response.json();
      
      setMessages(prev => [
        ...prev, 
        { id: Date.now(), text: data.text, isBot: true }
      ]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [
        ...prev, 
        { id: Date.now(), text: "I'm sorry, I couldn't reach the server right now. Please try again later.", isBot: true }
      ]);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-6 right-6 w-14 h-14 bg-brand text-white rounded-full flex items-center justify-center shadow-lg shadow-brand/30 hover:bg-brand/90 transition-all z-50 hover:scale-105 active:scale-95",
          isOpen ? "scale-0 opacity-0 pointer-events-none" : "scale-100 opacity-100"
        )}
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      <div 
        className={cn(
          "fixed bottom-6 right-6 w-[350px] sm:w-[380px] bg-white rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] border border-border/60 flex flex-col z-50 overflow-hidden transition-all duration-300 origin-bottom-right",
          isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-50 opacity-0 translate-y-10 pointer-events-none"
        )}
        style={{ height: 'min(600px, calc(100vh - 100px))' }}
      >
        {/* Header */}
        <div className="bg-brand px-5 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-white text-[15px] leading-tight">SMS Assistant</span>
              <span className="text-white/70 text-[11px] font-medium">Online</span>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Messages Body */}
        <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-4 bg-gray-50/50">
          {messages.map((msg) => (
            <div key={msg.id} className={cn("flex w-full", msg.isBot ? "justify-start" : "justify-end")}>
              <div className={cn(
                "max-w-[85%] rounded-2xl px-4 py-3 text-[13px] leading-relaxed relative",
                msg.isBot 
                  ? "bg-white border border-border/60 text-gray-800 rounded-tl-sm shadow-sm" 
                  : "bg-brand text-white rounded-tr-sm shadow-sm shadow-brand/10"
              )}>
                {msg.isBot ? (
                  <div className="prose prose-sm max-w-none prose-p:leading-relaxed prose-pre:bg-gray-100 prose-pre:text-gray-800">
                    <Markdown>{msg.text}</Markdown>
                  </div>
                ) : (
                  msg.text
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-border/60 shrink-0">
          <div className="flex items-center gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask anything about school data..." 
              className="flex-1 bg-surface border border-border rounded-full py-3 px-4 text-[13px] outline-none placeholder:text-gray-400 focus:border-brand/40 transition-colors"
            />
            <button 
              onClick={handleSend}
              disabled={!input.trim()}
              className="w-11 h-11 bg-brand text-white rounded-full flex items-center justify-center hover:bg-brand/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
            >
              <Send className="w-4 h-4 ml-0.5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
