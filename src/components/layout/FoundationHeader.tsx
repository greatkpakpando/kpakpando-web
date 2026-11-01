"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navigation } from "@/data/foundation";
export function FoundationHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const button = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    function close(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        button.current?.focus();
      }
    }
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, []);
  return (
    <>
      <div className="topbar">
        <div className="container">
          <span>Empowering lives. Nurturing possibilities.</span>
          <span className="topbar-location">
            Rooted in compassion. Serving communities in Nigeria.
          </span>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <Link
            className="brand"
            href="/"
            onClick={() => setOpen(false)}
            aria-label="The Great Kpakpando and Elizabeth Foundation home"
          >
            <Image
              src="/assets/logo.jpeg"
              width={66}
              height={68}
              alt=""
              preload
            />
            <span>
              <strong>
                Great Kpakpando
                <span className="brand-second">& Elizabeth Foundation</span>
              </strong>
              <small>COMPASSION IN ACTION</small>
            </span>
          </Link>
          <button
            ref={button}
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="main-navigation"
            onClick={() => setOpen(!open)}
          >
            <span>{open ? "Close" : "Menu"}</span>
            <span aria-hidden="true">{open ? "×" : "☰"}</span>
          </button>
          <nav
            id="main-navigation"
            aria-label="Main navigation"
            className={open ? "main-nav is-open" : "main-nav"}
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="button button-red nav-contact"
              aria-current={pathname === "/contact" ? "page" : undefined}
            >
              Get in touch <span aria-hidden="true">↗</span>
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
