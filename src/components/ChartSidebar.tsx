'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const categories = [
  {
    id: 'basic',
    name: 'Basic Charts',
    charts: [
      { id: 'line', name: 'Line Chart' },
      { id: 'bar', name: 'Bar Chart' },
      { id: 'pie', name: 'Pie Chart' },
    ],
  },
  {
    id: 'mixed',
    name: 'Mixed Charts',
    charts: [
      { id: 'line-bar', name: 'Line & Bar Chart' },
      { id: 'area-line', name: 'Area & Line Chart' },
    ],
  },
  {
    id: 'large-data',
    name: 'Large Data Charts',
    charts: [
      { id: 'scatter', name: 'Scatter Plot' },
      { id: 'heatmap', name: 'Heat Map' },
    ],
  },
  {
    id: 'special',
    name: 'Special Visualizations',
    charts: [
      { id: 'radar', name: 'Radar Chart' },
      { id: 'bubble', name: 'Bubble Chart' },
    ],
  },
];

export default function ChartSidebar() {
  const pathname = usePathname();
  const currentChartId = pathname.split('/').pop();
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['basic']);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  return (
    <div className="w-64 flex-shrink-0">
      <div className="bg-white rounded-lg shadow-sm sticky top-8">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-900">Chart Categories</h2>
        </div>
        <nav className="p-2">
          {categories.map((category) => (
            <div key={category.id} className="mb-2">
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full flex items-center justify-between p-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg"
              >
                <span>{category.name}</span>
                <svg
                  className={`w-4 h-4 transform transition-transform duration-200 ${
                    expandedCategories.includes(category.id) ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ease-in-out ${
                  expandedCategories.includes(category.id) ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="ml-4 mt-1 space-y-1">
                  {category.charts.map((chart) => (
                    <Link
                      key={chart.id}
                      href={`/chart/${chart.id}`}
                      className={`block p-2 text-sm rounded-lg transition-colors duration-200 ${
                        currentChartId === chart.id
                          ? 'bg-blue-50 text-blue-700'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {chart.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
} 