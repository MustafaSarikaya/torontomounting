
import React from 'react';
import { Tv, Shelf, Blinds, Image, PictureInPicture } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    icon: <Tv size={48} className="text-orange" />,
    title: 'TV Mounting',
    description: 'Professional TV mounting for all sizes and types. Includes cable management and perfect placement.'
  },
  {
    icon: <Shelf size={48} className="text-orange" />,
    title: 'Shelf Installation',
    description: 'Custom shelf mounting for any room. From floating shelves to complex wall units.'
  },
  {
    icon: <Blinds size={48} className="text-orange" />,
    title: 'Blinds Installation',
    description: 'Expert installation of all types of blinds, shades, and window treatments.'
  },
  {
    icon: <PictureInPicture size={48} className="text-orange" />,
    title: 'Mirror Mounting',
    description: 'Secure hanging of all mirror types, ensuring they're level and safely attached.'
  },
  {
    icon: <Image size={48} className="text-orange" />,
    title: 'Art & Picture Hanging',
    description: 'Professional art installation including single pieces or gallery walls.'
  }
];

const Services = () => {
  return (
    <section id="services" className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brown mb-4">Our Mounting Services</h2>
          <p className="text-muted-foreground text-lg">
            Toronto's trusted mounting specialists providing expert installation services throughout the Greater Toronto Area.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-border/40 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-semibold text-brown">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/80 text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
