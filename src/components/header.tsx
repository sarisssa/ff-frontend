import Image from "next/image";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => (
  <header className="flex justify-between items-center gap-4 py-4 px-4 lg:px-8">
    <Image
      src="/images/header-stock-image.jpeg"
      width={50}
      height={50}
      alt="FF Logo"
    />
    <div className="input-group justify-center">
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered w-full max-w-sm focus:outline-0"
      />
      <button className="btn btn-square text-lg">
        <HiMagnifyingGlass />
      </button>
    </div>
    <div className="text-2xl">
      <RxHamburgerMenu />
    </div>
  </header>
);

export default Header;
