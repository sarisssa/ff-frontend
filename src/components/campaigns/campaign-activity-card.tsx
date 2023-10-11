import { CampaignActivity } from "@/lib/types";

interface Props {
  activity: CampaignActivity;
}

export default function CampaignActivityCard({ activity }: Props) {
  return (
    <div className="flex justify-center">
      <img src="" alt="" />
      <span className="flex-grow">Jason Dude joined this petition</span>
      <span>2h ago</span>
    </div>
  );
}
