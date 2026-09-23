"use client"

import React from 'react'
import { LedgrChapter } from './LedgrChapter'
import { ResonixChapter } from './ResonixChapter'
import { HotelChapter } from './HotelChapter'
import { GroupDnaChapter } from './GroupDnaChapter'

export const FeaturedProjects: React.FC = () => {
  return (
    <section
      id="featured-projects"
      className="py-24 md:py-36 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-t border-white/[0.08]"
    >
      {/* Exhibition Master Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 pb-8 border-b border-white/[0.08]">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-[#00f0ff] uppercase tracking-widest mb-3">
            <span>04 // SELECTED WORK</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#f1f5f9]">
            Featured Projects
          </h2>
        </div>
        <p className="font-mono text-xs text-[#94a3b8] max-w-md leading-relaxed">
          Four projects spanning financial analytics, social media insights, predictive modeling, and chat behavior analysis.
        </p>
      </div>

      {/* Project Chapters */}
      <div className="space-y-6">
        <div id="project-ledgr" className="featured-project-card scroll-mt-24">
          <LedgrChapter />
        </div>
        <div id="project-resonix" className="featured-project-card scroll-mt-24">
          <ResonixChapter />
        </div>
        <div id="project-hotel" className="featured-project-card scroll-mt-24">
          <HotelChapter />
        </div>
        <div id="project-groupdna" className="featured-project-card scroll-mt-24">
          <GroupDnaChapter />
        </div>
      </div>
    </section>
  )
}

