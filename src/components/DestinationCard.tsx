interface DestinationCardProps {
  title: string;
  period: string;
  description: string;
  imageUrl: string;
  highlights: string;
}

export default function DestinationCard({ title, period, description, imageUrl, highlights }: DestinationCardProps) {
  return (
    <div className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/20 border border-gray-700/50">
      <div className="relative h-64 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
        <div className="absolute top-4 right-4 px-3 py-1 bg-amber-500/90 backdrop-blur-sm text-gray-900 text-sm font-semibold rounded-full">
          {period}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
          {title}
        </h3>
        <p className="text-amber-400 text-sm font-semibold mb-3">{highlights}</p>
        <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>
        <button className="w-full px-6 py-3 bg-gradient-to-r from-amber-500/20 to-yellow-600/20 border border-amber-500/50 text-amber-400 font-semibold rounded-lg hover:from-amber-500 hover:to-yellow-600 hover:text-gray-900 transition-all duration-300">
          Explore Journey
        </button>
      </div>
    </div>
  );
}
