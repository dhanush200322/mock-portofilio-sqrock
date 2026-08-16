'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { contactData } from '@/data/contact';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Layers, Bot, Workflow, Send, Terminal } from 'lucide-react';

interface StarterOption {
  id: string;
  label: string;
  icon: React.ReactNode;
  accent: string;
  subject: string;
  previewPrompt: string;
  bodyTemplate: string;
}

const starterOptions: StarterOption[] = [
  {
    id: 'starter-webapp',
    label: 'Build a Web Platform',
    icon: <Layers className="w-4 h-4" />,
    accent: '#4F8CFF',
    subject: 'Project Inquiry: Full Stack Web Application / Platform',
    previewPrompt: 'I would like to discuss architecting an end-to-end full stack web application with Next.js and PostgreSQL.',
    bodyTemplate: `Hi Dhanush,\n\nI would like to discuss architecting a modern full-stack web application / platform.\n\nProject Overview:\n- Timeline:\n- Core Capabilities Needed:\n\nBest regards,`,
  },
  {
    id: 'starter-ai',
    label: 'Build an AI / RAG System',
    icon: <Bot className="w-4 h-4" />,
    accent: '#10B981',
    subject: 'Project Inquiry: AI & RAG Retrieval Architecture',
    previewPrompt: 'I would like to discuss building an AI-powered product, RAG pipeline, or vector similarity search engine.',
    bodyTemplate: `Hi Dhanush,\n\nI would like to discuss building an AI-powered product, RAG pipeline, or vector search architecture.\n\nData Domain / Requirements:\n- Target LLM / Embeddings:\n- Timeline:\n\nBest regards,`,
  },
  {
    id: 'starter-automation',
    label: 'Automate a Workflow',
    icon: <Workflow className="w-4 h-4" />,
    accent: '#F59E0B',
    subject: 'Project Inquiry: Autonomous n8n Workflow Automation',
    previewPrompt: 'I am looking to automate business workflows, API webhooks, or multi-stage integration pipelines.',
    bodyTemplate: `Hi Dhanush,\n\nI am looking to automate business processes, API webhooks, and integration pipelines using n8n and modern tooling.\n\nProcesses to Automate:\n- Disparate APIs / Services:\n- Expected Timeline:\n\nBest regards,`,
  },
];

export function ProjectStarter() {
  const [selectedId, setSelectedId] = useState<string>('starter-webapp');

  const activeOption =
    starterOptions.find((o) => o.id === selectedId) || starterOptions[0];

  const mailtoUrl = `mailto:${contactData.email}?subject=${encodeURIComponent(
    activeOption.subject
  )}&body=${encodeURIComponent(activeOption.bodyTemplate)}`;

  return (
    <div className="w-full mt-16 sm:mt-24 pt-12 border-t border-white/[0.08]">
      {/* Header */}
      <div className="flex flex-col mb-8 text-left">
        <span className="text-xs font-mono uppercase tracking-widest text-[#4F8CFF] mb-2 block flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5" />
          Interactive Intent Dispatcher // Project Starter
        </span>
        <h4 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC] tracking-tight">
          Have a Project in Mind?
        </h4>
        <p className="text-xs sm:text-sm text-[#94A3B8] mt-2 max-w-2xl">
          Select a project domain below to initialize a pre-structured direct dispatch template.
        </p>
      </div>

      {/* 3 Selectable Starting Points */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
        {starterOptions.map((opt) => {
          const isSelected = opt.id === selectedId;

          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => setSelectedId(opt.id)}
              aria-pressed={isSelected}
              className={`p-4 rounded-2xl border transition-all duration-300 flex items-center gap-3 text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-blue-500 ${
                isSelected
                  ? 'bg-[#121E36] border-2 scale-[1.02] shadow-xl'
                  : 'bg-[#080E1A]/80 border-white/[0.06] hover:border-white/20 hover:bg-[#0D1627]'
              }`}
              style={{
                borderColor: isSelected ? opt.accent : undefined,
                boxShadow: isSelected ? `0 0 20px ${opt.accent}20` : undefined,
              }}
            >
              <div
                className="p-2 rounded-xl bg-[#04070D] border border-white/10 shrink-0"
                style={{ color: opt.accent }}
              >
                {opt.icon}
              </div>

              <div>
                <span className="text-xs font-mono text-[#64748B] block uppercase">
                  Intent 0{starterOptions.indexOf(opt) + 1}
                </span>
                <span
                  className={`text-xs sm:text-sm font-bold tracking-tight ${
                    isSelected ? 'text-white' : 'text-[#94A3B8]'
                  }`}
                >
                  {opt.label}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Dynamic Dispatch Box */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeOption.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            {/* Left: Summary and Pre-filled Topic */}
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="accent" size="sm">
                  {activeOption.label}
                </Badge>
                <span className="text-xs font-mono text-[#64748B]">
                  Pre-Configured Dispatch Subject
                </span>
              </div>

              <h5 className="text-base sm:text-lg font-bold text-[#F8FAFC] mb-2">
                {activeOption.subject}
              </h5>

              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                {activeOption.previewPrompt}
              </p>
            </div>

            {/* Right: Trigger Action */}
            <div className="shrink-0 flex flex-col items-start md:items-end gap-2">
              <a href={mailtoUrl} className="w-full sm:w-auto">
                <Button
                  size="md"
                  variant="primary"
                  rightIcon={<Send className="w-4 h-4" />}
                  className="shadow-lg shadow-[#4F8CFF]/20 w-full sm:w-auto justify-center"
                >
                  Launch Pre-Filled Email
                </Button>
              </a>
              <span className="text-[11px] font-mono text-[#64748B]">
                Opens your default email client
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
