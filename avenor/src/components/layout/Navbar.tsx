
"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import {
  useEffect,
  useState,
} from "react";

const links = [
  {
    label: "Properties",
    href: "/properties",
  },
  {
    label: "Journal",
    href: "/journal",
  },
  {
    label: "About",
    href: "/about",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll,
      );
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${
          menuOpen
            ? "bg-[#f4f1eb]"
            : scrolled
              ? "border-b border-black/10 bg-[#f4f1eb]/90 backdrop-blur-xl"
              : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-24 max-w-[1600px] items-center justify-between px-6 sm:px-8 md:px-10 lg:px-14">
          <Link
            href="/"
            onClick={closeMenu}
            className={`relative z-[110] text-[21px] font-medium tracking-[0.18em] transition-colors duration-500 sm:text-[22px] ${
              menuOpen || scrolled
                ? "text-[#1c1b19]"
                : "text-white"
            }`}
          >
            AVENOR
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-10 md:flex">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-[10px] uppercase tracking-[0.2em] transition-opacity duration-300 hover:opacity-55 lg:text-[11px] ${
                  scrolled
                    ? "text-[#1c1b19]"
                    : "text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/inquiry"
              className={`group flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] lg:text-[11px] ${
                scrolled
                  ? "text-[#1c1b19]"
                  : "text-white"
              }`}
            >
              Inquire

              <ArrowUpRight
                size={14}
                strokeWidth={1.4}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </nav>

          {/* Mobile button */}
          <button
            type="button"
            aria-label={
              menuOpen
                ? "Close menu"
                : "Open menu"
            }
            aria-expanded={menuOpen}
            onClick={() =>
              setMenuOpen((current) => !current)
            }
            className={`relative z-[110] flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 md:hidden ${
              menuOpen
                ? "border-[#1c1b19]/15 bg-white text-[#1c1b19]"
                : scrolled
                  ? "border-[#1c1b19]/10 bg-white/50 text-[#1c1b19]"
                  : "border-white/25 bg-white/5 text-white"
            }`}
          >
            <AnimatePresence
              mode="wait"
              initial={false}
            >
              {menuOpen ? (
                <motion.span
                  key="close"
                  initial={{
                    opacity: 0,
                    rotate: -30,
                    scale: 0.85,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: 30,
                    scale: 0.85,
                  }}
                  transition={{
                    duration: 0.2,
                    ease,
                  }}
                  className="flex"
                >
                  <X
                    size={18}
                    strokeWidth={1.3}
                  />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{
                    opacity: 0,
                    rotate: 30,
                    scale: 0.85,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: -30,
                    scale: 0.85,
                  }}
                  transition={{
                    duration: 0.2,
                    ease,
                  }}
                  className="flex"
                >
                  <Menu
                    size={20}
                    strokeWidth={1.3}
                  />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.button
              type="button"
              aria-label="Close menu"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
                ease,
              }}
              onClick={closeMenu}
              className="fixed inset-0 z-[80] bg-black/30 backdrop-blur-[3px] md:hidden"
            />

            {/* Menu panel */}
            <motion.aside
              initial={{
                x: "100%",
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: "100%",
              }}
              transition={{
                duration: 0.55,
                ease,
              }}
              className="fixed right-0 top-0 z-[90] flex h-[100dvh] w-[min(88vw,420px)] flex-col bg-[#f4f1eb] shadow-[-20px_0_60px_rgba(28,27,25,0.12)] md:hidden"
            >
              <div className="flex h-full flex-col px-6 pb-7 pt-28 sm:px-8">
                {/* Panel header */}
                <div className="flex items-center justify-between border-b border-[#1c1b19]/10 pb-5">
                  <div className="flex items-center gap-3">
                    <span className="h-px w-7 bg-[#a58b67]" />

                    <span className="text-[7px] uppercase tracking-[0.34em] text-[#8b867d]">
                      Navigation
                    </span>
                  </div>

                  <span className="text-[7px] uppercase tracking-[0.26em] text-[#b0aba2]">
                    Avenor
                  </span>
                </div>

                {/* Links */}
                <nav className="mt-8">
                  <div className="border-t border-[#1c1b19]/10">
                    {links.map((link, index) => (
                      <motion.div
                        key={link.label}
                        initial={{
                          opacity: 0,
                          x: 18,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        exit={{
                          opacity: 0,
                          x: 18,
                        }}
                        transition={{
                          duration: 0.4,
                          delay:
                            0.08 +
                            index * 0.06,
                          ease,
                        }}
                        className="border-b border-[#1c1b19]/10"
                      >
                        <Link
                          href={link.href}
                          onClick={closeMenu}
                          className="group flex min-h-[72px] items-center justify-between"
                        >
                          <div className="flex items-center gap-4">
                            <span className="text-[7px] tracking-[0.28em] text-[#a58b67]">
                              0{index + 1}
                            </span>

                            <span className="text-[17px] font-medium tracking-[-0.01em] text-[#1c1b19] transition-transform duration-300 group-hover:translate-x-1">
                              {link.label}
                            </span>
                          </div>

                          <ArrowUpRight
                            size={17}
                            strokeWidth={1.1}
                            className="text-[#8b867d] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#1c1b19]"
                          />
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </nav>

                {/* Inquiry */}
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 18,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: 18,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: 0.3,
                    ease,
                  }}
                  className="mt-7"
                >
                  <Link
                    href="/inquiry"
                    onClick={closeMenu}
                    className="group block border border-[#1c1b19]/12 bg-[#1c1b19] p-5 text-[#f4f1eb] transition-colors duration-300 hover:bg-[#846d4e]"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="block text-[7px] uppercase tracking-[0.32em] text-[#a58b67]">
                          Private Office
                        </span>

                        <span className="mt-3 block text-[18px] font-medium tracking-[-0.01em]">
                          Begin an inquiry
                        </span>
                      </div>

                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-colors duration-300 group-hover:bg-white group-hover:text-[#1c1b19]">
                        <ArrowUpRight
                          size={16}
                          strokeWidth={1.1}
                        />
                      </span>
                    </div>
                  </Link>
                </motion.div>

                {/* Bottom */}
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: 0.38,
                    ease,
                  }}
                  className="mt-auto border-t border-[#1c1b19]/10 pt-5"
                >
                  <div className="flex items-end justify-between gap-6">
                    <div>
                      <span className="block text-[7px] uppercase tracking-[0.3em] text-[#8b867d]">
                        Private Residences & Estates
                      </span>

                      <span className="mt-2 block text-[8px] uppercase tracking-[0.2em] text-[#3e3a34]">
                        Dhaka
                      </span>
                    </div>

                    <span className="text-[7px] uppercase tracking-[0.28em] text-[#8b867d]">
                      By appointment
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
