import About from "@/components/About";
import Banner from "@/components/Banner";
import Courses from "@/components/Course";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Register from "@/components/Register";
import StickyButton from "@/components/StickyButton";
import TopNav from "@/components/TopNav";


export default function Home() {
  return (
    <main >
      <StickyButton/>
      <TopNav/>
      <Navbar/>
      <Banner/>
      <About/>
      <Courses/>
      <Cta/>
      <Register/>
      <Footer/>    
    </main>
  );
}
