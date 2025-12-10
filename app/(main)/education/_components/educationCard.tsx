const educationCard = ({ uni }) => {
    return (
        <div className="relative overflow-hidden bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
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
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-20 h-20 rounded-lg bg-white flex items-center justify-center border border-gray-200 shadow-md shrink-0">
                        <img src={uni.logo} alt={uni.name} className="w-full h-full object-contain p-2" />
                    </div>
                    <div>
                        <h4 className="text-lg font-bold text-gray-900 drop-shadow-sm">{uni.name}</h4>
                        <p className="text-sm text-gray-700 font-medium drop-shadow-sm">{uni.year}</p>
                    </div>
                </div>
                <p className="text-slate-800 font-bold mb-2 drop-shadow-sm">{uni.degree}</p>
                <p className="text-sm text-slate-800 leading-relaxed font-medium drop-shadow-sm">{uni.details}</p>
            </div>
        </div>
    )
}

export default educationCard;