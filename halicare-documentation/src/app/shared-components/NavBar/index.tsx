"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Frontend Web", href: "/frontend-web" },
    { name: "Frontend Mobile", href: "/frontend-mobile" },
    { name: "Backend", href: "/backend" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#001F54] shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-5">
          <div className="flex items-center gap-2 sm:gap-4">
            <Image src="/images/halicarelogo.png" alt="HaliCare Logo" width={70} height={70} className="cursor-pointer w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-[70px] lg:h-[70px]"
              priority
            />
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#17DFF9] select-none">
              HaliCare<span className="text-white ml-1 sm:ml-3">Documentation</span>
            </h1>
          </div>
          <ul className="hidden lg:flex gap-6 xl:gap-10 text-base lg:text-xl font-bold">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`transition-all duration-300 py-2 px-1 ${
                    pathname === item.href
                      ? "text-white border-b-2 border-white"
                      : "text-[#17DFF9] hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <button onClick={toggleMobileMenu} className="lg:hidden text-[#17DFF9] hover:text-white focus:outline-none p-2" aria-label="Toggle mobile menu">
            {isMobileMenuOpen ? (
              <HiOutlineX className="h-6 w-6 sm:h-8 sm:w-8" />
            ) : (
              <HiOutlineMenu className="h-6 w-6 sm:h-8 sm:w-8" />
            )}
          </button>
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 z-40 h-full w-64 sm:w-80 bg-[#001F54] shadow-lg transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#17DFF9]">
          <Image src="/images/halicarelogo.png" alt="HaliCare Logo" width={50} height={50} className="w-10 h-10 sm:w-12 sm:h-12" priority/>
          <button onClick={toggleMobileMenu} className="text-[#17DFF9] hover:text-white focus:outline-none p-2"aria-label="Close mobile menu" >
            <HiOutlineX className="h-6 w-6 sm:h-8 sm:w-8" />
          </button>
        </div>
        <ul className="flex flex-col p-4 sm:p-6 gap-4 sm:gap-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block text-lg sm:text-xl font-bold transition-all py-2 ${
                  pathname === item.href
                    ? "text-white border-b-2 border-white"
                    : "text-[#17DFF9] hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black opacity-50 lg:hidden"
          onClick={toggleMobileMenu}
          aria-hidden="true"
        />
      )}
    </nav>
  );
}

export default Navbar;