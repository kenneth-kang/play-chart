import Link from 'next/link';

const categories = [
  {
    id: 'basic',
    name: 'Basic Charts',
    description: 'Simple and commonly used chart types',
    charts: [
      { id: 'line', name: 'Line Chart', image: '/charts/line.png' },
      { id: 'bar', name: 'Bar Chart', image: '/charts/bar.png' },
      { id: 'pie', name: 'Pie Chart', image: '/charts/pie.png' },
    ],
  },
  {
    id: 'mixed',
    name: 'Mixed Charts',
    description: 'Combinations of different chart types',
    charts: [
      { id: 'line-bar', name: 'Line & Bar Chart', image: '/charts/line-bar.png' },
      { id: 'area-line', name: 'Area & Line Chart', image: '/charts/area-line.png' },
    ],
  },
  {
    id: 'large-data',
    name: 'Large Data Charts',
    description: 'Charts optimized for large datasets',
    charts: [
      { id: 'scatter', name: 'Scatter Plot', image: '/charts/scatter.png' },
      { id: 'heatmap', name: 'Heat Map', image: '/charts/heatmap.png' },
    ],
  },
  {
    id: 'special',
    name: 'Special Visualizations',
    description: 'Advanced and specialized chart types',
    charts: [
      { id: 'radar', name: 'Radar Chart', image: '/charts/radar.png' },
      { id: 'bubble', name: 'Bubble Chart', image: '/charts/bubble.png' },
    ],
  },
];

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <div className="mb-8">
          <img 
            src="/play-chart-img.png" 
            alt="Play Chart" 
            className="mx-auto max-w-xl w-1/2 h-[200px] object-cover object-center"
          />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Data Visualization Playground
        </h1>
        <p className="text-xl text-gray-600">
          Explore and experiment with various chart types
        </p>
      </section>

      {categories.map((category) => (
        <section key={category.id} className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">{category.name}</h2>
            <p className="text-gray-600">{category.description}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.charts.map((chart) => (
              <Link
                key={chart.id}
                href={`/chart/${chart.id}`}
                className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-video bg-gray-100 rounded-lg mb-4">
                  {/* Placeholder for chart image */}
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    Chart Preview
                  </div>
                </div>
                <h3 className="text-lg font-medium text-gray-900">{chart.name}</h3>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
