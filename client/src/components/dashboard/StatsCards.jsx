import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { useSelector } from "react-redux";

const StatsCards = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="grid w-full min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-1 lg:gap-2">
      <Card className="flex min-h-28 flex-col items-center justify-center">
        <CardHeader className="text-center text-xl">
          <CardTitle>Welcome</CardTitle>
        </CardHeader>
        <CardDescription>
          <span className="capitalize text-xl">{user.fullName}</span>
        </CardDescription>
      </Card>

      <Card className="flex min-h-28 flex-col items-center justify-center">
        <CardHeader className="text-center text-xl">
          <CardTitle>Games Played</CardTitle>
        </CardHeader>
        <CardDescription>
          <span className="capitalize text-xl">72</span>
        </CardDescription>
      </Card>

      <Card className="flex min-h-28 flex-col items-center justify-center sm:col-span-2 md:col-span-1">
        <CardHeader className="text-center text-xl">
          <CardTitle>Games Won</CardTitle>
        </CardHeader>
        <CardDescription>
          <span className="capitalize text-xl">24</span>
        </CardDescription>
      </Card>
    </div>
  );
};

export default StatsCards;
