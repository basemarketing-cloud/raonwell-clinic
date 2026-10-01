import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import { concerns } from "@/data/clinic";

/** 문제 공감 영역 - 왼쪽 큰 사진 + 오른쪽에 겹쳐지는 01~04 목록 박스 */
export default function IntroSection() {
  return (
    <section className="overflow-hidden bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle
          eyebrow="FOR YOU"
          title="이런 고민이 있으신가요?"
          description="한 가지라도 해당된다면, 편하게 상담을 받아보세요."
        />

        <div className="relative md:flex md:items-center">
          <Reveal className="relative aspect-[9/8] w-full overflow-hidden rounded-3xl md:w-[55%]">
            <Image
              src="/images/intro-consult.jpg"
              alt="체중관리 상담 장면"
              fill
              sizes="(min-width: 768px) 55vw, 100vw"
              className="object-cover"
            />
          </Reveal>

          <Reveal
            delay={150}
            className="relative z-10 -mt-16 mx-3 rounded-3xl bg-white p-6 shadow-[0_12px_40px_rgba(75,33,84,0.15)] sm:mx-8 md:-ml-24 md:mt-0 md:w-[55%] md:p-10"
          >
            <ol className="space-y-1">
              {concerns.map((text, i) => (
                <li key={text} className="flex gap-4 border-b border-line py-4 last:border-0">
                  <span className="text-[20px] font-bold leading-6 text-plum-800 md:text-[22px]">
                    {String(i + 1).padStart(2, "0")}.
                  </span>
                  <span className="text-[15px] leading-6 text-ink md:text-base lg:text-[17px]">{text}</span>
                </li>
              ))}
            </ol>
            <a
              href="#consult"
              className="mt-6 flex h-12 items-center justify-center rounded-full bg-plum-800 text-[15px] font-medium text-white transition hover:bg-plum-700"
            >
              나에게 맞는 관리 방법 상담받기
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
