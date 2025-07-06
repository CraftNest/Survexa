"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isConnectOpen, setIsConnectOpen] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);
  const initialFocusRef = useRef<HTMLDivElement>(null);

  const handleEscapeKey = useCallback((event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsConnectOpen(false);
    }
  }, []);

  const handleMenuKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setIsMenuOpen(!isMenuOpen);
    }
  };

  const handleConnectKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setIsConnectOpen(!isConnectOpen);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsConnectOpen(false);
      }
    };

    if (isConnectOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscapeKey);
      // Focus trap
      initialFocusRef.current?.focus();
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isConnectOpen, handleEscapeKey]);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    {
      label: "Participant",
      href: "/participant",
    },
    {
      label: "Client",
      href: "/client",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact us",
      href: "/contact",
    },
    {
      label: "FAQ", // <-- Add this
      href: "/faq",
    },
  ];

  return (
    <nav
      className={`w-full text-white  sticky top-0 z-50   transition-colors duration-300   ${
        isSticky && !isMenuOpen
          ? "bg-black/30 backdrop-blur-sm "
          : isSticky && isMenuOpen
            ? " bg-bg-dark md:bg-transparent backdrop-blur-sm"
            : "bg-transparent"
      } `}
    >
      {/* Desktop Menu */}
      <div className="flex items-center w-full px-6 md:px-24 py-4 md:py-5">
        <div className="mr-8 md:border-r border-border-purple pr-8">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="logo"
              width={100}
              height={100}
              className="h-6 md:h-6 w-auto"
            />
          </Link>
        </div>
        <div className="md:flex items-center gap-8 hidden  ">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-bold text-sm relative after:absolute after:bottom-[-0.25rem] after:left-1/2 after:h-[0.125rem] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="ml-auto hidden md:block">
          <div
            role="button"
            tabIndex={0}
            className="rounded-lg bg-primary-purple px-5 py-2 cursor-pointer border border-primary-purple-light hover:scale-110 transition-all duration-300 active:scale-95 shadow-[inset_0_0.125rem_0.5rem_0_rgba(0,0,0,0.25)] hover:shadow-[inset_0_0.125rem_1rem_0_rgba(0,0,0,0.1)] hover:drop-shadow-[0_0_0.625rem_rgba(144,17,255,0.5)]"
            onClick={() => setIsConnectOpen(!isConnectOpen)}
            onKeyDown={handleConnectKeyPress}
            aria-expanded={isConnectOpen}
            aria-haspopup="dialog"
          >
            <span className="font-bold text-base">Connect</span>
          </div>
        </div>
        <div
          className="md:hidden ml-auto"
          role="button"
          tabIndex={0}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          onKeyDown={handleMenuKeyPress}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <X className="text-white" aria-hidden="true" />
          ) : (
            <Menu className="text-white" aria-hidden="true" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-14 left-0 w-full h-[100dvh] bg-bg-dark   transform transition-all duration-300 ease-in-out translate-x-0 opacity-100 ${isMenuOpen ? "translate-y-0 " : "-translate-y-[120%]"}`}
        role="navigation"
        aria-label="Mobile menu"
        aria-hidden={!isMenuOpen}
      >
        <div className="flex flex-col gap-6 px-6 py-4">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-bold text-base py-2 text-center "
            >
              {link.label}
            </Link>
          ))}
          <div
            onClick={() => setIsConnectOpen(!isConnectOpen)}
            className="mt-5 w-full rounded-lg bg-primary-purple px-5 py-2 cursor-pointer border border-primary-purple-light hover:scale-105 transition-all duration-300 active:scale-95 shadow-[inset_0_0.125rem_0.5rem_0_rgba(0,0,0,0.25)] hover:shadow-[inset_0_0.125rem_1rem_0_rgba(0,0,0,0.1)] text-center"
            role="button"
            tabIndex={0}
            onKeyDown={handleConnectKeyPress}
            aria-expanded={isConnectOpen}
            aria-haspopup="dialog"
          >
            <span className="font-bold text-base">Connect</span>
          </div>
        </div>
      </div>
      {/* Connect Modal */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black/80 z-50 ${isConnectOpen ? "translate-y-0" : "-translate-y-[120%]"}`}
        aria-hidden={!isConnectOpen}
      >
        <div className="w-full h-full flex items-center justify-center px-8">
          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className="w-full  md:max-w-md bg-bg-darker rounded-xl p-4 min-h-[12.5rem]"
            tabIndex={-1}
          >
            <h2
              id="modal-title"
              className="text-xl font-bold text-center mb-4 flex justify-between items-center"
            >
              Connect Wallet
              <button
                onClick={() => setIsConnectOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </h2>
            <div ref={initialFocusRef} tabIndex={-1} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
