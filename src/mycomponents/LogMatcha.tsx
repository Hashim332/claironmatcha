import { Button } from "@/components/ui/button";
import { CupSoda, Music } from "lucide-react";

export default function LogMatcha() {
  return (
    <Button className='text-lg font-semibold w-full h-12 bg-matcha-400'>
      <CupSoda color='#000000' size={20} />
      Log your drink
    </Button>
  );
}
