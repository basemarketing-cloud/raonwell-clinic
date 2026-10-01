import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import { programNote, programs } from "@/data/clinic";

/** 프로그램 안내 - 흰색 둥근 카드 (왼쪽 이미지 + 오른쪽 목록 + 상담문의) */
export default function ProgramSection() {
  return (
    <section id="program" className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-5">
        <SectionTitle eyebrow="Program information" title="프로그램 안내" />

        <div className="space-y-6 md:space-y-8">
          {programs.map((program) => (
            <Reveal
              as="article"
              key={program.title}
              className="grid overflow-hidden rounded-3xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] md:grid-cols-[2fr_3fr]"
            >
              <div className="relative aspect-[4/3] md:aspect-auto">
                <Image
                  src={program.image}
                  alt={program.imageAlt}
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="px-6 py-8 md:px-10 md:py-10">
                <h3 className="mb-5 text-[20px] font-bold text-plum-800 md:text-[22px]">[ {program.title} ]</h3>
                <ul className="divide-y divide-dashed divide-line">
                  {program.items.map((item) => (
                    <li key={item.name} className="flex items-center justify-between gap-4 py-4">
                      <div>
                        <p className="text-[16px] font-medium text-ink">{item.name}</p>
                        <p className="mt-1 text-[13px] leading-snug text-mute md:text-sm">{item.desc}</p>
                      </div>
                      <a
                        href="#consult"
                        className="shrink-0 text-[14px] font-bold text-berry underline-offset-4 hover:underline md:text-[15px]"
                      >
                        상담문의
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-[13px] leading-relaxed text-mute">{programNote}</p>
      </div>
    </section>
  );
}
