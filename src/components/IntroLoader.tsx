"use client"

import React, { useEffect, useRef, useState, useCallback } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Volume2, VolumeX, ArrowDown, Sparkles } from 'lucide-react'
import { PERSONAL_INFO } from '../data/portfolioData'

gsap.registerPlugin(ScrollTrigger)

interface IntroLoaderProps {
  isOpen: boolean
  onClose: () => void
}

const INTERACTIVE_QUOTES = [
  `Hello! I'm ${PERSONAL_INFO.name} 👋`,
  `Hey, I'm ${PERSONAL_INFO.firstName}! 👋`,
  "Welcome to my portfolio website ✨",
  "Scroll down or tap below to explore my work 🚀",
  "Let's build something extraordinary ✨",
]

const GREETING_WORDS = [
  { greeting: "HELLO", label: "ENGLISH" },
  { greeting: "NAMASTE", label: "HINDI" },
  { greeting: "BONJOUR", label: "FRENCH" },
  { greeting: "HOLA", label: "SPANISH" },
  { greeting: "CIAO", label: "ITALIAN" },
  { greeting: "WELCOME", label: "EXPLORE" },
]

export const IntroLoader: React.FC<IntroLoaderProps> = ({ isOpen, onClose }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const headRef = useRef<HTMLDivElement>(null)
  const textGroupRef = useRef<HTMLDivElement>(null)
  const bottomBarRef = useRef<HTMLDivElement>(null)
  const isExiting = useRef(false)

  // Interactive states
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [isHovered, setIsHovered] = useState(false)
  const [activeSpeech, setActiveSpeech] = useState<string | null>(null)
  const [speechIndex, setSpeechIndex] = useState(0)
  const [greetingIndex, setGreetingIndex] = useState(0)
  const [scrollPull, setScrollPull] = useState(0)

  // Head tracking transform state
  const [headTransform, setHeadTransform] = useState({
    rotX: 0,
    rotY: 0,
    rotZ: 0,
    transX: 0,
    transY: 0,
    scale: 1,
  })

  // Physics refs for RAF smoothing
  const mouseTarget = useRef({ x: 0.5, y: 0.5 })
  const currentTransform = useRef({ rotX: 0, rotY: 0, rotZ: 0, transX: 0, transY: 0, scale: 1 })
  const clickBounce = useRef(1)
  const openCooldownRef = useRef(0)

  // Synthesized Web Audio SFX
  const playSfx = useCallback((type: 'ping' | 'click' | 'enter') => {
    if (!soundEnabled) return
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
      if (!AudioCtx) return
      const ctx = new AudioCtx()
      if (ctx.state === 'suspended') ctx.resume()

      if (type === 'click') {
        const osc = ctx.createOscillator()
        const gain = ctx.createGain()
        osc.type = 'sine'
        osc.frequency.setValueAtTime(587.33, ctx.currentTime) // D5
        osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.1) // A5
        gain.gain.setValueAtTime(0.08, ctx.currentTime)
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.22)
        osc.connect(gain)
        gain.connect(ctx.destination)
        osc.start()
        osc.stop(ctx.currentTime + 0.22)
      } else if (type === 'ping') {
        const osc = ctx.createOscillator()
        const gain = ctx.createGain()
        osc.type = 'triangle'
        osc.frequency.setValueAtTime(659.25, ctx.currentTime) // E5
        osc.frequency.exponentialRampToValueAtTime(987.77, ctx.currentTime + 0.14) // B5
        gain.gain.setValueAtTime(0.06, ctx.currentTime)
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25)
        osc.connect(gain)
        gain.connect(ctx.destination)
        osc.start()
        osc.stop(ctx.currentTime + 0.25)
      } else if (type === 'enter') {
        const osc = ctx.createOscillator()
        const gain = ctx.createGain()
        osc.type = 'sine'
        osc.frequency.setValueAtTime(329.63, ctx.currentTime)
        osc.frequency.exponentialRampToValueAtTime(164.81, ctx.currentTime + 0.45)
        gain.gain.setValueAtTime(0.09, ctx.currentTime)
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5)
        osc.connect(gain)
        gain.connect(ctx.destination)
        osc.start()
        osc.stop(ctx.currentTime + 0.5)
      }
    } catch {
      // Audio context blocked or unsupported
    }
  }, [soundEnabled])

  const isFirstTransition = useRef(true)

  // Handle open/close transitions dynamically
  useEffect(() => {
    const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void; scrollTo: (target: number, opts?: { immediate?: boolean }) => void } }).__lenis

    if (isFirstTransition.current) {
      isFirstTransition.current = false
      return
    }

    if (!isOpen) {
      // Animate UP to hide intro cover
      isExiting.current = true
      playSfx('enter')

      if (lenis) {
        lenis.stop()
        lenis.scrollTo(0, { immediate: true })
      }
      window.scrollTo(0, 0)

      gsap.to(containerRef.current, {
        yPercent: -100,
        duration: 0.75,
        ease: 'power4.inOut',
        onComplete: () => {
          if (containerRef.current) {
            containerRef.current.style.pointerEvents = 'none'
            containerRef.current.style.visibility = 'hidden'
          }
          window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
          if (lenis) {
            lenis.scrollTo(0, { immediate: true })
            lenis.start()
          }
          ScrollTrigger.refresh()
          isExiting.current = false
          requestAnimationFrame(() => {
            window.scrollTo(0, 0)
            if (lenis) lenis.scrollTo(0, { immediate: true })
            ScrollTrigger.refresh()
          })
        },
      })
    } else {
      // Animate DOWN to reveal intro cover
      isExiting.current = true
      openCooldownRef.current = Date.now() + 850
      if (lenis) {
        lenis.stop()
        lenis.scrollTo(0, { immediate: true })
      }
      window.scrollTo(0, 0)

      if (containerRef.current) {
        containerRef.current.style.visibility = 'visible'
        containerRef.current.style.pointerEvents = 'auto'
      }

      gsap.fromTo(
        containerRef.current,
        { yPercent: -100 },
        {
          yPercent: 0,
          duration: 0.75,
          ease: 'power4.out',
          onComplete: () => {
            window.scrollTo(0, 0)
            if (lenis) lenis.scrollTo(0, { immediate: true })
            playSfx('click')
            isExiting.current = false
            setScrollPull(0)
          },
        }
      )
    }
  }, [isOpen, playSfx])

  const triggerExit = useCallback(() => {
    if (isExiting.current || !isOpen || Date.now() < openCooldownRef.current) return
    onClose()
  }, [onClose, isOpen])

  // Enhanced 3D cursor tracking physics loop
  useEffect(() => {
    let animId: number

    const updatePhysics = () => {
      const cur = currentTransform.current
      const mouse = mouseTarget.current

      // Target rotations & translations for strong 3D volumetric depth
      const targetRotY = (mouse.x - 0.5) * 46 // -23 to +23 deg yaw
      const targetRotX = -(mouse.y - 0.5) * 34 // -17 to +17 deg pitch
      const targetRotZ = (mouse.x - 0.5) * 10 // -5 to +5 deg roll
      const targetTransX = (mouse.x - 0.5) * 32
      const targetTransY = (mouse.y - 0.5) * 22
      const baseScale = isHovered ? 1.08 : 1.0
      const targetScale = baseScale * clickBounce.current

      // Smooth spring damping
      cur.rotX += (targetRotX - cur.rotX) * 0.1
      cur.rotY += (targetRotY - cur.rotY) * 0.1
      cur.rotZ += (targetRotZ - cur.rotZ) * 0.1
      cur.transX += (targetTransX - cur.transX) * 0.09
      cur.transY += (targetTransY - cur.transY) * 0.09
      cur.scale += (targetScale - cur.scale) * 0.14

      // Gradually decay click bounce back to 1
      clickBounce.current += (1 - clickBounce.current) * 0.15

      setHeadTransform({
        rotX: cur.rotX,
        rotY: cur.rotY,
        rotZ: cur.rotZ,
        transX: cur.transX,
        transY: cur.transY,
        scale: cur.scale,
      })

      animId = requestAnimationFrame(updatePhysics)
    }

    animId = requestAnimationFrame(updatePhysics)

    const handleWindowMouseMove = (e: MouseEvent) => {
      mouseTarget.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      }
    }

    const handleWindowTouch = (e: TouchEvent) => {
      if (e.touches && e.touches.length > 0) {
        mouseTarget.current = {
          x: e.touches[0].clientX / window.innerWidth,
          y: e.touches[0].clientY / window.innerHeight,
        }
      }
    }

    window.addEventListener('mousemove', handleWindowMouseMove)
    window.addEventListener('touchstart', handleWindowTouch, { passive: true })
    window.addEventListener('touchmove', handleWindowTouch, { passive: true })

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', handleWindowMouseMove)
      window.removeEventListener('touchstart', handleWindowTouch)
      window.removeEventListener('touchmove', handleWindowTouch)
    }
  }, [isHovered])

  const hasAnimatedEntrance = useRef(false)

  // Automatically cycle greeting words every 2 seconds while intro is open
  useEffect(() => {
    if (!isOpen) return
    const interval = setInterval(() => {
      setGreetingIndex((prev) => (prev + 1) % GREETING_WORDS.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [isOpen])

  // Automatically greet the visitor with "Hello! I'm Mohd Ubes 👋" on initial landing
  useEffect(() => {
    if (!isOpen) return
    const greetTimer = setTimeout(() => {
      setActiveSpeech(`Hello! I'm ${PERSONAL_INFO.name} 👋`)
      playSfx('ping')
    }, 450)

    const followUpTimer = setTimeout(() => {
      setActiveSpeech("Welcome to my portfolio website ✨")
    }, 3800)

    return () => {
      clearTimeout(greetTimer)
      clearTimeout(followUpTimer)
    }
  }, [isOpen, playSfx])

  // Lifecycle & Global Scroll Interception (only active while intro is visible)
  useEffect(() => {
    // Disable browser automatic scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
    window.scrollTo(0, 0)

    if (!isOpen) return

    // Freeze Lenis during intro
    const lenis = (window as unknown as { __lenis?: { stop: () => void; scrollTo: (t: number, o?: { immediate?: boolean }) => void } }).__lenis
    if (lenis) {
      lenis.stop()
      lenis.scrollTo(0, { immediate: true })
    }

    // Entrance timeline on initial load
    let tl: gsap.core.Timeline | null = null
    if (!hasAnimatedEntrance.current && containerRef.current) {
      hasAnimatedEntrance.current = true
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (!prefersReducedMotion) {
        tl = gsap.timeline()
        tl.fromTo(
          textGroupRef.current,
          { scale: 0.88, opacity: 0, y: 35 },
          { scale: 1, opacity: 1, duration: 0.85, ease: 'power3.out' }
        )
        tl.fromTo(
          headRef.current,
          { scale: 0.65, opacity: 0, y: 45 },
          { scale: 1, opacity: 1, duration: 0.95, ease: 'back.out(1.4)' },
          '-=0.55'
        )
        tl.fromTo(
          bottomBarRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.65, ease: 'power2.out' },
          '-=0.35'
        )
      }
    }

    // Global scroll & wheel event interception while intro is open
    let accumulatedDelta = 0
    let decayTimer: ReturnType<typeof setTimeout>

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault() // ALWAYS prevent default while intro is active!
      if (isExiting.current || !isOpen || Date.now() < openCooldownRef.current) return

      // Strict directionality: Only DOWNWARD scroll (e.deltaY > 0) can exit the intro
      if (e.deltaY <= 0) {
        accumulatedDelta = 0
        setScrollPull(0)
        return
      }

      accumulatedDelta += e.deltaY
      clearTimeout(decayTimer)
      decayTimer = setTimeout(() => {
        accumulatedDelta = 0
        setScrollPull(0)
      }, 350)

      const progress = Math.min(100, Math.round((accumulatedDelta / 150) * 100))
      setScrollPull(progress)

      if (accumulatedDelta >= 150) {
        clearTimeout(decayTimer)
        accumulatedDelta = 0
        setScrollPull(100)
        triggerExit()
      }
    }

    let touchStartY = 0
    let touchStartX = 0
    let isTouchOnAvatar = false

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches && e.touches.length > 0) {
        touchStartY = e.touches[0].clientY
        touchStartX = e.touches[0].clientX
        const target = e.target as HTMLElement | null
        isTouchOnAvatar = Boolean(target?.closest('[data-avatar-interactive]'))
      }
    }

    const handleTouchMove = (e: TouchEvent) => {
      // If the touch originated on the avatar, do not intercept as a page exit scroll
      if (isTouchOnAvatar) return

      if (isExiting.current || !isOpen || Date.now() < openCooldownRef.current) return

      const touchCurrentY = e.touches[0].clientY
      const touchCurrentX = e.touches[0].clientX
      const diffY = touchStartY - touchCurrentY
      const diffX = Math.abs(touchStartX - touchCurrentX)

      // Only prevent default if it's primarily an upward pull to dismiss
      if (diffY > 10 && diffY > diffX) {
        e.preventDefault()
      }

      if (diffY <= 0) {
        setScrollPull(0)
        return
      }

      const progress = Math.min(100, Math.round((diffY / 80) * 100))
      setScrollPull(progress)

      if (diffY > 80) {
        setScrollPull(100)
        triggerExit()
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isExiting.current || !isOpen || Date.now() < openCooldownRef.current) return
      if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ' || e.key === 'Enter') {
        e.preventDefault()
        triggerExit()
      }
    }

    // Attach listeners strictly to window while intro is open
    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchmove', handleTouchMove, { passive: false })
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      tl?.kill()
      clearTimeout(decayTimer)
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose, triggerExit])

  // Refs for avatar interaction debouncing and timers
  const lastInteractTime = useRef(0)
  const speechTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const hoverTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const avatarTouchRef = useRef<{ x: number; y: number; time: number } | null>(null)

  // Unified avatar reaction (handles both desktop mouse click and mobile touch tap)
  const triggerAvatarReaction = useCallback(() => {
    const now = Date.now()
    if (now - lastInteractTime.current < 250) return
    lastInteractTime.current = now

    playSfx('click')

    // Trigger bounce physics
    clickBounce.current = 1.25

    // Visual active highlight
    setIsHovered(true)
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current)
    hoverTimerRef.current = setTimeout(() => {
      setIsHovered(false)
    }, 1200)

    // Show speech bubble with authentic rotating quotes
    const nextPhrase = INTERACTIVE_QUOTES[speechIndex % INTERACTIVE_QUOTES.length]
    setActiveSpeech(nextPhrase)
    setSpeechIndex((prev) => prev + 1)

    // Hide speech bubble after 3.2s
    if (speechTimerRef.current) clearTimeout(speechTimerRef.current)
    speechTimerRef.current = setTimeout(() => {
      setActiveSpeech((curr) => (curr === nextPhrase ? null : curr))
    }, 3200)
  }, [playSfx, speechIndex])

  const handleHeadTouchStart = (e: React.TouchEvent) => {
    if (e.touches && e.touches.length > 0) {
      avatarTouchRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
        time: Date.now(),
      }
      setIsHovered(true)
    }
  }

  const handleHeadTouchEnd = (e: React.TouchEvent) => {
    if (avatarTouchRef.current) {
      const touch = e.changedTouches[0]
      if (touch) {
        const dx = Math.abs(touch.clientX - avatarTouchRef.current.x)
        const dy = Math.abs(touch.clientY - avatarTouchRef.current.y)
        const dt = Date.now() - avatarTouchRef.current.time
        // Clean tap gesture: under 25px travel within 650ms
        if (dx < 25 && dy < 25 && dt < 650) {
          e.preventDefault()
          e.stopPropagation()
          triggerAvatarReaction()
        }
      }
      avatarTouchRef.current = null
    }
  }

  const handleHeadClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    triggerAvatarReaction()
  }

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex flex-col justify-between bg-[#0c0d0e] p-4 sm:p-10 md:p-14 select-none border-b border-[#f4f3ef]/10 overflow-hidden"
      aria-hidden="true"
    >
      {/* Background Architectural Grid Lines */}
      {/* Subtle Background Radial Atmosphere */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <div className="w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] rounded-full bg-[#e65c24]/[0.07] blur-[120px] pointer-events-none" />
      </div>

      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] flex justify-between">
        <div className="w-[1px] h-full bg-white" />
        <div className="w-[1px] h-full bg-white hidden sm:block" />
        <div className="w-[1px] h-full bg-white" />
        <div className="w-[1px] h-full bg-white hidden lg:block" />
      </div>

      {/* Top Editorial Telemetry Bar */}
      <div className="flex justify-between items-center text-xs font-mono text-[#9da0a8] tracking-widest uppercase z-20">
        {/* Profile Pill Badge */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-sm shadow-sm">
          <img
            src="/images/sankalp-3d-avatar.png"
            alt={`${PERSONAL_INFO.name} Thumbnail`}
            className="w-5 h-5 rounded-full object-cover object-top border border-white/20"
          />
          <span className="text-xs font-mono font-medium text-[#f4f3ef] tracking-normal">{PERSONAL_INFO.name}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse ml-0.5" />
        </div>

        {/* Right Controls: SFX + Academic Badge */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => {
              const next = !soundEnabled
              setSoundEnabled(next)
              if (next) playSfx('ping')
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-[11px] font-mono transition-colors text-[#9da0a8] hover:text-[#f4f3ef] cursor-pointer"
            title="Toggle interactive audio feedback"
            aria-label="Toggle interactive audio feedback"
            data-cursor="AUDIO"
          >
            {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-[#e65c24]" /> : <VolumeX className="w-3.5 h-3.5 text-[#5e6068]" />}
            <span className="hidden sm:inline">{soundEnabled ? 'SFX ON' : 'SFX MUTED'}</span>
          </button>

          <span className="hidden sm:inline-block px-3 py-1.5 rounded-full bg-white/[0.02] border border-white/[0.06] text-[11px] font-mono text-[#5e6068]">
            DSU // BENGALURU
          </span>
        </div>
      </div>

      {/* Center Stage: Calibrated "WELCOME LET'S EXPLORE" Typography + Volumetric 3D Head */}
      <div className="relative flex flex-col items-center justify-center my-auto w-full max-w-7xl mx-auto py-8 sm:py-12 select-none z-10">
        {/* Background Massive Editorial Typography (Cycles HELLO / NAMASTE / BONJOUR / HOLA / CIAO / WELCOME) */}
        <div
          ref={textGroupRef}
          className="relative flex flex-col items-center justify-center text-center select-none pointer-events-none w-full leading-[0.88] px-4"
        >
          <div className="flex items-center gap-2 mb-2 font-mono text-[11px] sm:text-xs text-[#e65c24] tracking-[0.3em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e65c24] animate-ping" />
            <span>SAY HELLO · {GREETING_WORDS[greetingIndex].label}</span>
          </div>
          <h1 className="font-display font-black text-[clamp(2.4rem,12vw,6.5rem)] tracking-tight text-[#f4f3ef] drop-shadow-sm select-none break-words transition-all duration-300">
            {GREETING_WORDS[greetingIndex].greeting}
          </h1>
          <h2 className="font-display font-black text-[clamp(1.35rem,8vw,4.5rem)] tracking-tight text-[#e65c24] select-none -mt-1 sm:-mt-2 md:-mt-3 break-words">
            LET'S EXPLORE
          </h2>
        </div>

        {/* Floating 3D Character Head (Volumetric 3D Depth with Real-Time Directional Shadows) */}
        <div
          data-avatar-interactive="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-auto cursor-pointer flex flex-col items-center justify-center touch-manipulation select-none"
          style={{ perspective: '750px', touchAction: 'manipulation' }}
          onClick={handleHeadClick}
          onTouchStart={handleHeadTouchStart}
          onTouchEnd={handleHeadTouchEnd}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          data-cursor="TAP ME"
        >
          {/* Reactive Speech Bubble (appears on load & click/tap) */}
          {activeSpeech && (
            <div
              className="absolute -top-16 sm:-top-20 z-30 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-2xl bg-[#18191c]/95 border border-[#e65c24]/60 shadow-[0_10px_25px_rgba(230,92,36,0.25)] backdrop-blur-md text-xs sm:text-sm font-mono text-[#f4f3ef] text-center max-w-[280px] sm:max-w-none break-words pointer-events-none transition-all duration-300 transform animate-bounce"
              style={{ animationDuration: '2.5s' }}
            >
              <span className="font-medium">{activeSpeech}</span>
              {/* Speech bubble tail pointing to head */}
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-[#18191c] border-r border-b border-[#e65c24]/60 rotate-45" />
            </div>
          )}

          {/* Interactive 3D Tilting Head Container with Deep Spatial Perspective */}
          <div
            ref={headRef}
            className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-84 md:h-84 lg:w-96 lg:h-96 transition-transform duration-75 ease-out select-none"
            style={{
              transform: `perspective(750px) rotateX(${headTransform.rotX}deg) rotateY(${headTransform.rotY}deg) rotateZ(${headTransform.rotZ}deg) translate3d(${headTransform.transX}px, ${headTransform.transY}px, 60px) scale(${headTransform.scale})`,
              transformStyle: 'preserve-3d',
            }}
          >
            {/* 3D Ground/Depth Shadow Underneath the Bust */}
            <div
              className="absolute -bottom-2 sm:-bottom-4 left-1/2 -translate-x-1/2 w-40 sm:w-56 h-6 rounded-full bg-black/80 blur-xl pointer-events-none transition-transform duration-100"
              style={{
                transform: `translateX(${-headTransform.transX * 0.5}px) scale(${1 - headTransform.rotX * 0.01})`,
              }}
            />

            {/* Volumetric 3D Character Cutout with Real-Time Light-Casting Shadow */}
            <img
              src="/images/sankalp-3d-avatar.png"
              alt={`${PERSONAL_INFO.name} 3D Avatar`}
              className="w-full h-full object-contain pointer-events-none select-none transition-all duration-150"
              style={{
                filter: `drop-shadow(${-headTransform.transX * 1.4}px ${25 - headTransform.transY * 1.2}px 35px rgba(0,0,0,0.92)) drop-shadow(0 0 35px rgba(230,92,36,${isHovered ? 0.45 : 0.2}))`,
              }}
              draggable={false}
            />

            {/* Dynamic Specular Sheen across the 3D surface */}
            <div
              className="absolute inset-0 pointer-events-none rounded-full transition-opacity duration-200"
              style={{
                opacity: isHovered ? 0.35 : 0.15,
                background: `radial-gradient(circle at ${50 + headTransform.transX * 1.2}% ${40 + headTransform.transY * 1.2}%, rgba(255,255,255,0.8) 0%, rgba(230,92,36,0.3) 35%, transparent 65%)`,
                mixBlendMode: 'overlay',
              }}
            />
          </div>

          {/* Interactive Tap Affordance Pill */}
          <div className="mt-1 px-3 py-1 rounded-full bg-[#0c0d0e]/90 border border-white/15 text-[10px] font-mono text-[#9da0a8] flex items-center gap-1.5 shadow-xl transition-colors hover:border-[#e65c24] hover:text-[#f4f3ef]">
            <Sparkles className="w-2.5 h-2.5 text-[#e65c24]" />
            <span>INTERACTIVE 3D AVATAR // TAP ME</span>
          </div>
        </div>
      </div>

      {/* Bottom Editorial Details & Interactive Launch Action */}
      <div
        ref={bottomBarRef}
        className="flex flex-col sm:flex-row justify-between items-center gap-6 text-xs font-mono text-[#5e6068] z-20"
      >
        {/* Bottom Left Statement */}
        <div className="max-w-xs sm:max-w-sm text-center sm:text-left space-y-1">
          <p className="text-xs sm:text-sm font-medium text-[#f4f3ef] leading-snug">
            Hey, glad you're here. Take a look around.
          </p>
          <p className="text-[11px] font-mono text-[#5e6068]">
            {PERSONAL_INFO.name} // Portfolio
          </p>
        </div>

        {/* Central / Right Scroll & Click Entrance Trigger */}
        <button
          type="button"
          onClick={triggerExit}
          className="group relative flex flex-col items-center sm:items-end gap-2 text-[#9da0a8] hover:text-[#f4f3ef] transition-colors cursor-pointer py-1 px-4"
          data-cursor="ENTER"
        >
          {/* Scroll Pull Progress Readout */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#f4f3ef] uppercase">
            <span>{scrollPull > 0 ? `ENTERING [${scrollPull}%]` : 'SCROLL TO EXPLORE'}</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#e65c24] group-hover:translate-y-1 transition-transform duration-200" />
          </div>

          {/* Futuristic Scroll Capsule Track */}
          <div className="relative w-6 h-10 rounded-full border border-white/20 group-hover:border-[#e65c24] transition-colors flex justify-center p-1 overflow-hidden">
            <div
              className="absolute bottom-0 left-0 right-0 bg-[#e65c24]/35 transition-all duration-150 pointer-events-none"
              style={{ height: `${Math.max(scrollPull, 12)}%` }}
            />
            <div className="w-1.5 h-2.5 rounded-full bg-[#e65c24] animate-bounce z-10" />
          </div>

          <span className="text-[10px] text-[#5e6068] tracking-widest uppercase group-hover:text-[#9da0a8] transition-colors">
            CLICK OR SCROLL DOWN
          </span>
        </button>
      </div>
    </div>
  )
}
