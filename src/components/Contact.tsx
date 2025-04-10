
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Calendar } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the data to a server
    console.log('Quote request submitted');
    // Show success message to user
    alert('Thank you for your request! We will contact you shortly with a free quote.');
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brown mb-4">Get Your Free Quote Today</h2>
              <p className="text-lg text-foreground/80">
                Ready to transform your space with professional mounting services? Fill out the form and we'll get back to you with a custom quote.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="h-6 w-6 text-orange" />
                <div>
                  <p className="font-semibold">Give us a call</p>
                  <p className="text-foreground/80">(416) 555-1234</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="h-6 w-6 text-orange" />
                <div>
                  <p className="font-semibold">Email us</p>
                  <p className="text-foreground/80">info@torontomountmaster.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="h-6 w-6 text-orange" />
                <div>
                  <p className="font-semibold">Service Area</p>
                  <p className="text-foreground/80">All of Toronto & the GTA</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Calendar className="h-6 w-6 text-orange" />
                <div>
                  <p className="font-semibold">Business Hours</p>
                  <p className="text-foreground/80">Monday - Saturday: 8am - 8pm</p>
                  <p className="text-foreground/80">Sunday: 10am - 6pm</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-secondary/30 p-6 md:p-8 rounded-lg shadow-sm border border-border/40">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Full Name
                  </label>
                  <Input id="name" placeholder="Your name" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone Number
                  </label>
                  <Input id="phone" placeholder="Your phone" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </label>
                <Input id="email" type="email" placeholder="Your email" required />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium">
                  Service Needed
                </label>
                <select
                  id="service"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
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
                <label htmlFor="message" className="text-sm font-medium">
                  Project Details
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project (size, location, special requirements, etc.)"
                  className="min-h-[120px]"
                  required
                />
              </div>
              
              <Button type="submit" className="w-full bg-orange hover:bg-orange-dark text-white font-semibold">
                Get Free Quote
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
