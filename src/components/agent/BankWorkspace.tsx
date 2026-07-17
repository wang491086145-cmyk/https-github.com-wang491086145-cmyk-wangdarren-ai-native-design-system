import React, { useState } from 'react';
import { 
  BANK_TASKS_MOCK, 
  BANK_CUSTOMERS_MOCK 
} from '../../data/mockData';
import { BankTask, BankCustomer } from '../../types';
import { 
  Building2, 
  TrendingDown, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle2, 
  MessageSquare, 
  Phone, 
  Copy, 
  Save, 
  Users, 
  Check, 
  ListFilter, 
  Activity, 
  ShieldAlert, 
  DollarSign, 
  Calendar, 
  ArrowRight,
  Sparkles,
  RefreshCw,
  Bell
} from 'lucide-react';

export default function BankWorkspace() {
  const [tasks, setTasks] = useState<BankTask[]>(BANK_TASKS_MOCK);
  const [activeTaskId, setActiveTaskId] = useState<string>(BANK_TASKS_MOCK[0].id);
  const [filterType, setFilterType] = useState<string>('all');
  const [editedScript, setEditedScript] = useState<string>(BANK_TASKS_MOCK[0].speechScript);
  const [crmStatus, setCrmStatus] = useState<Record<string, 'idle' | 'success'>>({});
  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  const activeTask = tasks.find(t => t.id === activeTaskId) || tasks[0];
  const activeCustomer: BankCustomer = BANK_CUSTOMERS_MOCK[activeTask.customerName] || BANK_CUSTOMERS_MOCK['David Zhang'];

  const handleSelectTask = (task: BankTask) => {
    setActiveTaskId(task.id);
    setEditedScript(task.speechScript);
    // clear alert
    setAlertMessage(null);
  };

  const handleCopyScript = () => {
    navigator.clipboard.writeText(editedScript);
    triggerAlert('✓ Speech script successfully copied to clipboard! Ready to contact client.');
  };

  const triggerAlert = (msg: string) => {
    setAlertMessage(msg);
    setTimeout(() => {
      setAlertMessage(null);
    }, 4000);
  };

  const handleLogToCrm = (taskId: string) => {
    setCrmStatus(prev => ({ ...prev, [taskId]: 'success' }));
    triggerAlert(`✓ Communication logged successfully! Synchronized with core CRM system. [Client: ${activeTask.customerName}, Type: ${activeTask.title}]`);
  };

  const handleToggleComplete = (taskId: string) => {
    setTasks(prev => 
      prev.map(t => t.id === taskId ? { ...t, status: t.status === 'completed' ? 'pending' : 'completed' } : t)
    );
    const updatedTask = tasks.find(t => t.id === taskId);
    if (updatedTask) {
      const nextStatus = updatedTask.status === 'pending' ? 'Completed' : 'Pending';
      triggerAlert(`Task marked as: ${nextStatus}`);
    }
  };

  const filteredTasks = tasks.filter(t => {
    if (filterType === 'all') return true;
    if (filterType === 'high') return t.priority === 'High';
    if (filterType === 'risk') return t.type === 'loan' || t.type === 'postloan' || t.type === 'followup';
    if (filterType === 'opportunity') return t.type === 'finance' || t.type === 'salon';
    return true;
  });

  const getTaskIcon = (type: BankTask['type']) => {
    switch (type) {
      case 'followup':
        return <TrendingDown className="h-5 w-5 text-rose-500" />;
      case 'finance':
        return <TrendingUp className="h-5 w-5 text-emerald-500" />;
      case 'loan':
      case 'postloan':
        return <ShieldAlert className="h-5 w-5 text-amber-500" />;
      case 'salon':
        return <Users className="h-5 w-5 text-indigo-500" />;
      default:
        return <Activity className="h-5 w-5 text-blue-500" />;
    }
  };

  const getPriorityBadge = (priority: BankTask['priority']) => {
    switch (priority) {
      case 'High':
        return <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-100">High Priority</span>;
      case 'Medium':
        return <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-100">Medium Priority</span>;
      case 'Low':
        return <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100">Standard Follow-up</span>;
      default:
        return null;
    }
  };

  return (
    <div id="bank-workspace-container" className="w-full bg-[#F6F8FB] text-slate-800 p-6 min-h-screen font-sans">
      {/* Upper Alerts Banner */}
      {alertMessage && (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 bg-slate-900/90 text-white text-sm font-medium rounded-2xl shadow-xl backdrop-blur-md border border-white/10 flex items-center gap-2 transition-all duration-300">
          <Sparkles className="h-4 w-4 text-amber-400 animate-pulse" />
          <span>{alertMessage}</span>
        </div>
      )}

      {/* 1. Header Row - Apple Glass-style */}
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between p-6 bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl shadow-sm">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-blue-600 text-white rounded-2xl shadow-md shadow-blue-500/10">
            <Building2 className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold text-slate-900 font-sans tracking-tight">RM Assistant · Smart Wealth Portal</h1>
              <span className="inline-flex items-center px-2 py-0.5 text-xs font-semibold bg-emerald-100 text-emerald-800 rounded-lg">
                <Sparkles className="h-3 w-3 mr-1 animate-pulse" /> AI Agent Live
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Branch: Silicon Valley Premier Branch · Relationship Manager: David Zhang ｜ Target Quota Progress: 87.5%
            </p>
          </div>
        </div>
        <div className="mt-4 md:mt-0 flex items-center gap-3">
          <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
            <Calendar className="h-3.5 w-3.5" /> Thursday, July 16, 2026
          </span>
          <div className="h-4 w-[1px] bg-slate-200"></div>
          <button 
            onClick={() => {
              setTasks(BANK_TASKS_MOCK);
              setCrmStatus({});
              triggerAlert('Successfully reset all demo data and simulation states.');
            }}
            className="p-2 hover:bg-slate-100 rounded-xl transition text-slate-500 flex items-center gap-1 text-xs font-medium"
            title="Reset simulation"
          >
            <RefreshCw className="h-3.5 w-3.5" /> Reset Data
          </button>
        </div>
      </div>

      {/* 2. Today Overview Metrics Grid - Bento Row */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
        <div className="p-5 bg-white/70 backdrop-blur-xl border border-white/40 rounded-2xl shadow-sm hover:shadow-md transition duration-300">
          <div className="text-slate-400 text-xs font-medium flex items-center justify-between">
            <span>Key Clients Today</span>
            <Users className="h-4 w-4 text-blue-500" />
          </div>
          <div className="mt-2 text-2xl font-bold text-slate-900 tracking-tight font-sans">
            4 <span className="text-sm font-normal text-slate-500">Clients</span>
          </div>
          <div className="text-[10px] text-emerald-600 font-semibold mt-1 flex items-center gap-1">
            <TrendingUp className="h-3 w-3" /> All scripts customized
          </div>
        </div>

        <div className="p-5 bg-white/70 backdrop-blur-xl border border-white/40 rounded-2xl shadow-sm hover:shadow-md transition duration-300">
          <div className="text-slate-400 text-xs font-medium flex items-center justify-between">
            <span>Pending High-Priority Tasks</span>
            <Bell className="h-4 w-4 text-rose-500 animate-bounce" />
          </div>
          <div className="mt-2 text-2xl font-bold text-slate-900 tracking-tight font-sans">
            {tasks.filter(t => t.priority === 'High' && t.status === 'pending').length} / {tasks.filter(t => t.priority === 'High').length}
          </div>
          <div className="text-[10px] text-rose-500 font-semibold mt-1">
            Mortgage delinquency & churn risks
          </div>
        </div>

        <div className="p-5 bg-white/70 backdrop-blur-xl border border-white/40 rounded-2xl shadow-sm hover:shadow-md transition duration-300">
          <div className="text-slate-400 text-xs font-medium flex items-center justify-between">
            <span>AUM Churn Warn Volume</span>
            <TrendingDown className="h-4 w-4 text-rose-500" />
          </div>
          <div className="mt-2 text-2xl font-bold text-slate-900 tracking-tight font-sans">
            $220,000
          </div>
          <div className="text-[10px] text-slate-500 mt-1">
            David Zhang's liquid cash sudden drop
          </div>
        </div>

        <div className="p-5 bg-white/70 backdrop-blur-xl border border-white/40 rounded-2xl shadow-sm hover:shadow-md transition duration-300">
          <div className="text-slate-400 text-xs font-medium flex items-center justify-between">
            <span>Maturing Reinvestment Leads</span>
            <DollarSign className="h-4 w-4 text-emerald-500" />
          </div>
          <div className="mt-2 text-2xl font-bold text-slate-900 tracking-tight font-sans">
            $500,000
          </div>
          <div className="text-[10px] text-emerald-600 font-semibold mt-1">
            Concentrated maturity in 3 days
          </div>
        </div>

        <div className="p-5 bg-blue-600 text-white rounded-2xl shadow-lg shadow-blue-500/10 flex flex-col justify-between">
          <div>
            <div className="text-blue-100 text-xs font-medium flex items-center justify-between">
              <span>Estimated Target Conversion Value</span>
              <Sparkles className="h-4 w-4 text-amber-300" />
            </div>
            <div className="mt-2 text-2xl font-bold tracking-tight">
              $1.2M <span className="text-xs font-normal text-blue-200">Est. AUM</span>
            </div>
          </div>
          <div className="text-[10px] text-blue-100 font-semibold mt-2">
            Core CRM tracking active
          </div>
        </div>
      </div>

      {/* 3. Main Split Workspace (Left: Worklist, Middle: Customer Details, Right: AI Agent Advice) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Actionable Feed (4 cols) */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <div className="bg-white/70 backdrop-blur-xl border border-white/40 p-4 rounded-3xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                <ListFilter className="h-4 w-4 text-blue-600" /> Smart Operational Tasks
              </h2>
              <span className="text-[10px] bg-blue-50 text-blue-800 px-2 py-0.5 rounded-full font-bold">
                {filteredTasks.length} Items
              </span>
            </div>

            {/* Filter buttons */}
            <div className="grid grid-cols-4 gap-1 p-1 bg-slate-100 rounded-xl mb-4">
              <button 
                onClick={() => setFilterType('all')}
                className={`py-1.5 text-[10px] font-semibold rounded-lg transition-all ${filterType === 'all' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
              >
                All
              </button>
              <button 
                onClick={() => setFilterType('high')}
                className={`py-1.5 text-[10px] font-semibold rounded-lg transition-all ${filterType === 'high' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
              >
                High
              </button>
              <button 
                onClick={() => setFilterType('risk')}
                className={`py-1.5 text-[10px] font-semibold rounded-lg transition-all ${filterType === 'risk' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
              >
                Risk
              </button>
              <button 
                onClick={() => setFilterType('opportunity')}
                className={`py-1.5 text-[10px] font-semibold rounded-lg transition-all ${filterType === 'opportunity' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
              >
                Leads
              </button>
            </div>

            {/* Feed Cards */}
            <div className="flex flex-col gap-3 max-h-[480px] overflow-y-auto pr-1">
              {filteredTasks.map((task) => {
                const isActive = task.id === activeTaskId;
                const isCompleted = task.status === 'completed';
                return (
                  <div
                    key={task.id}
                    onClick={() => handleSelectTask(task)}
                    className={`p-4 rounded-2xl border text-left cursor-pointer transition-all duration-200 group relative ${
                      isActive 
                        ? 'bg-blue-50/50 border-blue-500 shadow-sm' 
                        : 'bg-white border-slate-100 hover:border-slate-300'
                    }`}
                  >
                    {isCompleted && (
                      <div className="absolute top-3 right-3 text-emerald-500">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                    )}
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`p-1.5 rounded-lg ${isActive ? 'bg-blue-100' : 'bg-slate-100'}`}>
                        {getTaskIcon(task.type)}
                      </div>
                      <span className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition">
                        {task.customerName}
                      </span>
                      <div className="ml-auto flex items-center gap-1.5">
                        {getPriorityBadge(task.priority)}
                      </div>
                    </div>
                    <h3 className={`text-xs font-bold leading-relaxed mb-2 ${isCompleted ? 'text-slate-400 line-through' : 'text-slate-800'}`}>
                      {task.title}
                    </h3>
                    <div className="flex items-center justify-between text-[10px] text-slate-400 mt-1">
                      <span className="flex items-center gap-1">
                        AUM Change: <strong className={task.aumChange?.startsWith('-') ? 'text-rose-500' : 'text-emerald-500'}>{task.aumChange || 'N/A'}</strong>
                      </span>
                      <span>Due: {task.dueDate}</span>
                    </div>
                  </div>
                );
              })}
              {filteredTasks.length === 0 && (
                <div className="py-12 text-center text-slate-400 text-xs">
                  No tasks match the selected type
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Middle Column: Focused Client Detailed Profile (4 cols) */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <div className="bg-white/70 backdrop-blur-xl border border-white/40 p-5 rounded-3xl shadow-sm text-left">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
              <div>
                <h2 className="text-sm font-bold text-slate-900">Key Client Profile</h2>
                <p className="text-[10px] text-slate-400 mt-0.5">Multi-dimensional profile & holding analysis</p>
              </div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-100">
                {activeCustomer.level}
              </span>
            </div>

            {/* Core Info Row */}
            <div className="flex items-center gap-4 mb-4">
              <div className="h-12 w-12 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 font-bold text-base">
                {activeCustomer.name.charAt(0)}
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">{activeCustomer.name}</h3>
                <p className="text-xs text-slate-400">Risk Appetite: <strong className="text-blue-600">{activeCustomer.riskPreference}</strong></p>
              </div>
            </div>

            {/* Assets details */}
            <div className="bg-slate-50/70 border border-slate-100 p-4 rounded-2xl mb-4">
              <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-3">Asset Allocation</h4>
              <div className="grid grid-cols-2 gap-3 mb-1">
                <div>
                  <div className="text-[10px] text-slate-400">Current AUM at Bank</div>
                  <div className="text-sm font-bold text-slate-900 mt-0.5">{activeCustomer.aum}</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400">Total Loan Balance</div>
                  <div className="text-sm font-bold text-slate-900 mt-0.5">{activeCustomer.loanBalance}</div>
                </div>
              </div>
            </div>

            {/* Life Stage */}
            <div className="mb-4">
              <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">Client Life Stage</h4>
              <p className="text-xs leading-relaxed text-slate-600 bg-blue-50/20 p-3 rounded-xl border border-blue-500/10">
                {activeCustomer.lifeStage}
              </p>
            </div>

            {/* Customer Tags */}
            <div className="mb-4">
              <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">Key Account Tags</h4>
              <div className="flex flex-wrap gap-1.5">
                {activeCustomer.tags.map((tag, idx) => (
                  <span 
                    key={idx}
                    className="inline-block px-2 py-1 text-[10px] font-medium bg-white border border-slate-200 rounded-lg text-slate-600"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Realtime Activity Logs */}
            <div className="mb-4">
              <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1">
                <Activity className="h-3 w-3 text-slate-400 animate-pulse" /> Recent Activity & Behavioral Logs
              </h4>
              <p className="text-xs leading-relaxed text-slate-500 font-mono bg-slate-50 p-3 rounded-xl border border-slate-100">
                {activeCustomer.recentActivity}
              </p>
            </div>

            {/* Growth opportunities */}
            <div>
              <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5 text-emerald-600">Conversion Opportunity</h4>
              <p className="text-xs leading-relaxed text-slate-600">
                {activeCustomer.growthOpportunity}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: AI Agent Recommendations Panel (4 cols) */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <div className="bg-white/70 backdrop-blur-xl border border-white/40 p-5 rounded-3xl shadow-sm text-left relative overflow-hidden">
            {/* Ambient subtle glow */}
            <div className="absolute top-0 right-0 h-24 w-24 bg-blue-500/5 rounded-full blur-2xl"></div>

            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-blue-50 text-blue-600 rounded-xl">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-slate-900">AI Agent Copilot Suggestions</h2>
                  <p className="text-[10px] text-slate-400 mt-0.5">Real-time contextual recommendations</p>
                </div>
              </div>
            </div>

            {/* Trigger event */}
            <div className="p-3 bg-rose-50/30 border border-rose-500/10 rounded-2xl mb-4 text-xs leading-normal">
              <div className="font-bold text-rose-800 mb-1 flex items-center gap-1">
                <AlertTriangle className="h-3.5 w-3.5" /> Trigger Event Signal
              </div>
              <p className="text-slate-600 text-xs leading-relaxed">{activeTask.triggerReason}</p>
            </div>

            {/* Agent advice reason */}
            <div className="mb-4">
              <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Agent Context Analysis</h4>
              <p className="text-xs leading-relaxed text-slate-600">{activeTask.agentAnalysis}</p>
            </div>

            {/* Recommended action & product */}
            <div className="mb-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">Action Plan & Product Match</h4>
              <p className="text-xs leading-relaxed text-slate-700 mb-3">{activeTask.agentAdvice}</p>
              
              {activeTask.productName && (
                <div className="flex items-center justify-between p-2 bg-white rounded-xl border border-slate-200/60 shadow-sm">
                  <div>
                    <div className="text-[10px] text-slate-400">Matched Product</div>
                    <div className="text-xs font-bold text-slate-900">{activeTask.productName}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-slate-400">Target Yield / Benefit</div>
                    <div className="text-xs font-bold text-emerald-600">{activeTask.productExpectedYield}</div>
                  </div>
                </div>
              )}
            </div>

            {/* Editable Script section */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-1.5">
                <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Smart Touchpoint Script (Editable)</h4>
                <button 
                  onClick={handleCopyScript}
                  className="text-[10px] font-bold text-blue-600 hover:text-blue-800 flex items-center gap-0.5"
                >
                  <Copy className="h-3 w-3" /> Copy Script
                </button>
              </div>
              <textarea
                value={editedScript}
                onChange={(e) => setEditedScript(e.target.value)}
                rows={4}
                className="w-full p-3 text-xs bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-1 focus:ring-blue-500 font-sans leading-relaxed text-slate-700 resize-none shadow-inner"
              />
            </div>

            {/* High contrast compliance warning */}
            <div className="mb-5 p-3.5 bg-amber-50 border border-amber-200 rounded-2xl text-amber-900 text-[11px] leading-normal">
              <div className="font-bold mb-1 flex items-center gap-1 text-amber-800">
                <ShieldAlert className="h-4 w-4" /> Compliance Boundary & Advisory Warnings
              </div>
              <p className="text-amber-800/90 leading-relaxed font-sans">{activeTask.complianceWarning}</p>
            </div>

            {/* Action buttons with feedback */}
            <div className="flex flex-col gap-2">
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => handleLogToCrm(activeTask.id)}
                  disabled={crmStatus[activeTask.id] === 'success'}
                  className={`py-2.5 px-4 text-xs font-semibold rounded-2xl transition duration-200 flex items-center justify-center gap-1.5 shadow-sm border ${
                    crmStatus[activeTask.id] === 'success'
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-100 cursor-not-allowed'
                      : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
                  }`}
                >
                  {crmStatus[activeTask.id] === 'success' ? (
                    <>
                      <Check className="h-4 w-4 text-emerald-600" /> Logged to CRM
                    </>
                  ) : (
                    <>
                      <Save className="h-4 w-4 text-slate-500" /> Log to CRM
                    </>
                  )}
                </button>

                <button
                  onClick={() => handleToggleComplete(activeTask.id)}
                  className={`py-2.5 px-4 text-xs font-semibold rounded-2xl transition duration-200 flex items-center justify-center gap-1.5 shadow-sm border ${
                    activeTask.status === 'completed'
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-100 hover:bg-emerald-100/50'
                      : 'bg-slate-900 hover:bg-slate-800 border-transparent text-white'
                  }`}
                >
                  <CheckCircle2 className="h-4 w-4" />
                  {activeTask.status === 'completed' ? 'Reopen Task' : 'Mark Completed'}
                </button>
              </div>

              <div className="text-[10px] text-slate-400 text-center mt-1">
                Once executed, transaction logs and speech scripts will sync back to Core CRM and close out the ticket.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
