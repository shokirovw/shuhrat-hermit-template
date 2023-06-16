"use client";
import Hero from './sections/hero';
import Features from './sections/features';
import Newsletter from './sections/newsletter';
import Stats from './sections/stats';
import Testimonials from './sections/testimonials';
import Logos from './sections/logos';
import Team from './sections/team';
import Contact from './sections/contact';
import Faq from './sections/faq';
import Footer from './sections/footer';

export default function Home () {
  return (
    <>
      <Hero />
      <Logos />
      <Stats />
      <Features />
      <Testimonials />
      <Team />
      <Contact />
      <Faq />
      <Newsletter />
      <Footer />
    </>
  )
}