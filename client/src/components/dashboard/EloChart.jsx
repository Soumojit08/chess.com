import { Card } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

const chartConfig = {
  elo: {
    label: "ELO",
    color: "var(--chart-1)",
  },
};

const chartData = [
  { month: "January", elo: 800 },
  { month: "February", elo: 1257 },
  { month: "March", elo: 1420 },
  { month: "April", elo: 1310 },
  { month: "May", elo: 1400 },
  { month: "June", elo: 1457 },
];

const EloChart = () => {
  return (
    <Card className="w-full min-w-0 p-3 md:p-4" id="chart">
      <ChartContainer
        config={chartConfig}
        className="h-52 w-full min-w-0 md:h-64 lg:h-56"
      >
        <LineChart
          accessibilityLayer
          data={chartData}
          margin={{ left: 12, right: 12 }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={true}
            tickMargin={4}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={true}
            content={<ChartTooltipContent hideLabel />}
          />
          <Line
            dataKey="elo"
            type="natural"
            stroke="#ffffff"
            strokeWidth={2}
            dot={{
              fill: "#ffffff",
              stroke: "#ffffff",
              r: 4,
            }}
            activeDot={{
              r: 6,
              fill: "#ffffff",
            }}
          />
        </LineChart>
      </ChartContainer>
    </Card>
  );
};

export default EloChart;
