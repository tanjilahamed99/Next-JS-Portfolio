import About from "@/components/About/About";
import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import MyService from "@/components/MYService/MyService";
import MarqueeDesign from "@/components/MarqueeDesign/MarqueeDesign";
import Message from "@/components/Message/Message";
import Navbar from "@/components/Navbar/Navbar";
import NewsLatter from "@/components/NewsLatter/NewsLatter";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import Testimonial from "@/components/Testimonial/Testimonial";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <MyService />
      <About />
      <Message />
      <Skills />
      <Projects />
      <Testimonial />
      <MarqueeDesign />
      <NewsLatter />
      <Footer/>
    </div>
  )
}
