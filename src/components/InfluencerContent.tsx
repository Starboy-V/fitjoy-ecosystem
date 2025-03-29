
import React from 'react';
import { Heart, MessageSquare, Share2, Lock } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

type ContentItem = {
  id: number;
  author: {
    name: string;
    image: string;
    verified: boolean;
  };
  content: {
    text: string;
    image?: string;
    isPremium: boolean;
  };
  stats: {
    likes: number;
    comments: number;
  };
};

const dummyContent: ContentItem[] = [
  {
    id: 1,
    author: {
      name: "Alex Fitness",
      image: "",
      verified: true,
    },
    content: {
      text: "Just finished an intense HIIT session! Here's the routine I followed - give it a try and let me know how it goes!",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zml0bmVzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      isPremium: false,
    },
    stats: {
      likes: 352,
      comments: 42,
    }
  },
  {
    id: 2,
    author: {
      name: "FitCoach Sarah",
      image: "",
      verified: true,
    },
    content: {
      text: "Exclusive 30-day meal plan to help you maximize your gains while maintaining a balanced diet.",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhlYWx0aHklMjBtZWFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      isPremium: true,
    },
    stats: {
      likes: 891,
      comments: 76,
    }
  },
];

const InfluencerContent = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Trending Content</h2>
        <Button variant="ghost" className="text-fitPurple font-medium hover:bg-fitPurple/5">
          View All
        </Button>
      </div>
      
      <div className="space-y-4">
        {dummyContent.map((item) => (
          <ContentCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const ContentCard = ({ item }: { item: ContentItem }) => {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarImage src={item.author.image} />
              <AvatarFallback className="bg-fitPurple text-white">
                {item.author.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center">
                <h3 className="font-medium">{item.author.name}</h3>
                {item.author.verified && (
                  <span className="ml-1 text-fitBlue">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                    </svg>
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-500">Fitness Coach</p>
            </div>
          </div>
          
          {item.content.isPremium && (
            <Badge variant="secondary" className="bg-fitPurple text-white flex items-center">
              <Lock className="w-3 h-3 mr-1" /> Premium
            </Badge>
          )}
        </div>
        
        <div className="mt-3">
          <p className="text-gray-800">{item.content.text}</p>
        </div>
        
        {item.content.image && (
          <div className={`mt-3 relative rounded-lg overflow-hidden ${item.content.isPremium ? 'filter blur-sm' : ''}`}>
            <img 
              src={item.content.image} 
              alt="Content" 
              className="w-full h-48 object-cover"
            />
            {item.content.isPremium && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black/50 px-4 py-3 rounded-lg flex items-center">
                  <Lock className="w-5 h-5 text-white mr-2" />
                  <span className="text-white font-medium">Upgrade to Access</span>
                </div>
              </div>
            )}
          </div>
        )}
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div className="flex space-x-4">
          <button className="flex items-center space-x-1 text-gray-500 hover:text-fitPurple">
            <Heart className="w-5 h-5" />
            <span>{item.stats.likes}</span>
          </button>
          <button className="flex items-center space-x-1 text-gray-500 hover:text-fitBlue">
            <MessageSquare className="w-5 h-5" />
            <span>{item.stats.comments}</span>
          </button>
        </div>
        <button className="text-gray-500 hover:text-gray-700">
          <Share2 className="w-5 h-5" />
        </button>
      </CardFooter>
    </Card>
  );
};

export default InfluencerContent;
