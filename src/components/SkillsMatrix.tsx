"use client"

import React, { useState } from 'react'
import { Code2, Cpu, Database, Sparkles, Terminal, Layers } from 'lucide-react'
import { SKILL_CATEGORIES, PERSONAL_INFO } from '../data/portfolioData'

export const SkillsMatrix: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL')
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  // Contextual project provenance mapping
  const skillProvenance: Record<string, { tier: string; project: string; note: string }> = {
    Python: { tier: 'USED FOR', project: 'LEDGR / ResoniX / GroupDNA', note: 'Used for APIs, data analysis, machine learning pipelines, and backend logic.' },
    Java: { tier: 'FOCUS', project: 'Coursework & Certs', note: 'Object-oriented programming, data structures, and core software design.' },
    JavaScript: { tier: 'USED FOR', project: 'Web Apps / Portfolio', note: 'Modern frontend interfaces, asynchronous operations, and Node.js backends.' },
    C: { tier: 'FOCUS', project: 'Core CS Coursework', note: 'Pointers, memory management, and computational foundations.' },
    'C++': { tier: 'FOCUS', project: 'DSA / LeetCode', note: 'Algorithms, data structures, STL containers, and competitive programming.' },
    SQL: { tier: 'USED FOR', project: 'RedFlag SQL / LEDGR', note: 'Complex queries, CTEs, aggregation, indexing, and relational schemas.' },
    'Data Structures & Algorithms': { tier: 'FOCUS', project: 'DSU Curriculum & LeetCode', note: 'Trees, graphs, dynamic programming, sorting, searching, and algorithm design.' },
    'Object-Oriented Programming': { tier: 'FOCUS', project: 'Multiple Projects', note: 'Encapsulation, inheritance, polymorphism, abstraction, and clean architecture.' },
    'Database Management Systems': { tier: 'FOCUS', project: 'RedFlag & LEDGR', note: 'Relational schemas, normalization, transactions, and indexing.' },
    'Operating Systems': { tier: 'FOCUS', project: 'Core CS Coursework', note: 'Processes, concurrency, threads, memory management, and file systems.' },
    'Machine Learning': { tier: 'FOCUS', project: 'LEDGR & Hotel ML', note: 'Supervised classification, model evaluation, feature engineering, and anomaly detection.' },
    'Generative AI': { tier: 'FOCUS', project: 'LEDGR & Experiments', note: 'LLM integration, prompt engineering, NIM microservices, and structured JSON output.' },
    'Data Science': { tier: 'USED FOR', project: 'Bank Analytics / ResoniX', note: 'Exploratory data analysis, statistical patterns, and data visualization.' },
    NumPy: { tier: 'USED FOR', project: 'GroupDNA', note: 'Array manipulation, matrix operations, and mathematical computations.' },
    Pandas: { tier: 'USED FOR', project: 'Data Analysis Projects', note: 'DataFrames, cleaning, aggregation, grouping, and transforming structured datasets.' },
    'Power BI': { tier: 'USED FOR', project: 'Hotel Analytics', note: 'Interactive dashboards, visual reporting, and business metrics tracking.' },
    RapidMiner: { tier: 'USED FOR', project: 'Hotel Analytics', note: 'Data prep, decision trees, Naive Bayes, and cross-validation workflows.' },
    NoSQL: { tier: 'FOCUS', project: 'Coursework / Projects', note: 'Document and key-value store concepts for semi-structured data.' },
    HTML: { tier: 'USED FOR', project: 'Portfolio & Apps', note: 'Semantic HTML5 markup, accessibility, and modern page layouts.' },
    CSS: { tier: 'USED FOR', project: 'Modern UI Systems', note: 'Tailwind CSS, responsive design, animations, and clean interfaces.' },
    'Node.js': { tier: 'USED FOR', project: 'Job Finder App', note: 'Building RESTful APIs, routing, and backend server logic.' },
    Git: { tier: 'USED FOR', project: 'Everyday Workflow', note: 'Branching, committing, tracking changes, and project version management.' },
    GitHub: { tier: 'USED FOR', project: `@${PERSONAL_INFO.github.split('/').filter(Boolean).pop() || 'profile'}`, note: 'Hosting repositories, collaboration, project documentation, and version tracking.' },
  }

  const categoryIcons: Record<string, React.ReactNode> = {
    LANGUAGES: <Code2 className="w-4 h-4 text-[#00f0ff]" />,
    'CORE COMPUTER SCIENCE': <Cpu className="w-4 h-4 text-[#00f0ff]" />,
    'AI & MACHINE LEARNING': <Sparkles className="w-4 h-4 text-[#00f0ff]" />,
    'DATA & ANALYTICS': <Database className="w-4 h-4 text-[#00f0ff]" />,
    'WEB DEVELOPMENT': <Layers className="w-4 h-4 text-[#00f0ff]" />,
    'ENGINEERING TOOLS': <Terminal className="w-4 h-4 text-[#00f0ff]" />,
  }

  const displayedCategories =
    activeCategory === 'ALL'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.name === activeCategory)

  return (
    <section
      id="skills"
      className="py-24 md:py-36 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-t border-white/[0.08]"
    >
      {/* Chapter Marker & Title */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-[#00f0ff] uppercase tracking-widest mb-3">
            <span>02 // WHAT I WORK WITH</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#f1f5f9]">
            Skills &amp; Technologies
          </h2>
        </div>

        {/* Interactive Filter Pills */}
        <div className="flex flex-wrap gap-2 font-mono text-xs">
          <button
            type="button"
            onClick={() => setActiveCategory('ALL')}
            className={`px-3.5 py-1.5 transition-all border rounded-full ${
              activeCategory === 'ALL'
                ? 'border-[#00f0ff] text-[#00f0ff] bg-[#00f0ff]/10 shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                : 'border-white/10 text-[#94a3b8] hover:text-[#f1f5f9] hover:border-white/25 bg-[#0b0f19]/60'
            }`}
            data-cursor="FILTER"
          >
            ALL
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.name}
              type="button"
              onClick={() => setActiveCategory(cat.name)}
              className={`px-3.5 py-1.5 transition-all border rounded-full ${
                activeCategory === cat.name
                  ? 'border-[#00f0ff] text-[#00f0ff] bg-[#00f0ff]/10 shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                  : 'border-white/10 text-[#94a3b8] hover:text-[#f1f5f9] hover:border-white/25 bg-[#0b0f19]/60'
              }`}
              data-cursor="FILTER"
            >
              {cat.name.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Main Elevated Capability Cards Grid */}
      <div className="grid grid-cols-1 gap-8 mb-16">
        {displayedCategories.map((category, idx) => (
          <div
            key={category.name}
            className="skill-category-block p-5 sm:p-8 md:p-10 rounded-2xl bg-[#0b0f19]/70 border border-white/[0.08] hover:border-white/20 transition-all duration-300 relative overflow-hidden backdrop-blur-sm"
          >
            {/* Subtle category accent watermarking */}
            <div className="absolute top-0 right-0 p-4 sm:p-8 opacity-5 pointer-events-none font-display font-black text-6xl sm:text-8xl text-white">
              0{idx + 1}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
              {/* Category Info Header */}
              <div className="category-info-header lg:col-span-4 space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#00f0ff]/10 border border-[#00f0ff]/30 flex items-center justify-center">
                    {categoryIcons[category.name] || <Sparkles className="w-4 h-4 text-[#00f0ff]" />}
                  </div>
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight text-[#f1f5f9]">
                      {category.name}
                    </h3>
                  </div>
                </div>
                <p className="font-sans text-xs text-[#94a3b8] leading-relaxed max-w-sm pt-2">
                  {category.tagline}
                </p>
              </div>

              {/* Enhanced Interactive Skill Chips Grid */}
              <div className="lg:col-span-8 flex flex-wrap gap-3 items-center">
                {category.skills.map((skill) => {
                  const meta = skillProvenance[skill]
                  const isHovered = hoveredSkill === skill
                  return (
                    <div
                      key={skill}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className={`skill-chip group relative p-3 sm:px-4 sm:py-3 rounded-xl border transition-all duration-200 cursor-default hover:scale-[1.02] ${
                        isHovered
                          ? 'border-[#00f0ff] bg-[#18191c] shadow-[0_0_20px_rgba(0,240,255,0.15)] -translate-y-0.5'
                          : 'border-white/[0.08] bg-[#06080f]/80 hover:border-white/25 hover:bg-[#141518]'
                      }`}
                      data-cursor="TECH"
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-display text-sm sm:text-base font-semibold text-[#f1f5f9] tracking-tight group-hover:text-[#00f0ff] transition-colors">
                          {skill}
                        </span>
                        {meta && (
                          <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/[0.06] text-[#94a3b8] border border-white/[0.05]">
                            {meta.project.split(' ')[0]}
                          </span>
                        )}
                      </div>

                      {/* Micro tier tag on hover */}
                      {meta && isHovered && (
                        <div className="mt-1 text-[10px] font-mono text-[#00f0ff] tracking-wider uppercase">
                          {meta.tier}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dynamic Contextual Usage Strip */}
      <div className="p-4 sm:p-5 rounded-xl border border-white/[0.08] bg-[#0b0f19]/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 font-mono text-xs">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-ping" />
          <span className="text-[#64748b] uppercase">// WHERE I USE IT:</span>
          <span className="text-[#f1f5f9] font-semibold">
            {hoveredSkill ? hoveredSkill : 'HOVER OVER ANY SKILL TO SEE DETAILS'}
          </span>
        </div>
        <div className="text-[#94a3b8]">
          {hoveredSkill && skillProvenance[hoveredSkill] ? (
            <span className="text-[#00f0ff] font-medium">{skillProvenance[hoveredSkill].note}</span>
          ) : (
            <span>Technologies I&apos;ve used across my projects and coursework.</span>
          )}
        </div>
      </div>
    </section>
  )
}
