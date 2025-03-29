
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Award, Calendar, Trophy, Users, Bot, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const Challenges = () => {
  const [aiSuggestion, setAiSuggestion] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGetSuggestion = () => {
    setLoading(true);
    // Simulate AI response
    setTimeout(() => {
      setAiSuggestion(
        "Based on your recent activity patterns and fitness goals, I recommend the '10K Steps Challenge'. " +
        "This will help improve your cardiovascular fitness while being achievable with your current activity level. " +
        "You've been averaging 7,500 steps daily, so this is an attainable stretch goal."
      );
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-starDark">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-starLight">Fitness <span className="text-starGold">Challenges</span></h1>
          <p className="text-gray-400 mt-2">Push your limits with AI-recommended challenges</p>
        </div>

        <Tabs defaultValue="active">
          <TabsList className="bg-starAccent border border-starGray mb-6">
            <TabsTrigger 
              value="active" 
              className="data-[state=active]:bg-starGold data-[state=active]:text-starDark"
            >
              <Trophy className="w-4 h-4 mr-2" />
              Active Challenges
            </TabsTrigger>
            <TabsTrigger 
              value="upcoming" 
              className="data-[state=active]:bg-starGold data-[state=active]:text-starDark"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Upcoming
            </TabsTrigger>
            <TabsTrigger 
              value="completed" 
              className="data-[state=active]:bg-starGold data-[state=active]:text-starDark"
            >
              <Award className="w-4 h-4 mr-2" />
              Completed
            </TabsTrigger>
          </TabsList>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <TabsContent value="active">
                <div className="space-y-6">
                  <ChallengeCard 
                    title="30-Day Strength Builder"
                    description="Complete 30 strength workouts in 30 days"
                    startDate="May 1"
                    endDate="May 30"
                    progress={60}
                    participants={124}
                    reward="500"
                    category="strength"
                  />
                  
                  <ChallengeCard 
                    title="10K Steps Daily"
                    description="Reach 10,000 steps every day for 14 days"
                    startDate="May 15"
                    endDate="May 28"
                    progress={43}
                    participants={256}
                    reward="300"
                    category="cardio"
                  />
                  
                  <Card className="bg-gradient-to-r from-starAccent to-starDark border border-starGray overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                      <Bot className="w-full h-full text-starGold" />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-starLight flex items-center">
                        <Bot className="mr-2 text-starGold" /> 
                        AI Challenge Recommendation
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      {!aiSuggestion ? (
                        <div className="space-y-4">
                          <p className="text-gray-300">
                            Get a personalized challenge recommendation based on your activity history and fitness goals.
                          </p>
                          <Button 
                            onClick={handleGetSuggestion}
                            className="bg-starGold text-starDark hover:bg-starGold/90"
                            disabled={loading}
                          >
                            {loading ? "Analyzing Your Activity..." : "Get Recommendation"}
                          </Button>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <p className="text-gray-300">{aiSuggestion}</p>
                          <div className="flex space-x-3">
                            <Button className="bg-starGold text-starDark hover:bg-starGold/90">
                              Join Challenge
                            </Button>
                            <Button variant="outline" className="border-starGray text-starLight hover:bg-starAccent">
                              Get Another
                            </Button>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="upcoming">
                <div className="space-y-6">
                  <ChallengeCard 
                    title="Summer Shape-Up"
                    description="Complete 20 workouts in 30 days"
                    startDate="Jun 1"
                    endDate="Jun 30"
                    progress={0}
                    participants={78}
                    reward="600"
                    category="fitness"
                    upcoming
                  />
                  
                  <ChallengeCard 
                    title="Marathon Prep"
                    description="Run 100km in one month"
                    startDate="Jun 15"
                    endDate="Jul 15"
                    progress={0}
                    participants={42}
                    reward="800"
                    category="running"
                    upcoming
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="completed">
                <div className="space-y-6">
                  <ChallengeCard 
                    title="Spring Cardio Boost"
                    description="30 minutes of cardio daily for 2 weeks"
                    startDate="Apr 1"
                    endDate="Apr 14"
                    progress={100}
                    participants={187}
                    reward="250"
                    category="cardio"
                    completed
                  />
                </div>
              </TabsContent>
            </div>
            
            <div className="space-y-6">
              <Card className="bg-starDark border border-starGray">
                <CardHeader>
                  <CardTitle className="text-starLight">Challenge Stats</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <StatCard 
                      label="Active Challenges"
                      value="2"
                      icon={<Trophy className="text-starGold" />}
                    />
                    <StatCard 
                      label="Completed"
                      value="5"
                      icon={<Award className="text-starGold" />}
                    />
                    <StatCard 
                      label="Rewards Earned"
                      value="1,200"
                      icon={<img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQwIDgwQzYyLjA5MTQgODAgODAgNjIuMDkxNCA4MCA0MEw4MCAxNy45MDg2IDYyLjA5MTQgMCAxNy45MDg2IDAgMCAxNy45MDg2IDAgNDBDMCA2Mi4wOTE0IDE3LjkwODYgODAgNDAgODBaIiBmaWxsPSIjRDRBRjM3Ii8+CjxwYXRoIGQ9Ik0yNy41IDU3QzI2LjEyIDU3IDI1IDU1Ljg4IDI1IDU0LjVWMjUuNUMyNSAyNC4xMiAyNi4xMiAyMyAyNy41IDIzSDUyLjVDNTMuODggMjMgNTUgMjQuMTIgNTUgMjUuNVY1NC41QzU1IDU1Ljg4IDUzLjg4IDU3IDUyLjUgNTdIMjcuNVpNMzAgMjcuNVY1Mi41SDUwVjI3LjVIMzBaTTMyLjUgNTBDMzIuNSA0OS4xNyAzMy4xNyA0OC41IDM0IDQ4LjVINDZDNDYuODMgNDguNSA0Ny41IDQ5LjE3IDQ3LjUgNTBDNDcuNSA1MC44MyA0Ni44MyA1MS41IDQ2IDUxLjVIMzRDMzMuMTcgNTEuNSAzMi41IDUwLjgzIDMyLjUgNTBaTTM0LjUgNDBWMzBINDUuNVY0MEgzNC41WiIgZmlsbD0iIzFBMUExQSIvPgo8L3N2Zz4=" alt="SweatCoin" className="w-6 h-6" />}
                    />
                    <StatCard 
                      label="Rank"
                      value="#42"
                      icon={<Users className="text-starGold" />}
                    />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-starDark border border-starGray">
                <CardHeader>
                  <CardTitle className="text-starLight">Trending Challenges</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between bg-starAccent p-3 rounded-lg">
                    <div>
                      <h3 className="font-medium text-starLight">Summer Body Challenge</h3>
                      <p className="text-xs text-gray-400">Starts June 1</p>
                    </div>
                    <Badge className="bg-starGold text-starDark">3,421 joined</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between bg-starAccent p-3 rounded-lg">
                    <div>
                      <h3 className="font-medium text-starLight">5K Running Series</h3>
                      <p className="text-xs text-gray-400">Starts May 28</p>
                    </div>
                    <Badge className="bg-starGold text-starDark">1,876 joined</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between bg-starAccent p-3 rounded-lg">
                    <div>
                      <h3 className="font-medium text-starLight">30 Days of Yoga</h3>
                      <p className="text-xs text-gray-400">Starts June 15</p>
                    </div>
                    <Badge className="bg-starGold text-starDark">2,154 joined</Badge>
                  </div>
                  
                  <Button variant="outline" className="w-full border-starGray text-starGold hover:bg-starAccent">
                    View All <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

const ChallengeCard = ({
  title,
  description,
  startDate,
  endDate,
  progress,
  participants,
  reward,
  category,
  upcoming = false,
  completed = false
}: {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  progress: number;
  participants: number;
  reward: string;
  category: string;
  upcoming?: boolean;
  completed?: boolean;
}) => {
  let statusBadge;
  
  if (upcoming) {
    statusBadge = <Badge className="bg-amber-500 text-white">Upcoming</Badge>;
  } else if (completed) {
    statusBadge = <Badge className="bg-green-500 text-white">Completed</Badge>;
  } else {
    statusBadge = <Badge className="bg-blue-500 text-white">Active</Badge>;
  }
  
  const categoryColors = {
    cardio: "bg-red-500",
    strength: "bg-blue-500",
    running: "bg-green-500",
    fitness: "bg-purple-500"
  };
  
  const categoryColor = categoryColors[category as keyof typeof categoryColors] || "bg-gray-500";
  
  return (
    <Card className="bg-starDark border border-starGray overflow-hidden">
      <div className="absolute top-0 left-0 h-full w-1 bg-starGold"></div>
      <div className={`absolute top-3 right-3 w-2 h-2 ${categoryColor} rounded-full`}></div>
      
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-starLight">{title}</CardTitle>
            <p className="text-sm text-gray-400">
              {startDate} - {endDate}
            </p>
          </div>
          {statusBadge}
        </div>
      </CardHeader>
      
      <CardContent>
        <p className="text-gray-300 mb-4">{description}</p>
        
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-400">Progress</span>
            <span className="text-starLight">{progress}%</span>
          </div>
          <Progress value={progress} className="h-2 bg-starAccent" indicatorClassName="bg-starGold" />
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Users className="h-4 w-4 text-gray-400 mr-1" />
              <span className="text-sm text-gray-300">{participants}</span>
            </div>
            <div className="flex items-center">
              <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQwIDgwQzYyLjA5MTQgODAgODAgNjIuMDkxNCA4MCA0MEw4MCAxNy45MDg2IDYyLjA5MTQgMCAxNy45MDg2IDAgMCAxNy45MDg2IDAgNDBDMCA2Mi4wOTE0IDE3LjkwODYgODAgNDAgODBaIiBmaWxsPSIjRDRBRjM3Ii8+CjxwYXRoIGQ9Ik0yNy41IDU3QzI2LjEyIDU3IDI1IDU1Ljg4IDI1IDU0LjVWMjUuNUMyNSAyNC4xMiAyNi4xMiAyMyAyNy41IDIzSDUyLjVDNTMuODggMjMgNTUgMjQuMTIgNTUgMjUuNVY1NC41QzU1IDU1Ljg4IDUzLjg4IDU3IDUyLjUgNTdIMjcuNVpNMzAgMjcuNVY1Mi41SDUwVjI3LjVIMzBaTTMyLjUgNTBDMzIuNSA0OS4xNyAzMy4xNyA0OC41IDM0IDQ4LjVINDZDNDYuODMgNDguNSA0Ny41IDQ5LjE3IDQ3LjUgNTBDNDcuNSA1MC44MyA0Ni44MyA1MS41IDQ2IDUxLjVIMzRDMzMuMTcgNTEuNSAzMi41IDUwLjgzIDMyLjUgNTBaTTM0LjUgNDBWMzBINDUuNVY0MEgzNC41WiIgZmlsbD0iIzFBMUExQSIvPgo8L3N2Zz4=" alt="SweatCoin" className="w-4 h-4 mr-1" />
              <span className="text-sm text-gray-300">{reward}</span>
            </div>
          </div>
          
          {!completed && (
            <Button 
              className={upcoming ? "bg-starAccent text-starLight hover:bg-starAccent/70" : "bg-starGold text-starDark hover:bg-starGold/90"}
              size="sm"
            >
              {upcoming ? "Remind Me" : "View Details"}
            </Button>
          )}
          
          {completed && (
            <Button className="bg-green-600 text-white hover:bg-green-700" size="sm">
              <Trophy className="mr-1 h-3 w-3" /> Claim Reward
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const StatCard = ({ label, value, icon }: { label: string, value: string, icon: React.ReactNode }) => {
  return (
    <div className="bg-starAccent rounded-lg p-3 text-center">
      <div className="flex justify-center mb-2">
        {icon}
      </div>
      <div className="font-medium text-xl text-starLight">{value}</div>
      <div className="text-xs text-gray-400">{label}</div>
    </div>
  );
};

export default Challenges;
