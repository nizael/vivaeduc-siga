import { BarChart } from "@/components/charts/BarChart";

export const Chart = () => {
  const enrollmentData = [
    { label: 'Dom', value: 3000 },
    { label: 'Seg', value: 2000 },
    { label: 'Ter', value: 4000 },
    { label: 'Qua', value: 5000 },
    { label: 'Qui', value: 4000 },
    { label: 'Sex', value: 6000 },
    { label: 'Sáb', value: 5000 },
   
  ];

  return (
    <div className="p-4">
      <BarChart data={enrollmentData} />
    </div>
  );
};

