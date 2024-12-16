import React, { useState } from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { SectionTitle } from './ui/SectionTitle';
import { IconButton } from './ui/IconButton';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prepare email content
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
    `;
    
    // Create mailto URL
    const mailtoUrl = `mailto:2023021161@mmmut.ac.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open default email client
    window.location.href = mailtoUrl;
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="relative py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Get in Touch</SectionTitle>
        
        <div className="max-w-3xl mx-auto bg-gray-900/50 p-8 rounded-xl border border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                <div className="flex space-x-4">
                  <IconButton icon={Github} href="https://github.com/MatrixEncoder" />
                  <IconButton icon={Linkedin} href="https://www.linkedin.com/in/suryansh-srivastava-746113292" color="purple" />
                  <IconButton icon={Twitter} href="https://twitter.com" />
                </div>
              </div>
            </div>
            
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="w-full px-4 py-2 bg-black/50 border border-gray-800 rounded-lg focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-gray-300"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full px-4 py-2 bg-black/50 border border-gray-800 rounded-lg focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-gray-300"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                required
                rows={4}
                className="w-full px-4 py-2 bg-black/50 border border-gray-800 rounded-lg focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-gray-300"
              />
              <button
                type="submit"
                className="w-full py-2 px-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}