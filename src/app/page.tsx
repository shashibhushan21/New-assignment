import dynamic from "next/dynamic";
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";

// Lazy load below-the-fold sections for performance
const Statistics = dynamic(
  () => import("@/components/statistics/Statistics"),
  { ssr: true }
);
const VideoSection = dynamic(
  () => import("@/components/video/VideoSection"),
  { ssr: true }
);
const Features = dynamic(
  () => import("@/components/features/Features"),
  { ssr: true }
);
const Testimonials = dynamic(
  () => import("@/components/testimonials/Testimonials"),
  { ssr: true }
);
const Timeline = dynamic(
  () => import("@/components/timeline/Timeline"),
  { ssr: true }
);
const MentorSection = dynamic(
  () => import("@/components/mentor/MentorSection"),
  { ssr: true }
);
const Pricing = dynamic(
  () => import("@/components/pricing/Pricing"),
  { ssr: true }
);
const Community = dynamic(
  () => import("@/components/community/Community"),
  { ssr: true }
);
const FAQ = dynamic(
  () => import("@/components/faq/FAQ"),
  { ssr: true }
);
const FooterCTA = dynamic(
  () => import("@/components/footer/FooterCTA"),
  { ssr: true }
);

export default function Home() {
  return (
    <main className="flex-1 overflow-x-hidden space-y-16 md:space-y-24">
      <Navbar />
      <Hero />
      <Statistics />
      <VideoSection />
      <Features />
      <Testimonials />
      <Timeline />
      <MentorSection />
      <Pricing />
      <Community />
  
     
      <FooterCTA />
    </main>
  );
}
