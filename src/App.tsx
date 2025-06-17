import Navbar from "./mycomponents/Navbar";
import HeroSection from "./mycomponents/HeroSection";
import LeaderboardCard from "./mycomponents/LeaderboardCard";
import LogMatcha from "./mycomponents/LogMatcha";
import ConnectSpotify from "./mycomponents/ConnectSpotify";
import Footer from "./mycomponents/Footer";
import InfoSection from "./mycomponents/InfoSection";

function App() {
  return (
    <>
      <Navbar />
      <div className='min-h-screen'>
        <HeroSection />
        <div className='flex flex-col mt-8 gap-4'>
          <LeaderboardCard />
          <ConnectSpotify />
          <LogMatcha />
          <InfoSection />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
