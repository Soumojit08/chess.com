import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const matchData = [
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
];

const MatchHistory = () => {
  return (
    <Card className="flex-2 flex flex-col">
      <CardHeader className="pb-1 pt-3 px-4">
        <CardTitle className="text-base">Match History</CardTitle>
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
            {matchData.map((match, i) => (
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
  );
};

export default MatchHistory;
