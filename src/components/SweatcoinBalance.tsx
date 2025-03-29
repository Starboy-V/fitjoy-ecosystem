
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SweatcoinBalance = () => {
  return (
    <Card className="overflow-hidden border-t-4 border-t-fitPurple">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium">SweatCoin Balance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-end">
          <div className="fit-gradient rounded-xl p-5 flex items-center justify-center mb-2">
            <img 
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQwIDgwQzYyLjA5MTQgODAgODAgNjIuMDkxNCA4MCA0MEM4MCAxNy45MDg2IDYyLjA5MTQgMCA0MCAwQzE3LjkwODYgMCAwIDE3LjkwODYgMCA0MEMwIDYyLjA5MTQgMTcuOTA4NiA4MCA0MCA4MFoiIGZpbGw9IiNGRkYiLz4KPHBhdGggZD0iTTI3LjUgNTdDMjYuMTIgNTcgMjUgNTUuODggMjUgNTQuNVYyNS41QzI1IDI0LjEyIDI2LjEyIDIzIDI3LjUgMjNINTIuNUM1My44OCAyMyA1NSAyNC4xMiA1NSAyNS41VjU0LjVDNTUgNTUuODggNTMuODggNTcgNTIuNSA1N0gyNy41Wk0zMCAyNy41VjUyLjVINTBWMjcuNUgzMFpNMzIuNSA1MEMzMi41IDQ5LjE3IDMzLjE3IDQ4LjUgMzQgNDguNUg0NkM0Ni44MyA0OC41IDQ3LjUgNDkuMTcgNDcuNSA1MEM0Ny41IDUwLjgzIDQ2LjgzIDUxLjUgNDYgNTEuNUgzNEMzMy4xNyA1MS41IDMyLjUgNTAuODMgMzIuNSA1MFpNMzQuNSA0MFYzMEg0NS41VjQwSDM0LjVaIiBmaWxsPSIjRkZGIi8+Cjwvc3ZnPg==" 
              alt="SweatCoin" 
              className="w-10 h-10"
            />
          </div>
          <div className="ml-4">
            <div className="text-3xl font-bold">1,248</div>
            <div className="text-sm text-gray-500">SweatCoins earned</div>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm">
            <span className="text-green-500 font-medium">+32</span> earned today
          </div>
          <button className="text-fitPurple text-sm font-medium hover:underline">
            View Rewards →
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SweatcoinBalance;
