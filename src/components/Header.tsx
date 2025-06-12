
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

interface HeaderProps {
  onAuthClick: () => void;
  onMembershipClick: () => void;
}

const Header = ({ onAuthClick, onMembershipClick }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold gradient-text">RemoteMatch</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </a>
            <Button variant="outline" onClick={onMembershipClick}>
              Membership
            </Button>
            <Button onClick={onAuthClick} className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Sign In
            </Button>
          </nav>

          <div className="md:hidden">
            <Button onClick={onAuthClick} size="sm" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
