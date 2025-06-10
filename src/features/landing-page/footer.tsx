"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useMemo, useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const validEmail = useMemo(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }, [email]);

  const onSubmit = () => {
    if (!validEmail) return;
  };

  const LinkClass =
    "text-base text-[#B6B6B6] hover:text-[#9011FF] focus:text-[#9011FF] focus:outline-none focus:ring-2 focus:ring-[#9011FF] focus:ring-offset-2 focus:ring-offset-[#0D0D0D] rounded transition-all duration-300 w-fit";

  const links = {
    platform: [
      {
        label: "Create Survey",
        href: "/create-survey",
      },
      {
        label: "Take Survey",
        href: "/take-survey",
      },
    ],
    resources: [
      {
        label: "Documentation",
        href: "/documentation",
      },
      {
        label: "API Reference",
        href: "/api-reference",
      },
      {
        label: "Support",
        href: "/support",
      },
      {
        label: "Blog",
        href: "/blog",
      },
    ],
    community: [
      {
        label: "Discord",
        href: "/discord",
      },
      {
        label: "X",
        href: "/x",
      },
      {
        label: "GitHub",
        href: "/github",
      },
      {
        label: "Forum",
        href: "/forum",
      },
    ],
  };

  return (
    <footer className="w-full bg-[#0D0D0D] md:px-24 px-4 py-10  mt-10 ">
      <div className="w-full  flex items-center justify-center">
        <Image
          src="/logo.svg"
          alt="logo"
          width={100}
          height={100}
          className="h-6 md:h-9 w-auto"
        />
      </div>

      {/* Footer Links */}
      <div className="w-full grid md:grid-cols-4 grid-cols-1 gap-10 md:gap-0 px-4 md:px-0 border-b border-b-[#252525] py-10 md:py-16 border-t border-t-[#252525] mt-6">
        {/* Platform */}
        <div className="flex flex-col gap-4">
          <p className="text-white text-base font-bold">Platform</p>
          {links.platform.map((link) => (
            <div key={link.label}>
              <Link href={link.href} className={LinkClass} key={link.label}>
                {link.label}
              </Link>
            </div>
          ))}
        </div>
        {/* Resources */}
        <div className="flex flex-col gap-4">
          <p className="text-white text-base font-bold">Resources</p>
          {links.resources.map((link) => (
            <Link href={link.href} className={LinkClass} key={link.label}>
              {link.label}
            </Link>
          ))}
        </div>
        {/* Community */}
        <div className="flex flex-col gap-4">
          <p className="text-white text-base font-bold">Community</p>
          {links.community.map((link) => (
            <Link href={link.href} className={LinkClass} key={link.label}>
              {link.label}
            </Link>
          ))}
        </div>
        {/* Newsletter */}
        <div className="flex flex-col gap-4">
          <p className="text-white text-base font-bold">
            Subscribe to newletter
          </p>
          <div className="w-full bg-[#050505] px-5 py-3 rounded-xl flex items-center justify-between">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-[90%] text-sm text-white outline-none border-none placeholder:text-[#6F6F6F]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  onSubmit();
                }
              }}
            />
            <button
              className={`w-6 h-6 rounded-full bg-[#393D41] flex items-center justify-center  transition-all duration-300 ${
                validEmail
                  ? "bg-white hover:scale-110 cursor-pointer"
                  : "bg-[#393D41] cursor-not-allowed"
              }`}
              disabled={!validEmail}
              onClick={onSubmit}
              aria-label="Submit email"
              aria-disabled={!validEmail}
              type="submit"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  if (validEmail) onSubmit();
                }
              }}
            >
              <ArrowRight
                className="w-4 h-4 text-[#050505]"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="w-full flex flex-col md:flex-row  gap-4 md:gap-0 items-center justify-between mt-6">
        <div className="flex items-center gap-1">
          <span className="text-white mr-1">©</span>
          <span className="text-white">2025 Survexa</span>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/privacy-policy" className={LinkClass}>
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className={LinkClass}>
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
