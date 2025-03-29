
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InfluencerContent from '@/components/InfluencerContent';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, TrendingUp, Clock } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Explore = () => {
  return (
    <div className="flex flex-col min-h-screen bg-starDark">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-starLight">Explore <span className="text-starGold">Content</span></h1>
          <p className="text-gray-400 mt-2">Discover content from top fitness influencers</p>
        </div>
        
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="relative flex-1 min-w-[280px]">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input 
              placeholder="Search for workouts, nutrition plans..." 
              className="pl-10 bg-starAccent border-starGray text-starLight" 
            />
          </div>
          <Button className="bg-starGold text-starDark hover:bg-starGold/90">
            Apply Filters
          </Button>
        </div>
        
        <Tabs defaultValue="trending" className="mb-8">
          <TabsList className="bg-starAccent border border-starGray">
            <TabsTrigger 
              value="trending" 
              className="data-[state=active]:bg-starGold data-[state=active]:text-starDark"
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              Trending
            </TabsTrigger>
            <TabsTrigger 
              value="recent" 
              className="data-[state=active]:bg-starGold data-[state=active]:text-starDark"
            >
              <Clock className="w-4 h-4 mr-2" />
              Recent
            </TabsTrigger>
            <TabsTrigger 
              value="following" 
              className="data-[state=active]:bg-starGold data-[state=active]:text-starDark"
            >
              Following
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="trending">
            <InfluencerContent />
          </TabsContent>
          
          <TabsContent value="recent">
            <Card className="bg-starDark border border-starGray">
              <CardContent className="pt-6">
                <p className="text-starLight text-center py-8">Recent content coming soon</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="following">
            <Card className="bg-starDark border border-starGray">
              <CardContent className="pt-6">
                <p className="text-starLight text-center py-8">Follow some creators to see their content here</p>
                <div className="flex justify-center">
                  <Button className="bg-starGold text-starDark hover:bg-starGold/90">
                    Discover Influencers
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <Card className="bg-starDark border border-starGray">
          <CardHeader>
            <CardTitle className="text-xl font-medium text-starLight">Featured Influencers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-starAccent rounded-lg p-4 hover:shadow-lg transition-all">
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 bg-starGold/20 rounded-full mr-3"></div>
                    <div>
                      <h3 className="font-medium text-starLight">Fitness Pro #{item}</h3>
                      <p className="text-xs text-gray-400">10k+ followers</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-300 mb-3">
                    Specializing in strength training and nutrition guidance.
                  </p>
                  <Button variant="outline" size="sm" className="w-full border-starGold text-starGold hover:bg-starGold hover:text-starDark">
                    Follow
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
};

export default Explore;
