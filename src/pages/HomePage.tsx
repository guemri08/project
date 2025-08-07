import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MessageSquare, Building2, ArrowRight, Sparkles } from "lucide-react";
import BusinessForm from "../components/BusinessForm";
import Chatbot from "../components/Chatbot";

const HomePage: React.FC = () => {
  const [mode, setMode] = useState<"form" | "chat">("form");
  const navigate = useNavigate();

  const handleAnalysisStart = () => {
    navigate("/analysis");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-[calc(100vh-4rem)] flex flex-col"
    >
      {/* Hero Section */}
      <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                OPPORTUNA
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 mb-4 max-w-3xl mx-auto leading-relaxed">
              Identify your growth opportunities and close performance gaps
            </p>
            <p className="text-base text-slate-500 max-w-2xl mx-auto">
              Our intelligent assistant analyzes your market, identifies your
              competition, and generates tailored strategic recommendations
            </p>
          </motion.div>

          {/* Mode Selector */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-8"
          >
            <div className="flex justify-center">
              <div className="bg-white rounded-full p-1 shadow-lg border border-slate-200">
                <button
                  onClick={() => setMode("form")}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    mode === "form"
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <Building2 className="w-4 h-4" />
                  <span>My business already exists</span>
                </button>
                <button
                  onClick={() => setMode("chat")}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    mode === "chat"
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Project in creation</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            key={mode}
            initial={{ x: mode === "form" ? -20 : 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="max-w-2xl mx-auto"
          >
            {mode === "form" ? (
              <BusinessForm onSubmit={handleAnalysisStart} />
            ) : (
              <Chatbot onComplete={handleAnalysisStart} />
            )}
          </motion.div>
        </div>
      </div>

      {/* Features Preview */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="border-t border-slate-200/50 bg-white/50 py-8 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <ArrowRight className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">
                Automatic Analysis
              </h3>
              <p className="text-sm text-slate-600">
                Competitor identification and real-time market analysis
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Sparkles className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">
                Strategic AI
              </h3>
              <p className="text-sm text-slate-600">
                Personalized recommendations based on your business data
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Building2 className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">360° Vision</h3>
              <p className="text-sm text-slate-600">
                Complete mapping of regional opportunities
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HomePage;
