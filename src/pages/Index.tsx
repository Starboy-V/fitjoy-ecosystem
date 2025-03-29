
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
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                  Transform Your Fitness Journey <span className="text-fitPurple">Get Rewarded</span>
                </h1>
                <p className="text-xl text-gray-600 mb-6">
                  Track your progress, earn rewards, and get personalized guidance from top fitness influencers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-fitPurple hover:bg-fitPurple/90">
                    Get Started Free
                  </Button>
                  <Button size="lg" variant="outline">
                    Explore Features
                  </Button>
                </div>
                
                <div className="mt-8 flex items-center">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-bold">
                        {i}
                      </div>
                    ))}
                  </div>
                  <div className="ml-4">
                    <p className="font-medium">20k+ active users</p>
                    <div className="flex text-yellow-400">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} size={14} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2 md:pl-8">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-full h-full bg-fitBlue rounded-2xl"></div>
                  <div className="absolute -bottom-4 -right-4 w-full h-full bg-fitPurple rounded-2xl"></div>
                  <div className="relative z-10 bg-white p-4 rounded-2xl shadow-xl">
                    <img
                      src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zml0bmVzcyUyMGFwcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                      alt="FitJourney App"
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose FitJourney?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive ecosystem empowers your fitness journey with cutting-edge features
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Activity size={24} className="text-fitBlue" />}
                title="Activity Tracking"
                description="Automatically track steps, workouts, and daily activities to measure your progress."
              />
              <FeatureCard
                icon={<img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQwIDgwQzYyLjA5MTQgODAgODAgNjIuMDkxNCA4MCA0MEM4MCAxNy45MDg2IDYyLjA5MTQgMCA0MCAwQzE3LjkwODYgMCAwIDE3LjkwODYgMCA0MEMwIDYyLjA5MTQgMTcuOTA4NiA4MCA0MCA4MFoiIGZpbGw9IiM4QjVDRjYiLz4KPHBhdGggZD0iTTI3LjUgNTdDMjYuMTIgNTcgMjUgNTUuODggMjUgNTQuNVYyNS41QzI1IDI0LjEyIDI2LjEyIDIzIDI3LjUgMjNINTIuNUM1My44OCAyMyA1NSAyNC4xMiA1NSAyNS41VjU0LjVDNTUgNTUuODggNTMuODggNTcgNTIuNSA1N0gyNy41Wk0zMCAyNy41VjUyLjVINTBWMjcuNUgzMFpNMzIuNSA1MEMzMi41IDQ5LjE3IDMzLjE3IDQ4LjUgMzQgNDguNUg0NkM0Ni44MyA0OC41IDQ3LjUgNDkuMTcgNDcuNSA1MEM0Ny41IDUwLjgzIDQ2LjgzIDUxLjUgNDYgNTEuNUgzNEMzMy4xNyA1MS41IDMyLjUgNTAuODMgMzIuNSA1MFpNMzQuNSA0MFYzMEg0NS41VjQwSDM0LjVaIiBmaWxsPSIjRkZGIi8+Cjwvc3ZnPg==" alt="SweatCoin" className="w-6 h-6" />}
                title="Earn SweatCoins"
                description="Get rewarded for your physical activity with SweatCoin integration."
              />
              <FeatureCard
                icon={<Heart size={24} className="text-fitPurple" />}
                title="Expert Guidance"
                description="Access workouts and nutrition advice from top fitness influencers."
              />
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="fit-gradient rounded-2xl p-8 md:p-12 text-white">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold mb-4">Ready to Start Your FitJourney?</h2>
                <p className="text-xl mb-6 text-white/90">
                  Join thousands of users transforming their fitness habits and earning rewards.
                </p>
                <Button size="lg" variant="secondary" className="bg-white text-fitPurple hover:bg-gray-100">
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
    <div className="fit-card p-6">
      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Index;
