
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SubscriptionTiers from '@/components/SubscriptionTiers';
import InfluencerContent from '@/components/InfluencerContent';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-starDark flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 px-4 md:px-0 bg-starDark">
          <div className="container mx-auto max-w-5xl relative z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-starLight">
                Transform Your Fitness with <span className="text-starGold">STARFIT</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join the fitness revolution where AI meets community. Earn rewards, follow influencers, and achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button className="bg-starGold text-starDark hover:bg-starGold/90 px-8 py-6 text-lg" asChild>
                  <Link to="/auth">Start Your Journey</Link>
                </Button>
                <Button variant="outline" className="border-starGray text-starLight hover:bg-starAccent px-8 py-6 text-lg">
                  Explore Features
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-b from-starAccent to-transparent"></div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-starDark to-starAccent/10">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold mb-12 text-center text-starLight">Why Choose <span className="text-starGold">STARFIT</span></h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard 
                title="AI-Powered Fitness" 
                description="Our AI analyzes your progress and adapts your workout and nutrition plans for optimal results."
                icon={<div className="w-12 h-12 rounded-full bg-starGold flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-starDark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>} 
              />
              
              <FeatureCard 
                title="Earn Sweatcoin" 
                description="Convert your steps and workouts into Sweatcoin – our digital currency that can be exchanged for rewards."
                icon={<div className="w-12 h-12 rounded-full bg-starGold flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-starDark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>} 
              />
              
              <FeatureCard 
                title="Celebrity Workouts" 
                description="Access exclusive training programs and nutrition advice from top fitness influencers."
                icon={<div className="w-12 h-12 rounded-full bg-starGold flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-starDark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>} 
              />
            </div>
          </div>
        </section>
        
        {/* Subscription Plans */}
        <SubscriptionTiers />
        
        {/* Influencer Content Preview */}
        <InfluencerContent />
      </main>
      
      <Footer />
    </div>
  );
};

const FeatureCard = ({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) => {
  return (
    <div className="bg-starDark p-6 rounded-lg border border-starGray hover:border-starGold transition-colors duration-300 flex flex-col items-center text-center">
      {icon}
      <h3 className="text-xl font-semibold mb-3 text-starLight">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default Home;
