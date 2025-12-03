const EmailForm = () => {
    return (
        <div className="max-w-2xl mx-auto">
            {/* Left Column: Contact Form */}
            <form className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-blue-100">Name</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200/50 focus:outline-none focus:border-white/50 focus:bg-white/20 transition-all"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-blue-100">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="your.email@example.com"
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200/50 focus:outline-none focus:border-white/50 focus:bg-white/20 transition-all"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-blue-100">Message</label>
                    <textarea
                        id="message"
                        rows={4}
                        placeholder="Tell me about the opportunity..."
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200/50 focus:outline-none focus:border-white/50 focus:bg-white/20 transition-all resize-none"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full py-3 bg-white text-[#004C9C] font-bold rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
                >
                    Send Message
                </button>
            </form>
            <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>

            <script src="mail.js"></script>
        </div>
    )
}

export default EmailForm;