import Image from "next/image";
import { hero } from "@/data/clinic";

/** 첫 화면 - 배경 사진 + 어두운 보라 오버레이 + 가운데 정렬 제목 */
export default function Hero() {
  return (
    <section
      id="top"
      className="relative mt-16 flex min-h-[540px] items-center justify-center overflow-hidden lg:mt-[124px] lg:min-h-[640px]"
    >
      <Image
        src="/images/hero-clinic.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-plum-950/70 via-plum-900/55 to-plum-950/75" />

      <div className="relative px-5 py-20 text-center text-white">
        <p className="animate-[fadeUp_0.8s_ease_both] text-[13px] tracking-[0.3em] text-white/80 md:text-base">
          {hero.eyebrow}
        </p>
        <span className="mx-auto mt-5 block h-8 w-px bg-white/60" aria-hidden />
        <h1 className="mt-6 animate-[fadeUp_0.8s_0.15s_ease_both] text-[26px] font-bold leading-[1.4] tracking-tight min-[400px]:text-[28px] sm:text-[36px] md:text-[44px] lg:text-5xl">
          {hero.title[0]}
          <br />
          {hero.title[1]}
        </h1>
        <p className="mx-auto mt-6 max-w-lg animate-[fadeUp_0.8s_0.3s_ease_both] whitespace-pre-line text-[15px] leading-relaxed text-white/80 md:text-lg">
          {hero.description}
        </p>
        <div className="mt-10 flex animate-[fadeUp_0.8s_0.45s_ease_both] flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#consult"
            className="flex h-14 w-64 items-center justify-center rounded-full bg-berry text-[16px] font-medium shadow-lg shadow-black/20 transition hover:brightness-110 sm:w-52"
          >
            상담 예약하기
          </a>
          <a
            href="#program"
            className="flex h-14 w-64 items-center justify-center rounded-full border border-white/70 text-[16px] font-medium transition hover:bg-white hover:text-plum-800 sm:w-52"
          >
            프로그램 살펴보기
          </a>
        </div>
      </div>
    </section>
  );
}
