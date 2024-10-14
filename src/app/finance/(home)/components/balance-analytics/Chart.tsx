import { LineChart } from "@/components/charts/LineChart";

export const Chart = () => {
  const enrollmentData = [
    { month: 'Jan', enrollments: 30000 },
    { month: 'Fev', enrollments: 25000 },
    { month: 'Mar', enrollments: 40000 },
    { month: 'Abr', enrollments: 50000 },
    { month: 'Mai', enrollments: 45000 },
    { month: 'Jun', enrollments: 123254.00 },
    { month: 'Jul', enrollments: 55000 },
    { month: 'Ago', enrollments: 35000 },
    { month: 'Set', enrollments: 30000 },
    { month: 'Out', enrollments: 20000 },
    { month: 'Nov', enrollments: 40000 },
    { month: 'Dez', enrollments: 50000 },
  ];

  return (
      <LineChart data={enrollmentData} />
  );
};

