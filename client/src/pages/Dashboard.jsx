import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import LightRays from "@/components/LightRays";
import img from "../assets/chess_cutout.webp";
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

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="h-screen w-full bg-background text-foreground flex flex-wrap font-mono pt-15">
      <div className="w-full flex h-[65%]  pb-1 gap-2">
        {/* name and image  */}
        <section className="w-[50%] relative flex flex-col items-center justify-start">
          <div className="absolute inset-0 z-0">
            <LightRays
              raysOrigin="top"
              raysColor="#ffffff"
              raysSpeed={1}
              lightSpread={0.3}
              rayLength={2}
              followMouse={true}
              mouseInfluence={0.1}
              noiseAmount={0.3}
              distortion={0.1}
              className="custom-rays"
              pulsating={false}
              fadeDistance={0.7}
              saturation={1}
            />
          </div>
          <img
            src={img}
            className="relative z-10 w-3/4 object-contain filter contrast-125 brightness-75"
          />
          <div className=" p-8 w-full flex items-center justify-around gap-3">
            <div className="text-3xl">ELO : 1457</div>
            <Button variant="customCovered" size="customSmall">
              [ New Game ]
            </Button>
            <Button variant="customSmall" size="customSmall">
              [ Game History ]
            </Button>
          </div>
        </section>

        {/* analysis area */}
        <section className="w-[50%] flex gap-2 p-2 pb-1">
          {/* Left column - 3 equal rows */}
          <div className="w-[35%] flex flex-col gap-2">
            <Card className="flex-1 flex flex-col items-center justify-center">
              <CardHeader className="text-center text-xl">
                <CardTitle>Welcome</CardTitle>
              </CardHeader>
              <CardDescription>
                <span className="capitalize text-xl">{user.fullName}</span>
              </CardDescription>
            </Card>

            <Card className="flex-1 flex flex-col items-center justify-center">
              <CardHeader className="text-center text-xl">
                <CardTitle>Games Played</CardTitle>
              </CardHeader>
              <CardDescription>
                <span className="capitalize text-xl">72</span>
              </CardDescription>
            </Card>

            <Card className="flex-1 flex flex-col items-center justify-center">
              <CardHeader className="text-center text-xl">
                <CardTitle>Games Won</CardTitle>
              </CardHeader>
              <CardDescription>
                <span className="capitalize text-xl">24</span>
              </CardDescription>
            </Card>
          </div>
          {/* Right column - 2 rows (top smaller, bottom larger) */}
          <div className="w-[65%] flex flex-col gap-2">
            <Card className="h-[40%] p-4" id="chart">
              <ChartContainer
                config={chartConfig}
                className="aspect-auto h-full w-full"
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
            <Card className="flex-1"></Card>
          </div>
        </section>
      </div>
      <div className="w-full flex h-[35%] p-2 pt-1 gap-2">
        <Card className="w-[25%]"></Card>
        <Card className="w-[25%]"></Card>
        <Card className="w-[25%]"></Card>
        <Card className="w-[25%]"></Card>
      </div>
    </div>
  );
};

export default Dashboard;

