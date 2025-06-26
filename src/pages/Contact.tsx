
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 p-8">
      <div className="max-w-4xl mx-auto space-y-8 pt-20">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <Badge variant="secondary" className="text-sm font-medium">
            Contact Page
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Contact information and ways to reach out about this project.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow duration-200 text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
                <Mail className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle className="text-lg text-slate-700">Email</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">contact@example.com</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-200 text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle className="text-lg text-slate-700">Phone</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">+1 (555) 123-4567</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-200 text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                <MapPin className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle className="text-lg text-slate-700">Location</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">San Francisco, CA</p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <Card className="border-green-200 shadow-lg">
          <CardHeader>
            <CardTitle className="text-green-700">Send a Message</CardTitle>
            <CardDescription>
              Get in touch with any questions or feedback about the project
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full bg-green-600 hover:bg-green-700">
              Open Contact Form
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
