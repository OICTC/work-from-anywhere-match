
import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import MembershipPlans from "@/components/MembershipPlans";
import AuthModal from "@/components/AuthModal";
import Dashboard from "@/components/Dashboard";

const Index = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState<'jobseeker' | 'employer'>('jobseeker');
  const [showMembership, setShowMembership] = useState(false);

  const handleAuthClick = () => {
    setShowAuthModal(true);
  };

  const handleMembershipClick = () => {
    setShowMembership(true);
    // Scroll to membership section
    const membershipSection = document.getElementById('membership');
    if (membershipSection) {
      membershipSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAuthSuccess = (type: 'jobseeker' | 'employer') => {
    setUserType(type);
    setIsAuthenticated(true);
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
    setUserType('jobseeker');
  };

  const handleSelectPlan = (plan: string) => {
    console.log(`Selected plan: ${plan}`);
    // Here you would integrate with Stripe for payment processing
    // For now, just show the auth modal if not authenticated
    if (!isAuthenticated) {
      setShowAuthModal(true);
    }
  };

  if (isAuthenticated) {
    return <Dashboard userType={userType} onSignOut={handleSignOut} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header onAuthClick={handleAuthClick} onMembershipClick={handleMembershipClick} />
      <Hero onGetStarted={handleAuthClick} />
      <Features />
      <HowItWorks />
      <MembershipPlans onSelectPlan={handleSelectPlan} />
      
      <AuthModal 
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onSuccess={handleAuthSuccess}
      />
      
      {/* Footer */}
      <footer className="border-t py-12 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold gradient-text mb-4">RemoteMatch</h3>
          <p className="text-muted-foreground mb-4">
            Connecting remote talent with global opportunities
          </p>
          <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms of Service</a>
            <a href="#" className="hover:text-primary">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
