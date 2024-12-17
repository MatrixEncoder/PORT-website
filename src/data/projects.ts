import { Shield, Brain, Network, Bot } from 'lucide-react';
import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    title: "AI-Powered Threat Detection",
    description: "Machine learning system for real-time cyber threat detection and response",
    icon: Shield,
    color: "cyan"
  },
  {
    title: "Neural Network Security",
    description: "Advanced security framework for protecting machine learning models",
    icon: Brain,
    color: "purple"
  },
  {
    title: "Real-time Network Traffic Analyzer",
    description: "Advanced network monitoring and analysis system using AI/ML",
    icon: Network,
    color: "cyan"
  },
  {
    title: "Autonomous Security Bot",
    description: "AI-driven security bot for automated vulnerability scanning",
    icon: Bot,
    color: "purple"
  }
] as const;