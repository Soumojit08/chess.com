import {
  Card,
  CardContent,
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import CalenderBooked from "@/components/CalendarBooked";


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

const friends = [
  { id: 1, name: "Magnus C.", avatar: "MC", elo: 2847, active: true },
  { id: 2, name: "Hikaru N.", avatar: "HN", elo: 2794, active: false },
  { id: 3, name: "Fabiano C.", avatar: "FC", elo: 2786, active: true },
  { id: 4, name: "Ding Liren", avatar: "DL", elo: 2762, active: false },
  { id: 5, name: "Ian N.", avatar: "IN", elo: 2758, active: true },
  { id: 6, name: "Alireza F.", avatar: "AF", elo: 2751, active: false },
  { id: 7, name: "Wesley So", avatar: "WS", elo: 2778, active: true },
  { id: 8, name: "Levon A.", avatar: "LA", elo: 2745, active: false },
];

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="h-screen w-full bg-background text-foreground flex flex-wrap pt-15">
      <div className="w-full flex h-[65%]  pb-1 gap-2 border-t border-zinc-800/50">
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
        <section className="w-[50%] flex gap-2 p-4 pr-8 pb-1">
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
            <Card className="flex-1 flex flex-col overflow-hidden" id="table">
              <CardHeader className="pb-1 pt-3 px-4">
                <CardTitle className="text-sm">Friends</CardTitle>
              </CardHeader>
              <ScrollArea className="flex-1 px-2 pb-2">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-8"></TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead className="text-center">ELO</TableHead>
                      <TableHead className="text-right"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {friends.map((f) => (
                      <TableRow key={f.id}>
                        {/* Avatar */}
                        <TableCell className="pr-0">
                          <div className="w-7 h-7 rounded-full bg-zinc-700 flex items-center justify-center text-[10px] font-bold text-white">
                            {f.avatar}
                          </div>
                        </TableCell>
                        {/* Name + active dot */}
                        <TableCell>
                          <div className="flex items-center gap-1.5">
                            {f.active && (
                              <span className="w-2 h-2 rounded-full bg-green-500 inline-block shrink-0" />
                            )}
                            <span
                              className={
                                f.active ? "" : "text-muted-foreground"
                              }
                            >
                              {f.name}
                            </span>
                          </div>
                        </TableCell>
                        {/* ELO */}
                        <TableCell className="text-center text-xs text-muted-foreground">
                          {f.elo}
                        </TableCell>
                        {/* Unfriend */}
                        <TableCell className="text-right">
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-xs cursor-pointer bg-primary text-primary-foreground"
                          >
                            Challange
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </ScrollArea>
            </Card>
          </div>
        </section>
      </div>
      <div className="w-full flex h-[35%] p-8 pt-2 gap-4">
        <Card className="flex-1 flex flex-col items-center justify-center">
          <CardHeader className="text-center text-2xl">
            <CardTitle>Win Percentage</CardTitle>
          </CardHeader>
          <CardDescription>
            <span className="capitalize text-3xl">69%</span>
          </CardDescription>
        </Card>

        <Card className="flex-1 flex flex-col items-center justify-center">
          <CardHeader className="text-center text-2xl">
            <CardTitle>Daily Streak</CardTitle>
          </CardHeader>
          <CardDescription>
            <span className="capitalize text-3xl">10 days</span>
          </CardDescription>
        </Card>

        <Card className="flex-1 flex flex-col overflow-hidden">
          <CalenderBooked />
        </Card>

        <Card className="flex-2 flex flex-col">
          <CardHeader className="pb-1 pt-3 px-4">
            <CardTitle className="text-sm">Match History</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 px-3 pb-2 pt-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="py-2">Result</TableHead>
                  <TableHead className="py-2">Opponent</TableHead>
                  <TableHead className="py-2 text-right">Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  {
                    result: "Win",
                    opponent: "Hikaru N.",
                    date: "Today, 10:23 AM",
                    color: "text-green-500",
                  },
                  {
                    result: "Loss",
                    opponent: "Fabiano C.",
                    date: "Yesterday, 8:15 PM",
                    color: "text-red-500",
                  },
                  {
                    result: "Draw",
                    opponent: "Ding Liren",
                    date: "Feb 18, 2:30 PM",
                    color: "text-yellow-500",
                  },
                ].map((match, i) => (
                  <TableRow key={i}>
                    <TableCell className={`py-2 font-medium ${match.color}`}>
                      {match.result}
                    </TableCell>
                    <TableCell className="py-2">{match.opponent}</TableCell>
                    <TableCell className="py-2 text-right text-muted-foreground text-xs">
                      {match.date}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;

