"use client";

import { useEffect, useState } from "react";
import { ArrowUpIcon, CalendarIcon, ChatIcon, MapPinIcon, UserIcon } from "@/components/ui/Icons";
import { showDemoDialog } from "@/components/ui/DemoDialog";

const openKakao = () =>
  showDemoDialog(
    "카카오톡 상담 안내",
    "포트폴리오용 가상 병원으로\n실제 카카오톡 채널은 연결되어 있지 않습니다.",
  );

const items = [
  { label: "진료예약", href: "#consult", Icon: CalendarIcon },
  { label: "의료진소개", href: "#doctor", Icon: UserIcon },
  { label: "오시는길", href: "#location", Icon: MapPinIcon },
  { label: "카카오상담", href: null, Icon: ChatIcon },
];

/**
 * 빠른 메뉴
 * - PC: 화면 오른쪽에 떠 있는 세로 메뉴 + 예약하기 + TOP
 * - 모바일: 화면 하단에 고정된 4칸 메뉴 바
 */
export default function QuickMenu() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {/* PC 오른쪽 퀵메뉴 */}
      <aside
        aria-label="빠른 메뉴"
        className="fixed right-5 top-1/2 z-40 hidden w-[84px] -translate-y-1/2 overflow-hidden rounded-2xl bg-white shadow-[0_6px_30px_rgba(75,33,84,0.18)] lg:block"
      >
        <ul>
          {items.map(({ label, href, Icon }) => {
            const inner = (
              <>
                <Icon className="h-6 w-6 text-berry" />
                <span className="mt-1.5 text-[11px] text-ink">{label}</span>
              </>
            );
            const cls =
              "flex w-full flex-col items-center border-b border-line py-3.5 transition hover:bg-plum-50";
            return (
              <li key={label}>
                {href ? (
                  <a href={href} className={cls}>
                    {inner}
                  </a>
                ) : (
                  <button type="button" onClick={openKakao} className={cls}>
                    {inner}
                  </button>
                )}
              </li>
            );
          })}
        </ul>
        <a
          href="#consult"
          className="block py-3.5 text-center text-[12px] font-bold text-plum-800 transition hover:bg-plum-50"
        >
          예약하기
        </a>
        <button
          type="button"
          onClick={scrollTop}
          className="flex w-full flex-col items-center bg-plum-800 py-2.5 text-[12px] font-bold text-white"
        >
          TOP
          <ArrowUpIcon className="h-4 w-4" />
        </button>
      </aside>

      {/* 모바일 TOP 버튼 */}
      <button
        type="button"
        onClick={scrollTop}
        aria-label="맨 위로"
        className={`fixed bottom-20 right-4 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-plum-800 text-white shadow-lg transition lg:hidden ${
          showTop ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <ArrowUpIcon className="h-5 w-5" />
      </button>

      {/* 모바일 하단 고정 바 */}
      <nav
        aria-label="빠른 메뉴"
        className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white pb-[env(safe-area-inset-bottom)] lg:hidden"
      >
        <ul className="grid h-16 grid-cols-4">
          {items.map(({ label, href, Icon }) => {
            const inner = (
              <>
                <Icon className="h-6 w-6 text-berry" />
                <span className="mt-1 text-[11px] text-ink">{label}</span>
              </>
            );
            const cls = "flex h-full w-full flex-col items-center justify-center active:bg-plum-50";
            return (
              <li key={label}>
                {href ? (
                  <a href={href} className={cls}>
                    {inner}
                  </a>
                ) : (
                  <button type="button" onClick={openKakao} className={cls}>
                    {inner}
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
