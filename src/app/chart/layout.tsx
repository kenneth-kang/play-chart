import ChartSidebar from '@/components/ChartSidebar';

export default function ChartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-8">
      <ChartSidebar />
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
} 