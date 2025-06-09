# Data Visualization Playground

An interactive playground for exploring and experimenting with various chart types using Next.js and Chart.js.

## Features

- **Chart Categories**: Browse charts by category (Basic, Mixed, Large Data, Special)
- **Interactive Playground**: Modify chart data and settings in real-time
- **Search Functionality**: Find charts by name or category
- **Responsive Design**: Works on desktop and mobile devices

## Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/data-visualization-playground.git
cd data-visualization-playground
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── charts/
│   │       └── route.ts
│   │   ├── chart/
│   │   │   └── [id]/
│   │   │   └── page.tsx
│   │   ├── search/
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       └── (chart components)
```

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [Chart.js](https://www.chartjs.org/) - Charting library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
