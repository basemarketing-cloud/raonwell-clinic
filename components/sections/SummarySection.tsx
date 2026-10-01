import Reveal from "@/components/ui/Reveal";
import { summaryIcons } from "@/components/ui/Icons";
import { clinic, summaryItems } from "@/data/clinic";

/** 영문 병원명 + 원형 아이콘 4개로 핵심 정보를 한눈에 보여주는 영역 */
export default function SummarySection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal className="mb-12 text-center md:mb-16">
          <p className="text-[24px] font-medium tracking-[0.35em] text-plum-800 md:text-[34px]">
            {clinic.nameEn}
          </p>
          <p className="mt-3 text-[17px] font-bold text-ink md:text-xl">{clinic.department}</p>
        </Reveal>

        <ul className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4 md:gap-8">
          {summaryItems.map((item, i) => {
            const Icon = summaryIcons[item.icon];
            return (
              <Reveal as="li" key={item.label} delay={i * 100}>
                <div className="mx-auto flex aspect-square w-full max-w-[200px] flex-col items-center justify-center rounded-full bg-plum-500 text-white shadow-[0_10px_30px_rgba(75,33,84,0.18)]">
                  <Icon className="mb-2 h-9 w-9 md:h-11 md:w-11" />
                  <p className="text-[15px] md:text-lg">{item.label}</p>
                  <p className="mt-0.5 text-[13px] font-bold md:text-[15px]">{item.value}</p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
