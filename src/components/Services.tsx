
import React from 'react';
import { Tv, BookOpen, Blinds, Image, PictureInPicture } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    icon: <Tv size={48} className="text-brown-600" />,
    title: 'TV Mounting',
    description: 'Professional TV mounting for all sizes and types. Includes cable management and perfect placement.'
  },
  {
    icon: <BookOpen size={48} className="text-brown-600" />,
    title: 'Shelf Installation',
    description: 'Custom shelf mounting for any room. From floating shelves to complex wall units.'
  },
  {
    icon: <Blinds size={48} className="text-brown-600" />,
    title: 'Blinds Installation',
    description: 'Expert installation of all types of blinds, shades, and window treatments.'
  },
  {
    icon: <PictureInPicture size={48} className="text-brown-600" />,
    title: 'Mirror Mounting',
    description: "Secure hanging of all mirror types, ensuring they're level and safely attached."
  },
  {
    icon: <Image size={48} className="text-brown-600" />,
    title: 'Art & Picture Hanging',
    description: 'Professional art installation including single pieces or gallery walls.'
  }
];

const Services = () => {
  return (
    <section id="services" className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brown-900 mb-4">My Mounting Services</h2>
          <p className="text-gray-600 text-lg">
            Toronto's trusted mounting specialist providing expert installation services throughout the Greater Toronto Area.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white overflow-hidden group"
            >
              <CardHeader className="pb-2">
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <CardTitle className="text-xl font-semibold text-brown-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">
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
