
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="bg-brown text-white relative pb-40 md:pb-48 lg:pb-32">
      <div className="container mx-auto px-4 py-16 md:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center mb-6">
              <div className="h-16 w-16 md:h-20 md:w-20 rounded-full overflow-hidden border-2 border-white mr-4">
                <img 
                  src="/lovable-uploads/b0427c6e-1e3b-44f1-aefe-53b3be42a133.png" 
                  alt="Yusuf T." 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold">Yusuf T.</h2>
                <p className="text-white/80">Mounting Specialist</p>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Expert Mounting Services in Toronto
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              I take pride in my attention to detail and commitment to customer satisfaction. 
              Professional installation of TVs, shelves, blinds, mirrors, and artwork.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#quote-form">
                <Button size="lg" className="bg-orange hover:bg-orange-light text-white font-semibold px-8">
                  Get Free Quote
                </Button>
              </a>
              <a href="#services">
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                  View Services
                </Button>
              </a>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -left-6 -top-6 h-32 w-32 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute -right-6 -bottom-6 h-32 w-32 bg-white/10 rounded-full blur-2xl"></div>
              <img 
                src="/lovable-uploads/5c73e655-0c2d-48ce-93dc-5335527eb3f7.png" 
                alt="Yusuf T. - Toronto Mount Master" 
                className="rounded-lg shadow-xl max-w-full h-auto object-cover relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
