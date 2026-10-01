"use client";

import { useEffect, useState } from "react";
import Logo from "@/components/ui/Logo";
import { CloseIcon, MenuIcon, PhoneIcon } from "@/components/ui/Icons";
import { clinic, navItems } from "@/data/clinic";

/**
 * 상단 헤더
 * - PC: 흰색 로고 줄 + 보라색 메뉴바 (2단 구조)
 * - 모바일: 로고 + 햄버거 버튼 → 오른쪽에서 열리는 메뉴
 */
export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 모바일 메뉴가 열려 있을 때 뒤 화면 스크롤 막기
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-shadow ${scrolled ? "shadow-md" : ""}`}>
      {/* 1단: 로고 줄 */}
      <div className="bg-white">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 lg:h-[68px]">
          <a href="#top" aria-label={`${clinic.name} 홈으로`}>
            <Logo />
          </a>

          <div className="hidden items-center gap-6 lg:flex">
            <a
              href={`tel:${clinic.phone}`}
              className="flex items-center gap-2 text-[15px] font-bold text-plum-800"
            >
              <PhoneIcon className="h-5 w-5" />
              {clinic.phone}
            </a>
            <a
              href="#consult"
              className="rounded-full bg-berry px-5 py-2.5 text-sm font-medium text-white transition hover:brightness-110"
            >
              상담 예약하기
            </a>
          </div>

          <button
            type="button"
            className="-mr-2 p-2 text-plum-800 lg:hidden"
            aria-label="메뉴 열기"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <MenuIcon className="h-7 w-7" />
          </button>
        </div>
      </div>

      {/* 2단: 보라색 메뉴바 (PC 전용) */}
      <nav className="hidden bg-plum-800 lg:block" aria-label="주요 메뉴">
        <ul className="mx-auto flex h-14 max-w-6xl items-center justify-between px-10">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="block px-4 py-2 text-[15px] text-white/90 transition hover:text-white hover:underline hover:underline-offset-8"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* 모바일 메뉴 */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      >
        <div
          className={`ml-auto flex h-full w-[82%] max-w-xs flex-col bg-white transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex h-16 items-center justify-between bg-plum-800 px-5">
            <Logo light />
            <button
              type="button"
              className="-mr-2 p-2 text-white"
              aria-label="메뉴 닫기"
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
            >
              <CloseIcon className="h-6 w-6" />
            </button>
          </div>
          <ul className="flex-1 overflow-y-auto px-5 py-3">
            {navItems.map((item) => (
              <li key={item.href} className="border-b border-line">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  tabIndex={open ? 0 : -1}
                  className="block py-4 text-[16px] font-medium text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="space-y-2.5 p-5">
            <a
              href={`tel:${clinic.phone}`}
              tabIndex={open ? 0 : -1}
              className="flex h-12 items-center justify-center gap-2 rounded-full border border-plum-800 font-bold text-plum-800"
            >
              <PhoneIcon className="h-5 w-5" />
              {clinic.phone}
            </a>
            <a
              href="#consult"
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
              className="flex h-12 items-center justify-center rounded-full bg-berry font-medium text-white"
            >
              상담 예약하기
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
