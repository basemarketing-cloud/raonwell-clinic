import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import QuickMenu from "@/components/layout/QuickMenu";
import Hero from "@/components/sections/Hero";
import SummarySection from "@/components/sections/SummarySection";
import BannerSection from "@/components/sections/BannerSection";
import ProgramSection from "@/components/sections/ProgramSection";
import FeatureSection from "@/components/sections/FeatureSection";
import IntroSection from "@/components/sections/IntroSection";
import ProcessSection from "@/components/sections/ProcessSection";
import DoctorSection from "@/components/sections/DoctorSection";
import NoticeSection from "@/components/sections/NoticeSection";
import FAQSection from "@/components/sections/FAQSection";
import ConsultationSection from "@/components/sections/ConsultationSection";
import FacilitySection from "@/components/sections/FacilitySection";
import DemoDialog from "@/components/ui/DemoDialog";

/**
 * 메인 페이지 - 섹션 순서를 바꾸고 싶다면 아래 순서만 바꾸면 됩니다.
 */
export default function Home() {
  return (
    <>
      <Header />
      <main className="pb-16 lg:pb-0">
        <Hero />
        <SummarySection />
        <BannerSection />
        <ProgramSection />
        <FeatureSection />
        <IntroSection />
        <ProcessSection />
        <DoctorSection />
        <NoticeSection />
        <FAQSection />
        <ConsultationSection />
        <FacilitySection />
      </main>
      <Footer />
      <QuickMenu />
      <DemoDialog />
    </>
  );
}
