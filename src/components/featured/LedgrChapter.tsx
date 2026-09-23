"use client"

import React, { useState } from 'react'
import { ArrowUpRight, CheckCircle2, ArrowDown } from 'lucide-react'
import { FEATURED_PROJECTS } from '../../data/portfolioData'

export const LedgrChapter: React.FC = () => {
  const project = FEATURED_PROJECTS[0]
  const [activeStep, setActiveStep] = useState<number>(3)
  const [anomalySensitivity, setAnomalySensitivity] = useState<number>(0.12)
  const [selectedQueryIdx, setSelectedQueryIdx] = useState<number>(0)

  const simulatedTxns = [
    { id: 'TXN-8841', entity: 'Stripe Global Payout Batch', amount: '₹84,200', riskScore: 0.04 },
    { id: 'TXN-8842', entity: 'Cloudflare Enterprise CDN', amount: '₹12,499', riskScore: 0.12 },
    { id: 'TXN-8843', entity: 'Rapid Burst High-Frequency Payout', amount: '₹1,94,500', riskScore: 0.88 },
    { id: 'TXN-8844', entity: 'Razorpay Merchant Disbursement', amount: '₹42,100', riskScore: 0.08 },
    { id: 'TXN-8845', entity: 'Overnight Micro-Refund Cluster', amount: '₹3,250', riskScore: 0.76 },
  ]

  const aiQueries = [
    {
      prompt: 'Audit dispute spikes for Merchant M-409',
      response: 'Analyzed 42 settlement batches for Merchant M-409. Dispute ratio escalated to 4.8% (+3.1% above normal threshold). Flagged 3 chargebacks lacking delivery proofs. Recommendation: Review pending merchant payouts.',
    },
    {
      prompt: 'Run IsolationForest scan on pending payouts',
      response: 'Unsupervised IsolationForest model scanned 1,280 pending records. Isolated 2 statistical outliers: TXN-8843 (amount deviation +4.2σ) and TXN-8845 (rapid micro-refund cadence).',
    },
    {
      prompt: 'Verify ledger balance against bank statement feed',
      response: 'Reconciliation logic achieved 99.8% automatic pair-matching. Unmatched difference: ₹1,200 representing float delay on foreign exchange conversions.',
    },
  ]

  const architectureSteps = [
    { label: 'DATABASE', role: 'SQLite Storage', desc: 'Normalized relational schema for merchants, transactions, settlements, refunds, and dispute logs.' },
    { label: 'TRANSACTIONS', role: 'Ingest & Clean', desc: 'Validates record fields, computes fee schedules, and standardizes multi-currency payloads.' },
    { label: 'RECONCILIATION', role: 'Ledger Matching', desc: 'Automated matching algorithm pairing bank payouts, disputes, and refund allocations.' },
    { label: 'ANOMALY DETECTION', role: 'Hybrid IsolationForest', desc: 'Dual-layer detection: Domain business rules combined with unsupervised IsolationForest ML models.' },
    { label: 'RISK SCORING', role: 'Merchant Evaluation', desc: 'Calculates dynamic risk metrics based on dispute frequencies, refund spikes, and volume history.' },
    { label: 'AI ASSISTANT', role: 'NVIDIA NIM / LLM', desc: 'Enables natural-language financial queries, automated summary generation, and scenario insights.' },
  ]

  return (
    <article className="py-20 border-b border-white/[0.08] relative">
      {/* Chapter Marker */}
      <div className="flex items-center justify-between font-mono text-xs text-[#9da0a8] mb-8 pb-4 border-b border-white/[0.06] uppercase tracking-widest">
        <span className="flex items-center gap-2">
          <span className="text-[#e65c24]">PROJECT 01</span>
          <span>// FINANCIAL DATA SYSTEM &amp; APPLIED AI</span>
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
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#f4f3ef] text-[#0c0d0e] px-5 py-2.5 font-mono text-xs font-semibold hover:bg-[#e65c24] hover:text-white transition-colors duration-200"
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
              className="inline-flex items-center gap-2 border border-white/20 text-[#f4f3ef] px-5 py-2.5 font-mono text-xs font-semibold hover:border-[#e65c24] hover:text-[#e65c24] transition-colors duration-200"
              data-cursor="CODE"
            >
              <span>VIEW SOURCE</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>

      {/* Project Narrative */}
      <p className="font-sans text-lg sm:text-xl text-[#eceae5] max-w-3xl leading-relaxed mb-12 font-light">
        {project.summary}
      </p>

      {/* Visual Metaphor: Financial Assembly Sequence */}
      <div className="my-12 border-y border-white/[0.08] py-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-xs">
          <span className="text-[#f4f3ef] font-semibold">// HOW IT WORKS: DATA &amp; AI PIPELINE</span>
          <span className="text-[#5e6068]">CLICK TO STEP THROUGH PIPELINE</span>
        </div>

        {/* Concept Assembly Nodes */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {architectureSteps.map((step, idx) => (
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
                STEP 0{idx + 1}
              </span>
              <span className="font-display text-xs font-bold block truncate">
                {step.label}
              </span>
              <span className="font-mono text-[9px] text-[#5e6068] block mt-1">
                {step.role}
              </span>
            </button>
          ))}
        </div>

        {/* Active Node Detail */}
        <div className="p-4 sm:p-6 bg-[#111215] border border-white/[0.06] flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 font-mono text-xs">
          <div className="space-y-1.5 max-w-xl">
            <span className="text-[#e65c24] text-[11px] uppercase block font-semibold">
              ACTIVE STAGE: {architectureSteps[activeStep].label} ({architectureSteps[activeStep].role})
            </span>
            <p className="font-sans text-sm text-[#eceae5] leading-relaxed">
              {architectureSteps[activeStep].desc}
            </p>
          </div>
          <div className="text-left md:text-right text-[#9da0a8] text-[11px] space-y-1">
            <div>Engine: <span className="text-[#f4f3ef]">FastAPI + Python</span></div>
            <div>Anomaly: <span className="text-[#e65c24]">IsolationForest + Logic</span></div>
          </div>
        </div>
      </div>

      {/* Interactive Simulated Financial AI Controller Console */}
      <div className="my-12 rounded-2xl border border-white/[0.08] bg-[#0c0d0e] overflow-hidden shadow-2xl">
        {/* Terminal Header */}
        <div className="px-4 py-3 sm:px-6 sm:py-4 bg-[#111215] border-b border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3">
          <div className="flex items-center gap-2 font-mono text-xs text-[#f4f3ef] flex-wrap">
            <span className="w-2 h-2 rounded-full bg-[#27c93f] animate-pulse shrink-0" />
            <span className="font-semibold break-words">LEDGR // INTERACTIVE ANOMALY DETECTOR</span>
            <span className="text-[#5e6068]">· FASTAPI</span>
          </div>

          {/* Anomaly Slider */}
          <div className="flex items-center gap-3 font-mono text-xs text-[#9da0a8]">
            <span>SENSITIVITY THRESHOLD:</span>
            <input
              type="range"
              min="0.05"
              max="0.30"
              step="0.05"
              value={anomalySensitivity}
              onChange={(e) => setAnomalySensitivity(parseFloat(e.target.value))}
              className="accent-[#e65c24] cursor-pointer w-24"
            />
            <span className="text-[#e65c24] font-bold">{(anomalySensitivity * 100).toFixed(0)}%</span>
          </div>
        </div>

        {/* Live Transaction Ledger Table */}
        <div className="p-4 sm:p-6 space-y-4">
          <div className="hidden sm:flex items-center justify-between font-mono text-[11px] text-[#5e6068] uppercase pb-2 border-b border-white/[0.06]">
            <span>TXN ID &amp; ENTITY</span>
            <span>SETTLEMENT AMOUNT</span>
            <span>RISK SCORE</span>
            <span>STATUS</span>
          </div>

          <div className="divide-y divide-white/[0.04] font-mono text-xs">
            {simulatedTxns.map((txn) => {
              const isFlagged = txn.riskScore >= 1 - anomalySensitivity * 2.2
              return (
                <div key={txn.id} className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-[#141518] px-2 rounded transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="text-[#9da0a8]">{txn.id}</span>
                    <span className="text-[#f4f3ef] font-medium font-sans">{txn.entity}</span>
                  </div>

                  <div className="flex items-center gap-4 sm:gap-8 justify-between sm:justify-end">
                    <span className="text-[#eceae5] font-semibold">{txn.amount}</span>
                    <span className={`text-xs ${isFlagged ? 'text-[#e65c24] font-bold' : 'text-[#9da0a8]'}`}>
                      {(txn.riskScore).toFixed(2)}
                    </span>
                    <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-semibold ${
                      isFlagged
                        ? 'bg-[#e65c24]/15 text-[#e65c24] border border-[#e65c24]/40'
                        : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                    }`}>
                      {isFlagged ? 'FLAGGED ANOMALY' : 'RECONCILED'}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Interactive AI Agent Natural Language Query Demo */}
          <div className="mt-6 pt-6 border-t border-white/[0.08] space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-xs">
              <span className="text-[#5e6068] uppercase">// AI ASSISTANT QUERY DEMO:</span>
              <span className="text-[#9da0a8]">TRY AN EXAMPLE QUERY:</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {aiQueries.map((q, idx) => (
                <button
                  key={q.prompt}
                  type="button"
                  onClick={() => setSelectedQueryIdx(idx)}
                  className={`px-3 py-2 rounded text-xs font-mono transition-all border text-left max-w-full break-words ${
                    selectedQueryIdx === idx
                      ? 'border-[#e65c24] bg-[#e65c24]/10 text-[#f4f3ef]'
                      : 'border-white/10 bg-[#141518] text-[#9da0a8] hover:border-white/20'
                  }`}
                  data-cursor="QUERY"
                >
                  &quot;{q.prompt}&quot;
                </button>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-[#111215] border border-white/[0.06] font-mono text-xs text-[#eceae5] space-y-1">
              <div className="text-[10px] text-[#e65c24] uppercase tracking-wider font-semibold">
                AI ASSISTANT RESPONSE:
              </div>
              <p className="leading-relaxed text-[#9da0a8]">
                {aiQueries[selectedQueryIdx].response}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Verified Implementations & Technologies */}
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

      {/* Continuous Transition Connector */}
      <div className="mt-16 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-mono text-[#5e6068] text-center">
        <div className="h-[1px] w-8 sm:w-12 bg-white/10 hidden min-[400px]:block" />
        <span>NEXT: SOCIAL MEDIA INTELLIGENCE</span>
        <ArrowDown className="w-3.5 h-3.5 text-[#e65c24]" />
        <div className="h-[1px] w-8 sm:w-12 bg-white/10 hidden min-[400px]:block" />
      </div>
    </article>
  )
}
