import { LineChart } from "@/components/charts/LineChart";

export const Chart = ({monthlyReport}:{monthlyReport: { label: string, value: number}[],}) => {

  return (
    <div className="p-4">
      <LineChart data={monthlyReport} />
    </div>
  );
};

