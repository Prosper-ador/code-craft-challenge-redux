
import React from 'react';
import RotatingNavigation from '@/components/RotatingNavigation';

/**
 * Index Page - Project 3: Rotating Navigation
 * 
 * This is the main entry point for our rotating navigation project.
 * The component demonstrates a modern take on the classic rotating navigation
 * pattern with enhanced accessibility and smooth animations.
 */
const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <RotatingNavigation />
    </div>
  );
};

export default Index;
