import React, { useState } from 'react';
import { Mail, Github, Linkedin, Twitter, Phone, Instagram } from 'lucide-react';
import { SectionTitle } from './ui/SectionTitle';
import { IconButton } from './ui/IconButton';
import { ContactForm } from './contact/ContactForm';
import { ContactInfo } from './contact/ContactInfo';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Get in Touch</SectionTitle>
        
        <div className="max-w-3xl mx-auto bg-gray-900/50 p-8 rounded-xl border border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}