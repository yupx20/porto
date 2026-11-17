import PageTransition from '../components/layout/PageTransition';
import HeroSection from '../components/hero/HeroSection';

/**
 * HomePage — The main landing page featuring "The Calling Card" hero section.
 * This is PRD Module 1.
 */
export default function HomePage() {
  return (
    <PageTransition>
      <main>
        <HeroSection />
      </main>
    </PageTransition>
  );
}
