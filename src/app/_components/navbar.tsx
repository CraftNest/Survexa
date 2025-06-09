"use client"

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Button from "./button";

const navLinks = [
  { name: "Participant", url: "#" },
  { name: "Client", url: "#" },
  { name: "About", url: "#" },
  { name: "Contact us", url: "#" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="flex justify-between">
      <div className="flex items-center md:gap-6 lg:gap-[40px] max-sm:hidden md:pl-6 lg:pl-[80px] xl:pl-[104px]">
        <Link href={"/"}>
          <Image src={"/logo.svg"} width={200} height={200} alt="logo" />
        </Link>
        {navLinks.map((link) => (
          <ul key={link.name}>
            <Link href={link.url}>
              <li className="text-white font-[700]">{link.name}</li>
            </Link>
          </ul>
        ))}
      </div>

      <Button text="Connect" className="max-sm:hidden md:mr-6 lg:mr-[80px] xl:mr-[104px]" />

      <div className="hidden max-sm:flex justify-between items-center w-full">
        <Link href={"/"}>
          <Image src={"/logo.svg"} width={200} height={200} alt="logo" />
        </Link>
        <button
        className="sm:hidden  z-50"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <div className="space-y-2">
          <span
            className={`block w-8 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2.5" : ""}`}
          ></span>
          <span
            className={`block w-8 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`block w-8 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""}`}
          ></span>
        </div>
      </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-[#0F0D0F] bg-opacity-50 z-40 sm:hidden transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          onClick={toggleMenu}
        ></div>

        <nav
          className={`fixed top-0 right-0 w-2/3 h-full bg-[#331251] z-40 shadow-lg transform transition-transform duration-300 ease-in-out sm:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <ul className="flex flex-col items-center p-8 space-y-6 mt-20">
      <Button text="Connect"  />
          {navLinks.map((link, index) => (
            <li key={index} className="w-full">
              <a
                href={link.url}
                className="font-geist font-semibold text-white text-lg hover:bg-light-green hover:rounded-md hover:px-4 hover:py-3 hover:text-white transition-all ease-in-out duration-300 block w-full"
                onClick={toggleMenu}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      </div>
    </nav>
  );
}
