"use client"

import React, { useState } from 'react'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { FEATURED_PROJECTS } from '../../data/portfolioData'

export const GroupDnaChapter: React.FC = () => {
  const project = FEATURED_PROJECTS[3]
  const [activeStep, setActiveStep] = useState<number>(3)
  const [hoveredCell, setHoveredCell] = useState<{ day: string; hour: number; count: number } | null>(null)

  const transformationSteps = [
    { label: 'CONVERSATION', desc: 'Raw multi-participant chat stream with deletions, attachments, and timestamps.' },
    { label: 'MESSAGES', desc: 'Chat parser handling multiline messages, user handles, and media placeholders.' },
    { label: 'TIMESTAMPS', desc: 'Isolates date, hour, and response latency between conversational turns.' },
    { label: 'ACTIVITY DENSITY', desc: 'Calculates message frequencies across days and active hours.' },
    { label: 'HEATMAP', desc: 'NumPy matrix visualizing hourly activity rhythms and peak time windows.' },
    { label: 'BEHAVIOR', desc: 'Rule-based classification detecting conversational roles and participation archetypes.' },
  ]

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  const getIntensity = (dayIdx: number, hour: number) => {
    if (hour >= 21 && hour <= 23) return 0.85 + (dayIdx % 2) * 0.1
    if (hour >= 18 && hour < 21) return 0.65
    if (hour >= 12 && hour <= 14) return 0.45
    if (hour >= 0 && hour <= 4) return dayIdx === 5 || dayIdx === 6 ? 0.5 : 0.08
    if (hour >= 5 && hour <= 8) return 0.05
    return 0.25
  }

  return (
    <article className="py-20 border-b border-white/[0.08] relative">
      {/* Chapter Marker */}
      <div className="flex items-center justify-between font-mono text-xs text-[#9da0a8] mb-8 pb-4 border-b border-white/[0.06] uppercase tracking-widest">
        <span className="flex items-center gap-2">
          <span className="text-[#e65c24]">PROJECT 04</span>
          <span>// CHAT DATA &amp; BEHAVIOR ANALYSIS</span>
        </span>
        <span className="text-[#e65c24] font-semibold">{project.year}</span>
      </div>

      {/* Title & Action Links */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-baseline">
        <div className="lg:col-span-8">
          <h3 className="font-display text-4xl sm:text-7xl md:text-8xl font-black tracking-tighter text-[#f4f3ef] uppercase break-words">
            {project.title}
          </h3>
          <p className="font-mono text-sm sm:text-base text-[#e65c24] mt-2 tracking-wider uppercase">
            {project.subtitle}
          </p>
        </div>

        <div className="lg:col-span-4 flex flex-wrap gap-3 lg:justify-end">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/20 text-[#f4f3ef] px-5 py-2.5 font-mono text-xs font-semibold hover:border-[#e65c24] hover:text-[#e65c24] transition-colors duration-200"
              data-cursor="CODE"
            >
              <span>VIEW REPOSITORY</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>

      {/* Summary */}
      <p className="font-sans text-lg sm:text-xl text-[#eceae5] max-w-3xl leading-relaxed mb-12 font-light">
        {project.summary}
      </p>

      {/* Visual Metaphor: From Raw Conversation to Heatmap & Behavior */}
      <div className="my-12 border-y border-white/[0.08] py-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-xs">
          <span className="text-[#f4f3ef] font-semibold">
            // HOW IT WORKS: DATA PIPELINE
          </span>
          <span className="text-[#5e6068]">TRANSFORMATION STAGES</span>
        </div>

        {/* Transformation Pipeline Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {transformationSteps.map((step, idx) => (
            <button
              key={step.label}
              type="button"
              onClick={() => setActiveStep(idx)}
              className={`p-2.5 sm:p-3.5 text-left transition-all border ${
                activeStep === idx
                  ? 'border-[#e65c24] bg-[#111215] text-[#f4f3ef]'
                  : 'border-white/[0.06] hover:border-white/20 text-[#9da0a8]'
              }`}
              data-cursor="STEP"
            >
              <span className="font-mono text-[10px] text-[#e65c24] block mb-1">
                0{idx + 1}
              </span>
              <span className="font-display text-xs font-bold block truncate">
                {step.label}
              </span>
            </button>
          ))}
        </div>

        {/* Enhanced 7x24 Heatmap Matrix & Behavioral Archetypes Console */}
        <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-[#0c0d0e] border border-white/[0.08] space-y-6 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#e65c24] animate-pulse shrink-0" />
              <span className="text-[#f4f3ef] font-semibold break-words">NUMPY HEATMAP // 7 DAYS × 24 HOURS ACTIVITY PATTERN</span>
            </div>
            <span className="text-[#e65c24] font-semibold break-words">
              {hoveredCell
                ? `${hoveredCell.day} at ${hoveredCell.hour}:00 — DENSITY: ${(hoveredCell.count * 100).toFixed(0)}% (${Math.round(hoveredCell.count * 48)} msgs)`
                : 'HOVER OVER ANY TIME BLOCK TO SEE ACTIVITY'}
            </span>
          </div>

          {/* Heatmap Grid & Timeline Axis inside unified scroll container */}
          <div className="overflow-x-auto pb-3 pt-2 -mx-2 px-2">
            <div className="min-w-[420px] space-y-2">
              {days.map((day, dayIdx) => (
                <div key={day} className="flex items-center gap-3">
                  <span className="w-8 text-[11px] font-mono text-[#9da0a8] font-semibold shrink-0">
                    {day}
                  </span>
                  <div className="flex gap-1.5 flex-1">
                    {Array.from({ length: 24 }).map((_, hour) => {
                      const intensity = getIntensity(dayIdx, hour)
                      return (
                        <div
                          key={hour}
                          onMouseEnter={() =>
                            setHoveredCell({ day, hour, count: intensity })
                          }
                          className="h-6 flex-1 rounded-[2px] transition-all duration-150 cursor-pointer hover:scale-125 hover:z-10 hover:shadow-[0_0_10px_#e65c24]"
                          style={{
                            backgroundColor:
                              intensity > 0.7
                                ? '#e65c24'
                                : intensity > 0.4
                                ? 'rgba(230, 92, 36, 0.55)'
                                : intensity > 0.15
                                ? 'rgba(230, 92, 36, 0.22)'
                                : 'rgba(255, 255, 255, 0.05)',
                          }}
                        />
                      )
                    })}
                  </div>
                </div>
              ))}

              <div className="flex items-center gap-3 pt-3 border-t border-white/[0.06] text-[10px] font-mono text-[#5e6068]">
                <span className="w-8 shrink-0"></span>
                <div className="flex justify-between flex-1">
                  <span>00:00</span>
                  <span>04:00</span>
                  <span>08:00</span>
                  <span>12:00</span>
                  <span>16:00</span>
                  <span>20:00</span>
                  <span>23:00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Participant Behavioral Archetype Cards */}
          <div className="pt-6 border-t border-white/[0.08] space-y-4">
            <div className="flex items-center justify-between font-mono text-xs">
              <span className="text-[#5e6068] uppercase">// PARTICIPANT BEHAVIOR ARCHETYPES:</span>
              <span className="text-[#e65c24]">BASED ON RESPONSE SPEED &amp; ACTIVITY PATTERNS</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { title: 'The Night Owl', badge: 'DIURNAL SKEW', metric: '23:00 – 02:00', desc: '42% of volume concentrated late-night with short 18s latency.' },
                { title: 'The First Responder', badge: 'CATALYST ROLE', metric: '14s Avg Latency', desc: 'Consistently sends first reply across 78% of active threads.' },
                { title: 'The Anchor', badge: 'HIGH DENSITY', metric: '38 Wds / Msg', desc: 'Highest context length and structural synthesis contributions.' },
                { title: 'The Weekend Driver', badge: 'PERIODIC PEAK', metric: 'Sat & Sun Peaks', desc: 'Spikes during weekend leisure hours with media attachment ratio 2.4x.' },
              ].map((arch) => (
                <div key={arch.title} className="p-4 rounded-xl bg-[#111215] border border-white/[0.06] space-y-2 hover:border-[#e65c24]/40 transition-colors">
                  <div className="flex items-center justify-between font-mono text-[9px]">
                    <span className="text-[#e65c24] font-semibold">{arch.badge}</span>
                    <span className="text-[#5e6068]">{arch.metric}</span>
                  </div>
                  <h4 className="font-display text-sm font-bold text-[#f4f3ef]">{arch.title}</h4>
                  <p className="font-sans text-[11px] text-[#9da0a8] leading-relaxed">{arch.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Key Implementations & Technologies */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <h4 className="font-mono text-xs uppercase tracking-widest text-[#5e6068] mb-4">
            // KEY FEATURES
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.highlights.map((highlight) => (
              <div
                key={highlight}
                className="flex items-start gap-2.5 p-3.5 border border-white/[0.06]"
              >
                <CheckCircle2 className="w-4 h-4 text-[#e65c24] shrink-0 mt-0.5" />
                <span className="text-xs text-[#eceae5] leading-relaxed">
                  {highlight}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-4">
          <h4 className="font-mono text-xs uppercase tracking-widest text-[#5e6068] mb-4">
            // TECHNOLOGIES
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-[#111215] border border-white/[0.08] font-mono text-xs text-[#f4f3ef]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
