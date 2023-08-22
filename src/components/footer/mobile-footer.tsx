"use client";

import { usePathname } from "next/navigation";
import { menuButtons } from "./menu-buttons";
import MobileButton from "./mobile-button";

export default function MobileFooter() {
  const pathname = usePathname();

  return (
    <footer className="absolute bottom-0 w-full flex justify-around items-center text-2xl">
      {menuButtons.map((menuButton) => (
        <MobileButton
          {...menuButton}
          isSelected={pathname === menuButton.url}
        />
      ))}
    </footer>
  );
}
