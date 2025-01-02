// pages/index.js
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { HeroSection } from '../components/HeroSection';
import { CategoriesSection } from '../components/CategoriesSection';
import { HowItWorksSection } from '../components/HowItWorksSection';
import { WhereToFindSection } from '../components/WhereToFindSection';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Horizontal Categories with Slider */}
        <CategoriesSection />

        {/* How It Works Section */}
        <HowItWorksSection />

        {/* Where To Find Section */}
        <WhereToFindSection />
      </main>
      <Footer />
    </div>
  );
}
