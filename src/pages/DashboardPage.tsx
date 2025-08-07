import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  DollarSign,
  Clock,
  Target,
  BarChart3,
  PieChart,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart as RechartsPieChart,
  Cell,
} from "recharts";

const DashboardPage: React.FC = () => {
  const kpiData = [
    {
      title: "Potentiel de revenus",
      value: "2.4M€",
      change: "+18%",
      icon: TrendingUp,
      color: "blue",
      description: "Revenus supplémentaires identifiés",
    },
    {
      title: "ROI moyen",
      value: "340%",
      change: "+12%",
      icon: Target,
      color: "emerald",
      description: "Retour sur investissement prévu",
    },
    {
      title: "Économies identifiées",
      value: "680K€",
      change: "+25%",
      icon: DollarSign,
      color: "orange",
      description: "Coûts optimisables détectés",
    },
    {
      title: "Temps de retour",
      value: "8 mois",
      change: "-2 mois",
      icon: Clock,
      color: "purple",
      description: "Délai de rentabilité estimé",
    },
  ];

  const revenueData = [
    { name: "E-commerce", value: 850000, fill: "#3B82F6" },
    { name: "Services B2B", value: 620000, fill: "#10B981" },
    { name: "Consulting", value: 480000, fill: "#F59E0B" },
    { name: "Formation", value: 290000, fill: "#8B5CF6" },
    { name: "Partenariats", value: 160000, fill: "#EF4444" },
  ];

  const profitabilityData = [
    { month: "Jan", profit: 45000 },
    { month: "Fév", profit: 52000 },
    { month: "Mar", profit: 68000 },
    { month: "Avr", profit: 81000 },
    { month: "Mai", profit: 95000 },
    { month: "Juin", profit: 110000 },
    { month: "Juil", profit: 125000 },
    { month: "Août", profit: 140000 },
    { month: "Sep", profit: 158000 },
    { month: "Oct", profit: 175000 },
    { month: "Nov", profit: 195000 },
    { month: "Déc", profit: 220000 },
  ];

  const roiActions = [
    {
      action: "Optimisation SEO",
      roi: 450,
      complexity: "Faible",
      impact: "Fort",
    },
    {
      action: "Automatisation marketing",
      roi: 380,
      complexity: "Moyen",
      impact: "Fort",
    },
    {
      action: "Expansion géographique",
      roi: 320,
      complexity: "Élevé",
      impact: "Fort",
    },
    {
      action: "Diversification produit",
      roi: 280,
      complexity: "Élevé",
      impact: "Moyen",
    },
    {
      action: "Partenariats stratégiques",
      roi: 220,
      complexity: "Moyen",
      impact: "Moyen",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 bg-blue-50 text-blue-600 border-blue-200",
      emerald:
        "from-emerald-500 to-emerald-600 bg-emerald-50 text-emerald-600 border-emerald-200",
      orange:
        "from-orange-500 to-orange-600 bg-orange-50 text-orange-600 border-orange-200",
      purple:
        "from-purple-500 to-purple-600 bg-purple-50 text-purple-600 border-purple-200",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          Tableau de Bord Stratégique
        </h1>
        <p className="text-slate-600">
          Vue d'ensemble de vos opportunités de croissance
        </p>
      </motion.div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {kpiData.map((kpi, index) => {
          const Icon = kpi.icon;
          const colorClasses = getColorClasses(kpi.color);

          return (
            <motion.div
              key={kpi.title}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-xl p-6 shadow-lg shadow-slate-200/50 border ${colorClasses
                .split(" ")
                .slice(2)
                .join(" ")} hover:shadow-xl transition-all duration-300`}
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${colorClasses
                    .split(" ")
                    .slice(0, 2)
                    .join(" ")} flex items-center justify-center`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span
                  className={`text-sm font-medium px-2 py-1 rounded-full ${colorClasses
                    .split(" ")
                    .slice(2, 4)
                    .join(" ")}`}
                >
                  {kpi.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-1">
                {kpi.value}
              </h3>
              <p className="text-sm font-medium text-slate-900 mb-1">
                {kpi.title}
              </p>
              <p className="text-xs text-slate-500">{kpi.description}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Revenue Opportunities Chart */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl p-6 shadow-lg shadow-slate-200/50 border border-slate-200"
        >
          <div className="flex items-center space-x-2 mb-6">
            <PieChart className="w-5 h-5 text-blue-600" />
            <h3 className="text-lg font-semibold text-slate-900">
              Opportunités de Revenus
            </h3>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <RechartsPieChart>
              <RechartsPieChart data={revenueData}>
                {revenueData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </RechartsPieChart>
              <Tooltip
                formatter={(value: any) => [
                  `${(value / 1000).toFixed(0)}K€`,
                  "Potentiel",
                ]}
              />
            </RechartsPieChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {revenueData.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.fill }}
                ></div>
                <span className="text-sm text-slate-600">{item.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Profitability Projection */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-xl p-6 shadow-lg shadow-slate-200/50 border border-slate-200"
        >
          <div className="flex items-center space-x-2 mb-6">
            <BarChart3 className="w-5 h-5 text-emerald-600" />
            <h3 className="text-lg font-semibold text-slate-900">
              Projection de Profitabilité
            </h3>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={profitabilityData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
              <XAxis dataKey="month" stroke="#64748B" />
              <YAxis
                stroke="#64748B"
                tickFormatter={(value) => `${value / 1000}K`}
              />
              <Tooltip
                formatter={(value: any) => [
                  `${value.toLocaleString()}€`,
                  "Profit",
                ]}
              />
              <Bar
                dataKey="profit"
                fill="url(#profitGradient)"
                radius={[4, 4, 0, 0]}
              />
              <defs>
                <linearGradient id="profitGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.9} />
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0.6} />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* ROI Actions Table */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="bg-white rounded-xl p-6 shadow-lg shadow-slate-200/50 border border-slate-200"
      >
        <div className="flex items-center space-x-2 mb-6">
          <Target className="w-5 h-5 text-orange-600" />
          <h3 className="text-lg font-semibold text-slate-900">
            ROI par Action Stratégique
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 px-4 font-semibold text-slate-900">
                  Action
                </th>
                <th className="text-left py-3 px-4 font-semibold text-slate-900">
                  ROI
                </th>
                <th className="text-left py-3 px-4 font-semibold text-slate-900">
                  Complexité
                </th>
                <th className="text-left py-3 px-4 font-semibold text-slate-900">
                  Impact
                </th>
              </tr>
            </thead>
            <tbody>
              {roiActions.map((action, index) => (
                <motion.tr
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="border-b border-slate-100 hover:bg-slate-50 transition-colors duration-200"
                >
                  <td className="py-4 px-4">
                    <span className="font-medium text-slate-900">
                      {action.action}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="font-bold text-emerald-600">
                      {action.roi}%
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        action.complexity === "Faible"
                          ? "bg-green-100 text-green-700"
                          : action.complexity === "Moyen"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {action.complexity}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        action.impact === "Fort"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {action.impact}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DashboardPage;
