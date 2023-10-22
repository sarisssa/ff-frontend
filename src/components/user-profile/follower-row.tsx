import Image from "next/image";
import Button from "../ui/button";

interface Props {
  name: string;
}

export default function FollowerRow({ name }: Props) {
  return (
    <div className="flex m-8 justify-between rounded-full bg-ff-border-light">
      <div className="flex gap-3 items-center ">
        <Image
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          width={40}
          height={40}
          alt="Picture of the author"
          className="rounded-full"
        />
        <span>
          <strong>{name}</strong>
        </span>
      </div>
      <Button className=" px-5 w-[7rem]" type={"border"}>
        Following
      </Button>
    </div>
  );
}
