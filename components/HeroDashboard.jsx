'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import CrmMockup from './CrmMockup';

export default function HeroDashboard() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Smooth spring for scroll-driven values
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 30, restDelta: 0.001 });

  // ── Far layer: background glow (slowest) ──
  const glowY = useTransform(smoothProgress, [0, 1], [0, -160]);
  const glowScale = useTransform(smoothProgress, [0, 0.5, 1], [1.0, 1.3, 0.8]);
  const glowOpacity = useTransform(smoothProgress, [0, 0.25, 0.8, 1], [0.5, 0.7, 0.4, 0]);

  // ── Mid layer: browser frame (starts visible, subtle scroll parallax) ──
  const frameY = useTransform(smoothProgress, [0, 1], [0, -80]);
  const frameScale = useTransform(smoothProgress, [0, 0.35, 1], [1.0, 1.0, 1.04]);
  const frameRotateX = useTransform(smoothProgress, [0, 0.35], [0, 0]);
  const frameRotateY = useTransform(smoothProgress, [0, 0.35], [0, 0]);
  const frameOpacity = useTransform(smoothProgress, [0, 0.12], [1, 1]);
  const frameShadow = useTransform(
    smoothProgress,
    [0, 0.35, 1],
    [
      '0 20px 50px -12px rgba(59,130,246,0.15)',
      '0 20px 50px -12px rgba(59,130,246,0.15)',
      '0 40px 80px -20px rgba(59,130,246,0.28)',
    ]
  );

  // ── Secondary glow that intensifies mid-scroll ──
  const innerGlowOpacity = useTransform(smoothProgress, [0.1, 0.4, 0.8], [0, 0.5, 0]);
  const innerGlowScale = useTransform(smoothProgress, [0.1, 0.5], [0.8, 1.4]);

  // ── Image subtle scale for depth ──
  const imgScale = useTransform(smoothProgress, [0, 0.35, 1], [1.0, 1.0, 1.02]);

  return (
    <div ref={containerRef} className="relative mx-auto max-w-6xl" style={{ perspective: 1400 }}>
      {/* ═══ Far layer — ambient glow ═══ */}
      <motion.div
        style={{ y: glowY, scale: glowScale, opacity: glowOpacity }}
        className="absolute -inset-24 rounded-full bg-brand-500/10 blur-glow"
      />

      {/* ═══ Mid layer — browser frame with 3D tilt ═══ */}
      <motion.div
        style={{
          y: frameY,
          scale: frameScale,
          rotateX: frameRotateX,
          rotateY: frameRotateY,
          opacity: frameOpacity,
          // Soft, near-symmetric ambient shadow — no hard downward drop, so the
          // faded bottom edge dissolves into the page instead of casting a line.
          boxShadow: '0 8px 40px -24px rgba(15,23,42,0.25)',
          transformStyle: 'preserve-3d',
        }}
        className="relative overflow-hidden rounded-t-2xl border border-b-0 border-ink-200 bg-white"
      >
        {/* Inner glow that intensifies as you scroll */}
        <motion.div
          style={{ opacity: innerGlowOpacity, scale: innerGlowScale }}
          className="pointer-events-none absolute left-1/2 top-1/2 z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-400/15 blur-3xl"
        />

        {/* Browser bar — light chrome to match the real (light-themed) app */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="relative z-20 flex items-center gap-2 px-4 py-3"
          style={{ background: '#FFFFFF', borderBottom: '1px solid rgba(15,23,42,0.06)' }}
        >
          <div className="h-2.5 w-2.5 rounded-full" style={{ background: '#EF4444' }} />
          <div className="h-2.5 w-2.5 rounded-full" style={{ background: '#F59E0B' }} />
          <div className="h-2.5 w-2.5 rounded-full" style={{ background: '#10B981' }} />
          <div
            className="ml-3 flex h-6 flex-1 items-center rounded-full px-4 font-mono text-[10px]"
            style={{ background: '#F1F4F9', border: '1px solid rgba(15,23,42,0.06)', color: '#64748B' }}
          >
            app.vintify.co.uk/crm/dashboard
          </div>
        </motion.div>

        {/* The real product — faithful static mockup of /crm/dashboard */}
        <motion.div
          style={{ scale: imgScale, background: '#F6F8FB' }}
          className="relative w-full overflow-hidden"
        >
          <CrmMockup />
        </motion.div>

        {/* Bottom fade — dissolves the dashboard into the page so the full
            screen is teased, not given away (matches the reference). Fades to
            the hero's white background. */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-1/2 bg-gradient-to-t from-white via-white/85 to-transparent" />
      </motion.div>
    </div>
  );
}
