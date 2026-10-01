import { clinic } from "@/data/clinic";

/** 가상 로고 (잎 모양 심볼 + 병원명). 실제 로고 이미지가 생기면 이 파일만 교체하세요. */
export default function Logo({ light = false }: { light?: boolean }) {
  const main = light ? "text-white" : "text-plum-800";
  const sub = light ? "text-white/60" : "text-mute";
  return (
    <span className="flex items-center gap-2.5">
      <svg viewBox="0 0 40 40" className={`h-9 w-9 shrink-0 ${main}`} aria-hidden>
        <circle cx="20" cy="20" r="19" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M20 8.5c-6 4-8.5 8.8-8.5 13.2a8.5 8.5 0 0 0 17 0c0-4.4-2.5-9.2-8.5-13.2z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path d="M20 16.5v15.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className={`text-[19px] font-bold tracking-tight ${main}`}>{clinic.name}</span>
        <span className={`mt-1 text-[10px] font-medium tracking-[0.18em] ${sub}`}>{clinic.nameEn}</span>
      </span>
    </span>
  );
}
