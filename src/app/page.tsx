import Link from 'next/link';

const categories = [
  {
    id: 'basic',
    name: 'Basic Charts',
    description: 'Simple and commonly used chart types',
    charts: [
      { id: 'line', name: 'Line Chart', image: './charts/line-chart.png' },
      { id: 'bar', name: 'Bar Chart', image: './charts/bar-chart.png' },
      { id: 'pie', name: 'Pie Chart', image: './charts/pie-chart.png' },
    ],
  },
  {
    id: 'mixed',
    name: 'Mixed Charts',
    description: 'Combinations of different chart types',
    charts: [
      { id: 'line-bar', name: 'Line & Bar Chart', image: '/charts/mixed-bar-line-chart.png' },
      { id: 'area-line', name: 'Area & Line Chart', image: '/charts/mixed-area-line-chart.png' },
    ],
  },
  {
    id: 'large-data',
    name: 'Large Data Charts',
    description: 'Charts optimized for large datasets',
    charts: [
      { id: 'bigline', name: 'Big Data Line Chart', image: '/charts/big-data-line-chart.png' },
      // { id: 'heatmap', name: 'Heat Map', image: '/charts/heatmap.png' },
    ],
  },
  {
    id: 'special',
    name: 'Special Visualizations',
    description: 'Advanced and specialized chart types',
    charts: [
      { id: 'topology', name: 'Topology', image: '/charts/special-topology-chart.png' },
      // { id: 'radar', name: 'Radar Chart', image: '/charts/radar.png' },
      // { id: 'bubble', name: 'Bubble Chart', image: '/charts/bubble.png' },
    ],
  },
];

export const metadata = {
  title: "Data Visualization Playground - Play Chart",
  description: "인터랙티브 데이터 시각화 예제 모음. 다양한 차트 예제를 실험해보세요.",
  openGraph: {
    title: "Data Visualization Playground - Play Chart",
    description: "다양한 차트 예제를 실험해보세요.",
    url: "https://play-chart.vercel.app",
    images: [
      {
        url: "/play-chart-img.png",
        width: 800,
        height: 600,
        alt: "Play Chart Main Image",
      },
    ],
    siteName: "Play Chart",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Visualization Playground - Play Chart",
    description: "다양한 차트 예제를 실험해보세요.",
    images: ["/play-chart-img.png"],
  },
};

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <div className="mb-8">
          <img 
            src="/play-chart-image.png" 
            alt="Play Chart" 
            className="mx-auto w-full max-w-xs sm:max-w-md md:max-w-xl h-auto object-contain"
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
                <div className="aspect-video bg-gray-100 rounded-lg mb-4 overflow-hidden">
                  {chart.image && (
                    <img 
                      src={chart.image} 
                      alt={`${chart.name} preview`}
                      className="w-full h-full object-cover"
                    />
                  )}
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
