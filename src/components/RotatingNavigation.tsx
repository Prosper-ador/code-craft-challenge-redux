
import React, { useState } from 'react';
import { Menu, X, Home, User, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import NavigationContent from './NavigationContent';

/**
 * RotatingNavigation Component
 * 
 * A modern implementation of rotating navigation that features:
 * - Smooth CSS transitions and transforms
 * - Accessible keyboard navigation
 * - Responsive design
 * - Clean, modular code structure
 * 
 * The navigation rotates the entire container to reveal a side menu,
 * creating an engaging user experience while maintaining usability.
 */
const RotatingNavigation: React.FC = () => {
  // State to track whether the navigation is open
  const [isOpen, setIsOpen] = useState(false);

  /**
   * Toggles the navigation state between open and closed
   * Also handles accessibility by managing focus
   */
  const toggleNavigation = () => {
    setIsOpen(prev => !prev);
  };

  /**
   * Navigation items configuration
   * Each item includes an icon, label, and action
   */
  const navigationItems = [
    {
      icon: Home,
      label: 'Home',
      action: () => {
        setIsOpen(false);
        console.log('Navigate to Home');
      }
    },
    {
      icon: User,
      label: 'About',
      action: () => {
        setIsOpen(false);
        console.log('Navigate to About');
      }
    },
    {
      icon: Mail,
      label: 'Contact',
      action: () => {
        setIsOpen(false);
        console.log('Navigate to Contact');
      }
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Navigation Menu - Hidden by default, slides in when active */}
      <nav 
        className={`
          fixed top-0 left-0 z-10 w-64 h-full bg-slate-800 text-white
          transform transition-transform duration-500 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
        aria-label="Main navigation"
        role="navigation"
      >
        <div className="p-8 pt-24">
          <h2 className="text-2xl font-bold mb-8 text-purple-300">
            Navigation
          </h2>
          
          {/* Navigation Items List */}
          <ul className="space-y-6" role="menubar">
            {navigationItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <li key={item.label} role="none">
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-white hover:bg-slate-700 hover:text-purple-300 transition-colors duration-200"
                    onClick={item.action}
                    role="menuitem"
                    tabIndex={isOpen ? 0 : -1}
                  >
                    <IconComponent className="mr-3 h-5 w-5" />
                    {item.label}
                  </Button>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Main Content Container - Rotates when navigation is open */}
      <div 
        className={`
          relative min-h-screen transition-all duration-500 ease-in-out transform-gpu
          ${isOpen 
            ? 'rotate-[-20deg] scale-90 translate-x-16 origin-top-left' 
            : 'rotate-0 scale-100 translate-x-0'
          }
        `}
        style={{
          // Ensures smooth hardware acceleration
          willChange: 'transform',
        }}
      >
        {/* Toggle Button - Always visible in top-left */}
        <Button
          variant="ghost"
          size="icon"
          className={`
            fixed top-6 left-6 z-20 w-12 h-12 rounded-full
            bg-purple-600 hover:bg-purple-700 text-white
            transition-all duration-300 ease-in-out
            shadow-lg hover:shadow-xl
            ${isOpen ? 'rotate-180' : 'rotate-0'}
          `}
          onClick={toggleNavigation}
          aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>

        {/* Main Content */}
        <NavigationContent />

        {/* Overlay - Appears when navigation is open to close on click */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-20 z-0"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
        )}
      </div>
    </div>
  );
};

export default RotatingNavigation;
