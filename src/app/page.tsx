
import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer";
import CustomerReview from "./components/CustomerReview";
import { Service } from "./components/Services";
import AboutUsPage from "./components/AboutUsPage";
import FloatingImg from "./components/FloatingPic";
export default function Home() {
  return (
    <div className="min-h-screen relative max-w-[100rem]  mx-auto">
     <Navbar/>
      <div className="min-h-screen">
          <MainPage/>
          <AboutUsPage/>
          <FloatingImg/>
          <Service/>
          
          <CustomerReview/>
          
          <Footer/>
      </div>
    </div>
  );
}
