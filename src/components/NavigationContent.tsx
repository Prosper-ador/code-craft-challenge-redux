
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

/**
 * NavigationContent Component
 * 
 * This component contains the main content that users see when the navigation
 * is closed. It includes project information, features, and implementation details.
 * 
 * The content is designed to be engaging and informative, showcasing the
 * rotating navigation functionality while providing educational value.
 */
const NavigationContent: React.FC = () => {
  const features = [
    {
      title: 'Smooth Animations',
      description: 'CSS transforms with hardware acceleration for buttery smooth transitions'
    },
    {
      title: 'Accessible Design',
      description: 'Proper ARIA labels, keyboard navigation, and focus management'
    },
    {
      title: 'Responsive Layout',
      description: 'Works beautifully across all device sizes and orientations'
    },
    {
      title: 'Modern Stack',
      description: 'Built with React, TypeScript, and Tailwind CSS for maintainability'
    }
  ];

  const technicalDetails = [
    'CSS Transform: rotate() and scale() for smooth animations',
    'React Hooks: useState for state management',
    'Accessibility: ARIA labels and semantic HTML',
    'Performance: Hardware acceleration with transform-gpu',
    'TypeScript: Full type safety throughout the component'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50 p-8">
      <div className="max-w-4xl mx-auto space-y-8 pt-20">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <Badge variant="secondary" className="text-sm font-medium">
            Project 3 of 50
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Rotating Navigation
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            An interactive navigation menu that rotates the entire page content to reveal 
            navigation options, creating a unique and engaging user experience.
          </p>
        </div>

        {/* Demo Instructions */}
        <Card className="border-purple-200 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-purple-700">
              🎮 Try the Demo
            </CardTitle>
            <CardDescription>
              Click the menu button in the top-left corner to see the rotating navigation in action!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="text-sm text-purple-800">
                <strong>Tip:</strong> Notice how the entire content area rotates and scales 
                to reveal the navigation menu. This creates a 3D-like effect that&apos;s both 
                visually appealing and functional.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
              <CardHeader>
                <CardTitle className="text-lg text-slate-700">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technical Implementation */}
        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="text-slate-700">Technical Implementation</CardTitle>
            <CardDescription>
              Key technical aspects of this rotating navigation implementation
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              {technicalDetails.map((detail, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-slate-700 text-sm">{detail}</p>
                </div>
              ))}
            </div>
            
            <Separator className="my-4" />
            
            <div className="bg-slate-50 p-4 rounded-lg">
              <h4 className="font-semibold text-slate-700 mb-2">Key CSS Transform:</h4>
              <code className="text-sm bg-slate-100 px-2 py-1 rounded text-purple-600">
                transform: rotate(-20deg) scale(0.9) translateX(4rem)
              </code>
              <p className="text-xs text-slate-600 mt-2">
                This combination creates the signature rotating and scaling effect when the navigation opens.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center py-8">
          <p className="text-slate-500 text-sm">
            Part of the enhanced 50 Days 50 Projects challenge - Built with modern web technologies
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavigationContent;
