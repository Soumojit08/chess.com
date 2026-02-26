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
    <div className="min-h-screen w-full bg-background text-foreground pt-15">
      <div className="w-full border-t border-zinc-800/50 px-3 py-3 md:px-4 md:py-4 lg:h-[65%] lg:px-0 lg:py-0">
        <div className="grid w-full grid-cols-1 gap-3 lg:h-full lg:grid-cols-2 lg:gap-2">
          {/* name and image  */}
          <HeroSection />

          {/* analysis area */}
          <section className="min-w-0 w-full p-0 md:px-0 lg:p-4 lg:pr-8 lg:pb-1">
            <div className="grid h-full w-full grid-cols-1 gap-3 md:grid-cols-2 lg:gap-2">
              {/* Left column - 3 equal rows */}
              <StatsCards />
              {/* Right column - 2 rows (top smaller, bottom larger) */}
              <div className="min-w-0 grid grid-cols-1 gap-3 lg:gap-2">
                <EloChart />
                <FriendsList />
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="grid w-full grid-cols-1 gap-3 px-3 pb-3 md:grid-cols-2 md:px-4 lg:h-[35%] lg:grid-cols-4 lg:gap-4 lg:p-8 lg:pt-2">
        <Card className="w-full min-w-0 flex flex-col items-center justify-center">
          <CardHeader className="text-center text-2xl">
            <CardTitle>Win Percentage</CardTitle>
          </CardHeader>
          <CardDescription>
            <span className="capitalize text-3xl">69%</span>
          </CardDescription>
        </Card>

        <Card className="w-full min-w-0 flex flex-col items-center justify-center">
          <CardHeader className="text-center text-2xl">
            <CardTitle>Daily Streak</CardTitle>
          </CardHeader>
          <CardDescription>
            <span className="capitalize text-3xl">10 days</span>
          </CardDescription>
        </Card>

        <Card className="w-full min-w-0 flex flex-col overflow-hidden">
          <ActivityGrid />
        </Card>

        <MatchHistory />
      </div>
    </div>
  );
};

export default Dashboard;
