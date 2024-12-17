import React, { useState } from 'react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
    `;
    
    const mailtoUrl = `mailto:2023021161@mmmut.ac.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
    
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
  );
}