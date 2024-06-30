// import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import "./App.css";
import BGVideo from "./components/BGVideo";
import Navbar from "./components/IsroNavbar/Navbar";
import Preloader from "./components/preloader";
import HeroSection from "./components/HeroSection";
import LatestNews from "./components/NewsCards/LatestNews";
import HighlightsSection from "./components/Highlights/HighlightsSection";
import Footer from "./components/Footer";
// import Model from "./components/modelsSection/model";
import SparklesBackground from "./components/SparklesBackground";
import RecUpd from "./components/RecentUpdates/RecUpd";
import Model from "./components/modelsSection/model";
import Sidebar from "./components/IsroSidebar/Sidebar";
import FooterMobile from "./components/FooterMobile";


const breakpointSidebar = 1200;
const breakpointMobile = 780;

function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  const [isSmall, setIsSmall] = useState(window.innerWidth < breakpointSidebar);
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpointMobile);

  useEffect(() => {
    const handleResize = () => {
      setIsSmall(window.innerWidth < breakpointSidebar);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpointMobile);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // setIsLoading(false);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <div id="bg-video-wrapper" className=" -z-10 h-screen object-cover">
            <BGVideo />
          </div>
          {isSmall ? <Sidebar/>  :  <Navbar />}
          <HeroSection />
          <SparklesBackground>
            <div className={`${isSmall ? "flex flex-col w-screen h-fit"  : "flex flex-row h-[50vh] w-screen" }`}>
              <HighlightsSection isSmall={isSmall}/>
              <RecUpd isSmall={isSmall}/>
            </div>
            <LatestNews />
            <Model />
          </SparklesBackground>
          {/* <h2 className="text-4xl text-center text-white">3D Models</h2> */}
          {/* <ThreeJsComp /> */}
          {isMobile ? <FooterMobile/> : <Footer />}
        </>
      )}
    </>
  );
}

export default App;
