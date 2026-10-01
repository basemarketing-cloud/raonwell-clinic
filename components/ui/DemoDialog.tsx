"use client";

import { useEffect, useRef, useState } from "react";
import { CloseIcon } from "./Icons";

const EVENT = "raonwell:demo-dialog";

type Detail = { title: string; message: string };

/**
 * 어디서든 안내 팝업을 띄우는 함수.
 * 예) showDemoDialog("상담 신청 완료", "가상 사이트이므로 실제로 접수되지 않습니다.")
 */
export function showDemoDialog(title: string, message: string) {
  window.dispatchEvent(new CustomEvent<Detail>(EVENT, { detail: { title, message } }));
}

/** 가상 사이트 안내 팝업 (카카오상담, 상담 신청 등에서 사용) */
export default function DemoDialog() {
  const [detail, setDetail] = useState<Detail | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onOpen = (e: Event) => setDetail((e as CustomEvent<Detail>).detail);
    window.addEventListener(EVENT, onOpen);
    return () => window.removeEventListener(EVENT, onOpen);
  }, []);

  useEffect(() => {
    if (!detail) return;
    buttonRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setDetail(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [detail]);

  if (!detail) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-5"
      onClick={() => setDetail(null)}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="demo-dialog-title"
        className="relative w-full max-w-sm rounded-3xl bg-white px-7 pb-7 pt-9 text-center shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="닫기"
          onClick={() => setDetail(null)}
          className="absolute right-4 top-4 rounded-full p-1.5 text-mute hover:bg-paper"
        >
          <CloseIcon className="h-5 w-5" />
        </button>
        <h3 id="demo-dialog-title" className="text-xl font-bold text-plum-800">
          {detail.title}
        </h3>
        <p className="mt-3 whitespace-pre-line text-[15px] leading-relaxed text-mute">{detail.message}</p>
        <button
          ref={buttonRef}
          type="button"
          onClick={() => setDetail(null)}
          className="mt-7 h-12 w-full rounded-full bg-plum-800 font-medium text-white transition hover:bg-plum-700"
        >
          확인
        </button>
      </div>
    </div>
  );
}
