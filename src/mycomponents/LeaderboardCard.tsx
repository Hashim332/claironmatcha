import { Card, CardContent } from "@/components/ui/card";
import { MoveUpRight, Users } from "lucide-react";
import UserEntry from "./UserEntry";
import { Button } from "@/components/ui/button";

const dummyData = [
  { name: "matchakingvortex", matcha: 401, listens: 9000 },
  { name: "b0neskewedface", matcha: 788, listens: 2000 },
  { name: "clairofan88", matcha: 2, listens: 60 },
];

export default function LeaderboardCard() {
  return (
    <Card className="w-full rounded-2xl shadow-md bg-gradient-to-br from-matcha-300 via-matcha-400 to-matcha-300">
      <CardContent>
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Users className="h-5 w-5" />
          Leaderboard
        </h2>
        <ul className="space-y-3">
          {dummyData.map((user, idx) => (
            <UserEntry
              key={idx}
              name={user.name}
              matcha={user.matcha}
              listens={user.listens}
            />
          ))}
        </ul>
        <Button className="w-full flex text-black flex-row items-center gap-2 mt-4 bg-matcha-400 border-black border hover:bg-matcha-500 hover:cursor-pointer">
          <p>View full leaderboard</p>
          <MoveUpRight size={16} />
        </Button>
      </CardContent>
    </Card>
  );
}
