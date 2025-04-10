
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="hero-gradient text-white">
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Expert Mounting Services in Toronto
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              We take pride in our attention to detail and commitment to customer satisfaction. 
              Professional installation of TVs, shelves, blinds, mirrors, and artwork.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-orange hover:bg-orange-light text-white font-semibold px-8">
                Get Free Quote
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                Our Services
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <img 
              src="/lovable-uploads/f03e8604-87df-44d2-985b-f3c3c29742e0.png" 
              alt="Toronto Mount Master Professional Mounting Services" 
              className="rounded-lg shadow-xl max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
