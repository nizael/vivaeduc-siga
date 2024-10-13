import { LineChart } from "@/components/charts/LineChart";

export const Chart = () => {
  const enrollmentData = [
    { month: 'Jan', enrollments: 30 },
    { month: 'Fev', enrollments: 25 },
    { month: 'Mar', enrollments: 40 },
    { month: 'Abr', enrollments: 50 },
    { month: 'Mai', enrollments: 45 },
    { month: 'Jun', enrollments: 100 },
    { month: 'Jul', enrollments: 55 },
    { month: 'Ago', enrollments: 35 },
    { month: 'Set', enrollments: 30 },
    { month: 'Out', enrollments: 20 },
    { month: 'Nov', enrollments: 40 },
    { month: 'Dez', enrollments: 50 },
  ];

  return (
      <LineChart data={enrollmentData} />
  );
};

