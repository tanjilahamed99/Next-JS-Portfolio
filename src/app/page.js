import About from "@/components/About/About";
import Banner from "@/components/Banner/Banner";
import MyService from "@/components/MYService/MyService";
import Message from "@/components/Message/Message";
import Navbar from "@/components/Navbar/Navbar";
import Skills from "@/components/Skills/Skills";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Banner />
      <MyService />
      <About />
      <Message />
      <Skills></Skills>
    </div>
  )
}
