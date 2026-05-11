const educationCard = ({ uni, compact = false }) => {
    return (
        <div className={compact ? "relative overflow-hidden bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group" : "relative overflow-hidden bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"}>
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={uni.image}
                    alt={uni.name}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity duration-500"
                />
                {/* Lighter gradient to show more of the image */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/50 to-white/30" />
            </div>

            {/* Content */}
            <div className="relative z-10">
                <div className={compact ? "flex items-center gap-3 mb-3" : "flex items-center gap-4 mb-4"}>
                    <div className={compact ? "w-14 h-14 rounded-lg bg-white flex items-center justify-center border border-gray-200 shadow-md shrink-0" : "w-20 h-20 rounded-lg bg-white flex items-center justify-center border border-gray-200 shadow-md shrink-0"}>
                        <img src={uni.logo} alt={uni.name} className={compact ? "w-full h-full object-contain p-1.5" : "w-full h-full object-contain p-2"} />
                    </div>
                    <div>
                        <h4 className={compact ? "text-base font-bold text-gray-900 drop-shadow-sm" : "text-lg font-bold text-gray-900 drop-shadow-sm"}>{uni.name}</h4>
                        <p className={compact ? "text-xs text-gray-700 font-medium drop-shadow-sm" : "text-sm text-gray-700 font-medium drop-shadow-sm"}>{uni.year}</p>
                    </div>
                </div>
                <p className={compact ? "text-xs text-slate-800 font-bold mb-1.5 drop-shadow-sm" : "text-slate-800 font-bold mb-2 drop-shadow-sm"}>{uni.degree}</p>
                <p className={compact ? "text-xs text-slate-800 leading-relaxed font-medium drop-shadow-sm" : "text-sm text-slate-800 leading-relaxed font-medium drop-shadow-sm"}>{uni.details}</p>
            </div>
        </div>
    )
}

export default educationCard;