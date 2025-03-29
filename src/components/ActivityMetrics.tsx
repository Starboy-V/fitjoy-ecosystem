
import React from 'react';
import { Activity, Heart, Clock } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ActivityMetrics = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <MetricCard 
        title="Steps" 
        value="7,842" 
        target="10,000" 
        icon={<Activity />} 
        progress={78} 
        color="bg-fitBlue"
      />
      
      <MetricCard 
        title="Active Minutes" 
        value="43" 
        target="60" 
        icon={<Clock />} 
        progress={72} 
        color="bg-fitPurple"
      />
      
      <MetricCard 
        title="Heart Points" 
        value="32" 
        target="75" 
        icon={<Heart />} 
        progress={43} 
        color="bg-red-500"
      />
    </div>
  );
};

type MetricCardProps = {
  title: string;
  value: string;
  target: string;
  icon: React.ReactNode;
  progress: number;
  color: string;
};

const MetricCard = ({ title, value, target, icon, progress, color }: MetricCardProps) => {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="flex justify-between items-center text-base font-medium">
          <span>{title}</span>
          <span className={`p-2 rounded-full bg-gray-100`}>
            {React.cloneElement(icon as React.ReactElement, { 
              className: 'h-4 w-4',
              strokeWidth: 2 
            })}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col">
          <div className="text-2xl font-bold">{value}</div>
          <div className="text-sm text-gray-500">Goal: {target}</div>
          <div className="mt-2">
            <Progress value={progress} className="h-2" indicatorClassName={`${color}`} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivityMetrics;
