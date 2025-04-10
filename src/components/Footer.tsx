
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brown text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-white/80 mt-4">
              Toronto's trusted mounting specialist for TVs, shelves, mirrors, art, and blinds. 
              Serving all of the Greater Toronto Area with professional installation services.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/#services" className="text-white/80 hover:text-orange transition-colors">TV Mounting</Link></li>
              <li><Link to="/#services" className="text-white/80 hover:text-orange transition-colors">Shelf Installation</Link></li>
              <li><Link to="/#services" className="text-white/80 hover:text-orange transition-colors">Blinds Installation</Link></li>
              <li><Link to="/#services" className="text-white/80 hover:text-orange transition-colors">Mirror Mounting</Link></li>
              <li><Link to="/#services" className="text-white/80 hover:text-orange transition-colors">Art & Picture Hanging</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
            <ul className="space-y-2">
              <li className="text-white/80">Toronto</li>
              <li className="text-white/80">North York</li>
              <li className="text-white/80">Scarborough</li>
              <li className="text-white/80">Etobicoke</li>
              <li className="text-white/80">Mississauga</li>
              <li className="text-white/80">Markham</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-white/80">Phone: (416) 555-1234</li>
              <li className="text-white/80">Email: info@torontomountmaster.com</li>
              <li className="text-white/80">Hours: Mon-Sat 8am-8pm, Sun 10am-6pm</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-6 text-center text-white/60">
          <p>© {currentYear} Toronto Mount Master. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
