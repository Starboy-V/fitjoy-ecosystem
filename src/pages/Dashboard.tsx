
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ActivityMetrics from '@/components/ActivityMetrics';
import SweatcoinBalance from '@/components/SweatcoinBalance';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { User, Settings, BarChart, Compass, Utensils, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/components/ui/use-toast';

const Dashboard = () => {
  const { user, userProfile, loading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Protect this route - redirect to auth if not logged in
    if (!loading && !user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to view your dashboard",
        variant: "destructive"
      });
      navigate('/auth');
    } else {
      // Set loading to false when auth check is complete
      setIsLoading(false);
    }
  }, [user, loading, navigate, toast]);

  // If still loading or redirecting, show minimal content
  if (loading || isLoading) {
    return (
      <div className="flex flex-col min-h-screen bg-starDark">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-6 flex items-center justify-center">
          <div className="text-starLight">Loading dashboard...</div>
        </main>
        <Footer />
      </div>
    );
  }

  const username = userProfile?.username || user?.email?.split('@')[0] || "User";

  return (
    <div className="flex flex-col min-h-screen bg-starDark">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div className="flex items-center">
            <Avatar className="h-12 w-12 border-2 border-starGold mr-3">
              <AvatarImage src={userProfile?.avatar_url || ""} />
              <AvatarFallback className="bg-starDark text-starGold">
                <User className="h-6 w-6" />
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold text-starLight">Welcome back, {username}!</h1>
              <p className="text-gray-400">Let's check your progress today</p>
            </div>
          </div>
          
          <div className="mt-4 md:mt-0">
            <Button variant="outline" className="flex items-center border-starGray text-starLight hover:bg-starAccent">
              <Settings className="mr-2 h-4 w-4" />
              Account Settings
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-3 space-y-6">
            <Card className="bg-starDark border border-starGray">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg font-medium text-starLight">Today's Activity</CardTitle>
                  <Button variant="ghost" className="h-8 text-xs text-starGold hover:text-starGold/90 hover:bg-starAccent">
                    View History
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <ActivityMetrics />
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-starDark border border-starGray">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg font-medium text-starLight">Weekly Progress</CardTitle>
                    <Button variant="ghost" className="h-8 text-xs text-starGold hover:text-starGold/90 hover:bg-starAccent">
                      <BarChart className="h-4 w-4 mr-1" />
                      Analytics
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="h-48 flex items-center justify-center">
                    <img 
                      src="https://i.imgur.com/dJOUJLA.png" 
                      alt="Example Chart" 
                      className="max-w-full max-h-full" 
                    />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-starDark border border-starGray">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium text-starLight">Quick Access</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-3 gap-3">
                    <Link to="/explore">
                      <QuickAccessButton 
                        icon={<Compass className="h-5 w-5 text-starGold" />} 
                        label="Explore"
                      />
                    </Link>
                    <Link to="/nutrition">
                      <QuickAccessButton 
                        icon={<Utensils className="h-5 w-5 text-starGold" />} 
                        label="Nutrition"
                      />
                    </Link>
                    <Link to="/challenges">
                      <QuickAccessButton 
                        icon={<Award className="h-5 w-5 text-starGold" />} 
                        label="Challenges"
                      />
                    </Link>
                  </div>
                  <p className="text-sm text-gray-400 text-center mt-2">
                    Discover more with our AI-powered features
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="space-y-6">
            <SweatcoinBalance />
            
            <Card className="bg-starDark border border-starGray">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium text-starLight">Daily Goals</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <GoalItem color="bg-blue-500" label="10,000 steps" progress={78} />
                  <GoalItem color="bg-purple-500" label="60 active minutes" progress={72} />
                  <GoalItem color="bg-red-500" label="75 heart points" progress={43} />
                </div>
                
                <Button className="w-full mt-4 bg-starGold text-starDark hover:bg-starGold/90">
                  Upcoming Challenges
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

const QuickAccessButton = ({ icon, label }: { icon: React.ReactNode, label: string }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-starAccent hover:bg-starAccent/70 rounded-lg p-3 cursor-pointer transition-all">
      {icon}
      <span className="text-xs mt-1 text-starLight">{label}</span>
    </div>
  );
};

const GoalItem = ({ color, label, progress }: { color: string, label: string, progress: number }) => {
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className={`w-2 h-8 ${color} rounded-full mr-3`}></div>
          <span className="text-starLight">{label}</span>
        </div>
        <div className="text-gray-400 text-sm">{progress}%</div>
      </div>
      <div className="w-full bg-starAccent rounded-full h-1">
        <div 
          className={`${color} h-1 rounded-full transition-all duration-500`} 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Dashboard;
