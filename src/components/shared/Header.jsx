import { Github, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";
import { Badge } from "../ui/badge";
function Header() {
  return (
    <div className="flex items-center justify-between py-2 px-36 ">
      <div className="flex items-center gap-3">
        <a className="text-4xl font-bold" href="https://x.com/shogunkrishna">
        <X className="w-10 h-10 drop-shadow-md" />
        </a>
        <Badge variant="outline" className="font-bold text-md">
          v1.0
        </Badge>
      </div>
      <div>
        <div className="flex gap-3">
          <ModeToggle></ModeToggle>
          <Button variant="ghost" className="flex gap-3">
            
            <a href="https://github.com/momo-shogun"><Github className="w-5 h-5" /> </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;