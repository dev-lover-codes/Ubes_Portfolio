"use client"

import React, { useState } from 'react'
import { ArrowUpRight, FolderGit2, Search, ChevronDown } from 'lucide-react'
import { GithubIcon } from './BrandIcons'
import { ARCHIVE_PROJECTS } from '../data/portfolioData'

export const ProjectArchive: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('ALL')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const filteredProjects = ARCHIVE_PROJECTS.filter((p) => {
    const matchesFilter =
      activeFilter === 'ALL'
        ? true
        : activeFilter === 'SQL & DATA'
        ? p.technologies.some((t) => ['SQL', 'MySQL', 'Pandas', 'Analytics'].includes(t))
        : activeFilter === 'ML'
        ? p.technologies.some((t) => ['Machine Learning', 'Z-Score Outliers'].includes(t))
        : p.technologies.some((t) => ['Node.js', 'JavaScript', 'HTML', 'CSS'].includes(t))

    const matchesSearch =
      searchQuery.trim() === '' ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))

    return matchesFilter && matchesSearch
  })

  return (
    <section
      id="archive"
      className="py-24 md:py-36 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-t border-white/[0.08]"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-[#00f0ff] uppercase tracking-widest mb-3">
            <span>05 // MORE PROJECTS</span>
            <span className="text-[#64748b]">·</span>
            <span className="text-[#94a3b8]">A FEW MORE THINGS I&apos;VE BUILT</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#f1f5f9]">
            Other Projects &amp; Experiments
          </h2>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs w-full md:w-auto">
          {/* Search Box */}
          <div className="relative flex items-center w-full sm:w-auto">
            <Search className="w-3.5 h-3.5 text-[#64748b] absolute left-3 pointer-events-none" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full sm:w-auto bg-[#0b0f19] border border-white/10 rounded-full pl-8 pr-4 py-1.5 text-xs text-[#f1f5f9] placeholder-[#64748b] focus:border-[#00f0ff] outline-none"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5">
            {['ALL', 'SQL & DATA', 'ML', 'WEB'].map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-3 py-1.5 rounded-full border transition-all ${
                  activeFilter === filter
                    ? 'border-[#00f0ff] text-[#00f0ff] bg-[#00f0ff]/10 shadow-[0_0_12px_rgba(0,240,255,0.2)] font-semibold'
                    : 'border-white/10 text-[#94a3b8] hover:text-[#f1f5f9] hover:border-white/20 bg-[#0b0f19]/60'
                }`}
                data-cursor="FILTER"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Repository Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredProjects.map((item, idx) => {
          const isExpanded = expandedId === item.id

          return (
            <div
              key={item.id}
              className="archive-card p-4 sm:p-6 rounded-2xl border border-white/[0.08] bg-[#0b0f19]/60 hover:border-[#00f0ff]/40 hover:bg-[#141519] transition-all duration-200 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="flex items-center gap-2">
                    <FolderGit2 className="w-3.5 h-3.5 text-[#00f0ff]" />
                    <span className="text-[#00f0ff] font-bold">0{idx + 1}</span>
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-white/[0.05] text-[#94a3b8]">
                    {item.year}
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-xl font-bold text-[#f1f5f9] group-hover:text-[#00f0ff] transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-mono text-xs text-[#00f0ff] mt-0.5">
                    {item.subtitle}
                  </p>
                </div>

                <p className="font-sans text-xs text-[#94a3b8] leading-relaxed">
                  {item.description}
                </p>

                {/* Interactive Expandable Details Drawer */}
                <div
                  className={`transition-all duration-300 ease-out overflow-hidden ${
                    isExpanded ? 'max-h-80 opacity-100 pt-3 border-t border-white/[0.08]' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="space-y-2 font-mono text-[11px]">
                    <div className="text-[#00f0ff] uppercase tracking-wider font-semibold">
                      // ARCHITECTURAL SCOPE &amp; PATTERNS:
                    </div>
                    {item.patternsOrFeatures && item.patternsOrFeatures.length > 0 && (
                      <ul className="list-disc list-inside text-[#94a3b8] space-y-1 font-sans text-xs">
                        {item.patternsOrFeatures.map((feat) => (
                          <li key={feat}>{feat}</li>
                        ))}
                      </ul>
                    )}
                    <div className="pt-2 flex flex-wrap gap-1">
                      {item.technologies.map((tech) => (
                        <span key={tech} className="text-[9px] px-2 py-0.5 rounded bg-white/[0.04] text-[#7a7d86] border border-white/[0.05]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setExpandedId(isExpanded ? null : item.id)}
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-[#94a3b8] hover:text-[#f1f5f9] px-2.5 py-1 rounded bg-[#18191c] border border-white/10 hover:border-white/20 transition-all cursor-pointer"
                    data-cursor="EXPAND"
                  >
                    <span>{isExpanded ? 'LESS' : 'DETAILS'}</span>
                    <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                  </button>

                  <div className="flex flex-wrap gap-1.5">
                    {item.technologies.slice(0, 2).map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] text-[#94a3b8] bg-[#18191c] px-2 py-0.5 rounded border border-white/[0.05]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {item.githubUrl && (
                  <a
                    href={item.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-[#f1f5f9] hover:text-[#00f0ff] px-3 py-1.5 rounded bg-[#18191c] border border-white/10 hover:border-[#00f0ff] transition-colors shrink-0"
                    data-cursor="CODE"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GITHUB</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
