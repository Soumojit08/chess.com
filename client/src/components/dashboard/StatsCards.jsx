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
  );
};

export default StatsCards;
