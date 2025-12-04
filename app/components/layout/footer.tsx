import WaveDivider from '../ui/wave-divider';
import EmailForm from '../ui/email-form';

const Footer = () => {
    return (
        <footer id="contact" className="relative">
            <div className="bg-gradient-to-b from-[#004C9C] to-[#002d5c] pt-8 pb-16 text-white">
                {/* Wave Top */}
                <div className="absolute top-0 left-0 right-0 transform -translate-y-full text-[#004C9C]">
                    <WaveDivider position="top" />
                </div>
                <div className="container mx-auto px-6 max-w-6xl">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 inline-block relative">
                            Get In Touch
                            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-white/30 rounded-full"></div>
                        </h2>
                        <p className="text-blue-100 mt-4 text-lg">
                            Interested in collaborating or have a question? Feel free to reach out!
                        </p>
                    </div>

                    {/* Email Form */}
                    <EmailForm />
                    <div className="mt-16 pt-8 border-t border-white/10 text-center text-blue-200 text-sm">
                        <p>&copy; {new Date().getFullYear()} Zakariya Yusuf. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
