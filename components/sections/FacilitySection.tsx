"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/ui/Icons";
import { clinic, facilityImages } from "@/data/clinic";

/** 시설 소개 - 보라색 배경 + 왼쪽 사진 슬라이더 + 오른쪽 문구 · 화살표 */
export default function FacilitySection() {
  const [index, setIndex] = useState(0);
  const touchX = useRef<number | null>(null);
  const total = facilityImages.length;

  const go = (dir: number) => setIndex((i) => (i + dir + total) % total);

  return (
    <section className="bg-plum-800 text-white" aria-roledescription="carousel" aria-label="시설 소개">
      <div className="grid md:grid-cols-[3fr_2fr]">
        {/* 슬라이더 */}
        <div
          className="relative aspect-[3/2] overflow-hidden md:aspect-auto md:min-h-[460px] lg:min-h-[520px]"
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const diff = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(diff) > 40) go(diff < 0 ? 1 : -1);
            touchX.current = null;
          }}
        >
          <div
            className="flex h-full transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {facilityImages.map((img, i) => (
              <div key={img.src} className="relative h-full w-full shrink-0" aria-hidden={i !== index}>
                <Image src={img.src} alt={img.alt} fill sizes="(min-width: 768px) 60vw, 100vw" className="object-cover" />
              </div>
            ))}
          </div>
          <p className="absolute bottom-4 left-4 rounded-full bg-black/40 px-3 py-1 text-[12px]">
            {facilityImages[index].alt.replace(`${clinic.name} `, "")}
          </p>
        </div>

        {/* 문구 + 컨트롤 */}
        <div className="flex flex-col justify-center px-6 py-12 md:px-12 lg:px-16">
          <p className="text-[12px] tracking-[0.3em] text-plum-300">RAONWELL FACILITIES</p>
          <h2 className="mt-4 text-[26px] font-bold leading-snug md:text-[32px]">
            {clinic.name}
            <br />
            시설 안내
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-white/70">
            편안한 분위기에서 상담받으실 수 있도록
            <br />
            공간 하나하나를 정성껏 준비했습니다.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="이전 사진"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/50 transition hover:bg-white hover:text-plum-800"
            >
              <ArrowLeftIcon className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="다음 사진"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/50 transition hover:bg-white hover:text-plum-800"
            >
              <ArrowRightIcon className="h-5 w-5" />
            </button>
            <span className="ml-3 text-[14px] tabular-nums text-white/70" aria-live="polite">
              <b className="text-white">{String(index + 1).padStart(2, "0")}</b> / {String(total).padStart(2, "0")}
            </span>
          </div>

          <div className="mt-6 flex gap-2">
            {facilityImages.map((img, i) => (
              <button
                key={img.src}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`${i + 1}번째 사진 보기`}
                className={`h-1.5 rounded-full transition-all ${i === index ? "w-8 bg-white" : "w-3 bg-white/30"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
