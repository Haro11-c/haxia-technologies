// app/page.tsx
import Hero from '@/components/modules/hero/hero';
import About from '@/components/modules/about/about';
import Services from '@/components/modules/services/services';
import Portfolio from '@/components/modules/portfolio/portfolio';
import Team from '@/components/modules/team/team';
import ContactForm from '@/components/modules/contact/contact-form';
import HomePortfolio from '@/components/modules/portfolio/home-portfolio';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
     <HomePortfolio />
      <Team />
      <ContactForm />
    </>
  );
}