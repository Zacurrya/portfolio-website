interface ChevronDownProps {
    href?: string;
    color?: string; 
    className?: string;
}

const ChevronDown: React.FC<ChevronDownProps> = ({ href = 'about', color = 'text-[#004C9C]', className = '' }) => {

    return (
        <div className={`transition-all duration-300 ease-in-out'opacity-100 translate-y-0'} ${className}`}>
            <a
                href={`#${href}`}
                className={`inline-flex items-center justify-center px-6 py-3 bg-transparent ${color} rounded-full`}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>
            </a>
        </div>
    );
};

export default ChevronDown;