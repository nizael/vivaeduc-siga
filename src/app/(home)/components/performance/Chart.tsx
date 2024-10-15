import { LineChart } from "@/components/charts/LineChart";

export const Chart = () => {
  const enrollmentData = [
    { label: 'Jan', value: 30 },
    { label: 'Fev', value: 25 },
    { label: 'Mar', value: 40 },
    { label: 'Abr', value: 50 },
    { label: 'Mai', value: 45 },
    { label: 'Jun', value: 100 },
    { label: 'Jul', value: 55 },
    { label: 'Ago', value: 35 },
    { label: 'Set', value: 30 },
    { label: 'Out', value: 20 },
    { label: 'Nov', value: 40 },
    { label: 'Dez', value: 50 },
  ];

  return (
    <div className="p-4">
      <LineChart data={enrollmentData} />
    </div>
  );
};

