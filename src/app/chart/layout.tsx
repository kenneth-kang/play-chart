import ChartSidebar from '@/components/ChartSidebar';

export default function ChartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row gap-8 min-w-0">
      <div className="w-full md:w-56 flex-shrink-0">
        <ChartSidebar />
      </div>
      <div className="flex-1 min-w-0">
        {children}
      </div>
    </div>
  );
} 