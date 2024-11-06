import { BarChart } from "@/components/charts/BarChart";

export const Chart = ({dailySums}:{dailySums:  { label: string, value: number }[]}) => {

  return (
    <div className="p-4">
      <BarChart data={dailySums} />
    </div>
  );
};

