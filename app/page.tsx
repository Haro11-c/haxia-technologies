// app/page.tsx
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Services from '@/components/sections/services';
import Portfolio from '@/components/sections/portfolio';
import Team from '@/components/sections/team';
import ContactForm from '@/components/sections/contact-form';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Team />
      <ContactForm />
    </>
  );
}