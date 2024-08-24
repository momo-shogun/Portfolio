import { Github, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";
import { Badge } from "../ui/badge";
function Header() {
  return (
    <div className="flex items-center justify-between px-4 py-2 sm:px-8 md:px-16 lg:px-24 xl:px-36">
      <div className="flex items-center gap-2 sm:gap-3">
        <a
          className="text-2xl font-bold sm:text-3xl md:text-4xl"
          href="https://x.com/shogunkrishna"
        >
          <X className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 drop-shadow-md" />
        </a>
        <Badge variant="outline" className="text-sm font-bold sm:text-md">
          v1.5
        </Badge>
      </div>
      <div>
        <div className="flex gap-2 sm:gap-3">
          <ModeToggle />
          <Button variant="ghost" className="flex gap-2 sm:gap-3">
            <a href="https://github.com/momo-shogun">
              <Github className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
