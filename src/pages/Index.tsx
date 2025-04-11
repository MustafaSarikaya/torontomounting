
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import QuoteForm from '@/components/QuoteForm';
import Services from '@/components/Services';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <QuoteForm />
        <Services />
        <About />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
