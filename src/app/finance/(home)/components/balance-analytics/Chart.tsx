import { LineChart } from "@/components/charts/LineChart";

export const Chart = ({dailySummary}:{dailySummary: { label: string, value: number }[] }) => {


  return (
      <LineChart data={dailySummary} />
  );
};

