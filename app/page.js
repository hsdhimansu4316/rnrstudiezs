import About from "@/components/About";
import Banner from "@/components/Banner";
import Cities from "@/components/Cities";
import Courses from "@/components/Course";
import Cta from "@/components/Cta";
import Cta2 from "@/components/Cta2";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import HorizontalCta from "@/components/HorizontalCta";
import LogoSlider from "@/components/LogoSlider";
import Members from "@/components/Members";
import Navbar from "@/components/Navbar";
import NewsScroll from "@/components/NewsScroll";
import Popupbox from "@/components/Popupbox";
import Register from "@/components/Register";
import StickyButton from "@/components/StickyButton";
import TopNav from "@/components/TopNav";
import UniversityCards from "@/components/UniversityCards";
import WhyChoseUs from "@/components/WhyChoseUs";
import WhyRnr from "@/components/WhyRnr";


export default function Home() {
  return (
    <main >
      {/* <StickyButton/> */}
      <Popupbox/>
      <TopNav/>
      <Navbar/>
      <Banner/>
      <NewsScroll/>
      <About/>
      {/* <UniversityCards/> */}
      <Courses/>
      <WhyRnr/>
      <Cities/>
      {/* <WhyChoseUs/> */}
      <HorizontalCta/>
      <Members/>
    
      <LogoSlider/>
      <Faq/>
      <Cta/>
      <Register/>
      <Footer/>    
    </main>
  );
}
