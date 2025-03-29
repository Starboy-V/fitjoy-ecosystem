
import React from 'react';
import { Check, X } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const tiers = [
  {
    name: 'Free',
    price: '0',
    description: 'Basic fitness tracking to get started',
    features: [
      'Basic step tracking',
      'Standard Sweatcoin earning (1x rate)',
      'Limited influencer content (ad-supported)',
      'Basic fitness logging',
      'Community forums access',
    ],
    notIncluded: [
      'AI-powered calorie tracking',
      'Personalized meal plans',
      'Premium influencer content',
      'Custom workout programs',
    ],
    buttonText: 'Current Plan',
    buttonVariant: 'outline',
    active: true,
  },
  {
    name: 'Premium',
    price: '9.99',
    description: 'Advanced fitness & nutrition features',
    features: [
      'Enhanced Sweatcoin earning (1.5x rate)',
      'Full access to celebrity content library',
      'AI-powered calorie tracking',
      'Personalized meal planning',
      'Custom workout programs',
      'AI fitness chat assistant',
      'Ad-free experience',
    ],
    notIncluded: [],
    buttonText: 'Upgrade Now',
    buttonVariant: 'default',
    active: false,
    highlight: true,
  },
  {
    name: 'Influencer',
    price: '14.99',
    description: 'For fitness content creators',
    features: [
      'Content creation tools',
      'Audience analytics dashboard',
      'Revenue sharing from followers',
      'Enhanced profile features',
      'Brand partnership facilitation',
      'All premium user features included',
    ],
    notIncluded: [],
    buttonText: 'Become an Influencer',
    buttonVariant: 'outline',
    active: false,
  },
];

const SubscriptionTiers = () => {
  return (
    <div className="py-10 px-4">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="text-3xl font-bold mb-3">Choose Your FitJourney Plan</h2>
        <p className="text-gray-600">
          Select the perfect plan to match your fitness goals and budget
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {tiers.map((tier) => (
          <Card key={tier.name} className={`overflow-hidden flex flex-col h-full ${tier.highlight ? 'border-fitPurple shadow-lg relative' : ''}`}>
            {tier.highlight && (
              <div className="absolute top-0 left-0 right-0">
                <div className="bg-fitPurple text-white text-xs font-bold py-1 text-center">
                  MOST POPULAR
                </div>
              </div>
            )}
            <CardHeader className={`pb-6 ${tier.highlight ? 'pt-8' : ''}`}>
              <CardTitle className="text-lg">{tier.name}</CardTitle>
              <div className="mt-2">
                <span className="text-3xl font-bold">${tier.price}</span>
                <span className="text-gray-500 ml-1">/month</span>
              </div>
              <p className="text-gray-600 mt-2">{tier.description}</p>
            </CardHeader>
            
            <CardContent className="flex-grow">
              <ul className="space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <div className="mr-2 mt-1">
                      <Check className="h-4 w-4 text-green-500" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
                
                {tier.notIncluded.map((feature) => (
                  <li key={feature} className="flex items-start text-gray-400">
                    <div className="mr-2 mt-1">
                      <X className="h-4 w-4" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            
            <CardFooter className="pt-6">
              <Button 
                variant={tier.buttonVariant as "default" | "outline"} 
                className={`w-full ${tier.highlight ? 'bg-fitPurple hover:bg-fitPurple/90' : ''} ${tier.active ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' : ''}`}
                disabled={tier.active}
              >
                {tier.buttonText}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionTiers;
