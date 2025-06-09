# Data Visualization Playground

> D3 기반 차트 예제를 탐색하고 실행해볼 수 있는 인터랙티브 오픈소스 사이트  
> 사용자는 차트 카테고리, 속성, 데이터를 선택하여 다양한 D3.js 시각화 사례를 실험할 수 있습니다.

## Features

- **Chart Categories**: Browse charts by category (Basic, Mixed, Large Data, Special)
- **Interactive Playground**: Modify chart data and settings in real-time
- **Search Functionality**: Find charts by name or category
- **Responsive Design**: Works on desktop and mobile devices
- **Chart Templates**: JSON-based configuration for abstracted chart structure
- **Real-time Rendering**: Edit data properties and see changes instantly

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [D3.js](https://d3js.org/) - Data visualization library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Vercel](https://vercel.com) - Deployment platform
- [Jest](https://jestjs.io/) - Testing framework
- [GitHub Actions](https://github.com/features/actions) - CI/CD

## Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/kenneth-kang/play-chart.git
cd play-chart
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

## Architecture

```
+-------------+        +---------------------+
|   User      | -----> |  Next.js Frontend   |
+-------------+        +---------------------+
                             |
                             v
                 +--------------------------+
                 | JSON 기반 차트 구성 정보 |
                 +--------------------------+
                             |
                             v
                   +-------------------+
                   |   D3.js Renderer  |
                   +-------------------+
                             |
                             v
                  +----------------------+
                  | 인터랙티브 차트 결과 |
                  +----------------------+
```

## Key Achievements

- Built a JSON-based design structure for structuring and abstracting D3 chart examples
- Implemented CSR + SSR parallel strategy using Next.js App Router
- Designed a portfolio and open-source based documentation structure to encourage contributions

## Links

- [🔗 GitHub Repository](https://github.com/kenneth-kang/play-chart)
- [🚀 Live Demo (Vercel)](https://play-chart.vercel.app)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
