
import React, { useState } from 'react';
import { Check, X } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { validatePromoCode, applyDiscount, PromoCode } from '@/services/promocodes';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

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
      'Influencer account creation',
    ],
    notIncluded: [
      'AI-powered calorie tracking',
      'Personalized meal plans',
      'Premium influencer content',
      'Custom workout programs',
      'Content creation tools (Influencer)',
      'Revenue sharing from followers',
    ],
    buttonText: 'Current Plan',
    buttonVariant: 'outline',
    active: true,
  },
  {
    name: 'Premium',
    price: '9.99',
    originalPrice: '9.99',
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
    notIncluded: [
      'Influencer content creation tools',
      'Revenue sharing from followers',
      'Audience analytics dashboard',
    ],
    buttonText: 'Upgrade Now',
    buttonVariant: 'default',
    active: false,
    highlight: true,
  },
  {
    name: 'Influencer+',
    price: '30',
    originalPrice: '30',
    yearlyPrice: '0',
    description: 'For serious fitness content creators',
    features: [
      'All Premium features included',
      'Advanced content creation tools',
      'Audience analytics dashboard',
      'Revenue sharing from followers',
      'Enhanced profile features',
      'Brand partnership facilitation',
      'Priority support',
      'Early access to new features',
    ],
    notIncluded: [],
    buttonText: 'Upgrade to Influencer+',
    buttonVariant: 'outline',
    active: false,
    yearlyBilling: true,
  },
];

const SubscriptionTiers = () => {
  const [promoCode, setPromoCode] = useState('');
  const [isValidating, setIsValidating] = useState(false);
  const [activePromoCode, setActivePromoCode] = useState<PromoCode | null>(null);
  const [subscriptionTiers, setSubscriptionTiers] = useState(tiers);
  const { toast: uiToast } = useToast();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleApplyPromoCode = async () => {
    if (!promoCode.trim()) {
      toast("Please enter a promo code");
      return;
    }

    setIsValidating(true);
    try {
      const validatedPromoCode = await validatePromoCode(promoCode.trim().toUpperCase());
      
      if (validatedPromoCode) {
        setActivePromoCode(validatedPromoCode);
        
        // Apply discount to all paid tiers
        const updatedTiers = subscriptionTiers.map(tier => {
          if (tier.price !== '0') {
            const originalPrice = parseFloat(tier.originalPrice || tier.price);
            const discountedPrice = applyDiscount(originalPrice, validatedPromoCode);
            
            return {
              ...tier,
              price: discountedPrice.toFixed(2),
              promoApplied: true
            };
          }
          return tier;
        });
        
        setSubscriptionTiers(updatedTiers);
        toast("Promo code applied successfully!");
      } else {
        toast("Invalid or expired promo code");
      }
    } catch (error) {
      console.error("Error applying promo code:", error);
      toast("Error applying promo code. Please try again.");
    } finally {
      setIsValidating(false);
    }
  };

  const handlePlanSelection = (tierName: string) => {
    if (!user) {
      uiToast({
        title: "Authentication Required",
        description: "You need to sign in to upgrade your subscription.",
      });
      navigate('/auth');
      return;
    }

    if (tierName === 'Free') {
      toast("You are already on the Free plan");
    } else {
      // Here we would integrate with a payment processor
      toast(`Upgrading to ${tierName} plan. This would typically redirect to payment.`);
    }
  };

  return (
    <div className="py-10 px-4">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="text-3xl font-bold mb-3 text-starLight">Choose Your <span className="text-starGold">STARFIT</span> Plan</h2>
        <p className="text-gray-400">
          Select the perfect plan to match your fitness goals and aspirations
        </p>
        
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-2 max-w-md mx-auto">
          <Input
            type="text"
            placeholder="Enter promo code"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            className="bg-starAccent border-starGray text-starLight"
          />
          <Button 
            onClick={handleApplyPromoCode}
            disabled={isValidating}
            className="bg-starGold text-starDark hover:bg-starGold/90 w-full sm:w-auto"
          >
            {isValidating ? "Validating..." : "Apply Code"}
          </Button>
        </div>
        
        {activePromoCode && (
          <div className="mt-2 text-starGold text-sm">
            Promo code {activePromoCode.code} applied! 
            {activePromoCode.is_percentage 
              ? ` (${activePromoCode.discount_amount}% discount)` 
              : ` ($${activePromoCode.discount_amount} discount)`}
          </div>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {subscriptionTiers.map((tier) => (
          <Card key={tier.name} className={`overflow-hidden flex flex-col h-full ${tier.highlight ? 'border-starGold shadow-lg relative' : ''}`}>
            {tier.highlight && (
              <div className="absolute top-0 left-0 right-0">
                <div className="bg-starGold text-starDark text-xs font-bold py-1 text-center">
                  MOST POPULAR
                </div>
              </div>
            )}
            <CardHeader className={`pb-6 ${tier.highlight ? 'pt-8' : ''}`}>
              <CardTitle className="text-lg text-starLight">{tier.name}</CardTitle>
              <div className="mt-2">
                {(tier as any).promoApplied && tier.originalPrice !== tier.price && (
                  <span className="text-lg line-through text-gray-500 mr-2">${tier.originalPrice}</span>
                )}
                <span className="text-3xl font-bold text-starLight">${tier.price}</span>
                <span className="text-gray-400 ml-1">{tier.yearlyBilling ? '/year' : '/month'}</span>
                {tier.yearlyPrice && (
                  <div className="text-sm text-gray-400 mt-1">
                    Create a free influencer account and unlock all features for ${tier.price}/year
                  </div>
                )}
              </div>
              <p className="text-gray-400 mt-2">{tier.description}</p>
            </CardHeader>
            
            <CardContent className="flex-grow">
              <ul className="space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <div className="mr-2 mt-1">
                      <Check className="h-4 w-4 text-starGold" />
                    </div>
                    <span className="text-starLight">{feature}</span>
                  </li>
                ))}
                
                {tier.notIncluded.map((feature) => (
                  <li key={feature} className="flex items-start text-gray-500">
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
                className={`w-full ${tier.highlight ? 'bg-starGold text-starDark hover:bg-starGold/90' : ''} ${tier.active ? 'bg-starDark text-starLight border-starGray hover:bg-starAccent' : ''}`}
                disabled={tier.active}
                onClick={() => handlePlanSelection(tier.name)}
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
