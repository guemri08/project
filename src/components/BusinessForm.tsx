import React, { useState } from "react";
import { motion } from "framer-motion";
import { Building2, Package, Target, ArrowRight } from "lucide-react";

interface BusinessFormProps {
  onSubmit: () => void;
}

const BusinessForm: React.FC<BusinessFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    companyName: "",
    product: "",
    sector: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const sectors = [
    "E-commerce",
    "SaaS / Software",
    "Consulting",
    "Manufacturing",
    "Financial Services",
    "Healthcare",
    "Education",
    "Real Estate",
    "Food Services",
    "Retail",
    "Other",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.companyName || !formData.product || !formData.sector) return;

    setIsSubmitting(true);
    // Simulate form processing
    await new Promise((resolve) => setTimeout(resolve, 1000));
    onSubmit();
  };

  const isValid = formData.companyName && formData.product && formData.sector;

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200/50 overflow-hidden"
    >
      <div className="bg-gradient-to-r from-blue-50 to-emerald-50 px-8 py-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">
          Let's analyze your business
        </h2>
        <p className="text-slate-600">
          A few details to personalize your analysis
        </p>
      </div>

      <form onSubmit={handleSubmit} className="p-8 space-y-6">
        <div>
          <label className="flex items-center space-x-2 text-sm font-medium text-slate-700 mb-3">
            <Building2 className="w-4 h-4" />
            <span>Company name</span>
          </label>
          <input
            type="text"
            value={formData.companyName}
            onChange={(e) =>
              setFormData({ ...formData, companyName: e.target.value })
            }
            placeholder="e.g. TechCorp Solutions"
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-slate-400"
            required
          />
        </div>

        <div>
          <label className="flex items-center space-x-2 text-sm font-medium text-slate-700 mb-3">
            <Package className="w-4 h-4" />
            <span>Main product or service</span>
          </label>
          <input
            type="text"
            value={formData.product}
            onChange={(e) =>
              setFormData({ ...formData, product: e.target.value })
            }
            placeholder="e.g. CRM management platform"
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-slate-400"
            required
          />
        </div>

        <div>
          <label className="flex items-center space-x-2 text-sm font-medium text-slate-700 mb-3">
            <Target className="w-4 h-4" />
            <span>Industry sector</span>
          </label>
          <input
            type="text"
            value={formData.sector}
            onChange={(e) =>
              setFormData({ ...formData, sector: e.target.value })
            }
            placeholder="e.g. Banking & Finance sector"
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-slate-400"
            required
          />
        </div>

        <motion.button
          type="submit"
          disabled={!isValid || isSubmitting}
          whileHover={isValid ? { scale: 1.02 } : {}}
          whileTap={isValid ? { scale: 0.98 } : {}}
          className={`w-full py-4 rounded-lg font-medium text-white transition-all duration-200 flex items-center justify-center space-x-2 ${
            isValid && !isSubmitting
              ? "bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 shadow-lg shadow-blue-500/25"
              : "bg-slate-300 cursor-not-allowed"
          }`}
        >
          {isSubmitting ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <>
              <span>Start analysis</span>
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default BusinessForm;
