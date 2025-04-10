
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

const testimonials = [
  {
    name: "Sarah Thompson",
    location: "Etobicoke, Toronto",
    testimonial: "Toronto Mount Master did an amazing job mounting my 65-inch TV above my fireplace. They were professional, on time, and left no mess behind. Highly recommend!",
    rating: 5
  },
  {
    name: "Michael Chen",
    location: "North York, Toronto",
    testimonial: "I had several floating shelves and a large mirror installed. The work was impeccable and they helped me decide on the perfect placement. Great service at a fair price.",
    rating: 5
  },
  {
    name: "Jennifer Patel",
    location: "Scarborough, Toronto",
    testimonial: "The team installed blinds throughout my entire home. They were fast, efficient and everything works perfectly. Will definitely use their services again.",
    rating: 5
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-orange' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="bg-secondary/50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brown mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Here's what homeowners across Toronto have to say about our mounting services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-border/40 shadow-sm h-full flex flex-col">
              <CardHeader>
                <StarRating rating={testimonial.rating} />
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-foreground/80 italic">"{testimonial.testimonial}"</p>
              </CardContent>
              <CardFooter className="border-t pt-4 flex flex-col items-start">
                <p className="font-semibold text-brown">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
