
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import SubscriptionTiers from '@/components/SubscriptionTiers';
import { ArrowRight, Activity, Heart, Clock, Star } from 'lucide-react';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-starDark">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-starLight">
                  Transform Your Fitness <span className="text-starGold">Elite Experience</span>
                </h1>
                <p className="text-xl text-gray-400 mb-6">
                  Track your progress, earn rewards, and get personalized guidance from top fitness influencers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-starGold text-starDark hover:bg-starGold/90">
                    Get Started Free
                  </Button>
                  <Button size="lg" variant="outline" className="border-starGray text-starLight hover:bg-starAccent">
                    Explore Features
                  </Button>
                </div>
                
                <div className="mt-8 flex items-center">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-starAccent border-2 border-starDark flex items-center justify-center text-xs font-bold text-starLight">
                        {i}
                      </div>
                    ))}
                  </div>
                  <div className="ml-4">
                    <p className="font-medium text-starLight">20k+ active users</p>
                    <div className="flex text-starGold">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} size={14} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2 md:pl-8">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-full h-full bg-starGold rounded-2xl"></div>
                  <div className="absolute -bottom-4 -right-4 w-full h-full bg-starGray rounded-2xl"></div>
                  <div className="relative z-10 bg-starDark p-4 rounded-2xl shadow-xl border border-starGray">
                    <img
                      src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zml0bmVzcyUyMGFwcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                      alt="STARFIT App"
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 px-4 bg-starAccent">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-starLight">Why Choose <span className="text-starGold">STARFIT</span>?</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our premium ecosystem empowers your fitness journey with cutting-edge features
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Activity size={24} className="text-starGold" />}
                title="Activity Tracking"
                description="Automatically track steps, workouts, and daily activities to measure your progress."
              />
              <FeatureCard
                icon={<img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQwIDgwQzYyLjA5MTQgODAgODAgNjIuMDkxNCA4MCA0MEw4MCAxNy45MDg2IDYyLjA5MTQgMCAxNy45MDg2IDAgMCAxNy45MDg2IDAgNDBDMCA2Mi4wOTE0IDE3LjkwODYgODAgNDAgODBaIiBmaWxsPSIjRDRBRjM3Ii8+CjxwYXRoIGQ9Ik0yNy41IDU3QzI2LjEyIDU3IDI1IDU1Ljg4IDI1IDU0LjVWMjUuNUMyNSAyNC4xMiAyNi4xMiAyMyAyNy41IDIzSDUyLjVDNTMuODggMjMgNTUgMjQuMTIgNTUgMjUuNVY1NC41QzU1IDU1Ljg4IDUzLjg4IDU3IDUyLjUgNTdIMjcuNVpNMzAgMjcuNVY1Mi41SDUwVjI3LjVIMzBaTTMyLjUgNTBDMzIuNSA0OS4xNyAzMy4xNyA0OC41IDM0IDQ4LjVINDZDNDYuODMgNDguNSA0Ny41IDQ5LjE3IDQ3LjUgNTBDNDcuNSA1MC44MyA0Ni44MyA1MS41IDQ2IDUxLjVIMzRDMzMuMTcgNTEuNSAzMi41IDUwLjgzIDMyLjUgNTBaTTM0LjUgNDBWMzBINDUuNVY0MEgzNC41WiIgZmlsbD0iIzFBMUExQSIvPgo8L3N2Zz4=" alt="SweatCoin" className="w-6 h-6" />}
                title="Earn SweatCoins"
                description="Get rewarded for your physical activity with SweatCoin integration."
              />
              <FeatureCard
                icon={<Heart size={24} className="text-starGold" />}
                title="Expert Guidance"
                description="Access workouts and nutrition advice from top fitness influencers."
              />
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 px-4 bg-starDark">
          <div className="container mx-auto max-w-6xl">
            <div className="starfit-gradient rounded-2xl p-8 md:p-12 text-white border border-starGray">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold mb-4">Ready to Start Your <span className="text-starGold">STARFIT</span> Journey?</h2>
                <p className="text-xl mb-6 text-gray-300">
                  Join thousands of users transforming their fitness habits and earning rewards.
                </p>
                <Button size="lg" variant="outline" className="bg-starGold text-starDark hover:bg-starGold/90 border-none">
                  Get Started Now <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Subscription Pricing */}
        <SubscriptionTiers />
      </main>
      
      <Footer />
    </div>
  );
};

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-starDark p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-starGray">
      <div className="w-12 h-12 rounded-full bg-starAccent flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-starLight">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default Index;
