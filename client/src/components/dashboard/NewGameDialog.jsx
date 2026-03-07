import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Bot, Users } from "lucide-react";

const NewGameDialog = ({ open, onOpenChange }) => {
  const handleVsAi = () => {
    onOpenChange(false);
    // TODO: start vs AI game
  };

  const handleVsPvp = () => {
    onOpenChange(false);
    // TODO: start vs PvP game
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-sm border-border bg-background text-white">
        <DialogHeader>
          <DialogTitle className="text-primary">New Game</DialogTitle>
          <DialogDescription className="text-secondary-foreground">
            Choose how you want to play
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-3 py-2">
          <Button
            variant="customSmall" 
            className="w-full justify-start gap-3 border-border bg-transparent text-white hover:bg-white/10 hover:text-white"
            onClick={handleVsAi}
          >
            <Bot className="h-5 w-5" />
            vs AI
          </Button>
          <Button
            variant="customSmall"
            className="w-full justify-start gap-3 border-border bg-transparent text-white hover:bg-white/10 hover:text-white"
            onClick={handleVsPvp}
          >
            <Users className="h-5 w-5" />
            vs PvP
          </Button>
        </div>
        <DialogFooter className="sm:justify-start" />
      </DialogContent>
    </Dialog>
  );
};

export default NewGameDialog;
