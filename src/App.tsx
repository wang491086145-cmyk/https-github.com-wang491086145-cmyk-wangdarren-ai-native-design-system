import React, { useState, useEffect } from 'react';
import { 
  PRESETS, 
  BANKING_RM_PIPELINE, 
  SAAS_ANALYTICS_PIPELINE, 
  ECOMMERCE_CHECKOUT_PIPELINE 
} from './data/mockData';
import { PresetId } from './types';
import BankWorkspace from './components/agent/BankWorkspace';
import PresetShowcase from './components/cards/PresetShowcase';
import { 
  Sparkles, 
  Terminal, 
  Sliders, 
  ShieldCheck, 
  Layers, 
  Settings, 
  Play, 
  CheckCircle, 
  Copy, 
  FileText, 
  Check, 
  Eye, 
  Code2, 
  ArrowRight, 
  Search, 
  HelpCircle, 
  Info, 
  FileCode, 
  Menu, 
  Activity, 
  Flame, 
  Layout, 
  Heart, 
  Award,
  BookOpen,
  ArrowUpRight,
  RefreshCw,
  AlertTriangle
} from 'lucide-react';

export default function App() {
  const [activePresetId, setActivePresetId] = useState<PresetId>('banking_rm');
  const [activeTab, setActiveTab] = useState<'workspace' | 'tokens' | 'reviewer' | 'architecture'>('workspace');
  const [activeStep, setActiveStep] = useState<number>(4); // Default on Step 5: Code & Preview (index 4)
  const [copiedText, setCopiedText] = useState<string | null>(null);
  
  // Custom compliance reviewer states
  const [customCode, setCustomCode] = useState<string>(
    `<div className="p-3 bg-yellow-100 text-[#8E8E93] rounded-md">\n  <span>⚠️ Warning: Account balance critically low!</span>\n</div>`
  );
  const [reviewResult, setReviewResult] = useState<any[] | null>(null);
  const [isReviewing, setIsReviewing] = useState<boolean>(false);
  const [selectedLayerId, setSelectedLayerId] = useState<string>('frontend');

  // Custom Requirement text editor
  const activePreset = PRESETS.find(p => p.id === activePresetId) || PRESETS[0];
  const [requirementInput, setRequirementInput] = useState<string>(activePreset.requirementText);

  // Update input text when switching presets
  useEffect(() => {
    setRequirementInput(activePreset.requirementText);
  }, [activePresetId]);

  // Retrieve current pipeline data based on preset
  const getPipelineData = () => {
    switch (activePresetId) {
      case 'banking_rm':
        return BANKING_RM_PIPELINE;
      case 'saas_analytics':
        return SAAS_ANALYTICS_PIPELINE;
      case 'ecommerce_checkout':
        return ECOMMERCE_CHECKOUT_PIPELINE;
      default:
        return BANKING_RM_PIPELINE;
    }
  };

  const pipeline = getPipelineData();

  const handleCopyText = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 3000);
  };

  const handleAnalyzeCustomCode = () => {
    setIsReviewing(true);
    setReviewResult(null);
    setTimeout(() => {
      setIsReviewing(false);
      setReviewResult([
        {
          id: 'custom_1',
          category: 'accessibility',
          severity: 'error',
          target: 'Background color vs Text color contrast',
          message: 'The contrast between the yellow background (#FEF3C7) and the grey text (#8E8E93) is 2.3:1, which fails the WCAG AA minimum requirement of 4.5:1 for normal text.',
          recommendation: 'Replace text color with dark brown (#78350F) or use a high-contrast theme token.',
          codeSuggestion: 'className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 font-medium"'
        },
        {
          id: 'custom_2',
          category: 'consistency',
          severity: 'warning',
          target: 'Outer border-radius token',
          message: 'Border radius is set to "rounded-md" (6px), which violates the AI-Native Design System standards. Standard containers must use rounded-2xl or rounded-3xl to enforce glassmorphism visual unity.',
          recommendation: 'Change "rounded-md" to "rounded-2xl" (16px) or "rounded-3xl" (24px).',
          codeSuggestion: 'className="rounded-2xl shadow-sm border border-slate-100"'
        }
      ]);
    }, 1500);
  };

  // Stepper steps definition
  const STEPS = [
    { title: 'Analysis', desc: 'AI Req Breakdown' },
    { title: 'Information IA', desc: 'Sitemap Hierarchy' },
    { title: 'Design Mapping', desc: 'Tokens & Components' },
    { title: 'UI Spec', desc: 'JSON Structure' },
    { title: 'Code & Preview', desc: 'Interactive Sandbox' },
    { title: 'Design Review', desc: 'Compliance Audit' }
  ];

  return (
    <div id="main-root-container" className="min-h-screen bg-[#F6F8FB] text-slate-800 font-sans selection:bg-blue-600/10 selection:text-blue-600">
      
      {/* 1. Header Banner - Apple Style */}
      <header className="sticky top-0 z-40 w-full bg-white/70 backdrop-blur-md border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 bg-slate-900 text-white rounded-xl flex items-center justify-center font-bold text-sm shadow-md shadow-slate-950/10">
              <Layers className="h-5 w-5" />
            </div>
            <div>
              <span className="font-bold text-slate-900 tracking-tight text-sm flex items-center gap-1.5">
                Apex Agentic UI <span className="text-[10px] bg-indigo-600 text-white px-1.5 py-0.5 rounded font-mono font-medium">v1.3.0</span>
              </span>
              <p className="text-[10px] text-slate-400 font-medium">Global AI Agent Design System Playground</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 p-1 rounded-xl text-xs font-semibold">
            <button 
              onClick={() => setActiveTab('workspace')}
              className={`px-4 py-1.5 rounded-lg transition-all ${activeTab === 'workspace' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
            >
              Pipeline Generator
            </button>
            <button 
              onClick={() => setActiveTab('tokens')}
              className={`px-4 py-1.5 rounded-lg transition-all ${activeTab === 'tokens' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
            >
              Design Tokens
            </button>
            <button 
              onClick={() => setActiveTab('reviewer')}
              className={`px-4 py-1.5 rounded-lg transition-all ${activeTab === 'reviewer' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
            >
              Review Engine
            </button>
            <button 
              onClick={() => setActiveTab('architecture')}
              className={`px-4 py-1.5 rounded-lg transition-all ${activeTab === 'architecture' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
            >
              System Architecture
            </button>
          </nav>

          <div className="flex items-center gap-2">
            <a 
              href="#documentation" 
              onClick={(e) => {
                e.preventDefault();
                setActiveTab('architecture');
              }}
              className="text-xs font-semibold text-slate-500 hover:text-slate-800 px-3 py-1.5 rounded-lg hover:bg-slate-100 transition"
            >
              Docs
            </a>
            <span className="h-4 w-[1px] bg-slate-200"></span>
            <span className="text-xs bg-emerald-50 text-emerald-700 border border-emerald-100 px-2.5 py-1 rounded-full font-bold flex items-center gap-1 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span> OpenAI Build Week
            </span>
          </div>
        </div>
      </header>

      {copiedText && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-xl border border-white/10 flex items-center gap-1.5 transition-all duration-300">
          <Check className="h-4 w-4 text-emerald-400" />
          <span>Copied {copiedText}!</span>
        </div>
      )}

      {/* Hero Banner Section */}
      <section className="bg-gradient-to-b from-white to-slate-50/50 border-b border-slate-200/40 py-12 px-6">
        <div className="max-w-7xl mx-auto text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-white text-[10px] font-bold tracking-wider uppercase mb-4 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 animate-pulse" /> Global AI Agent Design System Builder
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-none mb-3 font-sans">
            Apex Agentic UI Playground
          </h1>
          <p className="text-sm md:text-base text-slate-500 max-w-3xl leading-relaxed">
            Configure, validate, and preview enterprise-ready AI Agent interfaces. 
            Directly translate high-level product prompts into compliant, machine-executable design system schemas (Information Architectures, Design Token specs, live interactive code sandboxes, and WCAG compliance audits) customized for premier global teams.
          </p>
        </div>
      </section>

      {/* MAIN CONTAINER */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        
        {/* TAB 1: PIPELINE WORKSPACE */}
        {activeTab === 'workspace' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Requirements Panel (4 cols) */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              
              {/* Presets Grid */}
              <div className="bg-white border border-slate-200 rounded-3xl p-5 shadow-sm text-left">
                <h2 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-1.5">
                  <Sliders className="h-4 w-4 text-slate-500" /> Choose Requirement Preset
                </h2>
                <div className="flex flex-col gap-3">
                  {PRESETS.map((preset) => {
                    const isSelected = preset.id === activePresetId;
                    return (
                      <button
                        key={preset.id}
                        onClick={() => {
                          setActivePresetId(preset.id);
                          setActiveStep(4); // Reset to Preview step on switch
                        }}
                        className={`p-4 rounded-2xl border text-left transition-all ${
                          isSelected 
                            ? 'bg-slate-900 border-transparent text-white shadow-md shadow-slate-950/10' 
                            : 'bg-slate-50 border-slate-100 hover:border-slate-300 text-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className={`text-xs font-bold px-2 py-0.5 rounded-md ${isSelected ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-800'}`}>
                            {preset.subtitle}
                          </span>
                        </div>
                        <h3 className="text-xs font-bold leading-tight">{preset.title}</h3>
                        <p className={`text-[10px] mt-1.5 leading-relaxed truncate-2-lines ${isSelected ? 'text-slate-300' : 'text-slate-400'}`}>
                          {preset.description}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Requirement Input Textbox */}
              <div className="bg-white border border-slate-200 rounded-3xl p-5 shadow-sm text-left">
                <div className="flex justify-between items-center mb-3">
                  <h2 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    <Terminal className="h-4 w-4 text-slate-500" /> Raw Product Requirements
                  </h2>
                  <span className="text-[10px] text-slate-400 font-mono font-bold">Input prompt</span>
                </div>
                <textarea
                  value={requirementInput}
                  onChange={(e) => setRequirementInput(e.target.value)}
                  rows={6}
                  className="w-full p-4 text-xs border border-slate-200 rounded-2xl bg-slate-50/50 focus:outline-none focus:ring-1 focus:ring-slate-500 font-mono text-slate-700 leading-relaxed shadow-inner"
                  placeholder="Paste your custom product requirement or feature description here..."
                />
                
                <div className="mt-4 p-3 bg-blue-50 text-blue-800 rounded-2xl border border-blue-100 text-[10px] leading-normal flex items-start gap-2">
                  <Info className="h-3.5 w-3.5 text-blue-600 mt-0.5 shrink-0" />
                  <p>
                    <strong>Prompt Engineering Context:</strong> The active model utilizes a system blueprint injected with bank/SaaS tokens to align the layout securely.
                  </p>
                </div>

                <button 
                  onClick={() => {
                    triggerAlert('Re-analyzers triggered. Active pipeline parameters refreshed.');
                  }}
                  className="w-full mt-4 bg-slate-900 hover:bg-slate-800 text-white py-2.5 text-xs font-semibold rounded-2xl transition flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <Sparkles className="h-3.5 w-3.5" /> Re-Generate Spec Pipeline
                </button>
              </div>

            </div>

            {/* Right Column: Flow Stepper & Result Sandbox (8 cols) */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              
              {/* Horizontal Stepper */}
              <div className="bg-white border border-slate-200 rounded-3xl p-5 shadow-sm">
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
                  <span className="text-xs font-bold text-slate-500">Pipeline Generation Steps</span>
                  <span className="text-[10px] font-mono font-bold text-blue-600">Active State: {STEPS[activeStep].title}</span>
                </div>
                
                {/* Visual grid row */}
                <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                  {STEPS.map((step, idx) => {
                    const isPassed = idx < activeStep;
                    const isActive = idx === activeStep;
                    return (
                      <button
                        key={idx}
                        onClick={() => setActiveStep(idx)}
                        className={`p-3 rounded-2xl border text-left transition-all ${
                          isActive 
                            ? 'bg-blue-600 border-transparent text-white shadow-md shadow-blue-600/10 scale-[1.02]' 
                            : isPassed 
                              ? 'bg-blue-50/50 border-blue-100 text-blue-800 hover:border-blue-200'
                              : 'bg-slate-50 border-slate-100 text-slate-400 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-md ${isActive ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-800'}`}>
                            0{idx + 1}
                          </span>
                          {isPassed && <CheckCircle className="h-3 w-3 text-blue-600" />}
                        </div>
                        <h4 className="text-xs font-bold leading-tight truncate">{step.title}</h4>
                        <p className={`text-[9px] mt-0.5 truncate ${isActive ? 'text-blue-100' : 'text-slate-400'}`}>
                          {step.desc}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Sandbox Renderer based on activeStep */}
              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm min-h-[500px] flex flex-col">
                
                {/* Step 1: Requirement Analysis */}
                {activeStep === 0 && (
                  <div className="text-left">
                    <div className="flex justify-between items-center pb-4 mb-4 border-b border-slate-100">
                      <div>
                        <h2 className="text-base font-bold text-slate-900">Step 1: Requirement Analysis</h2>
                        <p className="text-xs text-slate-400">Structured extraction from raw requirement prompts</p>
                      </div>
                      <button 
                        onClick={() => handleCopyText(JSON.stringify(pipeline.analysis, null, 2), 'Analysis JSON')}
                        className="text-xs font-bold text-blue-600 flex items-center gap-1"
                      >
                        <Copy className="h-3.5 w-3.5" /> Copy Analysis
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">User Goals</h3>
                        <ul className="flex flex-col gap-2">
                          {pipeline.analysis.userGoals.map((g, idx) => (
                            <li key={idx} className="text-xs text-slate-700 flex items-start gap-2 leading-relaxed">
                              <span className="h-4 w-4 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">✓</span>
                              <span>{g}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Primary Workflows & Tasks</h3>
                        <ul className="flex flex-col gap-2">
                          {pipeline.analysis.primaryTasks.map((t, idx) => (
                            <li key={idx} className="text-xs text-slate-700 flex items-start gap-2 leading-relaxed">
                              <span className="h-4 w-4 rounded-full bg-slate-200 text-slate-800 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">{idx+1}</span>
                              <span>{t}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Business Data Entities</h3>
                        <div className="flex flex-wrap gap-2">
                          {pipeline.analysis.businessEntities.map((e, idx) => (
                            <span key={idx} className="px-3 py-1 bg-white border border-slate-200 rounded-xl text-xs text-slate-700 font-medium">
                              {e}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Required States & Interactive Conditions</h3>
                        <ul className="flex flex-col gap-2">
                          {pipeline.analysis.stateRequirements.map((s, idx) => (
                            <li key={idx} className="text-xs text-slate-600 flex items-start gap-1.5 leading-relaxed">
                              <span className="text-slate-400 font-mono">•</span>
                              <span>{s}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Information Architecture (IA) */}
                {activeStep === 1 && (
                  <div className="text-left">
                    <div className="flex justify-between items-center pb-4 mb-4 border-b border-slate-100">
                      <div>
                        <h2 className="text-base font-bold text-slate-900">Step 2: Information Architecture (IA)</h2>
                        <p className="text-xs text-slate-400">Structured hierarchy map mapped from user tasks</p>
                      </div>
                      <button 
                        onClick={() => handleCopyText(JSON.stringify(pipeline.ia, null, 2), 'IA Map')}
                        className="text-xs font-bold text-blue-600 flex items-center gap-1"
                      >
                        <Copy className="h-3.5 w-3.5" /> Copy IA Map
                      </button>
                    </div>

                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <div className="p-4 bg-white border border-slate-200 rounded-xl mb-4">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-mono font-bold px-1.5 py-0.5 bg-slate-900 text-white rounded">ROOT</span>
                          <h3 className="text-sm font-bold text-slate-900">{pipeline.ia.label}</h3>
                        </div>
                        <p className="text-xs text-slate-500">{pipeline.ia.description}</p>
                      </div>

                      {pipeline.ia.children && (
                        <div className="pl-6 border-l-2 border-dashed border-slate-200 flex flex-col gap-4">
                          {pipeline.ia.children.map((child, idx) => (
                            <div key={idx} className="relative p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                              {/* Horizontal connector line */}
                              <div className="absolute top-1/2 -left-6 w-6 h-[2px] bg-dashed bg-slate-200"></div>
                              
                              <div className="flex items-center gap-2 mb-1">
                                <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded text-white ${child.type === 'module' ? 'bg-indigo-600' : 'bg-amber-600'}`}>
                                  {child.type.toUpperCase()}
                                </span>
                                <h4 className="text-xs font-bold text-slate-800">{child.label}</h4>
                                <span className="ml-auto inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-bold bg-slate-100 text-slate-600">
                                  Priority: {child.priority}
                                </span>
                              </div>
                              <p className="text-xs text-slate-400">{child.description}</p>

                              {child.children && (
                                <div className="mt-3 pl-6 border-l-2 border-slate-200 flex flex-col gap-2">
                                  {child.children.map((sub, sidx) => (
                                    <div key={sidx} className="p-2 bg-slate-50 rounded-lg border border-slate-100 text-xs">
                                      <div className="flex items-center gap-1.5 mb-0.5">
                                        <span className="h-1.5 w-1.5 rounded-full bg-slate-400"></span>
                                        <span className="font-bold text-slate-700">{sub.label}</span>
                                        <span className="text-[9px] font-mono text-slate-400">({sub.type})</span>
                                      </div>
                                      <p className="text-[10px] text-slate-400 ml-3">{sub.description}</p>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Step 3: Design Tokens & Component Recommendations */}
                {activeStep === 2 && (
                  <div className="text-left">
                    <div className="flex justify-between items-center pb-4 mb-4 border-b border-slate-100">
                      <div>
                        <h2 className="text-base font-bold text-slate-900">Step 3: Design System Token Mapping</h2>
                        <p className="text-xs text-slate-400">Mapping requirements to active brand guidelines</p>
                      </div>
                      <button 
                        onClick={() => handleCopyText(JSON.stringify(pipeline.mapping, null, 2), 'Tokens Mapping')}
                        className="text-xs font-bold text-blue-600 flex items-center gap-1"
                      >
                        <Copy className="h-3.5 w-3.5" /> Copy Mapping
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl flex flex-col gap-4">
                        <div>
                          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">Mapped Color Palette</h3>
                          <p className="text-xs text-slate-700 leading-relaxed bg-white p-3 rounded-xl border border-slate-200/60 font-medium">
                            {pipeline.mapping.colorPalette}
                          </p>
                        </div>
                        <div>
                          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">Typography Tokens</h3>
                          <p className="text-xs text-slate-700 leading-relaxed bg-white p-3 rounded-xl border border-slate-200/60 font-medium">
                            {pipeline.mapping.typography}
                          </p>
                        </div>
                      </div>

                      <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl flex flex-col gap-4">
                        <div>
                          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">Spacing Scale</h3>
                          <p className="text-xs text-slate-700 leading-relaxed bg-white p-3 rounded-xl border border-slate-200/60 font-medium">
                            {pipeline.mapping.spacing}
                          </p>
                        </div>
                        <div>
                          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">Border Curvatures</h3>
                          <p className="text-xs text-slate-700 leading-relaxed bg-white p-3 rounded-xl border border-slate-200/60 font-medium">
                            {pipeline.mapping.borderRadius}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Recommended Layout Components</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {pipeline.mapping.components.map((comp, idx) => (
                          <div key={idx} className="p-4 bg-white border border-slate-200 rounded-2xl shadow-sm text-left">
                            <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5 mb-1.5">
                              <span className="h-2 w-2 rounded-full bg-blue-600"></span> {comp.name}
                            </h4>
                            <p className="text-[11px] text-slate-500 leading-normal mb-3">{comp.rationale}</p>
                            <div className="border-t border-slate-100 pt-2">
                              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wide">Standard Props</span>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {comp.props.map((p, pidx) => (
                                  <span key={pidx} className="px-1.5 py-0.5 bg-slate-50 rounded text-[9px] font-mono text-slate-600 border border-slate-100">
                                    {p}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: UI Specification */}
                {activeStep === 3 && (
                  <div className="text-left flex-1 flex flex-col">
                    <div className="flex justify-between items-center pb-4 mb-4 border-b border-slate-100">
                      <div>
                        <h2 className="text-base font-bold text-slate-900">Step 4: UI Specification Sheet</h2>
                        <p className="text-xs text-slate-400">Machine-readable layout blueprints mapping to engineering guidelines</p>
                      </div>
                      <button 
                        onClick={() => handleCopyText(JSON.stringify(pipeline.spec, null, 2), 'UI Spec')}
                        className="text-xs font-bold text-blue-600 flex items-center gap-1"
                      >
                        <Copy className="h-3.5 w-3.5" /> Copy Code Spec
                      </button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1 items-stretch">
                      {/* Left: Metadata spec sheet (5 cols) */}
                      <div className="lg:col-span-5 p-4 bg-slate-50 border border-slate-100 rounded-2xl text-xs flex flex-col gap-4">
                        <div>
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Layout Blueprint Pattern</span>
                          <div className="bg-white p-3 rounded-xl border border-slate-200/60 font-semibold text-slate-800">
                            {pipeline.spec.layoutPattern}
                          </div>
                        </div>

                        <div>
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">Responsive Fluidity Rules</span>
                          <div className="flex flex-col gap-2">
                            <div className="flex items-center justify-between p-2 bg-white rounded-lg border border-slate-200/60">
                              <span className="font-mono text-[10px] font-bold text-slate-500">Mobile</span>
                              <span className="text-[10px] font-semibold text-slate-700 max-w-[200px] text-right truncate" title={pipeline.spec.responsiveGrid.mobile}>
                                {pipeline.spec.responsiveGrid.mobile}
                              </span>
                            </div>
                            <div className="flex items-center justify-between p-2 bg-white rounded-lg border border-slate-200/60">
                              <span className="font-mono text-[10px] font-bold text-slate-500">Tablet</span>
                              <span className="text-[10px] font-semibold text-slate-700 max-w-[200px] text-right truncate" title={pipeline.spec.responsiveGrid.tablet}>
                                {pipeline.spec.responsiveGrid.tablet}
                              </span>
                            </div>
                            <div className="flex items-center justify-between p-2 bg-white rounded-lg border border-slate-200/60">
                              <span className="font-mono text-[10px] font-bold text-slate-500">Desktop</span>
                              <span className="text-[10px] font-semibold text-slate-700 max-w-[200px] text-right truncate" title={pipeline.spec.responsiveGrid.desktop}>
                                {pipeline.spec.responsiveGrid.desktop}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right: Code editor YAML/JSON representation (7 cols) */}
                      <div className="lg:col-span-7 bg-slate-950 rounded-2xl p-4 flex flex-col justify-between overflow-hidden shadow-inner text-left font-mono">
                        <div className="flex items-center justify-between text-[10px] text-slate-500 pb-2 border-b border-slate-800/80 mb-3">
                          <span>UI_SPECIFICATION.json</span>
                          <span className="text-indigo-400 uppercase font-bold text-[9px]">Valid Blueprint</span>
                        </div>
                        <div className="text-[11px] text-slate-300 leading-normal overflow-y-auto max-h-[300px]">
                          <span className="text-yellow-400">{`{`}</span><br />
                          {`  `}<span className="text-emerald-400">"projectId"</span>: <span className="text-orange-400">"{activePresetId}"</span>,<br />
                          {`  `}<span className="text-emerald-400">"gridStructure"</span>: <span className="text-orange-400">"{pipeline.spec.layoutPattern}"</span>,<br />
                          {`  `}<span className="text-emerald-400">"definedComponents"</span>: <span className="text-yellow-400">{`[`}</span><br />
                          {pipeline.spec.components.map((c, cidx) => (
                            <span key={cidx}>
                              {`    {`}<br />
                              {`      `}<span className="text-emerald-400">"id"</span>: <span className="text-orange-400">"{c.id}"</span>,<br />
                              {`      `}<span className="text-emerald-400">"type"</span>: <span className="text-orange-400">"{c.type}"</span>,<br />
                              {`      `}<span className="text-emerald-400">"title"</span>: <span className="text-orange-400">"{c.title}"</span>,<br />
                              {`      `}<span className="text-emerald-400">"states"</span>: <span className="text-purple-400">{`[`}</span> {c.states.map(s => `"${s}"`).join(', ')} <span className="text-purple-400">{`]`}</span>,<br />
                              {`      `}<span className="text-emerald-400">"alignmentRules"</span>: <span className="text-purple-400">{`[`}</span> {c.rules.map(r => `"${r.substring(0, 15)}..."`).join(', ')} <span className="text-purple-400">{`]`}</span><br />
                              {`    }`}{cidx < pipeline.spec.components.length - 1 ? ',' : ''}<br />
                            </span>
                          ))}
                          {`  `}<span className="text-yellow-400">{`]`}</span><br />
                          <span className="text-yellow-400">{`}`}</span>
                        </div>
                        <div className="mt-4 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-500">
                          <span>Synthesized via GPT-5.6 Design Reasoning Engine</span>
                          <span>Bytes: 1.2KB</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 5: Live Interactive Sandbox Preview */}
                {activeStep === 4 && (
                  <div className="flex-1 flex flex-col text-left">
                    <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 mb-4 border-b border-slate-200/60">
                      <div>
                        <div className="flex items-center gap-2">
                          <h2 className="text-base font-bold text-slate-900">Step 5: Code &amp; Interactive Preview</h2>
                          <span className="text-[10px] bg-emerald-50 text-emerald-800 font-bold border border-emerald-100 px-2 py-0.5 rounded-md flex items-center gap-1">
                            <span className="h-1 w-1 bg-emerald-500 rounded-full animate-ping"></span> Live Sandbox Rendered
                          </span>
                        </div>
                        <p className="text-xs text-slate-400">Renders the actual, executable code derived from UI specifications</p>
                      </div>
                      
                      <div className="mt-2 md:mt-0 flex gap-2">
                        <button 
                          onClick={() => handleCopyText(`// Compiled production code for ${activePreset.title}\nimport React from "react";`, 'Preset Code')}
                          className="px-3 py-1.5 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold rounded-xl border border-slate-200 flex items-center gap-1 transition"
                        >
                          <FileCode className="h-3.5 w-3.5 text-slate-500" /> Export Source
                        </button>
                      </div>
                    </div>

                    {/* Interactive Showcase Box */}
                    <div className="flex-1 border border-slate-200 rounded-2xl overflow-hidden shadow-inner bg-slate-50">
                      {activePresetId === 'banking_rm' && (
                        <BankWorkspace />
                      )}
                      {(activePresetId === 'saas_analytics' || activePresetId === 'ecommerce_checkout') && (
                        <PresetShowcase presetId={activePresetId} />
                      )}
                    </div>
                  </div>
                )}

                {/* Step 6: Design-System Review */}
                {activeStep === 5 && (
                  <div className="text-left">
                    <div className="flex justify-between items-center pb-4 mb-4 border-b border-slate-100">
                      <div>
                        <h2 className="text-base font-bold text-slate-900">Step 6: Compliance Audit &amp; Accessibility Review</h2>
                        <p className="text-xs text-slate-400">Automated design audit engine running over layout and token rules</p>
                      </div>
                      <span className="text-xs bg-rose-50 text-rose-700 border border-rose-100 px-2.5 py-1 rounded-full font-bold flex items-center gap-1 shadow-sm">
                        <AlertTriangle className="h-3.5 w-3.5 text-rose-600 animate-pulse" /> Compliance Score: 89%
                      </span>
                    </div>

                    <div className="flex flex-col gap-4">
                      {pipeline.review.map((finding) => (
                        <div key={finding.id} className="p-4 bg-white border border-slate-200 rounded-2xl shadow-sm text-left relative overflow-hidden flex flex-col md:flex-row md:items-start gap-4">
                          {/* Severity badge left line */}
                          <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${finding.severity === 'error' ? 'bg-rose-500' : finding.severity === 'warning' ? 'bg-amber-500' : 'bg-blue-500'}`}></div>
                          
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1.5 pl-1">
                              <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                                finding.severity === 'error' ? 'bg-rose-50 text-rose-800 border border-rose-100' : finding.severity === 'warning' ? 'bg-amber-50 text-amber-800 border border-amber-100' : 'bg-blue-50 text-blue-800 border border-blue-100'
                              }`}>
                                {finding.severity}
                              </span>
                              <span className="text-[10px] font-mono text-slate-400">Target Element: {finding.target}</span>
                            </div>
                            
                            <h4 className="text-xs font-bold text-slate-900 mb-2 pl-1">{finding.message}</h4>
                            <p className="text-xs text-slate-500 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100 pl-3">
                              <strong>AI Recommendation:</strong> {finding.recommendation}
                            </p>
                          </div>

                          {finding.codeSuggestion && (
                            <div className="w-full md:w-80 bg-slate-950 p-3 rounded-xl font-mono text-[10px] leading-normal text-slate-300 border border-slate-800 shrink-0 self-center">
                              <div className="text-[9px] text-slate-500 border-b border-slate-800 pb-1 mb-2 font-semibold">Suggested Code Fix</div>
                              <span className="text-emerald-400">{finding.codeSuggestion}</span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>
        )}

        {/* TAB 2: DESIGN TOKENS EXPLORER */}
        {activeTab === 'tokens' && (
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm text-left">
            <div className="pb-4 mb-6 border-b border-slate-200/60">
              <h2 className="text-xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                <Sliders className="h-5 w-5 text-indigo-600 animate-pulse" /> Design Token Catalog Matrix
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Approved brand standards which are serialized as machine-readable constraints inside the GPT-5.6 system prompt context
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Token Card 1: Colors */}
              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 text-left">
                <h3 className="text-sm font-bold text-slate-900 mb-3 pb-2 border-b border-slate-200 flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-blue-600"></span> Colors (Cobalt Slate)
                </h3>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 p-2 bg-white rounded-xl border border-slate-200/60">
                    <div className="h-8 w-8 bg-[#F6F8FB] border border-slate-300/60 rounded-lg shrink-0"></div>
                    <div>
                      <div className="text-xs font-bold font-mono">--color-canvas: #F6F8FB</div>
                      <div className="text-[10px] text-slate-400">Off-white soft desk surface background</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-white rounded-xl border border-slate-200/60">
                    <div className="h-8 w-8 bg-[#1D4ED8] rounded-lg shrink-0"></div>
                    <div>
                      <div className="text-xs font-bold font-mono">--color-primary: #1D4ED8</div>
                      <div className="text-[10px] text-slate-400">Cobalt Financial core indicator highlight</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-white rounded-xl border border-slate-200/60">
                    <div className="h-8 w-8 bg-[#059669] rounded-lg shrink-0"></div>
                    <div>
                      <div className="text-xs font-bold font-mono">--color-positive: #059669</div>
                      <div className="text-[10px] text-slate-400">Emerald positive yields, CRM approvals</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Token Card 2: Typography & Spacing */}
              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 text-left">
                <h3 className="text-sm font-bold text-slate-900 mb-3 pb-2 border-b border-slate-200 flex items-center gap-1.5">
                  <Sparkles className="h-4 w-4 text-slate-600" /> Font-Pairing Guidelines
                </h3>
                <div className="flex flex-col gap-3 text-xs leading-relaxed">
                  <div className="p-3 bg-white rounded-xl border border-slate-200/60">
                    <span className="text-[10px] font-bold text-slate-400 block mb-1 uppercase">Primary Font Class</span>
                    <span className="font-sans font-bold text-sm text-slate-900">Inter Sans-Serif</span>
                    <p className="text-[10px] text-slate-400 mt-1">Used for descriptive copy, dialog states, buttons, and system summaries.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200/60">
                    <span className="text-[10px] font-bold text-slate-400 block mb-1 uppercase">Telemetry / Code Class</span>
                    <span className="font-mono text-xs text-slate-700 font-bold">JetBrains Monospace</span>
                    <p className="text-[10px] text-slate-400 mt-1">Used for balances, credit ratings, metrics changes, and compliance logging.</p>
                  </div>
                </div>
              </div>

              {/* Token Card 3: Borders & Glassmorphism */}
              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 text-left">
                <h3 className="text-sm font-bold text-slate-900 mb-3 pb-2 border-b border-slate-200 flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-slate-600" /> Curvatures &amp; Backdrop-Blur
                </h3>
                <div className="flex flex-col gap-3">
                  <div className="p-4 bg-white/60 backdrop-blur-md border border-white/80 shadow-sm rounded-3xl text-left">
                    <div className="text-xs font-bold text-slate-900">Glassmorphism Panel (rounded-3xl)</div>
                    <div className="text-[10px] font-mono text-slate-400 mt-1">
                      backdrop-filter: blur(24px);<br />
                      background: rgba(255, 255, 255, 0.7);<br />
                      border-radius: 24px;
                    </div>
                  </div>
                  <p className="text-[10px] leading-relaxed text-slate-500">
                    Our system prohibits the generation of sharp, 90-degree components or generic solid colors. Every custom container must implement a soft, organic border radius and translucent backgrounds to match Apple high-end visual aesthetics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: REVIEW ENGINE */}
        {activeTab === 'reviewer' && (
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm text-left">
            <div className="pb-4 mb-6 border-b border-slate-200/60">
              <h2 className="text-xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-rose-600" /> Compliance Review Engine Portal
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Paste any arbitrary React/Tailwind frontend code below. Our specialized design-system critique engine will audit contrast, token consistency, and accessibility standards.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Code paste editor (6 cols) */}
              <div className="lg:col-span-6 flex flex-col gap-4">
                <div className="flex justify-between items-center text-xs font-semibold text-slate-500">
                  <span>Enter Code Block</span>
                  <span>JSX / HTML</span>
                </div>
                <textarea
                  value={customCode}
                  onChange={(e) => setCustomCode(e.target.value)}
                  rows={10}
                  className="w-full flex-1 p-4 bg-slate-950 text-slate-300 font-mono text-[11px] leading-normal rounded-2xl focus:outline-none focus:ring-1 focus:ring-slate-800 shadow-inner resize-none min-h-[300px]"
                />
                
                <button
                  onClick={handleAnalyzeCustomCode}
                  disabled={isReviewing}
                  className="w-full bg-slate-950 hover:bg-slate-900 text-white font-bold py-3 text-xs rounded-xl transition flex items-center justify-center gap-2 shadow-md"
                >
                  {isReviewing ? (
                    <>
                      <RefreshCw className="h-4 w-4 animate-spin text-indigo-400" /> Evaluating Design Token Compliance...
                    </>
                  ) : (
                    <>
                      <Play className="h-4 w-4 text-emerald-400" /> Run AI Design Audit &amp; Contrast Check
                    </>
                  )}
                </button>
              </div>

              {/* Audit feedback (6 cols) */}
              <div className="lg:col-span-6 bg-slate-50 rounded-2xl border border-slate-200/60 p-5 flex flex-col min-h-[300px] justify-between">
                <div>
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-200 pb-2">
                    AI Design Auditor Output
                  </h3>

                  {!reviewResult && !isReviewing && (
                    <div className="py-16 text-center text-slate-400 flex flex-col items-center justify-center">
                      <HelpCircle className="h-8 w-8 mb-2 text-slate-300" />
                      <p className="text-xs font-medium">Click "Run AI Design Audit" to evaluate compliance.</p>
                      <p className="text-[10px] text-slate-400 mt-1 max-w-[240px]">The engine checks color contrasts, border radius consistency, and custom props.</p>
                    </div>
                  )}

                  {isReviewing && (
                    <div className="py-16 text-center text-slate-400 flex flex-col items-center justify-center gap-2">
                      <div className="h-6 w-6 border-2 border-slate-300 border-t-indigo-600 rounded-full animate-spin"></div>
                      <span className="text-xs font-medium mt-1">Interpreting token structures...</span>
                    </div>
                  )}

                  {reviewResult && (
                    <div className="flex flex-col gap-4">
                      {reviewResult.map((f, fidx) => (
                        <div key={f.id} className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm relative overflow-hidden text-left pl-6">
                          <div className={`absolute left-0 top-0 bottom-0 w-1 ${f.severity === 'error' ? 'bg-rose-500' : 'bg-amber-500'}`}></div>
                          
                          <div className="flex items-center gap-2 mb-1">
                            <span className={`text-[9px] font-bold uppercase px-1.5 py-0.5 rounded ${f.severity === 'error' ? 'bg-rose-50 text-rose-800 border border-rose-100' : 'bg-amber-50 text-amber-800'}`}>
                              {f.severity}
                            </span>
                            <span className="text-[9px] font-mono text-slate-400">{f.target}</span>
                          </div>

                          <h4 className="text-xs font-bold text-slate-900 mb-2">{f.message}</h4>
                          <p className="text-[11px] text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-100 mb-2">
                            <strong>Compliance Solution:</strong> {f.recommendation}
                          </p>

                          {f.codeSuggestion && (
                            <div className="bg-slate-950 p-2 rounded font-mono text-[9px] text-slate-300">
                              <span className="text-emerald-400">{f.codeSuggestion}</span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="text-[10px] text-slate-400 border-t border-slate-200/60 pt-3 text-center">
                  Audit logs are automatically cataloged to support continuous model fine-tuning.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: SYSTEM ARCHITECTURE */}
        {activeTab === 'architecture' && (() => {
          const ARCH_LAYERS = [
            {
              id: 'frontend',
              index: '01',
              name: 'Frontend Layer (Web Application)',
              subtitle: 'React 19 & Tailwind CSS SPA',
              path: 'src/App.tsx, src/components/*',
              tech: 'React 19, TypeScript, Lucide, Tailwind CSS, motion',
              description: 'Renders the primary application shell, workspace dashboard, brand design tokens catalog, and the design compliance review portal. It features a modern, translucent glassmorphism layout with backdrop filters to match Apple high-end visual aesthetics.',
              functionality: 'State preservation across visual components, modular widget mounting (BankWorkspace.tsx, PresetShowcase.tsx), and fluid transition animations.'
            },
            {
              id: 'application',
              index: '02',
              name: 'Application Layer (Controller)',
              subtitle: 'Vite 6 Client-Side Controller Routing',
              path: 'src/App.tsx',
              tech: 'Vite 6, React Context Hooks, Pipeline State Manager',
              description: 'Synchronizes current requirements, edits, and active preset models across the 6 compilation pipeline steps. It handles reactivity triggers and orchestrates custom JSX reviews.',
              functionality: 'Controls the active pipeline step selector (Requirement -> IA -> Token -> Spec -> Render -> Audit), manages state hooks, and triggers automated design compliance reviews.'
            },
            {
              id: 'orchestration',
              index: '03',
              name: 'AI Orchestration Layer',
              subtitle: 'Active Prompts & Spec Compiler Pipeline',
              path: 'src/data/mockData.ts',
              tech: 'Structured Schema Mapping, System Prompts',
              description: 'Systematically translates raw natural language statements into precise structural UI schemas. It structures goals, business entities, and state bounds to prevent downstream prompt drift.',
              functionality: 'Extracts primary tasks and variables, formats context payloads for model ingestion, and maps out layout hierarchies.'
            },
            {
              id: 'knowledge',
              index: '04',
              name: 'Design Knowledge Layer (Token DB)',
              subtitle: 'Single Source of Style Truth',
              path: 'src/data/mockData.ts',
              tech: 'Active Brand Token Dictionary (Cobalt Slate)',
              description: 'Stores approved style matrices, colors, typography fonts, spacing scales, and curvatures inside a single registry, which is serialized and injected into the AI system prompts.',
              functionality: 'Enforces brand consistency (e.g. Cobalt Slate `#1D4ED8`, Canvas background `#F6F8FB`), prescribes layout rules, and validates component props.'
            },
            {
              id: 'openai',
              index: '05',
              name: 'OpenAI Integration',
              subtitle: 'Dual-Stage Model Specialization',
              path: 'src/App.tsx',
              tech: 'GPT-5.6 (Spec) & Codex (Code Synthesizer)',
              description: 'Deconstructs visual design synthesis into two logical stages: Spec compiling via GPT-5.6 (structuring the JSON outline) and code synthesis via Codex (converting the spec into actual React/Tailwind).',
              functionality: 'Translates machine-readable blueprints into standard executable code blocks, completely avoiding arbitrary inline styling.'
            },
            {
              id: 'persistence',
              index: '06',
              name: 'Data & Persistence Layer',
              subtitle: 'Local State CRM Writeback Registers',
              path: 'src/components/agent/BankWorkspace.tsx',
              tech: 'Local React State Hooks, Pre-loaded Repositories',
              description: 'Integrates real-time data persistence simulating database storage. In the "RM Assistant" workspace, actions like logging calls, checking off tasks, or registering marketing callbacks update local state in real-time.',
              functionality: 'Simulates transactional CRM updates, preserves activity registers, and logs client touchpoints for presentation flows.'
            },
            {
              id: 'validation',
              index: '07',
              name: 'Validation Layer (Compliance Linter)',
              subtitle: 'Accessibility & Token Integrity Auditor',
              path: 'src/App.tsx',
              tech: 'WCAG AA Color Contrast Linter, Custom Code Reviewer',
              description: 'Reviews arbitrary user and generated React code, parsing inline classes and colors to calculate WCAG AA relative contrast thresholds (alerting on poor grey-on-yellow combinations).',
              functionality: 'Analyzes visual parameters against accessibility standards, flags non-compliant styling, and drafts instant component replacements.'
            },
            {
              id: 'deployment',
              index: '08',
              name: 'Deployment Layer',
              subtitle: 'Cloud Run & Nginx Reverse Proxy',
              path: 'package.json, Dockerfile',
              tech: 'Docker, Serverless Cloud Run Containers, Nginx Ingress',
              description: 'Deploys the static production build of the Vite application to serverless containers. Port 3000 is mapped securely behind an Nginx gateway with hot-module reload disabled for maximum stability.',
              functionality: 'Handles static file distribution, handles reverse proxy ingress on Port 3000, and isolates preview frames securely.'
            }
          ];

          const getLayerIcon = (id: string) => {
            switch (id) {
              case 'frontend':
                return <Layout className="h-4 w-4 text-blue-600" />;
              case 'application':
                return <Activity className="h-4 w-4 text-violet-600" />;
              case 'orchestration':
                return <Sparkles className="h-4 w-4 text-indigo-600" />;
              case 'knowledge':
                return <Sliders className="h-4 w-4 text-sky-600" />;
              case 'openai':
                return <Code2 className="h-4 w-4 text-teal-600" />;
              case 'persistence':
                return <FileText className="h-4 w-4 text-emerald-600" />;
              case 'validation':
                return <ShieldCheck className="h-4 w-4 text-rose-600" />;
              case 'deployment':
                return <Terminal className="h-4 w-4 text-slate-600" />;
              default:
                return <BookOpen className="h-4 w-4 text-slate-600" />;
            }
          };

          const selectedLayer = ARCH_LAYERS.find(l => l.id === selectedLayerId) || ARCH_LAYERS[0];

          return (
            <div id="documentation" className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm text-left font-sans">
              <div className="pb-4 mb-6 border-b border-slate-200/60 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-indigo-600 animate-pulse" /> Active 8-Layer Project Architecture
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">
                    An interactive visual topology displaying the true, functional layers of our system and active data flows
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider bg-slate-100 border border-slate-200 px-2 py-1 rounded-md">
                    Target Port: 3000
                  </span>
                </div>
              </div>

              {/* Architecture Interactive Bento Sandbox */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Left Side: 8-Layers interactive flow (7 cols) */}
                <div className="lg:col-span-7 flex flex-col gap-4">
                  <div className="p-4 bg-slate-50 border border-slate-200/60 rounded-2xl mb-2 text-xs text-slate-500 leading-relaxed flex items-center gap-2">
                    <Info className="h-4 w-4 text-slate-400 shrink-0" />
                    <span>Click on any system layer below to inspect its live implementation details, technical stack mappings, and file paths.</span>
                  </div>

                  <div className="flex flex-col gap-2.5 relative">
                    {ARCH_LAYERS.map((layer, idx) => {
                      const isSelected = selectedLayerId === layer.id;
                      return (
                        <div key={layer.id} className="relative flex items-stretch">
                          {/* Left numbering and visual guide */}
                          <div className="w-12 flex flex-col items-center justify-center font-mono shrink-0">
                            <span className={`text-[10px] font-extrabold tracking-widest ${isSelected ? 'text-indigo-600' : 'text-slate-400'}`}>
                              L{layer.index}
                            </span>
                            {idx < ARCH_LAYERS.length - 1 && (
                              <div className="w-[1.5px] h-6 bg-slate-200 my-1"></div>
                            )}
                          </div>

                          {/* Layer card button */}
                          <button
                            onClick={() => setSelectedLayerId(layer.id)}
                            className={`flex-1 p-3.5 rounded-2xl border text-left transition-all flex items-center justify-between gap-4 ${
                              isSelected 
                                ? 'bg-indigo-50/70 border-indigo-200 shadow-sm shadow-indigo-600/5 ring-1 ring-indigo-200/50 scale-[1.01]' 
                                : 'bg-white border-slate-150 hover:bg-slate-50/50 hover:border-slate-300'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <div className={`p-2 rounded-xl border shrink-0 ${
                                isSelected ? 'bg-white border-indigo-150' : 'bg-slate-50 border-slate-200/60'
                              }`}>
                                {getLayerIcon(layer.id)}
                              </div>
                              <div>
                                <h3 className="text-xs font-bold text-slate-800 flex items-center gap-1.5 leading-none">
                                  {layer.name}
                                </h3>
                                <p className="text-[10px] text-slate-400 mt-1 font-medium">{layer.subtitle}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] font-mono text-slate-400 px-2 py-0.5 bg-slate-50 border border-slate-100 rounded-md max-w-[120px] truncate">
                                {layer.path.split(',')[0]}
                              </span>
                              <ArrowRight className={`h-3 w-3 transition-transform ${isSelected ? 'text-indigo-600 translate-x-1' : 'text-slate-300'}`} />
                            </div>
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Right Side: Active Layer Spec Inspector Sheet (5 cols) */}
                <div className="lg:col-span-5 flex flex-col items-stretch">
                  <div className="sticky top-4 bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col justify-between h-full min-h-[480px]">
                    <div>
                      {/* Badge and Title */}
                      <div className="flex items-center justify-between pb-3 border-b border-slate-200/80 mb-4">
                        <span className="text-[10px] font-bold text-indigo-700 font-mono bg-indigo-50 border border-indigo-100 px-2.5 py-0.5 rounded-full">
                          LAYER {selectedLayer.index} / 08
                        </span>
                        <span className="text-[9px] font-mono text-slate-400 font-bold uppercase tracking-wider">ACTIVE INSPECTOR</span>
                      </div>

                      <div className="flex items-start gap-2.5 mb-3">
                        <div className="p-2 bg-indigo-600 text-white rounded-xl shadow-md shrink-0">
                          {getLayerIcon(selectedLayer.id)}
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-slate-900 leading-tight">{selectedLayer.name}</h4>
                          <span className="text-[10px] text-slate-400 font-medium">{selectedLayer.subtitle}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-slate-600 leading-relaxed bg-white border border-slate-200/60 p-4 rounded-xl shadow-inner mb-4">
                        {selectedLayer.description}
                      </p>

                      {/* Technical specifications */}
                      <div className="flex flex-col gap-3">
                        <div>
                          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Target Paths</span>
                          <div className="bg-white/80 border border-slate-200/60 rounded-lg p-2 font-mono text-[10px] text-slate-600 break-all">
                            {selectedLayer.path}
                          </div>
                        </div>

                        <div>
                          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Technology Mapped</span>
                          <div className="flex flex-wrap gap-1">
                            {selectedLayer.tech.split(',').map((t, idx) => (
                              <span key={idx} className="px-2 py-0.5 bg-slate-200/60 border border-slate-200 text-slate-700 text-[10px] font-semibold rounded-md">
                                {t.trim()}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Core Functions</span>
                          <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                            {selectedLayer.functionality}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-3 border-t border-slate-200/80 flex items-center justify-between text-[10px] text-slate-400">
                      <span>Verified System Layout</span>
                      <span className="text-emerald-600 font-bold flex items-center gap-1">
                        <span className="h-1 w-1 bg-emerald-500 rounded-full animate-pulse"></span> Active
                      </span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Footnote script controller copy */}
              <div className="mt-8 pt-6 border-t border-slate-150 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping shrink-0"></span>
                  <span className="text-slate-500 font-medium">Every layer connects dynamically to enable high-fidelity AI-Native product demonstrations.</span>
                </div>
                <button 
                  onClick={() => handleCopyText('npm install && npm run dev', 'Run command')}
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-[10px] font-mono font-bold rounded-xl shadow-md transition"
                >
                  Copy Local Setup Command
                </button>
              </div>
            </div>
          );
        })()}

      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-500 py-12 px-6 border-t border-slate-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-medium">
          <div className="flex items-center gap-2">
            <span className="text-slate-200 font-bold tracking-tight">AI-Native Design System</span>
            <span className="h-3 w-[1px] bg-slate-800"></span>
            <span>OpenAI Build Week / Devpost Submission</span>
          </div>
          <div className="flex items-center gap-4 text-[10px] font-mono">
            <span>Server Ingress: https://ais-dev-...run.app</span>
            <span>Created with Antigravity AI Studio</span>
          </div>
        </div>
      </footer>

    </div>
  );
}

// Global alert triggers
function triggerAlert(msg: string) {
  const customEvent = new CustomEvent('app-alert', { detail: msg });
  window.dispatchEvent(customEvent);
}
