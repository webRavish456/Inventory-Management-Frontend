"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight } from "lucide-react";
import Menuitems from "./Menuitem";

export default function Sidebar() {
  const pathname = usePathname();
  const [openMenus, setOpenMenus] = useState({}); // Track which menu is open

  const toggleMenu = (label) => {
    setOpenMenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <div className="h-screen w-64 bg-[#0a0939] text-white flex flex-col overflow-y-auto">
      {/* Logo */}
      <div className="flex items-center justify-center py-6 border-b border-gray-700">
        <Image
          src="/company_logo.png"
          alt="Company Logo"
          width={140}
          height={60}
          className="object-contain brightness-200"
          priority
        />
      </div>

      {/* Menu */}
      <ul className="mt-6 space-y-2 px-3">
        {Menuitems.map((item, index) => {
          const active = pathname.startsWith(item.href);
          const isOpen = openMenus[item.label] || false;

          return (
            <li key={index}>
              <div
                className={`flex items-center justify-between gap-3 p-2 rounded-lg cursor-pointer transition
                ${active ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-white/10 hover:text-white"}`}
                onClick={() => (item.item ? toggleMenu(item.label) : null)}
              >
                <div className="flex items-center gap-3">
                  {/* Icon (Image) */}
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                  <span>{item.label}</span>
                </div>

                {/* Arrow if subItems exist */}
                {item.item && (
                  <span>
                    {isOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                  </span>
                )}
              </div>

              {/* Submenu */}
              {item.item && isOpen && (
                <ul className="ml-8 mt-1 space-y-1">
                  {item.item.map((sub, subIndex) => {
                    const subActive = pathname === sub.href;
                    return (
                      <li key={subIndex}>
                        <Link
                          href={sub.href}
                          className={`block text-sm rounded-md px-2 py-1 transition
                            ${subActive ? "bg-blue-600 text-white" : "text-gray-400 hover:text-white hover:bg-white/10"}`}
                        >
                          {sub.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
