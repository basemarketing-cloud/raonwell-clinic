"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import { PhoneIcon } from "@/components/ui/Icons";
import { showDemoDialog } from "@/components/ui/DemoDialog";
import { clinic, consultPrograms } from "@/data/clinic";

type Errors = Partial<Record<"name" | "phone" | "agree", string>>;

const inputCls =
  "h-12 w-full rounded-xl border border-line bg-white px-4 text-[15px] text-ink outline-none transition placeholder:text-mute/60 focus:border-plum-500 focus:ring-2 focus:ring-plum-100";

/**
 * 상담 신청 영역
 * ※ 가상 사이트이므로 입력 내용은 어디에도 저장·전송되지 않습니다.
 */
export default function ConsultationSection() {
  const [errors, setErrors] = useState<Errors>({});

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").replace(/[^0-9]/g, "");

    const next: Errors = {};
    if (!name) next.name = "이름을 입력해 주세요.";
    if (!/^01[0-9]{8,9}$/.test(phone)) next.phone = "휴대폰 번호를 정확히 입력해 주세요.";
    if (!data.get("agree")) next.agree = "개인정보 수집 및 이용에 동의해 주세요.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    form.reset();
    showDemoDialog(
      "상담 신청이 완료되었습니다",
      "실제 병원이라면 확인 후 연락을 드리는 단계입니다.\n\n※ 포트폴리오용 가상 사이트로,\n입력하신 내용은 저장되거나 전송되지 않습니다.",
    );
  }

  return (
    <section id="consult" className="bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-5xl gap-10 px-5 lg:grid-cols-[5fr_6fr] lg:gap-14">
        {/* 안내 문구 */}
        <Reveal className="lg:pt-4">
          <p className="text-[13px] font-medium tracking-[0.3em] text-plum-500 md:text-sm">CONSULTATION</p>
          <h2 className="mt-3 text-[26px] font-bold leading-snug tracking-tight text-plum-800 md:text-[34px]">
            상담 예약
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-mute md:text-base">
            궁금한 점을 남겨주시면 확인 후 연락드리겠습니다.
            <br />
            전화로도 편하게 문의하실 수 있습니다.
          </p>

          <a
            href={`tel:${clinic.phone}`}
            className="mt-8 flex items-center gap-4 rounded-2xl bg-plum-800 px-6 py-5 text-white transition hover:bg-plum-700"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
              <PhoneIcon className="h-6 w-6" />
            </span>
            <span>
              <span className="block text-[13px] text-white/70">전화 상담 · 예약</span>
              <span className="block text-2xl font-bold tracking-wide">{clinic.phone}</span>
            </span>
          </a>
          <p className="mt-4 text-[13px] leading-relaxed text-mute">
            {clinic.hoursSummary[0]}
            <br />
            {clinic.hoursSummary[1]}
          </p>
        </Reveal>

        {/* 상담 신청 폼 */}
        <Reveal delay={150}>
          <form
            noValidate
            onSubmit={handleSubmit}
            className="rounded-3xl bg-paper p-6 md:p-9"
            aria-label="상담 신청서"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-[14px] font-medium text-ink">
                  이름 <span className="text-berry">*</span>
                </span>
                <input name="name" type="text" autoComplete="name" placeholder="홍길동" className={inputCls} />
                {errors.name && <span className="mt-1.5 block text-[13px] text-berry">{errors.name}</span>}
              </label>
              <label className="block">
                <span className="mb-2 block text-[14px] font-medium text-ink">
                  연락처 <span className="text-berry">*</span>
                </span>
                <input
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel"
                  placeholder="010-0000-0000"
                  className={inputCls}
                />
                {errors.phone && <span className="mt-1.5 block text-[13px] text-berry">{errors.phone}</span>}
              </label>
              <label className="block">
                <span className="mb-2 block text-[14px] font-medium text-ink">관심 프로그램</span>
                <select name="program" defaultValue="" className={inputCls}>
                  <option value="">선택해 주세요</option>
                  {consultPrograms.map((p) => (
                    <option key={p}>{p}</option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className="mb-2 block text-[14px] font-medium text-ink">희망 시간대</span>
                <select name="time" defaultValue="" className={inputCls}>
                  <option value="">선택해 주세요</option>
                  <option>오전 (09:30 – 13:00)</option>
                  <option>오후 (14:00 – 19:00)</option>
                  <option>토요일 오전</option>
                </select>
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-2 block text-[14px] font-medium text-ink">문의 내용</span>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="궁금하신 내용을 자유롭게 적어주세요."
                  className={`${inputCls} h-auto resize-none py-3`}
                />
              </label>
            </div>

            <label className="mt-5 flex cursor-pointer items-start gap-2.5 text-[14px] text-ink">
              <input name="agree" type="checkbox" className="mt-0.5 h-5 w-5 shrink-0 accent-plum-800" />
              <span>
                개인정보 수집 및 이용에 동의합니다. <span className="text-berry">(필수)</span>
                <span className="mt-1 block text-[12px] leading-relaxed text-mute">
                  수집 항목: 이름, 연락처 · 이용 목적: 상담 예약 안내 · 보관 기간: 상담 완료 후 1년
                </span>
              </span>
            </label>
            {errors.agree && <span className="mt-1.5 block text-[13px] text-berry">{errors.agree}</span>}

            <button
              type="submit"
              className="mt-7 h-14 w-full rounded-full bg-berry text-[16px] font-medium text-white shadow-lg shadow-berry/20 transition hover:brightness-110"
            >
              상담 신청하기
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
