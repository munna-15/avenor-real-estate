"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { createPortal } from "react-dom";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const locations = [
  "Gulshan",
  "Banani",
  "Baridhara",
  "Bashundhara",
  "Dhanmondi",
];

const residences = [
  "The House of Light",
  "The Quiet Address",
  "A House in Nature",
  "The Evening Villa",
  "The Garden House",
  "The Courtyard House",
];

const clientImage =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=3200&q=95";

const ease = [0.22, 1, 0.36, 1] as const;

type SelectFieldProps = {
  label: string;
  value: string;
  placeholder: string;
  options: readonly string[];
  onChange: (value: string) => void;
};

type DropdownPosition = {
  top: number;
  left: number;
  width: number;
  openAbove: boolean;
};

function SelectField({
  label,
  value,
  placeholder,
  options,
  onChange,
}: SelectFieldProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const [position, setPosition] = useState<DropdownPosition>({
    top: 0,
    left: 0,
    width: 0,
    openAbove: false,
  });

  const ref = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getEstimatedMenuHeight = () => {
    const headerHeight = 44;
    const padding = 16;
    const optionHeight = 48;
    const maxOptionsHeight = 240;

    return Math.min(
      headerHeight +
        Math.min(options.length * optionHeight, maxOptionsHeight) +
        padding,
      320,
    );
  };

  const updatePosition = () => {
    if (!buttonRef.current) {
      return;
    }

    const rect = buttonRef.current.getBoundingClientRect();

    const menuHeight =
      menuRef.current?.getBoundingClientRect().height ??
      getEstimatedMenuHeight();

    const gap = 8;
    const viewportPadding = 10;

    const spaceBelow = window.innerHeight - rect.bottom;

    const spaceAbove = rect.top;

    const shouldOpenAbove =
      spaceBelow < menuHeight + gap && spaceAbove > spaceBelow;

    const rawLeft = rect.left;

    const maxLeft = window.innerWidth - rect.width - viewportPadding;

    const left = Math.max(viewportPadding, Math.min(rawLeft, maxLeft));

    let top = shouldOpenAbove ? rect.top - menuHeight - gap : rect.bottom + gap;

    if (top + menuHeight > window.innerHeight - viewportPadding) {
      top = window.innerHeight - menuHeight - viewportPadding;
    }

    if (top < viewportPadding) {
      top = viewportPadding;
    }

    setPosition({
      top,
      left,
      width: rect.width,
      openAbove: shouldOpenAbove,
    });
  };

  const openDropdown = () => {
    if (!buttonRef.current) {
      return;
    }

    const rect = buttonRef.current.getBoundingClientRect();

    const estimatedHeight = getEstimatedMenuHeight();

    const gap = 8;

    const spaceBelow = window.innerHeight - rect.bottom;

    const spaceAbove = rect.top;

    const shouldOpenAbove =
      spaceBelow < estimatedHeight + gap && spaceAbove > spaceBelow;

    const viewportPadding = 10;

    const maxLeft = window.innerWidth - rect.width - viewportPadding;

    const left = Math.max(viewportPadding, Math.min(rect.left, maxLeft));

    const top = shouldOpenAbove
      ? Math.max(viewportPadding, rect.top - estimatedHeight - gap)
      : Math.min(
          window.innerHeight - estimatedHeight - viewportPadding,
          rect.bottom + gap,
        );

    setPosition({
      top,
      left,
      width: rect.width,
      openAbove: shouldOpenAbove,
    });

    setOpen(true);
  };

  useLayoutEffect(() => {
    if (!open) {
      return;
    }

    const update = () => {
      updatePosition();
    };

    requestAnimationFrame(update);

    window.addEventListener("resize", update);

    window.addEventListener("scroll", update, true);

    return () => {
      window.removeEventListener("resize", update);

      window.removeEventListener("scroll", update, true);
    };
  }, [open, options.length]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      const clickedButton = ref.current?.contains(target);

      const clickedMenu = menuRef.current?.contains(target);

      if (!clickedButton && !clickedMenu) {
        setOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutside);

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutside);

      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  const dropdown = (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={menuRef}
          initial={{
            opacity: 0,
            scale: 0.985,
            y: position.openAbove ? 5 : -5,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.985,
            y: position.openAbove ? 5 : -5,
          }}
          transition={{
            duration: 0.18,
            ease,
          }}
          style={{
            position: "fixed",
            top: position.top,
            left: position.left,
            width: position.width,
            zIndex: 99999,
            transformOrigin: position.openAbove
              ? "bottom center"
              : "top center",
          }}
          className="overflow-hidden border border-[#1c1b19]/10 bg-white shadow-[0_24px_70px_rgba(28,27,25,0.16)]"
        >
          <div className="flex items-center justify-between border-b border-[#1c1b19]/8 px-4 py-3.5 sm:px-5">
            <span className="text-[7px] uppercase tracking-[0.3em] text-[#a58b67]">
              Select one
            </span>

            <span className="text-[7px] uppercase tracking-[0.28em] text-[#b0aba2]">
              {options.length} options
            </span>
          </div>

          <div className="max-h-60 overflow-y-auto p-2">
            {options.map((option) => {
              const selected = value === option;

              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => {
                    onChange(option);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center justify-between px-3 py-3.5 text-left transition-colors duration-200 sm:px-4 ${
                    selected
                      ? "bg-[#f4f1eb] text-[#1c1b19]"
                      : "text-[#5f5b54] hover:bg-[#faf9f6] hover:text-[#1c1b19]"
                  }`}
                >
                  <span className="text-[12px] sm:text-[13px]">{option}</span>

                  {selected && (
                    <Check
                      size={15}
                      strokeWidth={1.5}
                      className="text-[#a58b67]"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <div ref={ref} className="relative">
      <span className="mb-2.5 block text-[8px] uppercase tracking-[0.3em] text-[#8b867d]">
        {label}
      </span>

      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => {
          if (open) {
            setOpen(false);
          } else {
            openDropdown();
          }
        }}
        className={`flex h-[68px] w-full items-center justify-between border px-4 text-left transition-all duration-300 sm:px-5 ${
          open
            ? "border-[#1c1b19]/40 bg-white"
            : "border-[#1c1b19]/10 bg-[#f4f1eb] hover:border-[#1c1b19]/25"
        }`}
      >
        <span
          className={`text-[13px] sm:text-[14px] ${
            value ? "text-[#1c1b19]" : "text-[#8f8a81]"
          }`}
        >
          {value || placeholder}
        </span>

        <motion.span
          animate={{
            rotate: open ? 180 : 0,
          }}
          transition={{
            duration: 0.25,
            ease,
          }}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#1c1b19]/10"
        >
          <ArrowDown size={13} strokeWidth={1} />
        </motion.span>
      </button>

      {mounted && createPortal(dropdown, document.body)}
    </div>
  );
}

export default function InquiryPage() {
  const shouldReduceMotion = useReducedMotion();

  const [location, setLocation] = useState("");

  const [residence, setResidence] = useState("");

  return (
    <main className="min-h-screen bg-[#f4f1eb] text-[#1c1b19]">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 md:px-10 lg:px-14">
        <header className="flex h-24 items-center justify-between border-b border-[#1c1b19]/12">
          <Link href="/" className="text-[21px] font-medium tracking-[0.18em]">
            AVENOR
          </Link>

          <Link
            href="/"
            className="group flex items-center gap-2 text-[8px] uppercase tracking-[0.3em] text-[#6b665e] transition-colors duration-300 hover:text-[#1c1b19]"
          >
            <ArrowLeft
              size={14}
              strokeWidth={1}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Return home
          </Link>
        </header>

        <section className="py-16 sm:py-20 md:py-28 lg:py-32">
          <motion.div
            initial={
              shouldReduceMotion
                ? { opacity: 0 }
                : {
                    opacity: 0,
                    y: 24,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              ease,
            }}
            className="mx-auto max-w-[1220px]"
          >
            <div className="border-b border-[#1c1b19]/12 pb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="h-px w-9 bg-[#a58b67]" />

                  <span className="text-[8px] uppercase tracking-[0.34em] text-[#8b867d]">
                    Private Inquiry
                  </span>
                </div>

                <span className="text-[8px] tracking-[0.3em] text-[#8b867d]">
                  AVENOR / 01
                </span>
              </div>
            </div>

            <div className="grid gap-16 py-14 md:py-20 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24">
              <div className="lg:pt-4">
                <p className="text-[8px] uppercase tracking-[0.34em] text-[#a58b67]">
                  A private conversation
                </p>

                <h1 className="font-display mt-8 max-w-[650px] text-[clamp(4.5rem,6.7vw,7.8rem)] font-medium leading-[0.74] tracking-[-0.07em]">
                  Tell us
                  <br />
                  what you seek.
                </h1>

                <p className="mt-10 max-w-[410px] text-[12px] leading-[1.95] text-[#6b665e]">
                  Whether you have a particular residence in mind or are
                  beginning your search, share a few details and our private
                  office will be in touch.
                </p>

                <div className="mt-14 border-t border-[#1c1b19]/12 pt-6">
                  <div className="flex items-center gap-10">
                    <div>
                      <span className="block text-[7px] uppercase tracking-[0.3em] text-[#8b867d]">
                        Office
                      </span>

                      <span className="mt-2.5 block text-[10px] uppercase tracking-[0.18em] text-[#3e3a34]">
                        Dhaka
                      </span>
                    </div>

                    <div className="h-9 w-px bg-[#1c1b19]/12" />

                    <div>
                      <span className="block text-[7px] uppercase tracking-[0.3em] text-[#8b867d]">
                        Access
                      </span>

                      <span className="mt-2.5 block text-[10px] uppercase tracking-[0.18em] text-[#3e3a34]">
                        By appointment
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <form className="border border-[#1c1b19]/10 bg-[#faf9f6] p-6 sm:p-9 md:p-11 lg:p-12">
                <div className="mb-10 flex items-center justify-between border-b border-[#1c1b19]/10 pb-6">
                  <span className="text-[8px] uppercase tracking-[0.32em] text-[#8b867d]">
                    Your details
                  </span>

                  <span className="text-[7px] uppercase tracking-[0.3em] text-[#a58b67]">
                    Confidential
                  </span>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2.5 block text-[8px] uppercase tracking-[0.3em] text-[#8b867d]">
                      01 / Name
                    </span>

                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      className="h-[68px] w-full border border-[#1c1b19]/10 bg-[#f4f1eb] px-4 text-[13px] text-[#1c1b19] outline-none transition-all duration-300 placeholder:text-[#9b968d] focus:border-[#1c1b19]/35 focus:bg-white sm:text-[14px]"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2.5 block text-[8px] uppercase tracking-[0.3em] text-[#8b867d]">
                      02 / Email
                    </span>

                    <input
                      type="email"
                      name="email"
                      placeholder="Email address"
                      className="h-[68px] w-full border border-[#1c1b19]/10 bg-[#f4f1eb] px-4 text-[13px] text-[#1c1b19] outline-none transition-all duration-300 placeholder:text-[#9b968d] focus:border-[#1c1b19]/35 focus:bg-white sm:text-[14px]"
                    />
                  </label>
                </div>

                <div className="mt-5">
                  <SelectField
                    label="03 / Preferred location"
                    value={location}
                    placeholder="Choose a location"
                    options={locations}
                    onChange={setLocation}
                  />
                </div>

                <div className="mt-5">
                  <SelectField
                    label="04 / Residence of interest"
                    value={residence}
                    placeholder="Choose a residence"
                    options={residences}
                    onChange={setResidence}
                  />
                </div>

                <label className="mt-5 block">
                  <span className="mb-2.5 block text-[8px] uppercase tracking-[0.3em] text-[#8b867d]">
                    05 / Your message
                  </span>

                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell us what you are looking for"
                    className="w-full resize-none border border-[#1c1b19]/10 bg-[#f4f1eb] px-4 py-4 text-[13px] leading-7 text-[#1c1b19] outline-none transition-all duration-300 placeholder:text-[#9b968d] focus:border-[#1c1b19]/35 focus:bg-white sm:text-[14px]"
                  />
                </label>

                <button
                  type="submit"
                  className="group mt-6 flex h-[68px] w-full items-center justify-between bg-[#1c1b19] px-5 text-[9px] uppercase tracking-[0.3em] text-[#f4f1eb] transition-all duration-500 hover:bg-[#846d4e] sm:px-6"
                >
                  <span>Begin private conversation</span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20">
                    <ArrowUpRight
                      size={15}
                      strokeWidth={1}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                </button>

                <p className="mt-5 text-[8px] leading-5 text-[#8b867d]">
                  Your information is treated with discretion and used only to
                  respond to your enquiry.
                </p>
              </form>
            </div>
          </motion.div>
        </section>

        <section className="border-t border-[#1c1b19]/12 py-24 sm:py-28 md:py-36 lg:py-40">
          <div className="mx-auto max-w-[1220px]">
            <div className="grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 xl:gap-32">
              <motion.div
                initial={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : {
                        opacity: 0,
                        x: -20,
                      }
                }
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.95,
                  ease,
                }}
                className="relative"
              >
                <div className="relative aspect-[0.9/1] overflow-hidden bg-[#ddd8cf] sm:aspect-[0.95/1]">
                  <Image
                    src={clientImage}
                    alt="Private residence exterior"
                    fill
                    quality={95}
                    sizes="(max-width: 1024px) 100vw, 38vw"
                    className="object-cover transition-transform duration-[1600ms] hover:scale-[1.025]"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : {
                        opacity: 0,
                        y: 22,
                      }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.9,
                  delay: 0.08,
                  ease,
                }}
              >
                <div className="flex items-center gap-3">
                  <span className="h-px w-9 bg-[#a58b67]" />

                  <span className="text-[8px] uppercase tracking-[0.34em] text-[#8b867d]">
                    For our clients
                  </span>
                </div>

                <h2 className="font-display mt-8 max-w-[850px] text-[clamp(4.2rem,6.5vw,7.6rem)] font-medium leading-[0.75] tracking-[-0.07em]">
                  A considered
                  <br />
                  search begins here.
                </h2>

                <div className="mt-10 max-w-[570px]">
                  <p className="text-[12px] leading-[2] text-[#4f4b45] sm:text-[13px]">
                    Finding the right home is personal. We take the time to
                    understand the qualities that matter to you — from location
                    and privacy to atmosphere, architecture and everyday life.
                  </p>

                  <p className="mt-6 text-[11px] leading-[2] text-[#777168] sm:text-[12px]">
                    Once we understand your search, we introduce relevant
                    residences from the collection and arrange a private viewing
                    at a time that suits you.
                  </p>
                </div>

                <div className="mt-12 border-t border-[#1c1b19]/12 pt-6">
                  <div className="grid grid-cols-3 gap-5">
                    <div>
                      <span className="block text-[7px] uppercase tracking-[0.3em] text-[#8b867d]">
                        Office
                      </span>

                      <span className="mt-2.5 block text-[9px] uppercase tracking-[0.18em] text-[#3e3a34]">
                        Dhaka
                      </span>
                    </div>

                    <div>
                      <span className="block text-[7px] uppercase tracking-[0.3em] text-[#8b867d]">
                        Viewings
                      </span>

                      <span className="mt-2.5 block text-[9px] uppercase tracking-[0.18em] text-[#3e3a34]">
                        By appointment
                      </span>
                    </div>

                    <div>
                      <span className="block text-[7px] uppercase tracking-[0.3em] text-[#8b867d]">
                        Approach
                      </span>

                      <span className="mt-2.5 block text-[9px] uppercase tracking-[0.18em] text-[#3e3a34]">
                        Private & personal
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-12 flex items-center gap-3">
                  <span className="h-px w-12 bg-[#1c1b19]/15" />

                  <span className="text-[7px] uppercase tracking-[0.32em] text-[#8b867d]">
                    Your search, considered properly.
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <div className="flex flex-col gap-4 border-t border-[#1c1b19]/12 py-5 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-[7px] uppercase tracking-[0.32em] text-[#8b867d]">
            Private Residences & Estates
          </span>

          <span className="text-[7px] uppercase tracking-[0.32em] text-[#8b867d]">
            AVENOR · Dhaka
          </span>
        </div>
      </div>
    </main>
  );
}
