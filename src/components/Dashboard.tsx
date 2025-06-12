
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, User, Calendar, Eye, Plus } from "lucide-react";

interface DashboardProps {
  userType: 'jobseeker' | 'employer';
  onSignOut: () => void;
}

const Dashboard = ({ userType, onSignOut }: DashboardProps) => {
  const mockJobs = [
    {
      id: 1,
      title: "Senior React Developer",
      company: "TechCorp Inc.",
      location: "Remote - US/EU",
      salary: "$80-120k",
      type: "Full-time",
      duration: "Permanent",
      posted: "2 days ago"
    },
    {
      id: 2,
      title: "UX/UI Designer",
      company: "Design Studio",
      location: "Remote - Global",
      salary: "$60-90k",
      type: "Contract",
      duration: "6 months",
      posted: "1 week ago"
    },
    {
      id: 3,
      title: "Product Manager",
      company: "StartupXYZ",
      location: "Remote - Americas",
      salary: "$100-140k",
      type: "Full-time",
      duration: "Permanent",
      posted: "3 days ago"
    }
  ];

  const mockCandidates = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Full Stack Developer",
      skills: ["React", "Node.js", "Python"],
      location: "US",
      experience: "5+ years",
      availability: "Immediate"
    },
    {
      id: 2,
      name: "Marcus Chen",
      title: "Data Scientist",
      skills: ["Python", "ML", "SQL"],
      location: "Asia",
      experience: "3+ years",
      availability: "2 weeks"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold gradient-text">RemoteMatch</h1>
              <Badge variant="outline" className="capitalize">
                {userType}
              </Badge>
            </div>
            
            <div className="flex items-center space-x-4">
              <Badge variant="secondary">Free Plan</Badge>
              <Button variant="outline" size="sm">
                Upgrade
              </Button>
              <Button variant="ghost" onClick={onSignOut}>
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  {userType === 'jobseeker' ? 'Job Seeker' : 'Employer'} Menu
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="ghost" className="w-full justify-start">
                  <Search className="h-4 w-4 mr-2" />
                  {userType === 'jobseeker' ? 'Browse Jobs' : 'Find Candidates'}
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Calendar className="h-4 w-4 mr-2" />
                  Saved Searches
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <User className="h-4 w-4 mr-2" />
                  Profile Settings
                </Button>
                {userType === 'employer' && (
                  <Button variant="ghost" className="w-full justify-start">
                    <Plus className="h-4 w-4 mr-2" />
                    Post New Job
                  </Button>
                )}
              </CardContent>
            </Card>
          </aside>

          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-6">
            {/* Search Bar */}
            <Card>
              <CardHeader>
                <CardTitle>
                  {userType === 'jobseeker' ? 'Find Your Next Remote Job' : 'Find Great Candidates'}
                </CardTitle>
                <CardDescription>
                  {userType === 'jobseeker' 
                    ? 'Search thousands of remote opportunities' 
                    : 'Discover talented professionals for your team'
                  }
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Input 
                    placeholder={userType === 'jobseeker' ? 'Search jobs...' : 'Search candidates...'}
                    className="flex-1"
                  />
                  <Button>
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Results */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">
                  {userType === 'jobseeker' ? 'Recent Job Postings' : 'Potential Candidates'}
                </h2>
                <Badge variant="secondary">
                  {userType === 'jobseeker' ? `${mockJobs.length} jobs` : `${mockCandidates.length} candidates`}
                </Badge>
              </div>

              {userType === 'jobseeker' ? (
                <div className="space-y-4">
                  {mockJobs.map((job) => (
                    <Card key={job.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="space-y-2">
                            <h3 className="text-xl font-semibold">{job.title}</h3>
                            <p className="text-muted-foreground">{job.company}</p>
                            <div className="flex gap-2 flex-wrap">
                              <Badge variant="outline">{job.location}</Badge>
                              <Badge variant="outline">{job.type}</Badge>
                              <Badge variant="outline">{job.duration}</Badge>
                            </div>
                            <p className="font-medium text-primary">{job.salary}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-muted-foreground mb-2">{job.posted}</p>
                            <Button size="sm">View Details</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {mockCandidates.map((candidate) => (
                    <Card key={candidate.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="space-y-2">
                            <h3 className="text-xl font-semibold">{candidate.name}</h3>
                            <p className="text-muted-foreground">{candidate.title}</p>
                            <div className="flex gap-2 flex-wrap">
                              {candidate.skills.map((skill) => (
                                <Badge key={skill} variant="secondary">{skill}</Badge>
                              ))}
                            </div>
                            <div className="flex gap-4 text-sm text-muted-foreground">
                              <span>📍 {candidate.location}</span>
                              <span>🎯 {candidate.experience}</span>
                              <span>⏰ {candidate.availability}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <Button size="sm">View Profile</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
