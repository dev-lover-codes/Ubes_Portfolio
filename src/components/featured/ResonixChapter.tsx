"use client"

import React, { useState } from 'react'
import { ArrowUpRight, CheckCircle2, ArrowDown } from 'lucide-react'
import { FEATURED_PROJECTS } from '../../data/portfolioData'

export const ResonixChapter: React.FC = () => {
  const project = FEATURED_PROJECTS[1]
  const [activeSignal, setActiveSignal] = useState<number>(2)
  const [selectedHookIdx, setSelectedHookIdx] = useState<number>(1)

  const hookStrategies = [
    {
      name: 'Direct Question Hook',
      velocityMultiplier: 2.1,
      polarity: 0.35,
      subjectivity: 0.28,
      pValue: '0.014',
      uplift: 38.2,
    },
    {
      name: 'Contrarian Perspective',
      velocityMultiplier: 3.6,
      polarity: 0.74,
      subjectivity: 0.44,
      pValue: '0.0028',
      uplift: 64.8,
    },
    {
      name: 'Data Benchmark Hook',
      velocityMultiplier: 2.9,
      polarity: 0.22,
      subjectivity: 0.15,
      pValue: '0.0082',
      uplift: 47.1,
    },
  ]

  const signalFlow = [
    { label: 'CONTENT', desc: 'Analyzes hook types, format taxonomy, length, and media distribution.' },
    { label: 'AUDIENCE', desc: 'Measures viral coefficient, share velocity, and organic engagement multipliers.' },
    { label: 'SENTIMENT', desc: 'Dual NLP linguistic parsing using TextBlob polarity and spaCy semantic entities.' },
    { label: 'EXPERIMENT', desc: 'SciPy statistical hypothesis testing validating A/B performance variances.' },
    { label: 'TREND', desc: 'Time-series retention decay and audience interest trajectory modeling.' },
    { label: 'RECOMMENDATION', desc: 'Algorithmic content strategy guidance and publishing schedule recommendations.' },
  ]

  return (
    <article className="py-20 border-b border-white/[0.08] relative">
      {/* Chapter Marker */}
      <div className="flex items-center justify-between font-mono text-xs text-[#94a3b8] mb-8 pb-4 border-b border-white/[0.06] uppercase tracking-widest">
        <span className="flex items-center gap-2">
          <span className="text-[#00f0ff]">PROJECT 02</span>
          <span>// SOCIAL ANALYTICS &amp; NLP</span>
        </span>
        <span className="text-[#00f0ff] font-semibold">{project.timeline || project.year}</span>
      </div>

      {/* Title & Links */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-baseline">
        <div className="lg:col-span-8">
          <h3 className="font-display text-4xl sm:text-7xl md:text-8xl font-black tracking-tighter text-[#f1f5f9] uppercase break-words">
            {project.title}
          </h3>
          <p className="font-mono text-sm sm:text-base text-[#00f0ff] mt-2 tracking-wider uppercase">
            {project.subtitle}
          </p>
        </div>

        <div className="lg:col-span-4 flex flex-wrap gap-3 lg:justify-end">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#f1f5f9] text-[#06080f] px-5 py-2.5 font-mono text-xs font-semibold hover:bg-[#00f0ff] hover:text-white transition-colors duration-200"
              data-cursor="LIVE"
            >
              <span>VIEW LIVE PROJECT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/20 text-[#f1f5f9] px-5 py-2.5 font-mono text-xs font-semibold hover:border-[#00f0ff] hover:text-[#00f0ff] transition-colors duration-200"
              data-cursor="CODE"
            >
              <span>VIEW SOURCE</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>

      {/* Summary */}
      <p className="font-sans text-lg sm:text-xl text-[#eceae5] max-w-3xl leading-relaxed mb-12 font-light">
        {project.summary}
      </p>

      {/* Visual Metaphor: Analytical Data Signal Vector */}
      <div className="my-12 border-y border-white/[0.08] py-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-xs">
          <span className="text-[#f1f5f9] font-semibold">// HOW IT WORKS: ANALYTICAL PIPELINE</span>
          <span className="text-[#64748b]">CLICK TO STEP THROUGH PIPELINE</span>
        </div>

        {/* Progression Nodes */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {signalFlow.map((node, i) => (
            <button
              key={node.label}
              type="button"
              onClick={() => setActiveSignal(i)}
              className={`p-2.5 sm:p-3.5 text-left transition-all border ${
                activeSignal === i
                  ? 'border-[#00f0ff] bg-[#0b0f19] text-[#f1f5f9]'
                  : 'border-white/[0.06] hover:border-white/20 text-[#94a3b8]'
              }`}
              data-cursor="SIGNAL"
            >
              <span className="font-mono text-[10px] text-[#00f0ff] block mb-1">
                SIGNAL 0{i + 1}
              </span>
              <span className="font-display text-xs font-bold block truncate">
                {node.label}
              </span>
            </button>
          ))}
        </div>

        {/* Minimal Linguistic Wave Graphic */}
        <div className="p-4 sm:p-6 bg-[#0b0f19] border border-white/[0.06] space-y-4">
          <div className="flex justify-between items-center text-xs font-mono text-[#94a3b8]">
            <span className="text-[#00f0ff] font-semibold">
              ACTIVE STAGE: {signalFlow[activeSignal].label}
            </span>
            <span className="text-[#64748b]">NLP: TEXTBLOB + SPACY · TESTING: SCIPY</span>
          </div>

          <svg className="w-full h-12" viewBox="0 0 800 60" fill="none">
            <path
              d="M0 30 Q 100 5, 200 30 T 400 30 T 600 15 T 800 30"
              stroke="#00f0ff"
              strokeWidth="2"
            />
            <path
              d="M0 30 Q 100 15, 200 30 T 400 30 T 600 25 T 800 30"
              stroke="#f1f5f9"
              strokeOpacity="0.2"
              strokeWidth="1.5"
            />
          </svg>

          <p className="font-sans text-sm text-[#eceae5] leading-relaxed max-w-2xl">
            {signalFlow[activeSignal].desc}
          </p>
        </div>
      </div>

      {/* Interactive Dual-NLP & Viral Velocity Console */}
      <div className="my-12 rounded-2xl border border-white/[0.08] bg-[#06080f] overflow-hidden shadow-2xl">
        {/* Terminal Header */}
        <div className="px-4 py-3 sm:px-6 sm:py-4 bg-[#0b0f19] border-b border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3">
          <div className="flex items-center gap-2 font-mono text-xs text-[#f1f5f9] flex-wrap">
            <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse shrink-0" />
            <span className="font-semibold break-words">RESONIX // INTERACTIVE CONTENT ANALYZER</span>
          </div>

          <div className="font-mono text-[11px] text-[#64748b]">
            SPACY · TEXTBLOB · SCIPY STATS
          </div>
        </div>

        <div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8">
          {/* Strategy Selector */}
          <div className="space-y-3">
            <div className="flex items-center justify-between font-mono text-xs">
              <span className="text-[#64748b] uppercase">// SELECT A CONTENT FORMAT TO COMPARE:</span>
              <span className="text-[#00f0ff] font-semibold">{hookStrategies[selectedHookIdx].name}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {hookStrategies.map((strat, idx) => (
                <button
                  key={strat.name}
                  type="button"
                  onClick={() => setSelectedHookIdx(idx)}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    selectedHookIdx === idx
                      ? 'border-[#00f0ff] bg-[#16171a] shadow-[0_0_20px_rgba(0,240,255,0.15)] text-[#f1f5f9]'
                      : 'border-white/[0.08] bg-[#0b0f19]/60 hover:border-white/20 text-[#94a3b8]'
                  }`}
                  data-cursor="SELECT"
                >
                  <div className="font-mono text-[10px] text-[#00f0ff] mb-1">STRATEGY 0{idx + 1}</div>
                  <div className="font-display font-bold text-sm mb-1">{strat.name}</div>
                  <div className="font-mono text-xs text-[#94a3b8]">Velocity: <span className="text-[#f1f5f9] font-semibold">{strat.velocityMultiplier}x</span></div>
                </button>
              ))}
            </div>
          </div>

          {/* Dials & NLP Gauges */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-xl bg-[#0b0f19]/80 border border-white/[0.06]">
            {/* Polarity Gauge */}
            <div className="space-y-2">
              <div className="flex justify-between font-mono text-xs">
                <span className="text-[#94a3b8]">TEXTBLOB POLARITY</span>
                <span className="text-[#00f0ff] font-bold">{hookStrategies[selectedHookIdx].polarity > 0 ? `+${hookStrategies[selectedHookIdx].polarity}` : hookStrategies[selectedHookIdx].polarity}</span>
              </div>
              <div className="h-2 w-full bg-white/[0.06] rounded-full overflow-hidden relative">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 via-[#00f0ff] to-emerald-400 transition-all duration-300"
                  style={{ width: `${((hookStrategies[selectedHookIdx].polarity + 1) / 2) * 100}%` }}
                />
              </div>
              <div className="flex justify-between text-[10px] font-mono text-[#64748b]">
                <span>-1.0 (Critical)</span>
                <span>0.0 (Neutral)</span>
                <span>+1.0 (Positive)</span>
              </div>
            </div>

            {/* Subjectivity Gauge */}
            <div className="space-y-2">
              <div className="flex justify-between font-mono text-xs">
                <span className="text-[#94a3b8]">SUBJECTIVITY RATIO</span>
                <span className="text-[#f1f5f9] font-bold">{hookStrategies[selectedHookIdx].subjectivity}</span>
              </div>
              <div className="h-2 w-full bg-white/[0.06] rounded-full overflow-hidden relative">
                <div
                  className="h-full bg-[#00f0ff] transition-all duration-300"
                  style={{ width: `${hookStrategies[selectedHookIdx].subjectivity * 100}%` }}
                />
              </div>
              <div className="flex justify-between text-[10px] font-mono text-[#64748b]">
                <span>0.0 (Objective)</span>
                <span>1.0 (Opinion-driven)</span>
              </div>
            </div>
          </div>

          {/* SciPy A/B Statistical Verification Result */}
          <div className="p-4 sm:p-5 rounded-xl border border-[#00f0ff]/30 bg-[#00f0ff]/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-[#00f0ff] font-bold flex-wrap">
                <span className="w-2 h-2 rounded-full bg-[#00f0ff] shrink-0" />
                <span className="break-words">STATISTICAL HYPOTHESIS CONFIRMED // p = {hookStrategies[selectedHookIdx].pValue} (&lt; 0.05)</span>
              </div>
              <p className="text-[#eceae5] font-sans text-xs">
                Two-sample Welch&apos;s t-test confirms statistically significant engagement difference across test cohorts (N = 1,400).
              </p>
            </div>

            <div className="text-left sm:text-right shrink-0">
              <span className="text-[10px] text-[#64748b] block">ESTIMATED UPLIFT</span>
              <span className="text-xl font-display font-black text-[#00f0ff]">
                +{hookStrategies[selectedHookIdx].uplift}%
              </span>
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
        <span>NEXT: HOTEL BOOKING PREDICTION</span>
        <ArrowDown className="w-3.5 h-3.5 text-[#00f0ff]" />
        <div className="h-[1px] w-8 sm:w-12 bg-white/10 hidden min-[400px]:block" />
      </div>
    </article>
  )
}
