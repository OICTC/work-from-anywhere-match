
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Search, Calendar, Check } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: User,
      title: "Create Your Profile",
      description: "Sign up and complete your professional profile with career preferences and qualifications.",
      role: "Both"
    },
    {
      icon: Search,
      title: "Search & Match",
      description: "Use our advanced search to find perfect matches based on your criteria.",
      role: "Both"
    },
    {
      icon: Calendar,
      title: "Connect & Collaborate",
      description: "Connect with matches and start your remote work journey.",
      role: "Both"
    },
    {
      icon: Check,
      title: "Success",
      description: "Build lasting professional relationships and achieve your remote work goals.",
      role: "Both"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple steps to connect with your perfect remote work match
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="text-center relative">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 rounded-full bg-primary text-primary-foreground w-fit">
                  <step.icon className="h-8 w-8" />
                </div>
                <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <CardTitle className="text-xl">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {step.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
