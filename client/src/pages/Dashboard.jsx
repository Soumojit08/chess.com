import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import Avtar from "@/components/Avtar";

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="h-screen w-full bg-background text-foreground flex flex-col pt-20 px-8 pb-8 overflow-hidden font-sans">
      <div className="flex-1 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-3 gap-4">
        {/* Avatar Card - Premium glass effect */}
        <Card className="relative overflow-hidden bg-linear from-charcoal to-obsidian py-3 flex flex-col items-center justify-start group hover:border-white/20 transition-all duration-300 cursor-pointer">
          <CardTitle className="flex flex-col items-center justify-center space-y-1">
            <Avtar />
            <h1 className="text-2xl font-mono text-center">{user.fullName}</h1>
            <h3 className="text-xl font-mono text-center uppercase"> Class : Rookie</h3>
          </CardTitle>
        </Card>

        {/* Start Game Card - Hero CTA */}
        <Card className="lg:col-span-2 relative overflow-hidden bg-linear from-charcoal to-obsidian p-8 flex flex-col items-center justify-center group hover:border-white/30 transition-all duration-500"></Card>

        {/* Level Card - Hexagon style */}
        <Card className="relative overflow-hidden bg-linear from-charcoal to-obsidian p-6 flex flex-col items-center justify-center hover:border-white/20 transition-all duration-300"></Card>

        {/* Daily Bonus Card */}
        <Card className="relative overflow-hidden bg-linear from-charcoal to-obsidian p-6 flex items-center justify-between hover:border-white/20 transition-all duration-300"></Card>

        {/* Leaderboard Card - Tall prominence */}
        <Card className="lg:col-span-2 lg:row-span-2 relative overflow-hidden bg-linear from-charcoal to-obsidian p-6 flex flex-col hover:border-white/20 transition-all duration-300"></Card>

        {/* Coins Card */}
        <Card className="relative overflow-hidden bg-linear from-charcoal to-obsidian p-6 flex flex-col items-center justify-center hover:border-white/20 transition-all duration-300"></Card>

        {/* Friends Card */}
        <Card className="relative overflow-hidden bg-linear from-charcoal to-obsidian p-5 flex flex-col hover:border-white/20 transition-all duration-300"></Card>

        {/* Game History Card */}
        <Card className="relative overflow-hidden bg-linear from-charcoal to-obsidian p-5 flex flex-col hover:border-white/20 transition-all duration-300"></Card>
      </div>
    </div>
  );
};

export default Dashboard;
