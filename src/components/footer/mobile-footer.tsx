"use client";

import { usePathname } from "next/navigation";
import { menuButtons } from "./menu-buttons";
import MobileButton from "./mobile-button";

export default function MobileFooter() {
  const pathname = usePathname();

  return (
    <footer className="fixed bottom-0 w-full h-16 bg-white flex justify-around items-center text-2xl">
      {menuButtons.map((menuButton, idx) => (
        <MobileButton
          {...menuButton}
          key={idx}
          isSelected={pathname === menuButton.url}
        />
      ))}
    </footer>
  );
}
