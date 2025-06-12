
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, User, Calendar, Eye } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Search,
      title: "Smart Job Matching",
      description: "Advanced algorithms match job seekers with opportunities based on skills, preferences, and location."
    },
    {
      icon: User,
      title: "Comprehensive Profiles",
      description: "Detailed profiles with career preferences, qualifications, and contact information for better matching."
    },
    {
      icon: Calendar,
      title: "Flexible Work Arrangements",
      description: "Support for various employment types, durations, and remote work preferences."
    },
    {
      icon: Eye,
      title: "Tiered Visibility",
      description: "Control what information is visible based on membership level for optimal privacy and value."
    }
  ];

  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to find the perfect remote work match
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 w-fit">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
