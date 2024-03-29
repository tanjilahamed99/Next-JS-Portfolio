import Link from "next/link";

const Navbar = () => {
    const ulLinks = <>
        <li className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#55e6a5] after:w-full after:scale-x-0 after:hover:scale-x-75 after:transition after:duration-300 after:origin-center"><Link href='/'>Home</Link></li>
        <li className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#55e6a5] after:w-full after:scale-x-0 after:hover:scale-x-75 after:transition after:duration-300 after:origin-center"><Link href='#service'>Service</Link></li>
        <li className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#55e6a5] after:w-full after:scale-x-0 after:hover:scale-x-75 after:transition after:duration-300 after:origin-center"><Link href='#about'>About</Link></li>
        <li className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#55e6a5] after:w-full after:scale-x-0 after:hover:scale-x-75 after:transition after:duration-300 after:origin-center"><Link href='#contact'>Contact</Link></li>
        <li className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#55e6a5] after:w-full after:scale-x-0 after:hover:scale-x-75 after:transition after:duration-300 after:origin-center"><Link href='#blog'>Blog</Link></li>

    </>


    return (
        <div className="navbar bg-[#2d2d2d] p-2 rounded-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm text-white dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
                        {
                            ulLinks
                        }

                    </ul>
                </div>
                <a className="btn btn-ghost text-2xl font-bold text-white ">Tanjil</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-white">
                    {
                        ulLinks
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn border-none bg-[#55e6a5]">Button</a>
            </div>
        </div>
    );
};

export default Navbar;