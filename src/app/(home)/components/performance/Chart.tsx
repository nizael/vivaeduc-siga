import { LineChart } from "@/components/charts/LineChart";

export const Chart = () => {
  const enrollmentData = [
    { label: 'Jan', value: 0},
    { label: 'Fev', value: 0},
    { label: 'Mar', value: 0},
    { label: 'Abr', value: 0},
    { label: 'Mai', value: 0},
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0},
    { label: 'Ago', value: 0},
    { label: 'Set', value: 0},
    { label: 'Out', value: 0},
    { label: 'Nov', value: 0},
    { label: 'Dez', value: 0},
  ];

  return (
    <div className="p-4">
      <LineChart data={enrollmentData} />
    </div>
  );
};

