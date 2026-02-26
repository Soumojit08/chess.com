import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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

const FriendsList = () => {
  return (
    <Card className="flex w-full min-w-0 flex-col overflow-hidden" id="table">
      <CardHeader className="pb-1 pt-3 px-4">
        <CardTitle className="text-sm">Friends</CardTitle>
      </CardHeader>
      <ScrollArea className="h-64 w-full px-2 pb-2 md:h-72 lg:h-[14rem]">
        <div className="w-full overflow-x-auto">
          <Table className="min-w-[22rem]">
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
                  <TableCell className="pr-0">
                    <div className="w-7 h-7 rounded-full bg-zinc-700 flex items-center justify-center text-[10px] font-bold text-white">
                      {f.avatar}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1.5">
                      {f.active && (
                        <span className="w-2 h-2 rounded-full bg-green-500 inline-block shrink-0" />
                      )}
                      <span className={f.active ? "" : "text-muted-foreground"}>
                        {f.name}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="text-center text-xs text-muted-foreground">
                    {f.elo}
                  </TableCell>
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
        </div>
      </ScrollArea>
    </Card>
  );
};

export default FriendsList;
