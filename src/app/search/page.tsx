'use client';

import { useState } from 'react';
import Link from 'next/link';

const allCharts = [
  { id: 'line', name: 'Line Chart', category: 'Basic Charts' },
  { id: 'bar', name: 'Bar Chart', category: 'Basic Charts' },
  { id: 'pie', name: 'Pie Chart', category: 'Basic Charts' },
  { id: 'line-bar', name: 'Line & Bar Chart', category: 'Mixed Charts' },
  { id: 'area-line', name: 'Area & Line Chart', category: 'Mixed Charts' },
  { id: 'scatter', name: 'Scatter Plot', category: 'Large Data Charts' },
  { id: 'heatmap', name: 'Heat Map', category: 'Large Data Charts' },
  { id: 'radar', name: 'Radar Chart', category: 'Special Visualizations' },
  { id: 'bubble', name: 'Bubble Chart', category: 'Special Visualizations' },
];

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredCharts = allCharts.filter(chart => 
    chart.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    chart.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h1 className="text-2xl font-semibold text-gray-900 mb-4">Search Charts</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search by chart name or category..."
            className="w-full p-4 border border-gray-300 rounded-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCharts.map((chart) => (
          <Link
            key={chart.id}
            href={`/chart/${chart.id}`}
            className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="aspect-video bg-gray-100 rounded-lg mb-4">
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                Chart Preview
              </div>
            </div>
            <h3 className="text-lg font-medium text-gray-900">{chart.name}</h3>
            <p className="text-sm text-gray-600">{chart.category}</p>
          </Link>
        ))}
      </div>
    </div>
  );
} 