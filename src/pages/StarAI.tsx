
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Sparkles, Dumbbell, Brain, Heart, Utensils, Send } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/components/ui/use-toast';
import { toast } from 'sonner';

const StarAI = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const { toast: uiToast } = useToast();
  const [userQuery, setUserQuery] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('fitness');

  useEffect(() => {
    // Protect this route - redirect to auth if not logged in
    if (!loading && !user) {
      uiToast({
        title: "Authentication required",
        description: "Please sign in to use Star AI",
        variant: "destructive"
      });
      navigate('/dashboard');
    }
  }, [user, loading, navigate, uiToast]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userQuery.trim()) {
      toast("Please enter a question or request");
      return;
    }

    setIsProcessing(true);
    
    // Simulate AI processing
    setTimeout(() => {
      // Generate response based on category
      let response = '';
      switch (selectedCategory) {
        case 'fitness':
          response = generateFitnessResponse(userQuery);
          break;
        case 'nutrition':
          response = generateNutritionResponse(userQuery);
          break;
        case 'wellness':
          response = generateWellnessResponse(userQuery);
          break;
        case 'motivation':
          response = generateMotivationResponse(userQuery);
          break;
        default:
          response = "I'm here to help with your fitness journey. What specific advice do you need?";
      }
      
      setAiResponse(response);
      setIsProcessing(false);
    }, 1500);
  };

  const generateFitnessResponse = (query: string) => {
    const responses = [
      "For optimal results, aim for 3-4 strength training sessions per week with adequate rest days in between.",
      "HIIT workouts are excellent for burning calories and improving cardiovascular health. Start with 20-minute sessions twice a week.",
      "To improve your running endurance, gradually increase your distance by no more than 10% each week.",
      "Proper form is crucial for preventing injuries. Consider working with a trainer for the first few sessions to ensure your technique is correct.",
      "Recovery is just as important as the workout itself. Make sure you're getting enough sleep and considering active recovery days."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const generateNutritionResponse = (query: string) => {
    const responses = [
      "Protein intake is crucial for muscle recovery. Aim for 1.6-2.2g per kg of body weight daily when training regularly.",
      "Complex carbohydrates like oats, sweet potatoes, and whole grains are excellent for sustained energy during workouts.",
      "Hydration affects performance significantly. Aim to drink at least 3-4 liters of water daily, more when exercising intensely.",
      "Pre-workout nutrition should include moderate protein and carbs about 1-2 hours before training for optimal performance.",
      "Post-workout, consume protein within 30-45 minutes to maximize muscle protein synthesis and recovery."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const generateWellnessResponse = (query: string) => {
    const responses = [
      "Meditation for just 10 minutes daily can significantly reduce stress levels and improve mental clarity for your fitness journey.",
      "Quality sleep is essential for recovery. Aim for 7-9 hours per night and maintain a consistent sleep schedule.",
      "Active recovery like yoga or light swimming can help reduce muscle soreness and improve flexibility while allowing your body to heal.",
      "Stress management techniques such as deep breathing or progressive muscle relaxation can improve your workout performance.",
      "Regular mobility work can prevent injuries and improve your range of motion, leading to better exercise technique and results."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const generateMotivationResponse = (query: string) => {
    const responses = [
      "Remember, consistency is more important than perfection. Small steps every day lead to massive changes over time.",
      "Instead of focusing solely on weight or appearance goals, celebrate performance improvements like lifting heavier or running faster.",
      "Find a workout buddy or join a community to stay accountable and motivated on days when your internal drive is low.",
      "Visualize your success daily. Mental rehearsal of achieving your fitness goals activates similar neural pathways as physical practice.",
      "Create a rewarding environment by setting up non-food rewards for reaching milestones in your fitness journey."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  return (
    <div className="flex flex-col min-h-screen bg-starDark">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-starLight flex items-center justify-center">
              <Sparkles className="h-8 w-8 mr-3 text-starGold" />
              Star AI Assistant
            </h1>
            <p className="text-gray-400 mt-2">
              Your personal AI coach for fitness, nutrition, and wellness
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            <CategoryButton 
              icon={<Dumbbell className="h-5 w-5" />}
              label="Fitness"
              active={selectedCategory === 'fitness'}
              onClick={() => setSelectedCategory('fitness')}
            />
            <CategoryButton 
              icon={<Utensils className="h-5 w-5" />}
              label="Nutrition"
              active={selectedCategory === 'nutrition'}
              onClick={() => setSelectedCategory('nutrition')}
            />
            <CategoryButton 
              icon={<Heart className="h-5 w-5" />}
              label="Wellness"
              active={selectedCategory === 'wellness'}
              onClick={() => setSelectedCategory('wellness')}
            />
            <CategoryButton 
              icon={<Brain className="h-5 w-5" />}
              label="Motivation"
              active={selectedCategory === 'motivation'}
              onClick={() => setSelectedCategory('motivation')}
            />
          </div>
          
          <Card className="bg-starAccent border-starGray mb-6">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-starLight">Ask Star AI</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Textarea 
                  placeholder={`Ask about ${selectedCategory}...`}
                  value={userQuery}
                  onChange={(e) => setUserQuery(e.target.value)}
                  className="bg-starDark border-starGray text-starLight resize-none min-h-[120px]"
                />
                <div className="flex justify-end">
                  <Button 
                    type="submit" 
                    className="bg-starGold text-starDark hover:bg-starGold/90 flex items-center"
                    disabled={isProcessing || !userQuery.trim()}
                  >
                    {isProcessing ? "Processing..." : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Get Advice
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
          
          {aiResponse && (
            <Card className="bg-starDark border-starGray">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-starLight flex items-center">
                  <Sparkles className="h-5 w-5 mr-2 text-starGold" />
                  Star AI Response
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-starAccent p-4 rounded-md text-starLight">
                  {aiResponse}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

type CategoryButtonProps = {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
};

const CategoryButton = ({ icon, label, active, onClick }: CategoryButtonProps) => (
  <Button
    variant="outline"
    className={`flex items-center justify-center h-14 border-starGray ${
      active 
        ? 'bg-starGold text-starDark border-starGold hover:bg-starGold/90' 
        : 'bg-starAccent text-starLight hover:bg-starAccent/80'
    }`}
    onClick={onClick}
  >
    <div className="flex flex-col items-center">
      {icon}
      <span className="text-xs mt-1">{label}</span>
    </div>
  </Button>
);

export default StarAI;
