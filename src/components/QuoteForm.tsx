
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone } from 'lucide-react';

const QuoteForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the data to a server
    console.log('Quote request submitted');
    // Show success message to user
    alert('Thank you for your request! I will contact you shortly with a free quote.');
  };

  return (
    <div id="quote-form" className="container mx-auto px-4 relative -mt-32 md:-mt-40 mb-16">
      <div className="bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] transform transition-all hover:shadow-[0_25px_60px_rgba(0,0,0,0.35)] hover:-translate-y-1 overflow-hidden max-w-3xl mx-auto">
        <div className="p-1">
          <div 
            className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-t-lg p-6 border-b border-gray-200"
          >
            <div className="flex items-center space-x-4">
              <div className="h-14 w-14 bg-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <Phone className="h-7 w-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-purple-900">Get Your Free Quote</h2>
                <p className="text-gray-600">Fill out this form and I'll get back to you within 24 hours</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <Input 
                  id="name" 
                  placeholder="Your name" 
                  required 
                  className="border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <Input 
                  id="phone" 
                  placeholder="Your phone" 
                  required 
                  className="border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email Address
              </label>
              <Input 
                id="email" 
                type="email" 
                placeholder="Your email" 
                required 
                className="border-gray-300 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="service" className="text-sm font-medium text-gray-700">
                Service Needed
              </label>
              <select
                id="service"
                className="flex h-10 w-full rounded-md border border-gray-300 bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:border-purple-500 focus:ring-2 focus:ring-purple-500"
                required
              >
                <option value="">Select a service</option>
                <option value="TV Mounting">TV Mounting</option>
                <option value="Shelf Installation">Shelf Installation</option>
                <option value="Blinds Installation">Blinds Installation</option>
                <option value="Mirror Mounting">Mirror Mounting</option>
                <option value="Art Hanging">Art & Picture Hanging</option>
                <option value="Other">Other (please specify)</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-700">
                Project Details
              </label>
              <Textarea
                id="message"
                placeholder="Tell me about your project (size, location, special requirements, etc.)"
                className="min-h-[100px] border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                required
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-3"
            >
              Get My Free Quote
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuoteForm;
