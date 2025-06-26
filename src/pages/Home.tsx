
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50 p-8">
      <div className="max-w-4xl mx-auto space-y-8 pt-20">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <Badge variant="secondary" className="text-sm font-medium">
            Home Page
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Welcome Home
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            This is the home page of our rotating navigation application. 
            Use the navigation menu to explore different sections.
          </p>
        </div>

        {/* Content Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader>
              <CardTitle className="text-lg text-slate-700">
                Project Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                A modern rotating navigation implementation with React, TypeScript, and Tailwind CSS.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader>
              <CardTitle className="text-lg text-slate-700">
                Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                Smooth animations, responsive design, and accessible navigation patterns.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
