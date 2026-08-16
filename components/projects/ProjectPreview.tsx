'use client';

import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Project } from '@/types';
import { useReducedMotion } from '@/lib/useReducedMotion';
import {
  Lock,
  ExternalLink,
  Terminal,
  Activity,
  Layers,
  Sparkles,
} from 'lucide-react';

interface ProjectPreviewProps {
  project: Project;
  onOpenCaseStudy: () => void;
}

export function ProjectPreview({ project, onOpenCaseStudy }: ProjectPreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isReducedMotion = useReducedMotion();
  const [sheenPos, setSheenPos] = useState({ x: 50, y: 50 });

  // Spring physics for subtle 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 160, damping: 22, mass: 0.15 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), springConfig);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isReducedMotion || e.pointerType === 'touch' || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);

    setSheenPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const handlePointerLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setSheenPos({ x: 50, y: 50 });
  };

  return (
    <div className="relative w-full [perspective:1200px] select-none">
      {/* Dynamic ambient color glow behind preview */}
      <div
        className="absolute -inset-2 rounded-3xl blur-2xl opacity-40 transition-colors duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${project.accent}33 0%, rgba(159, 92, 255, 0.15) 50%, transparent 75%)`,
        }}
      />

      <motion.div
        ref={containerRef}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        onClick={onOpenCaseStudy}
        style={{
          rotateX: isReducedMotion ? 0 : rotateX,
          rotateY: isReducedMotion ? 0 : rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative w-full rounded-2xl bg-[#080E1A] border border-white/15 overflow-hidden shadow-2xl transition-all duration-300 hover:border-white/30 cursor-pointer group"
      >
        {/* Dynamic cursor light sheen */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40 group-hover:opacity-80 transition-opacity duration-300 z-30"
          style={{
            background: `radial-gradient(circle 380px at ${sheenPos.x}% ${sheenPos.y}%, rgba(255, 255, 255, 0.12), transparent 70%)`,
          }}
        />

        {/* 1. Browser Window Frame Top-Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#0D1627] border-b border-white/[0.08] relative z-20">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#04070D]/80 border border-white/[0.06] text-[11px] font-mono text-[#64748B] max-w-[220px] sm:max-w-xs truncate">
            <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
            <span className="truncate">https://{project.slug}.system/telemetry</span>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#64748B]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="hidden sm:inline">LIVE</span>
          </div>
        </div>

        {/* 2. Window Content / Visual Cockpit Preview */}
        <div className="relative p-6 sm:p-8 min-h-[300px] sm:min-h-[360px] bg-radial-gradient flex flex-col justify-between overflow-hidden">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

          {/* Top telemetry tags inside window */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0D1627]/90 border border-white/10 text-xs font-mono text-[#F8FAFC]">
              <Terminal className="w-3.5 h-3.5" style={{ color: project.accent }} />
              <span>{project.projectType}</span>
            </div>

            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/25 text-[11px] font-mono text-emerald-400">
              <Activity className="w-3 h-3" />
              <span>{project.status}</span>
            </div>
          </div>

          {/* Central System Mockup Interface Visual */}
          <div className="relative z-10 my-6 p-5 sm:p-6 rounded-2xl bg-[#04070D]/90 border border-white/[0.08] shadow-xl group-hover:border-white/20 transition-all duration-300">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/[0.06]">
              <div className="flex items-center gap-2.5">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center border border-white/10"
                  style={{ backgroundColor: `${project.accent}18`, color: project.accent }}
                >
                  <Layers className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#F8FAFC]">
                  {project.title}
                </span>
              </div>

              <span className="text-[10px] font-mono text-[#64748B]">
                BUILD // {project.year}
              </span>
            </div>

            {/* Simulated Live System Telemetry Stream */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs font-mono">
              {project.metrics.slice(0, 3).map((metric) => (
                <div
                  key={metric.label}
                  className="p-2.5 rounded-xl bg-[#0D1627] border border-white/[0.04] flex flex-col"
                >
                  <span className="text-[10px] text-[#64748B] block truncate">{metric.label}</span>
                  <span className="text-xs sm:text-sm font-bold text-[#F8FAFC] mt-0.5" style={{ color: project.accent }}>
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Live Hover Overlay Trigger */}
            <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-[#94A3B8]">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#4F8CFF]" />
                <span className="text-[11px] font-mono">Interactive Case Study Available</span>
              </span>
              <span className="text-[#4F8CFF] font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Explore <ExternalLink className="w-3 h-3" />
              </span>
            </div>
          </div>

          {/* Bottom Technologies Strip */}
          <div className="relative z-10 flex flex-wrap gap-1.5">
            {project.stack.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-mono px-2.5 py-1 rounded-lg bg-[#0D1627]/80 text-[#94A3B8] border border-white/[0.06] group-hover:text-white transition-colors"
              >
                {tech}
              </span>
            ))}
            {project.stack.length > 5 ? (
              <span className="text-[10px] font-mono px-2 py-1 rounded-lg bg-white/[0.04] text-[#64748B]">
                +{project.stack.length - 5} More
              </span>
            ) : null}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
