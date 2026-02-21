import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import HeroSection from "@/components/dashboard/HeroSection";
import StatsCards from "@/components/dashboard/StatsCards";
import EloChart from "@/components/dashboard/EloChart";
import FriendsList from "@/components/dashboard/FriendsList";
import ActivityGrid from "@/components/dashboard/ActivityGrid";
import MatchHistory from "@/components/dashboard/MatchHistory";

const Dashboard = () => {
  return (
    <div className="h-screen w-full bg-background text-foreground flex flex-wrap pt-15">
      <div className="w-full flex h-[65%]  pb-1 gap-2 border-t border-zinc-800/50">
        {/* name and image  */}
        <HeroSection />

        {/* analysis area */}
        <section className="w-[50%] flex gap-2 p-4 pr-8 pb-1">
          {/* Left column - 3 equal rows */}
          <StatsCards />
          {/* Right column - 2 rows (top smaller, bottom larger) */}
          <div className="w-[65%] flex flex-col gap-2">
            <EloChart />
            <FriendsList />
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
          <ActivityGrid />
        </Card>

        <MatchHistory />
      </div>
    </div>
  );
};

export default Dashboard;
