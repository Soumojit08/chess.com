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
    <div className="h-screen w-full bg-background text-foreground flex flex-wrap font-sans pt-15">
      <div className="w-full flex h-[65%] p-2 pb-1 gap-2">
        <section className="border-red-700 border-2 w-[60%]"></section>
        <section className="border-red-700 border-2 w-[40%]"></section>
      </div>
      <div className="w-full flex h-[35%] p-2 pt-1 gap-2">
        <section className="border-red-700 border-2 w-[25%]"></section>
        <section className="border-red-700 border-2 w-[25%]"></section>
        <section className="border-red-700 border-2 w-[25%]"></section>
        <section className="border-red-700 border-2 w-[25%]"></section>
      </div>
    </div>
  );
};

export default Dashboard;
