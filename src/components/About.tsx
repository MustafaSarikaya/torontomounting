import React from 'react';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/slick-custom.css";

const benefits = [
  'Experienced mounting specialists serving all of Toronto',
  'Clean, neat installation with attention to detail',
  'Fully insured and professional service',
  'Careful handling of all your belongings',
  'Custom solutions for all mounting needs',
  'Proper tools and hardware for every job'
];

const About = () => {
  const images = [
    'lovable-uploads/bike-hang.jpeg',
    'lovable-uploads/tv-mount.jpeg',
    'lovable-uploads/5c73e655-0c2d-48ce-93dc-5335527eb3f7.png'
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: true,
    className: "gap-[10px] md:gap-[50px]",
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 space-y-12">
        <div className="relative max-w-6xl mx-auto h-[200px] md:h-[400px]">
          <div className="px-12">
            <Slider {...settings}>
              {images.map((image, index) => (
                <div key={index} className="px-1 md:px-2">
                  <div 
                    className="relative overflow-hidden rounded-2xl shadow-lg h-[200px] md:h-[400px]"
                    style={{ 
                      backgroundColor: '#f8f8f8',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                    }}
                  >
                    <img
                      src={image}
                      alt={`Toronto TV mounting service - image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
          
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-brown text-center">Toronto's Most Trusted Mounting Specialists</h2>
          
          <p className="text-lg text-foreground/80 text-center">
            With years of experience in the Greater Toronto Area, we've built our reputation on providing expert mounting services with a focus on quality and customer satisfaction.
          </p>
          
          <p className="text-lg text-foreground/80 text-center">
            Whether you need a TV mounted in your living room, shelves installed in your office, or mirrors hung in your bathroom, our skilled technicians will ensure a perfect installation every time.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
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
    </section>
  );
};

export default About;
