
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ActivityMetrics from '@/components/ActivityMetrics';
import SweatcoinBalance from '@/components/SweatcoinBalance';
import InfluencerContent from '@/components/InfluencerContent';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { User, Settings, Plus, Chart } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div className="flex items-center">
            <Avatar className="h-12 w-12 border-2 border-fitPurple mr-3">
              <AvatarImage src="" />
              <AvatarFallback className="bg-fitPurple text-white">
                <User className="h-6 w-6" />
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold">Welcome back, Alex!</h1>
              <p className="text-gray-600">Let's check your progress today</p>
            </div>
          </div>
          
          <div className="mt-4 md:mt-0">
            <Button variant="outline" className="flex items-center">
              <Settings className="mr-2 h-4 w-4" />
              Account Settings
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg font-medium">Today's Activity</CardTitle>
                  <Button variant="ghost" className="h-8 text-xs">
                    View History
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <ActivityMetrics />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg font-medium">Weekly Progress</CardTitle>
                  <Button variant="ghost" className="h-8 text-xs">
                    <Chart className="h-4 w-4 mr-1" />
                    Detailed Analytics
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center">
                  <img 
                    src="https://i.imgur.com/dJOUJLA.png" 
                    alt="Example Chart" 
                    className="max-w-full max-h-full" 
                  />
                </div>
              </CardContent>
            </Card>
            
            <InfluencerContent />
          </div>
          
          <div className="space-y-6">
            <SweatcoinBalance />
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Daily Goals</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-2 h-8 bg-fitBlue rounded-full mr-3"></div>
                      <span>10,000 steps</span>
                    </div>
                    <div className="text-gray-500 text-sm">78%</div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-2 h-8 bg-fitPurple rounded-full mr-3"></div>
                      <span>60 active minutes</span>
                    </div>
                    <div className="text-gray-500 text-sm">72%</div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-2 h-8 bg-red-500 rounded-full mr-3"></div>
                      <span>75 heart points</span>
                    </div>
                    <div className="text-gray-500 text-sm">43%</div>
                  </div>
                </div>
                
                <Button className="w-full mt-4 bg-fitPurple hover:bg-fitPurple/90">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Custom Goal
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Upcoming Challenges</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="border rounded-lg p-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">May 12-19</span>
                      <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">15 joined</span>
                    </div>
                    <h4 className="font-medium mt-1">Weekend Warrior Challenge</h4>
                    <p className="text-sm text-gray-600">Complete 20,000 steps over the weekend</p>
                  </div>
                  
                  <div className="border rounded-lg p-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">May 1-31</span>
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">78 joined</span>
                    </div>
                    <h4 className="font-medium mt-1">Monthly Marathon</h4>
                    <p className="text-sm text-gray-600">Walk 300,000 steps in one month</p>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full mt-4">
                  View All Challenges
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

export default Dashboard;
