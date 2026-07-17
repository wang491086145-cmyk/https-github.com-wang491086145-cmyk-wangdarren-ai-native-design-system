import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown, 
  Users, 
  DollarSign, 
  Activity, 
  Mail, 
  Send, 
  ShieldCheck, 
  CreditCard, 
  Truck, 
  User, 
  CheckCircle,
  HelpCircle,
  Sparkles
} from 'lucide-react';

interface PresetShowcaseProps {
  presetId: 'saas_analytics' | 'ecommerce_checkout';
}

export default function PresetShowcase({ presetId }: PresetShowcaseProps) {
  // --- SaaS Analytics State ---
  const [mrrPeriod, setMrrPeriod] = useState<'monthly' | 'quarterly'>('monthly');
  const [selectedCampaign, setSelectedCampaign] = useState<string>('churn');
  const [emailSubject, setEmailSubject] = useState<string>('We noticed your dashboard is feeling a bit lonely...');
  const [emailBody, setEmailBody] = useState<string>(
    "Hi there,\n\nWe noticed you haven't logged in to your analytics platform in the last 14 days. We've rolled out three major updates to our performance metrics that we think you'll love!\n\nCan we hop on a quick 5-minute call this week to show you how to set them up?\n\nBest,\nGrowthPulse Support"
  );
  const [campaignSent, setCampaignSent] = useState<boolean>(false);

  // --- E-commerce Checkout State ---
  const [checkoutStep, setCheckoutStep] = useState<number>(1);
  const [email, setEmail] = useState<string>('alex.designer@company.com');
  const [fullName, setFullName] = useState<string>('Alex Rivera');
  const [zipCode, setZipCode] = useState<string>('10011');
  const [zipError, setZipError] = useState<string>('');
  const [selectedShipping, setSelectedShipping] = useState<string>('standard');
  const [isPaid, setIsPaid] = useState<boolean>(false);

  const handleZipChange = (val: string) => {
    setZipCode(val);
    if (val.length > 0 && !/^\d{5}$/.test(val)) {
      setZipError('⚠️ US Zip Codes must be exactly 5 numeric digits (e.g., 10011)');
    } else {
      setZipError('');
    }
  };

  const handleSendCampaign = () => {
    setCampaignSent(true);
    setTimeout(() => {
      setCampaignSent(false);
    }, 4000);
  };

  if (presetId === 'saas_analytics') {
    return (
      <div id="saas-showcase" className="w-full bg-[#F8FAFC] text-slate-800 p-6 rounded-3xl border border-slate-200 text-left font-sans">
        {/* Hub Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-200 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-slate-900 text-white rounded-xl">
              <BarChart3 className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900">GrowthPulse · SaaS Hub</h2>
              <p className="text-xs text-slate-400">Adaptive analytics and predictive retention manager</p>
            </div>
          </div>
          <div className="mt-2 md:mt-0 flex gap-1 bg-slate-200/60 p-1 rounded-lg text-xs font-medium">
            <button 
              onClick={() => setMrrPeriod('monthly')}
              className={`px-3 py-1 rounded-md transition ${mrrPeriod === 'monthly' ? 'bg-white text-slate-950 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setMrrPeriod('quarterly')}
              className={`px-3 py-1 rounded-md transition ${mrrPeriod === 'quarterly' ? 'bg-white text-slate-950 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
            >
              Quarterly
            </button>
          </div>
        </div>

        {/* Core Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
            <div className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">Monthly Recurring Revenue</div>
            <div className="text-xl font-bold text-slate-900 mt-1">
              {mrrPeriod === 'monthly' ? '$84,250' : '$252,750'}
            </div>
            <div className="text-[10px] text-emerald-600 font-semibold mt-1 flex items-center gap-0.5">
              <TrendingUp className="h-3 w-3" /> +12.4% MoM
            </div>
          </div>

          <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
            <div className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">Average Customer LTV</div>
            <div className="text-xl font-bold text-slate-900 mt-1">$4,820</div>
            <div className="text-[10px] text-emerald-600 font-semibold mt-1 flex items-center gap-0.5">
              <TrendingUp className="h-3 w-3" /> +4.2% MoM
            </div>
          </div>

          <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
            <div className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">Gross Churn Rate</div>
            <div className="text-xl font-bold text-slate-900 mt-1">2.4%</div>
            <div className="text-[10px] text-rose-500 font-semibold mt-1 flex items-center gap-0.5">
              <TrendingDown className="h-3 w-3" /> -0.3% improvement
            </div>
          </div>

          <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
            <div className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">Cohort Retention Rate</div>
            <div className="text-xl font-bold text-slate-900 mt-1">94.8%</div>
            <div className="text-[10px] text-slate-500 mt-1 font-mono">Net revenue retention</div>
          </div>
        </div>

        {/* Workspace Splitting */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Panel: Retention list & Simulated chart (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="bg-white border border-slate-200 p-4 rounded-2xl shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-1.5">
                <Activity className="h-4 w-4 text-emerald-600" /> MRR Momentum Graph
              </h3>
              
              {/* Dummy Chart Visualization */}
              <div className="h-40 w-full bg-slate-50 rounded-xl border border-slate-100 flex items-end p-4 relative overflow-hidden">
                <div className="absolute top-4 left-4 flex gap-4 text-[10px] font-semibold text-slate-400">
                  <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-slate-900"></span> Subscription Spend</span>
                  <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-emerald-500"></span> Net Retention</span>
                </div>
                
                <div className="flex justify-between items-end h-28 w-full gap-2">
                  <div className="h-[25%] w-full bg-slate-200 hover:bg-slate-300 rounded-t transition" title="Jan: $65k"></div>
                  <div className="h-[38%] w-full bg-slate-200 hover:bg-slate-300 rounded-t transition" title="Feb: $72k"></div>
                  <div className="h-[48%] w-full bg-slate-200 hover:bg-slate-300 rounded-t transition" title="Mar: $75k"></div>
                  <div className="h-[62%] w-full bg-slate-200 hover:bg-slate-300 rounded-t transition" title="Apr: $78k"></div>
                  <div className="h-[80%] w-full bg-slate-200 hover:bg-slate-300 rounded-t transition" title="May: $81k"></div>
                  <div className="h-[100%] w-full bg-slate-900 hover:bg-slate-950 rounded-t transition" title="Jun: $84k"></div>
                </div>
              </div>
              <div className="flex justify-between text-[10px] font-semibold font-mono text-slate-400 mt-2 px-2">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun (Current)</span>
              </div>
            </div>

            <div className="bg-white border border-slate-200 p-4 rounded-2xl shadow-sm">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Churn Risk Accounts (AI Analyzed)</h3>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between p-2.5 bg-rose-50/40 border border-rose-100 rounded-xl text-xs">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-rose-500 animate-pulse"></span>
                    <strong className="text-slate-900">Acme Enterprise</strong>
                  </div>
                  <span className="text-slate-400">Activity score down 68%</span>
                  <span className="text-rose-700 font-bold font-mono">-$1,250/mo Risk</span>
                </div>

                <div className="flex items-center justify-between p-2.5 bg-amber-50/40 border border-amber-100 rounded-xl text-xs">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-amber-500"></span>
                    <strong className="text-slate-900">Hooli Corp</strong>
                  </div>
                  <span className="text-slate-400">Last login: 11 days ago</span>
                  <span className="text-amber-700 font-bold font-mono">-$850/mo Risk</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel: AI Retention Assistant (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm relative">
              {campaignSent && (
                <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-10 flex flex-col items-center justify-center p-6 text-center">
                  <CheckCircle className="h-10 w-10 text-emerald-500 mb-2" />
                  <h4 className="text-sm font-bold text-slate-900">Win-Back Email Dispatched!</h4>
                  <p className="text-xs text-slate-500 mt-1 max-w-[200px]">The retention email campaign has been successfully queued and logged in CRM database.</p>
                </div>
              )}

              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 mb-4 border-b border-slate-100 pb-3">
                <Sparkles className="h-4 w-4 text-slate-900" />
                <span>AI Automated Retention Helper</span>
              </div>

              <div className="mb-4">
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Target Risk Cohort</label>
                <select 
                  value={selectedCampaign}
                  onChange={(e) => {
                    setSelectedCampaign(e.target.value);
                    if (e.target.value === 'churn') {
                      setEmailSubject('We noticed your dashboard is feeling a bit lonely...');
                      setEmailBody("Hi there,\n\nWe noticed you haven't logged in to your analytics platform in the last 14 days. We've rolled out three major updates to our performance metrics that we think you'll love!\n\nCan we hop on a quick 5-minute call this week to show you how to set them up?\n\nBest,\nGrowthPulse Support");
                    } else {
                      setEmailSubject('Unlock 30% discount on your high-performance upgrade');
                      setEmailBody("Hi Founder,\n\nCongratulations on hitting your 10k monthly event cap! Your growth is impressive.\n\nTo ensure your tracking continues smoothly, we've prepared a special 30% discount on the Pro Growth Tier for your account.\n\nSimply click below to apply. Keep up the amazing work!\n\nBest,\nGrowthPulse team");
                    }
                  }}
                  className="w-full text-xs p-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-slate-400"
                >
                  <option value="churn">Low Activity Dormant Clients (Acme, Hooli)</option>
                  <option value="upsell">High Usage Event Cap Overages</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Subject Line</label>
                <input 
                  type="text" 
                  value={emailSubject}
                  onChange={(e) => setEmailSubject(e.target.value)}
                  className="w-full text-xs p-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-slate-400"
                />
              </div>

              <div className="mb-4">
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Email Body Content</label>
                <textarea 
                  value={emailBody}
                  onChange={(e) => setEmailBody(e.target.value)}
                  rows={6}
                  className="w-full text-xs p-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-slate-400 font-mono text-[11px] leading-relaxed resize-none"
                />
              </div>

              <button
                onClick={handleSendCampaign}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white py-2.5 text-xs font-semibold rounded-xl transition flex items-center justify-center gap-1.5 shadow-sm"
              >
                <Send className="h-3.5 w-3.5" /> Dispatch Automated Retention Campaign
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- E-Commerce Checkout Form Showcase ---
  return (
    <div id="checkout-showcase" className="w-full bg-[#FAF9F6] text-slate-800 p-6 rounded-3xl border border-[#EBEAE5] text-left font-sans">
      <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-teal-800 text-white rounded-full">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-slate-900 font-serif">Secure FlowCheckout</h2>
            <p className="text-xs text-slate-400">Zero-friction adaptive shipping & payment gateway</p>
          </div>
        </div>
        <div className="flex items-center gap-1 text-[10px] bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full font-bold">
          <ShieldCheck className="h-3.5 w-3.5 mr-1" /> 256-Bit SSL Encrypted
        </div>
      </div>

      {/* Checkout Steps */}
      <div className="grid grid-cols-3 gap-2 mb-6">
        <div className={`p-2 border-t-2 transition text-center ${checkoutStep >= 1 ? 'border-teal-800 text-teal-800 font-semibold' : 'border-slate-200 text-slate-400'}`}>
          <div className="text-[10px] uppercase">Step 1</div>
          <div className="text-xs truncate">Identity</div>
        </div>
        <div className={`p-2 border-t-2 transition text-center ${checkoutStep >= 2 ? 'border-teal-800 text-teal-800 font-semibold' : 'border-slate-200 text-slate-400'}`}>
          <div className="text-[10px] uppercase">Step 2</div>
          <div className="text-xs truncate">Shipping Rate</div>
        </div>
        <div className={`p-2 border-t-2 transition text-center ${checkoutStep >= 3 ? 'border-teal-800 text-teal-800 font-semibold' : 'border-slate-200 text-slate-400'}`}>
          <div className="text-[10px] uppercase">Step 3</div>
          <div className="text-xs truncate">Secure Payment</div>
        </div>
      </div>

      {/* Main Split Rows */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Form panel (7 cols) */}
        <div className="lg:col-span-7 bg-white border border-[#EBEAE5] p-5 rounded-2xl shadow-sm">
          {isPaid ? (
            <div className="py-12 text-center flex flex-col items-center justify-center">
              <div className="h-12 w-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 font-serif">Order Authorized Successfully!</h3>
              <p className="text-xs text-slate-500 mt-2 max-w-[280px]">Your transaction has been processed securely. A confirmation receipt has been sent to your email.</p>
              <button 
                onClick={() => {
                  setCheckoutStep(1);
                  setIsPaid(false);
                }}
                className="mt-6 px-4 py-2 border border-slate-200 rounded-full text-xs hover:bg-slate-50 font-medium"
              >
                Reset Form
              </button>
            </div>
          ) : (
            <div>
              {/* Step 1 Content */}
              {checkoutStep === 1 && (
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-1.5 font-serif">
                    <User className="h-4 w-4 text-teal-800" /> Customer Information
                  </h3>
                  <div className="flex flex-col gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Email Address</label>
                      <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full text-xs p-3 border border-[#D5D4CD] rounded-xl focus:outline-none focus:ring-1 focus:ring-teal-800 font-sans"
                        placeholder="yourname@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Full Delivery Name</label>
                      <input 
                        type="text" 
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full text-xs p-3 border border-[#D5D4CD] rounded-xl focus:outline-none focus:ring-1 focus:ring-teal-800 font-sans"
                        placeholder="Alex Rivera"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">US Zip Code (Accessible Check)</label>
                        <span className="text-[10px] text-slate-400">Trigger standard warning</span>
                      </div>
                      <input 
                        type="text" 
                        value={zipCode}
                        onChange={(e) => handleZipChange(e.target.value)}
                        className={`w-full text-xs p-3 border rounded-xl focus:outline-none focus:ring-1 font-mono ${zipError ? 'border-rose-400 focus:ring-rose-500 bg-rose-50/20' : 'border-[#D5D4CD] focus:ring-teal-800'}`}
                        placeholder="10011"
                      />
                      {zipError && (
                        <p className="text-[10px] text-rose-600 font-semibold mt-1.5">{zipError}</p>
                      )}
                    </div>

                    <button
                      onClick={() => !zipError && setCheckoutStep(2)}
                      disabled={!!zipError || !email || !fullName}
                      className="w-full bg-teal-800 hover:bg-teal-900 disabled:opacity-50 text-white py-3 text-xs font-semibold rounded-full transition mt-2 shadow-sm"
                    >
                      Continue to Shipping Rates
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2 Content */}
              {checkoutStep === 2 && (
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-1.5 font-serif">
                    <Truck className="h-4 w-4 text-teal-800" /> Choose Shipping Rate
                  </h3>
                  <div className="flex flex-col gap-3 mb-6">
                    <label className={`p-4 border rounded-xl flex items-center justify-between cursor-pointer transition ${selectedShipping === 'standard' ? 'border-teal-800 bg-teal-50/20' : 'border-slate-200'}`}>
                      <div className="flex items-center gap-3">
                        <input 
                          type="radio" 
                          name="shipping" 
                          checked={selectedShipping === 'standard'} 
                          onChange={() => setSelectedShipping('standard')}
                          className="text-teal-800 focus:ring-teal-800"
                        />
                        <div>
                          <div className="text-xs font-bold text-slate-900">Standard Delivery</div>
                          <div className="text-[10px] text-slate-400">Arrives in 5-7 business days</div>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-slate-800 font-mono">FREE</span>
                    </label>

                    <label className={`p-4 border rounded-xl flex items-center justify-between cursor-pointer transition ${selectedShipping === 'express' ? 'border-teal-800 bg-teal-50/20' : 'border-slate-200'}`}>
                      <div className="flex items-center gap-3">
                        <input 
                          type="radio" 
                          name="shipping" 
                          checked={selectedShipping === 'express'} 
                          onChange={() => setSelectedShipping('express')}
                          className="text-teal-800 focus:ring-teal-800"
                        />
                        <div>
                          <div className="text-xs font-bold text-slate-900">Express Priority DHL</div>
                          <div className="text-[10px] text-slate-400">Arrives in 1-2 business days with live tracking</div>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-teal-800 font-mono">$15.00</span>
                    </label>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setCheckoutStep(1)}
                      className="border border-slate-200 hover:bg-slate-50 text-slate-600 py-3 text-xs font-semibold rounded-full transition"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => setCheckoutStep(3)}
                      className="bg-teal-800 hover:bg-teal-900 text-white py-3 text-xs font-semibold rounded-full transition shadow-sm"
                    >
                      Continue to Payment
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3 Content */}
              {checkoutStep === 3 && (
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-1.5 font-serif">
                    <CreditCard className="h-4 w-4 text-teal-800" /> Secure Payment
                  </h3>
                  <div className="flex flex-col gap-4">
                    <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl flex items-center gap-2 mb-2">
                      <CreditCard className="h-5 w-5 text-teal-800" />
                      <div>
                        <span className="text-xs font-bold text-slate-900">Secure Vault Checkout</span>
                        <p className="text-[10px] text-slate-400">Card credentials are fully tokens and hashed</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Card Number</label>
                        <input 
                          type="text" 
                          className="w-full text-xs p-3 border border-[#D5D4CD] rounded-xl font-mono focus:outline-none focus:ring-1 focus:ring-teal-800"
                          placeholder="•••• •••• •••• 4242"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Expiry</label>
                          <input 
                            type="text" 
                            className="w-full text-xs p-3 border border-[#D5D4CD] rounded-xl font-mono focus:outline-none focus:ring-1 focus:ring-teal-800 text-center"
                            placeholder="MM / YY"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">CVC / CVV</label>
                          <input 
                            type="password" 
                            className="w-full text-xs p-3 border border-[#D5D4CD] rounded-xl font-mono focus:outline-none focus:ring-1 focus:ring-teal-800 text-center"
                            placeholder="•••"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 mt-4">
                      <button
                        onClick={() => setCheckoutStep(2)}
                        className="border border-slate-200 hover:bg-slate-50 text-slate-600 py-3 text-xs font-semibold rounded-full transition"
                      >
                        Back
                      </button>
                      <button
                        onClick={() => setIsPaid(true)}
                        className="bg-teal-800 hover:bg-teal-900 text-white py-3 text-xs font-semibold rounded-full transition shadow-sm"
                      >
                        Authorize & Pay Total
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right Column: Order Summary Card (5 cols) */}
        <div className="lg:col-span-5 bg-white border border-[#EBEAE5] p-5 rounded-2xl shadow-sm text-left font-sans">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 pb-2 border-b border-slate-100">Order Summary</h3>
          <div className="flex flex-col gap-3 mb-4">
            <div className="flex items-center justify-between text-xs">
              <div>
                <span className="font-bold text-slate-800">1x UI Design Tokens Package</span>
                <p className="text-[10px] text-slate-400">Complete raw theme presets</p>
              </div>
              <span className="font-bold font-mono">$120.00</span>
            </div>

            <div className="flex items-center justify-between text-xs">
              <div>
                <span className="font-bold text-slate-800">1x Developer Figma Integration API</span>
                <p className="text-[10px] text-slate-400">Direct component mappings</p>
              </div>
              <span className="font-bold font-mono">$45.00</span>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-3 flex flex-col gap-2 text-xs">
            <div className="flex justify-between text-slate-500">
              <span>Subtotal</span>
              <span className="font-mono">$165.00</span>
            </div>
            <div className="flex justify-between text-slate-500">
              <span>Shipping ({selectedShipping === 'standard' ? 'Standard' : 'Express DHL'})</span>
              <span className="font-mono">{selectedShipping === 'standard' ? 'FREE' : '$15.00'}</span>
            </div>
            <div className="flex justify-between text-slate-500">
              <span>Tax (GST)</span>
              <span className="font-mono">$0.00</span>
            </div>
            <div className="flex justify-between text-slate-900 font-bold border-t border-slate-100 pt-3 text-sm">
              <span>Total Amount</span>
              <span className="font-mono">
                ${(165.0 + (selectedShipping === 'express' ? 15.0 : 0.0)).toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
