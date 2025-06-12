
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (userType: 'jobseeker' | 'employer') => void;
}

const AuthModal = ({ isOpen, onClose, onSuccess }: AuthModalProps) => {
  const [userType, setUserType] = useState<'jobseeker' | 'employer'>('jobseeker');

  const handleAuth = () => {
    // For demo purposes, we'll simulate successful authentication
    onSuccess(userType);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Welcome to RemoteMatch</DialogTitle>
          <DialogDescription>
            Sign in to access your dashboard and start matching
          </DialogDescription>
        </DialogHeader>
        
        <Tabs defaultValue="signin" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signin">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          
          <TabsContent value="signin" className="space-y-4">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Button 
                  variant="outline" 
                  className={userType === 'jobseeker' ? 'border-primary' : ''}
                  onClick={() => setUserType('jobseeker')}
                >
                  Job Seeker
                </Button>
                <Button 
                  variant="outline" 
                  className={userType === 'employer' ? 'border-primary' : ''}
                  onClick={() => setUserType('employer')}
                >
                  Employer
                </Button>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Enter your password" />
              </div>
              
              <Button onClick={handleAuth} className="w-full">
                Sign In
              </Button>
              
              <div className="text-center">
                <Button variant="link" className="text-sm">
                  Forgot password?
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="signup" className="space-y-4">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Button 
                  variant="outline" 
                  className={userType === 'jobseeker' ? 'border-primary' : ''}
                  onClick={() => setUserType('jobseeker')}
                >
                  Job Seeker
                </Button>
                <Button 
                  variant="outline" 
                  className={userType === 'employer' ? 'border-primary' : ''}
                  onClick={() => setUserType('employer')}
                >
                  Employer
                </Button>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="First name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Last name" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="signupEmail">Email</Label>
                <Input id="signupEmail" type="email" placeholder="Enter your email" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="signupPassword">Password</Label>
                <Input id="signupPassword" type="password" placeholder="Create password" />
              </div>
              
              <Button onClick={handleAuth} className="w-full">
                Create Account
              </Button>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4">
          <Button variant="outline" className="w-full">
            Google
          </Button>
          <Button variant="outline" className="w-full">
            Microsoft
          </Button>
          <Button variant="outline" className="w-full">
            Apple
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
