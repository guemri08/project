import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot, User, ArrowRight } from "lucide-react";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface ChatbotProps {
  onComplete: () => void;
}

const Chatbot: React.FC<ChatbotProps> = ({ onComplete }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm here to help you define your business idea. To get started, can you tell me a bit about your project?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const botResponses = [
    "Great idea! What would be the name of your future company?",
    "Perfect! Which industry would you like to position yourself in?",
    "Very interesting! Who is your target audience? Describe your ideal customers.",
    "Thanks for the valuable information! I now have everything I need to analyze your project. We can launch the strategic analysis.",
  ];

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    await new Promise((resolve) =>
      setTimeout(resolve, 1000 + Math.random() * 1000)
    );

    setIsTyping(false);

    if (currentStep <= botResponses.length) {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponses[currentStep - 1],
        isBot: true,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);

      if (currentStep === botResponses.length) {
        setIsComplete(true);
      } else {
        setCurrentStep((prev) => prev + 1);
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200/50 overflow-hidden h-[700px] flex flex-col"
    >
      <div className="bg-gradient-to-r from-blue-50 to-emerald-50 px-6 py-4 border-b border-slate-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full flex items-center justify-center">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">
              OPPORTUNA Assistant
            </h3>
            <p className="text-sm text-slate-600">
              {isComplete
                ? "Analysis ready to launch"
                : `Step ${currentStep}/4`}
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className={`flex ${
                message.isBot ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className={`flex items-start space-x-2 max-w-[80%] ${
                  message.isBot
                    ? "flex-row"
                    : "flex-row-reverse space-x-reverse"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.isBot
                      ? "bg-gradient-to-r from-blue-600 to-emerald-600"
                      : "bg-slate-600"
                  }`}
                >
                  {message.isBot ? (
                    <Bot className="w-4 h-4 text-white" />
                  ) : (
                    <User className="w-4 h-4 text-white" />
                  )}
                </div>
                <div
                  className={`rounded-2xl px-4 py-3 ${
                    message.isBot
                      ? "bg-slate-100 text-slate-900"
                      : "bg-gradient-to-r from-blue-600 to-emerald-600 text-white"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {isTyping && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex justify-start"
          >
            <div className="flex items-start space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-emerald-600 flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div className="bg-slate-100 rounded-2xl px-4 py-3">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {isComplete ? (
        <div className="p-6 border-t border-slate-200">
          <motion.button
            onClick={onComplete}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-lg font-medium flex items-center justify-center space-x-2 shadow-lg shadow-blue-500/25 hover:from-blue-700 hover:to-emerald-700 transition-all duration-200"
          >
            <span>Submit for analysis</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      ) : (
        <div className="p-6 border-t border-slate-200">
          <div className="flex space-x-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your response..."
              disabled={isTyping}
              className="flex-1 px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-400"
            />
            <motion.button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isTyping}
              whileHover={inputValue.trim() && !isTyping ? { scale: 1.05 } : {}}
              whileTap={inputValue.trim() && !isTyping ? { scale: 0.95 } : {}}
              className={`px-4 py-3 rounded-lg transition-all duration-200 ${
                inputValue.trim() && !isTyping
                  ? "bg-gradient-to-r from-blue-600 to-emerald-600 text-white shadow-lg shadow-blue-500/25 hover:from-blue-700 hover:to-emerald-700"
                  : "bg-slate-200 text-slate-400 cursor-not-allowed"
              }`}
            >
              <Send className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Chatbot;
