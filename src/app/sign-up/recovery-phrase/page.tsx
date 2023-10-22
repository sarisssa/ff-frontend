import Button from "@/components/ui/button";
import Image from "next/image";

export default function RecoveryPhrasePage() {
  return (
    <div className="flex flex-col items-center mt-16">
      <div className="flex flex-col items-center mb-8">
        <Image src="/images/ff-logo.png" width={50} height={50} alt="FF Logo" />
        <h1 className="text-3xl font-bold mb-3">Your recovery phrase</h1>
        <p className="px-6 text-sm text-center">
          Write down or copy these words in the right order and store them
          somewhere safe. These will be used to recover your account in the
          event you get locked out
        </p>
      </div>
      <div className="flex flex-col w-[55%] text-center mb-20 gap-8">
        <span className="font-bold bg-ff-recovery-background py-2">
          1. chat
        </span>
        <span className="font-bold bg-ff-recovery-background py-2">
          2. history
        </span>
        <span className="font-bold bg-ff-recovery-background py-2">
          3. modify
        </span>
      </div>
      <Button className="w-[85%]">Complete Sign Up</Button>
    </div>
  );
}
