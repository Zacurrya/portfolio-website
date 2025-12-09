const educationCard = ({ uni }) => {
    return (
        <div className="relative overflow-hidden bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={uni.image}
                    alt={uni.name}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-white/20" />
            </div>

            {/* Content */}
            <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-20 h-20 rounded-lg bg-white flex items-center justify-center border border-gray-100 shadow-sm shrink-0">
                        <img src={uni.logo} alt={uni.name} className="w-full h-full object-contain p-2" />
                    </div>
                    <div>
                        <h4 className="text-lg font-bold text-gray-900">{uni.name}</h4>
                        <p className="text-sm text-gray-600 font-medium">{uni.year}</p>
                    </div>
                </div>
                <p className="text-slate-700 font-bold mb-2">{uni.degree}</p>
                <p className="text-sm text-slate-700 leading-relaxed font-medium">{uni.details}</p>
            </div>
        </div>
    )
}

export default educationCard;