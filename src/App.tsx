import Navbar from "./mycomponents/Navbar";
import HeroSection from "./mycomponents/HeroSection";
import LeaderboardCard from "./mycomponents/LeaderboardCard";
import LogMatcha from "./mycomponents/LogMatcha";
import ConnectSpotify from "./mycomponents/ConnectSpotify";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <div className='flex flex-col mt-8 gap-4'>
        <LeaderboardCard />
        <ConnectSpotify />
        <LogMatcha />
      </div>
    </div>
  );
}

export default App;
