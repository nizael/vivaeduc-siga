import { LineChart } from "@/components/charts/LineChart";

export const Chart = () => {
  const enrollmentData = [
    { label: 'Jan', value: 30000 },
    { label: 'Fev', value: 25000 },
    { label: 'Mar', value: 40000 },
    { label: 'Abr', value: 50000 },
    { label: 'Mai', value: 45000 },
    { label: 'Jun', value: 123254.00 },
    { label: 'Jul', value: 55000 },
    { label: 'Ago', value: 35000 },
    { label: 'Set', value: 30000 },
    { label: 'Out', value: 20000 },
    { label: 'Nov', value: 40000 },
    { label: 'Dez', value: 50000 },
  ];

  return (
      <LineChart data={enrollmentData} />
  );
};

