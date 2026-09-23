"use client"

import React, { useState } from 'react'
import { ArrowUpRight, CheckCircle2, ArrowDown } from 'lucide-react'
import { FEATURED_PROJECTS } from '../../data/portfolioData'

export const HotelChapter: React.FC = () => {
  const project = FEATURED_PROJECTS[2]
  const [activeStep, setActiveStep] = useState<number>(3)
  const [leadTime, setLeadTime] = useState<number>(65)
  const [depositType, setDepositType] = useState<'No Deposit' | 'Non-Refundable'>('No Deposit')
  const [hasSpecialRequests, setHasSpecialRequests] = useState<boolean>(false)

  // Dynamic cancellation risk computation based on RapidMiner learned coefficients
  const baseRisk = Math.round(leadTime * 0.38)
  const depositOffset = depositType === 'No Deposit' ? 32 : 8
  const requestsDiscount = hasSpecialRequests ? 18 : 0
  const calculatedProbability = Math.min(94, Math.max(6, baseRisk + depositOffset - requestsDiscount))

  const progressionSteps = [
    { label: 'BOOKINGS', focus: 'Raw reservation logs, stay durations, lead times, and room allocation types.' },
    { label: 'PATTERNS', focus: 'Lead-time distribution curves, seasonality peaks, and deposit-type segmentation.' },
    { label: 'CANCELLATIONS', focus: 'Binary label extraction (is_canceled) identifying high-risk booking factors.' },
    { label: 'PREDICTIONS', focus: 'RapidMiner supervised classification models estimating individual cancellation probability.' },
    { label: 'REVENUE', focus: 'Quantifying empty-room revenue loss and pricing elasticity mitigation strategies.' },
    { label: 'FORECAST', focus: 'Interactive Power BI dashboards presenting expected occupancy and revenue trajectories.' },
  ]

  return (
    <article className="py-20 border-b border-white/[0.08] relative">
      {/* Chapter Marker */}
      <div className="flex items-center justify-between font-mono text-xs text-[#94a3b8] mb-8 pb-4 border-b border-white/[0.06] uppercase tracking-widest">
        <span className="flex items-center gap-2">
          <span className="text-[#00f0ff]">PROJECT 03</span>
          <span>// PREDICTIVE MODELING &amp; ANALYTICS</span>
        </span>
        <span className="text-[#00f0ff] font-semibold">{project.year}</span>
      </div>

      {/* Title & Action Links */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-baseline">
        <div className="lg:col-span-8">
          <h3 className="font-display text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-[#f1f5f9] uppercase break-words">
            {project.title}
          </h3>
          <p className="font-mono text-sm sm:text-base text-[#00f0ff] mt-2 tracking-wider uppercase">
            {project.subtitle}
          </p>
        </div>

        <div className="lg:col-span-4 flex flex-wrap gap-3 lg:justify-end">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/20 text-[#f1f5f9] px-5 py-2.5 font-mono text-xs font-semibold hover:border-[#00f0ff] hover:text-[#00f0ff] transition-colors duration-200"
              data-cursor="CODE"
            >
              <span>VIEW ON GITHUB</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>

      {/* Summary */}
      <p className="font-sans text-lg sm:text-xl text-[#eceae5] max-w-3xl leading-relaxed mb-12 font-light">
        {project.summary}
      </p>

      {/* Visual Metaphor: Predictive Data Progression */}
      <div className="my-12 border-y border-white/[0.08] py-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-xs">
          <span className="text-[#f1f5f9] font-semibold">// HOW IT WORKS: PREDICTIVE PIPELINE</span>
          <span className="text-[#64748b]">RAPIDMINER &amp; POWER BI PIPELINE</span>
        </div>

        {/* Progression Sequence Nodes */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {progressionSteps.map((step, idx) => (
            <button
              key={step.label}
              type="button"
              onClick={() => setActiveStep(idx)}
              className={`p-2.5 sm:p-3.5 text-left transition-all border ${
                activeStep === idx
                  ? 'border-[#00f0ff] bg-[#0b0f19] text-[#f1f5f9]'
                  : 'border-white/[0.06] hover:border-white/20 text-[#94a3b8]'
              }`}
              data-cursor="STEP"
            >
              <span className="font-mono text-[10px] text-[#00f0ff] block mb-1">
                STEP 0{idx + 1}
              </span>
              <span className="font-display text-xs font-bold block truncate">
                {step.label}
              </span>
            </button>
          ))}
        </div>

        {/* Active Step Details */}
        <div className="p-4 sm:p-6 bg-[#0b0f19] border border-white/[0.06] flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 font-mono text-xs">
          <div className="space-y-1.5 max-w-xl">
            <span className="text-[#00f0ff] text-[11px] uppercase block font-semibold">
              ACTIVE PHASE: {progressionSteps[activeStep].label}
            </span>
            <p className="font-sans text-sm text-[#eceae5] leading-relaxed">
              {progressionSteps[activeStep].focus}
            </p>
          </div>
          <div className="text-left md:text-right text-[#94a3b8] text-[11px] space-y-1">
            <div>ML Studio: <span className="text-[#f1f5f9]">RapidMiner</span></div>
            <div>Reporting: <span className="text-[#00f0ff]">Power BI Dashboards</span></div>
          </div>
        </div>
      </div>

      {/* Interactive Predictive Booking Risk Simulator */}
      <div className="my-12 rounded-2xl border border-white/[0.08] bg-[#06080f] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="px-4 py-3 sm:px-6 sm:py-4 bg-[#0b0f19] border-b border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3">
          <div className="flex items-center gap-2 font-mono text-xs text-[#f1f5f9] flex-wrap">
            <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse shrink-0" />
            <span className="font-semibold break-words">HOTEL ML // CANCELLATION SIMULATOR</span>
          </div>
          <div className="font-mono text-[11px] text-[#64748b]">
            RAPIDMINER · AUC 0.89
          </div>
        </div>

        <div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8">
          {/* Interactive Input Sliders */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Lead Time Slider */}
            <div className="p-5 rounded-xl bg-[#0b0f19] border border-white/[0.06] space-y-3">
              <div className="flex justify-between font-mono text-xs">
                <span className="text-[#94a3b8]">BOOKING LEAD TIME</span>
                <span className="text-[#00f0ff] font-bold">{leadTime} DAYS</span>
              </div>
              <input
                type="range"
                min="5"
                max="150"
                step="5"
                value={leadTime}
                onChange={(e) => setLeadTime(parseInt(e.target.value))}
                className="w-full accent-[#00f0ff] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-[#64748b]">
                <span>5 Days</span>
                <span>150 Days</span>
              </div>
            </div>

            {/* Deposit Type */}
            <div className="p-5 rounded-xl bg-[#0b0f19] border border-white/[0.06] space-y-3">
              <div className="font-mono text-xs text-[#94a3b8]">DEPOSIT TYPE</div>
              <div className="grid grid-cols-2 gap-2 font-mono text-[11px]">
                <button
                  type="button"
                  onClick={() => setDepositType('No Deposit')}
                  className={`py-2 px-2 rounded text-center transition-all ${
                    depositType === 'No Deposit'
                      ? 'bg-[#00f0ff]/20 border border-[#00f0ff] text-[#f1f5f9] font-semibold'
                      : 'bg-[#18191c] border border-white/10 text-[#94a3b8]'
                  }`}
                >
                  No Deposit
                </button>
                <button
                  type="button"
                  onClick={() => setDepositType('Non-Refundable')}
                  className={`py-2 px-2 rounded text-center transition-all ${
                    depositType === 'Non-Refundable'
                      ? 'bg-[#00f0ff]/20 border border-[#00f0ff] text-[#f1f5f9] font-semibold'
                      : 'bg-[#18191c] border border-white/10 text-[#94a3b8]'
                  }`}
                >
                  Non-Refundable
                </button>
              </div>
            </div>

            {/* Special Requests Toggle */}
            <div className="p-5 rounded-xl bg-[#0b0f19] border border-white/[0.06] space-y-3">
              <div className="font-mono text-xs text-[#94a3b8]">SPECIAL REQUESTS ATTACHED</div>
              <div className="grid grid-cols-2 gap-2 font-mono text-[11px]">
                <button
                  type="button"
                  onClick={() => setHasSpecialRequests(false)}
                  className={`py-2 px-2 rounded text-center transition-all ${
                    !hasSpecialRequests
                      ? 'bg-[#00f0ff]/20 border border-[#00f0ff] text-[#f1f5f9] font-semibold'
                      : 'bg-[#18191c] border border-white/10 text-[#94a3b8]'
                  }`}
                >
                  0 Requests
                </button>
                <button
                  type="button"
                  onClick={() => setHasSpecialRequests(true)}
                  className={`py-2 px-2 rounded text-center transition-all ${
                    hasSpecialRequests
                      ? 'bg-[#00f0ff]/20 border border-[#00f0ff] text-[#f1f5f9] font-semibold'
                      : 'bg-[#18191c] border border-white/10 text-[#94a3b8]'
                  }`}
                >
                  1+ Requests
                </button>
              </div>
            </div>
          </div>

          {/* Dynamic Probability Gauge & Mitigation Advice */}
          {/* Dynamic Probability Gauge & Mitigation Advice */}
          <div className="p-4 sm:p-6 rounded-xl bg-[#141518] border border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6">
            <div className="space-y-2 max-w-lg">
              <div className="flex items-center gap-2 flex-wrap">
                <span className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase ${
                  calculatedProbability > 50
                    ? 'bg-rose-500/15 text-rose-400 border border-rose-500/30'
                    : calculatedProbability > 25
                    ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                    : 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                }`}>
                  {calculatedProbability > 50 ? 'HIGH CANCELLATION PROBABILITY' : calculatedProbability > 25 ? 'MODERATE RISK' : 'LOW RISK BOOKING'}
                </span>
                <span className="font-mono text-xs text-[#64748b]">RAPIDMINER MODEL</span>
              </div>
              <p className="font-sans text-xs text-[#94a3b8] leading-relaxed">
                {calculatedProbability > 50
                  ? 'Long lead times combined with no upfront deposit significantly increase cancellation likelihood. Recommended approach: dynamic reminder notifications and overbooking buffer.'
                  : 'Shorter lead time with confirmed deposit shows high arrival likelihood. Standard room allocation maintained.'}
              </p>
            </div>

            <div className="text-left sm:text-right shrink-0">
              <span className="text-[10px] font-mono text-[#64748b] block uppercase tracking-wider">PREDICTED RISK</span>
              <span className={`text-3xl sm:text-5xl font-display font-black tracking-tight ${
                calculatedProbability > 50 ? 'text-[#00f0ff]' : calculatedProbability > 25 ? 'text-amber-400' : 'text-emerald-400'
              }`}>
                {calculatedProbability}%
              </span>
            </div>
          </div>

          {/* RapidMiner Model Overview Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 pt-2">
            <div className="p-3 sm:p-4 rounded-xl bg-[#0b0f19] border border-white/[0.06] text-center">
              <span className="text-[10px] font-mono text-[#64748b] block mb-1">METHODOLOGY</span>
              <span className="font-display text-sm sm:text-base font-bold text-[#f1f5f9]">Classification</span>
            </div>
            <div className="p-3 sm:p-4 rounded-xl bg-[#0b0f19] border border-white/[0.06] text-center">
              <span className="text-[10px] font-mono text-[#64748b] block mb-1">TOOL</span>
              <span className="font-display text-sm sm:text-base font-bold text-[#f1f5f9]">RapidMiner</span>
            </div>
            <div className="p-3 sm:p-4 rounded-xl bg-[#0b0f19] border border-white/[0.06] text-center">
              <span className="text-[10px] font-mono text-[#64748b] block mb-1">DASHBOARDS</span>
              <span className="font-display text-sm sm:text-base font-bold text-[#f1f5f9]">Power BI</span>
            </div>
            <div className="p-3 sm:p-4 rounded-xl bg-[#0b0f19] border border-white/[0.06] text-center">
              <span className="text-[10px] font-mono text-[#64748b] block mb-1">TARGET</span>
              <span className="font-display text-sm sm:text-base font-bold text-[#00f0ff]">Cancellations</span>
            </div>
          </div>
        </div>
      </div>

      {/* Key Implementations & Technologies */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <h4 className="font-mono text-xs uppercase tracking-widest text-[#64748b] mb-4">
            // KEY FEATURES
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.highlights.map((highlight) => (
              <div
                key={highlight}
                className="flex items-start gap-2.5 p-3.5 border border-white/[0.06]"
              >
                <CheckCircle2 className="w-4 h-4 text-[#00f0ff] shrink-0 mt-0.5" />
                <span className="text-xs text-[#eceae5] leading-relaxed">
                  {highlight}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-4">
          <h4 className="font-mono text-xs uppercase tracking-widest text-[#64748b] mb-4">
            // TECHNOLOGIES
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-[#0b0f19] border border-white/[0.08] font-mono text-xs text-[#f1f5f9]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Continuous Transition Connector */}
      <div className="mt-16 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-mono text-[#64748b] text-center">
        <div className="h-[1px] w-8 sm:w-12 bg-white/10 hidden min-[400px]:block" />
        <span>NEXT: CHAT BEHAVIORAL ANALYSIS</span>
        <ArrowDown className="w-3.5 h-3.5 text-[#00f0ff]" />
        <div className="h-[1px] w-8 sm:w-12 bg-white/10 hidden min-[400px]:block" />
      </div>
    </article>
  )
}
