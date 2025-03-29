
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Bot, Utensils, Calendar, Clock, HelpCircle } from 'lucide-react';

const Nutrition = () => {
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  
  const handleAskAI = () => {
    setLoading(true);
    // Simulate AI response
    setTimeout(() => {
      setAiResponse(
        "Based on your fitness goals and profile, I recommend focusing on a high-protein diet with moderate carbs. Here's a sample meal plan:\n\n" +
        "- Breakfast: Greek yogurt with berries and honey\n" +
        "- Lunch: Grilled chicken salad with olive oil dressing\n" +
        "- Dinner: Baked salmon with quinoa and roasted vegetables\n" +
        "- Snacks: Almonds, protein shake, or cottage cheese\n\n" +
        "Remember to stay hydrated and adjust portion sizes based on your activity level."
      );
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-starDark">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-starLight">Nutrition <span className="text-starGold">AI</span></h1>
          <p className="text-gray-400 mt-2">Get personalized nutrition advice powered by AI</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="bg-starDark border border-starGray mb-6">
              <CardHeader>
                <CardTitle className="flex items-center text-starLight">
                  <Bot className="mr-2 text-starGold" />
                  Ask Nutrition AI
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Get personalized meal plans and nutritional advice
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea 
                  placeholder="e.g., Create a meal plan for weight loss that includes high protein foods" 
                  className="bg-starAccent border-starGray text-starLight min-h-[100px]"
                />
                <div className="flex justify-between">
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-starGold text-starDark hover:bg-starGold/90 cursor-pointer">Meal Plan</Badge>
                    <Badge className="bg-starGold text-starDark hover:bg-starGold/90 cursor-pointer">Macro Calculation</Badge>
                    <Badge className="bg-starGold text-starDark hover:bg-starGold/90 cursor-pointer">Recipe Ideas</Badge>
                  </div>
                  <Button 
                    onClick={handleAskAI} 
                    className="bg-starGold text-starDark hover:bg-starGold/90"
                    disabled={loading}
                  >
                    {loading ? "Processing..." : "Generate Advice"}
                  </Button>
                </div>
                
                {aiResponse && (
                  <div className="mt-4 p-4 bg-starAccent rounded-lg border border-starGray">
                    <div className="flex items-center mb-2">
                      <Bot className="mr-2 text-starGold" />
                      <h3 className="font-medium text-starLight">AI Response</h3>
                    </div>
                    <p className="text-gray-300 whitespace-pre-line">{aiResponse}</p>
                  </div>
                )}
              </CardContent>
            </Card>
            
            <Tabs defaultValue="mealplan">
              <TabsList className="bg-starAccent border border-starGray">
                <TabsTrigger 
                  value="mealplan" 
                  className="data-[state=active]:bg-starGold data-[state=active]:text-starDark"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Meal Plan
                </TabsTrigger>
                <TabsTrigger 
                  value="recipes" 
                  className="data-[state=active]:bg-starGold data-[state=active]:text-starDark"
                >
                  <Utensils className="w-4 h-4 mr-2" />
                  Recipes
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="mealplan">
                <Card className="bg-starDark border border-starGray">
                  <CardHeader>
                    <CardTitle className="text-starLight">Your Weekly Meal Plan</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {["Monday", "Tuesday"].map((day) => (
                        <div key={day} className="bg-starAccent p-4 rounded-lg">
                          <h3 className="font-medium text-starLight mb-2">{day}</h3>
                          <ul className="space-y-2">
                            <li className="text-sm text-gray-300">
                              <span className="text-starGold font-medium">Breakfast:</span> Overnight oats with protein
                            </li>
                            <li className="text-sm text-gray-300">
                              <span className="text-starGold font-medium">Lunch:</span> Chicken salad wrap
                            </li>
                            <li className="text-sm text-gray-300">
                              <span className="text-starGold font-medium">Dinner:</span> Baked salmon with vegetables
                            </li>
                            <li className="text-sm text-gray-300">
                              <span className="text-starGold font-medium">Snack:</span> Greek yogurt with berries
                            </li>
                          </ul>
                          <div className="flex justify-end mt-2">
                            <Button variant="ghost" size="sm" className="text-starGold">
                              Edit
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 flex justify-center">
                      <Button className="bg-starGold text-starDark hover:bg-starGold/90">
                        Generate Complete Week
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="recipes">
                <Card className="bg-starDark border border-starGray">
                  <CardHeader>
                    <CardTitle className="text-starLight">Recommended Recipes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-gray-400 py-8">
                      Use the AI to generate personalized recipes based on your preferences
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="space-y-6">
            <Card className="bg-starDark border border-starGray">
              <CardHeader>
                <CardTitle className="text-starLight">Nutrition Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Calories</span>
                      <span className="text-starLight">1,850 / 2,000</span>
                    </div>
                    <div className="w-full bg-starAccent h-2 rounded-full">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "92%" }}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Protein</span>
                      <span className="text-starLight">135g / 150g</span>
                    </div>
                    <div className="w-full bg-starAccent h-2 rounded-full">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Carbs</span>
                      <span className="text-starLight">210g / 250g</span>
                    </div>
                    <div className="w-full bg-starAccent h-2 rounded-full">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: "84%" }}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Fat</span>
                      <span className="text-starLight">55g / 70g</span>
                    </div>
                    <div className="w-full bg-starAccent h-2 rounded-full">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "78%" }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-starDark border border-starGray">
              <CardHeader>
                <CardTitle className="text-starLight flex items-center">
                  <Clock className="mr-2 text-starGold" />
                  Recent Meals
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-starAccent rounded-lg">
                    <div className="flex justify-between">
                      <span className="font-medium text-starLight">Breakfast</span>
                      <span className="text-xs text-gray-400">8:30 AM</span>
                    </div>
                    <p className="text-sm text-gray-300">Protein shake with banana</p>
                    <p className="text-xs text-starGold mt-1">320 calories</p>
                  </div>
                  
                  <div className="p-3 bg-starAccent rounded-lg">
                    <div className="flex justify-between">
                      <span className="font-medium text-starLight">Lunch</span>
                      <span className="text-xs text-gray-400">12:45 PM</span>
                    </div>
                    <p className="text-sm text-gray-300">Grilled chicken salad</p>
                    <p className="text-xs text-starGold mt-1">480 calories</p>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full mt-4 border-starGray text-starLight hover:bg-starAccent">
                  Add Meal
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-starDark border border-starGray">
              <CardHeader className="pb-2">
                <CardTitle className="text-starLight flex items-center">
                  <HelpCircle className="mr-2 text-starGold" />
                  Nutrition Tips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-300">
                  Adding protein to every meal helps maintain muscle mass and keeps you feeling fuller longer.
                </p>
                <Button variant="ghost" className="w-full mt-3 text-starGold hover:bg-starAccent">
                  Get More Tips
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

export default Nutrition;
