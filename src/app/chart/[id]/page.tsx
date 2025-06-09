import ChartClient from './ChartClient';

type Props = {
  params: Promise<{ id: string }>
};

export default async function ChartPage({ params }: Props) {
  const { id } = await params;
  return <ChartClient id={id} />;
} 