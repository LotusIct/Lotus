
import MegaMenu from '../components/MegaMenu';
import HeroSection from '../components/HeroSection.js';
import SolutionsCarousel from '../components/SolutionsCarousel.js';
import PartnersSection from '../components/PartnersSection.js'
import InterpriseSection from '../components/InterpriseSection.js';
import StatsSection from '../components/StatsSection.js';
import VideoShowcase from '../components/VideoShowcase.js';
import AboutSection from '../components/AboutSection.js';
import BlogPreview from '../components/BlogPreview.js';
import SuccessCases from '../components/SuccessCases.js';
import Footer from '../components/Footer.js';
/*


import BlogPreview from '../components/BlogPreview.js';
import NewsletterSignup from '../components/NewsletterSignup.js';
 */

export default function Home() {
  return (
    <>
      <MegaMenu />
     <HeroSection />
      <SolutionsCarousel />
<AboutSection />
      <PartnersSection />
      <StatsSection />
      <InterpriseSection/>
      <VideoShowcase/>

        <SuccessCases />
        <BlogPreview />
        <Footer />
      {/*

      <AboutSection />
      <BlogPreview />
      <NewsletterSignup />
      <Footer /> */}
    </>
  );
}