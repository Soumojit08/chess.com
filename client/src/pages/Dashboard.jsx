import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="h-screen w-full bg-background text-foreground flex flex-col pt-20 px-8 pb-8 overflow-hidden font-sans">
      <div className="flex-1 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-3 gap-4">
        {/* Avatar Card - Premium glass effect */}
        <Card className="relative overflow-hidden border-white/10 bg-linear-to-br from-charcoal to-obsidian p-6 flex flex-col items-center justify-center group hover:border-white/20 transition-all duration-300">
          <div className="w-20 h-20 rounded-full bg-linear-to-br from-silver/20 to-transparent border border-white/20 flex items-center justify-center mb-3">
            <span className="text-2xl font-light text-white/80">
              {user?.firstName?.charAt(0) || "U"}
            </span>
          </div>
          <CardTitle className="text-lg font-medium">
            {user?.fullName || "Player"}
          </CardTitle>
          <CardDescription className="text-silver text-xs mt-1">
            Member since 2024
          </CardDescription>
        </Card>

        {/* Start Game Card - Hero CTA */}
        <Card className="lg:col-span-2 relative overflow-hidden border-white/10 bg-linear-to-br from-charcoal via-charcoal to-obsidian p-8 flex flex-col items-center justify-center group hover:border-white/30 transition-all duration-500">
          <div className="absolute inset-0 bg-linear-to-r from-white/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <CardTitle className="text-2xl font-light tracking-wide mb-2 relative z-10">
            Ready to Play?
          </CardTitle>
          <CardDescription className="text-silver mb-6 relative z-10">
            Challenge opponents worldwide
          </CardDescription>
          <Button className="relative z-10 px-8 py-3 text-sm font-medium tracking-wider uppercase">
            Start Game
          </Button>
        </Card>

        {/* Level Card - Hexagon style */}
        <Card className="relative overflow-hidden border-white/10 bg-linear-to-b from-charcoal to-obsidian p-6 flex flex-col items-center justify-center hover:border-white/20 transition-all duration-300">
          <div className="w-16 h-16 rotate-45 border-2 border-white/30 flex items-center justify-center mb-4">
            <span className="text-xl font-light -rotate-45">80</span>
          </div>
          <CardTitle className="text-sm font-medium tracking-wider uppercase text-silver">
            Level
          </CardTitle>
        </Card>

        {/* Daily Bonus Card */}
        <Card className="relative overflow-hidden border-white/10 bg-charcoal p-6 flex items-center justify-between hover:border-white/20 transition-all duration-300">
          <div className="flex flex-col">
            <CardTitle className="text-base font-medium mb-1">
              Daily Bonus
            </CardTitle>
            <CardDescription className="text-silver text-xs">
              +50 Coins Available
            </CardDescription>
          </div>
          <Button
            variant="secondary"
            size="sm"
            className="text-xs uppercase tracking-wider"
          >
            Claim
          </Button>
        </Card>

        {/* Leaderboard Card - Tall prominence */}
        <Card className="lg:col-span-2 lg:row-span-2 relative overflow-hidden border-white/10 bg-linear-to-b from-charcoal to-obsidian p-6 flex flex-col hover:border-white/20 transition-all duration-300">
          <CardHeader className="p-0 mb-4">
            <CardTitle className="text-sm font-medium tracking-wider uppercase text-silver flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-white rounded-full" />
              Global Leaderboard
            </CardTitle>
          </CardHeader>
          <div className="flex-1 flex flex-col justify-center space-y-3">
            {[1, 2, 3, 4, 5].map((rank) => (
              <div
                key={rank}
                className="flex items-center justify-between py-2 border-b border-white/5 last:border-0"
              >
                <div className="flex items-center gap-3">
                  <span className="text-silver text-xs w-4">{rank}</span>
                  <div className="w-6 h-6 rounded-full bg-white/10" />
                  <span className="text-sm">Player {rank}</span>
                </div>
                <span className="text-silver text-xs">{1500 - rank * 50}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Coins Card */}
        <Card className="relative overflow-hidden border-white/10 bg-charcoal p-6 flex flex-col items-center justify-center hover:border-white/20 transition-all duration-300">
          <span className="text-3xl font-light mb-2">3,506</span>
          <CardTitle className="text-xs font-medium tracking-wider uppercase text-silver">
            Chess Coins
          </CardTitle>
        </Card>

        {/* Friends Card */}
        <Card className="relative overflow-hidden border-white/10 bg-charcoal p-5 flex flex-col hover:border-white/20 transition-all duration-300">
          <CardTitle className="text-xs font-medium tracking-wider uppercase text-silver mb-3">
            Close Friends
          </CardTitle>
          <div className="flex-1 flex items-center justify-center">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-white/10 border-2 border-charcoal"
                />
              ))}
            </div>
          </div>
        </Card>

        {/* Game History Card */}
        <Card className="relative overflow-hidden border-white/10 bg-charcoal p-5 flex flex-col hover:border-white/20 transition-all duration-300">
          <CardTitle className="text-xs font-medium tracking-wider uppercase text-silver mb-3">
            Game History
          </CardTitle>
          <div className="flex-1 flex items-end justify-between gap-1 px-2">
            {[60, 40, 80, 30, 70, 50, 90].map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-linear-to-t from-white/20 to-white/5 rounded-t-xs"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
