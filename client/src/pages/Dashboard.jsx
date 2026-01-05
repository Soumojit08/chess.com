import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="w-full h-screen bg-background text-foreground flex items-center justify-center px-20">
      <div className="flex w-full h-4/5 justify-evenly space-x-4">
        <div className="w-1/4 flex flex-col space-y-4">
          <Card className="w-full h-1/3 rounded-none flex items-center justify-center text-center">
            <CardHeader>
              <h1>Avtar</h1>
              <CardTitle>{user.fullName}</CardTitle>
            </CardHeader>
          </Card>
          <Card className="w-full h-1/2 rounded-none"></Card>
          <Card className="w-full h-1/4 rounded-none"></Card>
        </div>
        <div className="w-1/3 flex flex-col space-y-4">
          <Card className="w-full h-1/2 rounded-none"></Card>
          <Card className="w-full h-1/2 rounded-none"></Card>
          <div className="w-full h-1/3 flex gap-4">
            <Card className="w-1/2 rounded-none"></Card>
            <Card className="w-1/2 rounded-none"></Card>
          </div>
        </div>
        <div className="w-1/4 flex flex-col space-y-4">
          <Card className="max-w-4/5 h-1/3 rounded-none"></Card>
          <Card className="max-w-4/5 h-1/3 rounded-none"></Card>
          <Card className="max-w-4/5 h-1/3 rounded-none"></Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
