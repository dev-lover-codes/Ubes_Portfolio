"use client"

import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, CheckCircle2, Milestone, Layers, Sparkles } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export const EvolutionTimeline: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const pinContainerRef = useRef<HTMLDivElement>(null)
  const [activeStage, setActiveStage] = useState(0)

  const progressionSteps = [
    {
      year: '2025',
      domain: 'LEARNING THE FOUNDATIONS',
      title: 'Learning the Foundations',
      badge: '2025 // GETTING STARTED',
      metrics: ['Modular CRUD Apps', 'Relational Schemas', 'Full-Stack Integration'],
      description:
        'Learning the fundamentals of programming, databases, and application development by building projects.',
      milestones: [
        {
          name: 'Monthly Expense Tracker',
          period: 'Aug 2025',
          tech: 'Python · SQL · Analytics',
          summary: 'Expense recording, categorization logic, relational data storage, and monthly budgeting summaries.',
          highlight: 'First relational database project with transaction ledger persistence.',
        },
        {
          name: 'Job Finder Application',
          period: 'Oct 2025',
          tech: 'Node.js · JavaScript · SQL · HTML · CSS',
          summary: 'Multi-criteria role search, database query optimization, saved listings, and modular backend design.',
          highlight: 'Modular server architecture with dynamic search filters.',
        },
      ],
      vector: 'SOFTWARE',
    },
    {
      year: '2026',
      domain: 'EXPLORING DATA & MACHINE LEARNING',
      title: 'Exploring Data & Machine Learning',
      badge: '2026 // EXPLORING DATA & ML',
      metrics: ['200,000 Txns Audited', 'Supervised ML Models', 'Temporal Activity Analysis'],
      description:
        'Exploring data analysis, machine learning, and ways to turn unstructured data into useful insights.',
      milestones: [
        {
          name: 'Hotel Guest Intelligence',
          period: '2026',
          tech: 'RapidMiner · Power BI · Machine Learning',
          summary: 'Supervised classification models predicting booking cancellations, guest behavioral segmentation, and revenue preservation.',
          highlight: 'Classification models for cancellation risk and revenue analysis.',
        },
        {
          name: 'GroupDNA Behavioral Analytics',
          period: 'Jun 2026',
          tech: 'Python · NumPy · datetime',
          summary: 'Export parser, hourly activity matrix, response latency calculation, and rule-based archetype classification.',
          highlight: 'NumPy activity heatmap analyzing group conversational patterns.',
        },
        {
          name: 'RedFlag SQL Fraud Detection',
          period: 'Aug 2026',
          tech: 'MySQL · Window Functions · CTEs',
          summary: 'Analyzed ~200,000 transactions across 12 fraud patterns including velocity fraud and round-amount clustering.',
          highlight: 'Optimized multi-level CTE execution across 200k records.',
        },
        {
          name: 'Bank Transaction Analysis',
          period: 'Jul 2026',
          tech: 'Python · Pandas · Z-Score Outliers',
          summary: 'Automated statement normalization, vendor name extraction, and statistical outlier isolation.',
          highlight: 'Automated statement ETL pipeline with statistical deviation bounds.',
        },
      ],
      vector: 'DATA & ML',
    },
    {
      year: '2026',
      domain: 'BUILDING MORE COMPLEX SYSTEMS',
      title: 'Building More Complex Systems',
      badge: '2026 // BUILDING WITH AI',
      metrics: ['Anomaly Detection Models', 'SciPy Hypothesis Testing', 'LLM Integration'],
      description:
        'Bringing together software, data, machine learning, and AI in larger projects.',
      milestones: [
        {
          name: 'ResoniX Social Intelligence',
          period: 'Aug – Sep 2026',
          tech: 'Python · Streamlit · SciPy · TextBlob · spaCy',
          summary: 'Viral coefficient analysis, NLP sentiment decomposition, SciPy hypothesis testing, and trend forecasting.',
          highlight: 'Dual-engine NLP sentiment analysis & two-sample hypothesis validation.',
        },
        {
          name: 'LEDGR Financial Intelligence',
          period: 'Sep 2026',
          tech: 'FastAPI · IsolationForest · SQLite · NVIDIA NIM',
          summary: 'Hybrid anomaly detection, automated settlement reconciliation, merchant risk scoring, and natural-language financial queries.',
          highlight: 'Full-stack financial analysis app with anomaly detection & LLM insights.',
        },
      ],
      vector: 'AI SYSTEMS',
    },
  ]

  const trajectoryPillars = [
    'SOFTWARE',
    'DATA',
    'MACHINE LEARNING',
    'NLP',
    'AI SYSTEMS',
  ]

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 20%',
        end: 'bottom 80%',
        scrub: true,
        onUpdate: (self) => {
          const p = self.progress
          if (p < 0.35) {
            setActiveStage(0)
          } else if (p < 0.7) {
            setActiveStage(1)
          } else {
            setActiveStage(2)
          }
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="journey"
      ref={sectionRef}
      className="py-24 md:py-36 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-t border-white/[0.08]"
    >
      {/* Chapter Marker & Title */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-[#00f0ff] uppercase tracking-widest mb-3">
            <span>03 // HOW I GOT HERE</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#f1f5f9]">
            Evolution of Projects
          </h2>
        </div>
        <p className="font-mono text-xs text-[#94a3b8] max-w-md leading-relaxed">
          How my work has evolved over time — starting from core software foundations and data analysis, then moving into machine learning and AI applications.
        </p>
      </div>

      {/* Trajectory Continuum Flow Bar with Illuminated Glow */}
      <div className="mb-14 p-4 sm:p-5 rounded-2xl border border-white/[0.08] bg-[#0b0f19]/80 backdrop-blur-sm flex flex-wrap items-center justify-between gap-3 sm:gap-4 text-xs font-mono">
        <div className="flex items-center gap-2 text-[#64748b] uppercase">
          <Layers className="w-3.5 h-3.5 text-[#00f0ff]" />
          <span>A FEW STEPS ALONG THE WAY</span>
        </div>
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-3">
          {trajectoryPillars.map((pillar, idx) => {
            const isHighlighted =
              (activeStage === 0 && (pillar === 'SOFTWARE' || pillar === 'DATA')) ||
              (activeStage === 1 && (pillar === 'DATA' || pillar === 'MACHINE LEARNING' || pillar === 'NLP')) ||
              (activeStage === 2 && (pillar === 'NLP' || pillar === 'AI SYSTEMS'))

            return (
              <div key={pillar} className="inline-flex items-center gap-1.5 sm:gap-3">
                <span
                  className={`px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-[11px] transition-all duration-300 font-medium ${
                    isHighlighted
                      ? 'bg-[#00f0ff]/15 text-[#00f0ff] border border-[#00f0ff]/40 shadow-[0_0_12px_rgba(0,240,255,0.2)]'
                      : 'text-[#64748b] border border-transparent'
                  }`}
                >
                  {pillar}
                </span>
                {idx < trajectoryPillars.length - 1 && (
                  <ArrowRight className="w-3 h-3 text-[#334155]" />
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Main Interactive Stage with Illuminated Laser Spine */}
      <div ref={pinContainerRef} className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Illuminated Vertical Stage Selector with Laser Trace */}
        <div className="lg:col-span-4 relative">
          {/* Vertical Glowing Laser Guide */}
          <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-[#00f0ff]/40 via-white/10 to-[#00f0ff]/40 hidden sm:block" />

          <div className="flex flex-col gap-4 relative z-10">
            {progressionSteps.map((step, idx) => {
              const isActive = activeStage === idx

              return (
                <button
                  key={step.year + step.domain}
                  type="button"
                  onClick={() => setActiveStage(idx)}
                  className={`text-left p-4 sm:p-6 rounded-2xl transition-all duration-300 border relative overflow-hidden ${
                    isActive
                      ? 'border-[#00f0ff] bg-[#16171b] shadow-[0_0_30px_rgba(0,240,255,0.15)] text-[#f1f5f9]'
                      : 'border-white/[0.08] bg-[#0f1013]/60 hover:border-white/20 text-[#94a3b8]'
                  }`}
                  data-cursor="SELECT"
                >
                  <div className="flex items-center justify-between font-mono text-xs mb-2">
                    <span className="flex items-center gap-2">
                      <span className={`rounded-full transition-all duration-300 ${isActive ? 'w-2.5 h-2.5 bg-[#00f0ff] animate-pulse ring-4 ring-[#00f0ff]/25 shadow-[0_0_10px_rgba(0,240,255,0.8)]' : 'w-2 h-2 bg-[#64748b]'}`} />
                      <span className={isActive ? 'text-[#00f0ff] font-bold' : 'text-[#64748b]'}>
                        {step.year}
                      </span>
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-white/[0.05] text-[#94a3b8]">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold tracking-tight mb-2">
                    {step.domain}
                  </h3>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {step.metrics.map((m) => (
                      <span key={m} className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/[0.04] text-[#7a7d86]">
                        {m}
                      </span>
                    ))}
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Right Column: Selected Phase Deep Showcase */}
        <div className="lg:col-span-8 space-y-8 pl-0 lg:pl-4">
          <div className="p-5 sm:p-6 md:p-8 rounded-2xl bg-[#0b0f19]/80 border border-white/[0.08] relative overflow-hidden backdrop-blur-sm space-y-4">
            <div className="flex items-center justify-between font-mono text-xs">
              <span className="text-[#00f0ff] tracking-wider uppercase font-semibold">
                {progressionSteps[activeStage].badge}
              </span>
              <span className="text-[#64748b]">
                {progressionSteps[activeStage].year}
              </span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-[#f1f5f9] tracking-tight">
              {progressionSteps[activeStage].title}
            </h3>

            <p className="font-sans text-sm sm:text-base text-[#94a3b8] leading-relaxed max-w-2xl">
              {progressionSteps[activeStage].description}
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              {progressionSteps[activeStage].metrics.map((metric) => (
                <div key={metric} className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#18191c] border border-white/10 text-xs font-mono text-[#f1f5f9]">
                  <CheckCircle2 className="w-3 h-3 text-[#00f0ff]" />
                  <span>{metric}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Milestone Projects Grid for This Phase */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs text-[#64748b] uppercase tracking-wider">
              <Milestone className="w-3.5 h-3.5 text-[#00f0ff]" />
              <span>A FEW PROJECTS THAT MARKED THE JOURNEY</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {progressionSteps[activeStage].milestones.map((m) => (
                <div
                  key={m.name}
                  className="p-6 rounded-2xl border border-white/[0.08] bg-[#0b0f19]/60 hover:border-[#00f0ff]/40 hover:bg-[#15161a] transition-all duration-200 flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between font-mono text-[10px]">
                      <span className="text-[#00f0ff] font-semibold">{m.period}</span>
                      <span className="text-[#64748b]">{m.tech}</span>
                    </div>
                    <h4 className="font-display text-lg sm:text-xl font-bold text-[#f1f5f9] group-hover:text-[#00f0ff] transition-colors">
                      {m.name}
                    </h4>
                    <p className="font-sans text-xs text-[#94a3b8] leading-relaxed">
                      {m.summary}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/[0.06] flex items-center gap-1.5 text-[11px] font-mono text-[#00f0ff]">
                    <Sparkles className="w-3 h-3 shrink-0" />
                    <span className="truncate">{m.highlight}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
