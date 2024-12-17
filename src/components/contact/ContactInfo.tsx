import React from 'react';
import { Mail, Github, Linkedin, Instagram, Phone } from 'lucide-react';
import { IconButton } from '../ui/IconButton';

export function ContactInfo() {
  return (
    <div>
      <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
      <div className="space-y-4">
        <a
          href="mailto:dhawalsri77@gmail.com"
          className="flex items-center space-x-3 text-gray-400 hover:text-cyan-500 transition-colors"
        >
          <Mail className="h-5 w-5" />
          <span>dhawalsri77@gmail.com</span>
        </a>
        <a
          href="tel:+919125916986"
          className="flex items-center space-x-3 text-gray-400 hover:text-cyan-500 transition-colors"
        >
          <Phone className="h-5 w-5" />
          <span>+91 9125916986</span>
        </a>
        <div className="flex space-x-4">
          <IconButton icon={Github} href="https://github.com/MatrixEncoder" />
          <IconButton icon={Linkedin} href="https://www.linkedin.com/in/suryansh-srivastava-746113292" color="purple" />
          <IconButton icon={Instagram} href="https://instagram.com/illusionist__666" color="cyan" />
        </div>
      </div>
    </div>
  );
}