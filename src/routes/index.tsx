import ConnectSpotify from "@/mycomponents/ConnectSpotify";
import HeroSection from "@/mycomponents/HeroSection";
import InfoSection from "@/mycomponents/InfoSection";
import LeaderboardCard from "@/mycomponents/LeaderboardCard";
import LogMatcha from "@/mycomponents/LogMatcha";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="sm:px-[25%] ">
      {/* TODO: figure out how to implement the "sign in" UI elements */}
      <div>
        {/* <header>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </header> */}
      </div>
      <div className="min-h-screen">
        <HeroSection />
        <div className="flex flex-col mt-8 gap-4">
          <LeaderboardCard />
          <ConnectSpotify />
          <LogMatcha />
          <InfoSection />
        </div>
      </div>
    </div>
  );
}
