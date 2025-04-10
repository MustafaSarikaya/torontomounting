
import React from 'react';
import { Check } from 'lucide-react';

const benefits = [
  'Experienced mounting specialists serving all of Toronto',
  'Clean, neat installation with attention to detail',
  'Fully insured and professional service',
  'Careful handling of all your belongings',
  'Custom solutions for all mounting needs',
  'Proper tools and hardware for every job'
];

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1615529162406-f970dd85e9de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Professional TV mounting in Toronto" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-brown">Toronto's Most Trusted Mounting Specialists</h2>
            
            <p className="text-lg text-foreground/80">
              With years of experience in the Greater Toronto Area, we've built our reputation on providing expert mounting services with a focus on quality and customer satisfaction.
            </p>
            
            <p className="text-lg text-foreground/80">
              Whether you need a TV mounted in your living room, shelves installed in your office, or mirrors hung in your bathroom, our skilled technicians will ensure a perfect installation every time.
            </p>
            
            <div className="space-y-3 mt-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="mt-1 bg-orange/10 rounded-full p-1">
                    <Check className="h-4 w-4 text-orange" />
                  </div>
                  <span className="text-foreground/80">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
