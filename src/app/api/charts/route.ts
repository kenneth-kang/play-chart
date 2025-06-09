import { NextResponse } from 'next/server';

const charts = [
  {
    id: 'line',
    category: 'basic',
    name: 'Line Chart',
    description: 'A line chart is a type of chart which displays information as a series of data points connected by straight line segments.',
  },
  {
    id: 'bar',
    category: 'basic',
    name: 'Bar Chart',
    description: 'A bar chart presents categorical data with rectangular bars with heights or lengths proportional to the values that they represent.',
  },
  {
    id: 'pie',
    category: 'basic',
    name: 'Pie Chart',
    description: 'A pie chart is a circular statistical graphic, which is divided into slices to illustrate numerical proportions.',
  },
  {
    id: 'line-bar',
    category: 'mixed',
    name: 'Line & Bar Chart',
    description: 'A combination chart that displays both line and bar series in the same chart.',
  },
  {
    id: 'area-line',
    category: 'mixed',
    name: 'Area & Line Chart',
    description: 'A combination chart that displays both area and line series in the same chart.',
  },
  {
    id: 'scatter',
    category: 'large-data',
    name: 'Scatter Plot',
    description: 'A scatter plot uses dots to represent values for two different numeric variables.',
  },
  {
    id: 'heatmap',
    category: 'large-data',
    name: 'Heat Map',
    description: 'A heat map is a data visualization technique that shows magnitude of a phenomenon as color in two dimensions.',
  },
  {
    id: 'radar',
    category: 'special',
    name: 'Radar Chart',
    description: 'A radar chart is a graphical method of displaying multivariate data in the form of a two-dimensional chart.',
  },
  {
    id: 'bubble',
    category: 'special',
    name: 'Bubble Chart',
    description: 'A bubble chart is a type of chart that displays three dimensions of data.',
  },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const id = searchParams.get('id');

  let filteredCharts = [...charts];

  if (category) {
    filteredCharts = filteredCharts.filter(chart => chart.category === category);
  }

  if (id) {
    filteredCharts = filteredCharts.filter(chart => chart.id === id);
  }

  return NextResponse.json(filteredCharts);
} 