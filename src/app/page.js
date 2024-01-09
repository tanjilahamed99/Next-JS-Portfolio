import About from "@/components/About/About";
import Banner from "@/components/Banner/Banner";
import MyService from "@/components/MYService/MyService";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Banner />
      <MyService />
      <About />
    </div>
  )
}
