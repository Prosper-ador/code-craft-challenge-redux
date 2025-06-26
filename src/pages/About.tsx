
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
      <div className="max-w-4xl mx-auto space-y-8 pt-20">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <Badge variant="secondary" className="text-sm font-medium">
            About Page
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About This Project
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Learn more about the rotating navigation project and its implementation details.
          </p>
        </div>

        {/* About Content */}
        <Card className="border-blue-200 shadow-lg">
          <CardHeader>
            <CardTitle className="text-blue-700">Project Details</CardTitle>
            <CardDescription>
              Technical information about this rotating navigation implementation
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-slate-700 mb-2">Technologies Used</h3>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• React 18</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS</li>
                  <li>• React Router</li>
                  <li>• Lucide Icons</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-slate-700 mb-2">Key Features</h3>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Rotating navigation animation</li>
                  <li>• Multi-page routing</li>
                  <li>• Responsive design</li>
                  <li>• Accessibility features</li>
                  <li>• Modern React patterns</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
