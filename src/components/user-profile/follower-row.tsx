import Image from "next/image";

export default function FollowerRow() {
  return (
    <div>
      <div>
        <Image
          src="/profile.png"
          width={500}
          height={500}
          alt="Picture of the author"
        />
        <span>Kiran Glaucus</span>
      </div>
      <span>Following</span>
    </div>
  );
}

//Repeat in Petition NFT
