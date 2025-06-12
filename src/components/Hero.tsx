
import { Button } from "@/components/ui/button";
import { Search, User } from "lucide-react";

interface HeroProps {
  onGetStarted: () => void;
}

const Hero = ({ onGetStarted }: HeroProps) => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-bg opacity-5"></div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Find Your Perfect
            <span className="gradient-text block">Remote Work Match</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Connect talented professionals with remote opportunities worldwide. 
            Whether you're hiring or seeking work, we make remote matching simple.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              onClick={onGetStarted}
              className="text-lg px-8 py-6 flex items-center gap-2"
            >
              <Search className="h-5 w-5" />
              Find Jobs
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={onGetStarted}
              className="text-lg px-8 py-6 flex items-center gap-2"
            >
              <User className="h-5 w-5" />
              Post Jobs
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-muted-foreground">Remote Jobs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5,000+</div>
              <div className="text-muted-foreground">Companies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">25,000+</div>
              <div className="text-muted-foreground">Professionals</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
