const ChevronDown = (props) => {
    return (
        <div className="py-40">
            <a
                href={`#${props.href}`}
                className={`px-8 py-3 bg-transparent ${props.color} font-medium rounded-full`}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>
            </a>
        </div>
    )
}

export default ChevronDown;