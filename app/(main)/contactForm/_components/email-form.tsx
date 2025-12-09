"use client";

import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

const EmailForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        const form = e.currentTarget;
        const templateParams = {
            name: (form.elements.namedItem('name') as HTMLInputElement).value,
            email: (form.elements.namedItem('email') as HTMLInputElement).value,
            message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
        };

        try {
            // Initialize EmailJS with your public key
            emailjs.init('D6mJ2-dJcmk5iLAbW');

            // Send email
            await emailjs.send('service_hjb1skq', 'template_gqccyyt', templateParams);

            setSubmitStatus('success');
            form.reset();
        } catch (error) {
            console.error('Email send failed:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto">
            {/* Left Column: Contact Form */}
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-blue-100">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200/50 focus:outline-none focus:border-white/50 focus:bg-white/20 transition-all"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-blue-100">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="your.email@example.com"
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200/50 focus:outline-none focus:border-white/50 focus:bg-white/20 transition-all"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-blue-100">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        placeholder="Tell me about the opportunity..."
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200/50 focus:outline-none focus:border-white/50 focus:bg-white/20 transition-all resize-none"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-white text-[#004C9C] font-bold rounded-lg hover:bg-blue-50 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                    <p className="text-green-300 text-center text-sm">✓ Message sent successfully!</p>
                )}
                {submitStatus === 'error' && (
                    <p className="text-red-300 text-center text-sm">✗ Failed to send. Please email towerhamletscouncil@gmail.com</p>
                )}
            </form>
        </div>
    )
}

export default EmailForm;
