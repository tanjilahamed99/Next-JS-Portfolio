import Link from "next/link";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const ulLinks = (
    <>
      <li className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#55e6a5] after:w-full after:scale-x-0 after:hover:scale-x-75 after:transition after:duration-300 after:origin-center">
        <Link href="/">Home</Link>
      </li>
      <li className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#55e6a5] after:w-full after:scale-x-0 after:hover:scale-x-75 after:transition after:duration-300 after:origin-center">
        <Link href="#service">Service</Link>
      </li>
      <li className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#55e6a5] after:w-full after:scale-x-0 after:hover:scale-x-75 after:transition after:duration-300 after:origin-center">
        <Link href="#about">About</Link>
      </li>
      <li className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#55e6a5] after:w-full after:scale-x-0 after:hover:scale-x-75 after:transition after:duration-300 after:origin-center">
        <Link href="#contact">Contact</Link>
      </li>
      <li className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#55e6a5] after:w-full after:scale-x-0 after:hover:scale-x-75 after:transition after:duration-300 after:origin-center">
        <Link href="#blog">Blog</Link>
      </li>
    </>
  );

  return (
    <div className="bg-[#2d2d2d] ">
      <div className="navbar  p-2 lg:rounded-lg container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <FaBars className="text-2xl text-white" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm text-black dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
            >
              {ulLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl font-bold text-white ">
            Tanjil Ahamed
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">{ulLinks}</ul>
        </div>
        <div className="lg:navbar-end">
          <a className="btn border-none bg-[#55e6a5] hover:bg-[#36c987] hidden lg:flex text-black">Thanks</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
