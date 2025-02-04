import React from 'react';
import { Sparkles } from 'lucide-react';
import { GradientText } from './ui/GradientText';

export default function About() {
  return (
    <section id="about" className="relative py-20 bg-black overflow-hidden">
      {/* Animated light effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-cyan-500/20 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse" />
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Sparkles className="inline-block h-12 w-12 text-cyan-500 animate-pulse mb-4" />
          <h2 className="text-3xl font-bold mb-8">
            <GradientText>About Me</GradientText>
          </h2>
        </div>

        <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 shadow-2xl hover:border-cyan-500/50 transition-all duration-500">
          <p className="text-lg leading-relaxed text-gray-300 space-y-6">
            Hello, and welcome to my portfolio! 😃
            <br /><br />
            I'm <span className="font-bold text-2xl">
              <GradientText className="animate-pulse">SURYANSH SRIVASTAVA</GradientText>
            </span>, a <span className="text-cyan-400 font-semibold">Cybersecurity</span> and{' '}
            <span className="text-purple-400 font-semibold">AI/ML</span> enthusiast with a passion for protecting and enhancing online security. My mission is to create a safer internet environment, where people can feel secure and protected as they explore the digital world.
            <br /><br />
            My personal goal is to fuse{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-cyan-400 font-semibold">Machine Learning</span>
              <span className="absolute inset-0 bg-cyan-400/20 blur-sm animate-pulse" />
            </span>{' '}
            with{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-purple-400 font-semibold">Cybersecurity</span>
              <span className="absolute inset-0 bg-purple-400/20 blur-sm animate-pulse" />
            </span>
            —harnessing the power of{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-blue-400 font-semibold">Artificial Intelligence</span>
              <span className="absolute inset-0 bg-blue-400/20 blur-sm animate-pulse" />
            </span>{' '}
            to improve security solutions and make the internet even safer. Through innovative approaches and dedication, I aim to make a positive impact on the world of digital security.
            <br /><br />
            Thank you for visiting my site, and I hope you enjoy exploring my work! 😊
          </p>
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-sm" />
      </div>
    </section>
  );
}