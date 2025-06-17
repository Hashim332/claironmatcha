import { Button } from "@/components/ui/button";
import { Music } from "lucide-react";

export default function ConnectSpotify() {
  return (
    <Button className='flex items-center gap-2 text-lg font-semibold w-full h-12 '>
      <Music size={20} />
      Connect Spotify
    </Button>
  );
}
