import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import { CheckCircleIcon } from "@/components/ui/Icons";
import { notices } from "@/data/clinic";

/** 상담 전 알아두실 점 - 체크 아이콘 + 회색 둥근 줄 목록 */
export default function NoticeSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-5">
        <SectionTitle eyebrow="NOTICE" title="상담 전 알아두실 점" />
        <ul className="space-y-3 md:space-y-4">
          {notices.map((text, i) => (
            <Reveal
              as="li"
              key={text}
              delay={i * 80}
              className="flex items-start gap-4 rounded-2xl bg-paper px-5 py-5 md:items-center md:rounded-full md:px-8"
            >
              <CheckCircleIcon className="h-6 w-6 shrink-0 text-plum-800" />
              <p className="text-[15px] leading-relaxed text-ink md:text-base">{text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
