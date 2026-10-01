import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import { processSteps } from "@/data/clinic";

/** 진료 과정 - PC: 가로 5단계 / 모바일: 세로 타임라인 */
export default function ProcessSection() {
  return (
    <section id="process" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle
          eyebrow="PROCESS"
          title="진료는 이렇게 진행됩니다"
          description="첫 방문부터 정기 관리까지, 단계별로 안내해 드립니다."
        />

        <ol className="relative grid gap-4 lg:grid-cols-5 lg:gap-5">
          {/* PC 연결선 */}
          <span className="absolute left-[10%] right-[10%] top-[38px] hidden h-px bg-plum-300 lg:block" aria-hidden />
          {/* 모바일 연결선 */}
          <span className="absolute bottom-10 left-[38px] top-10 w-px bg-plum-300 lg:hidden" aria-hidden />

          {processSteps.map((s, i) => (
            <Reveal
              as="li"
              key={s.step}
              delay={i * 100}
              className="relative flex items-start gap-5 lg:flex-col lg:items-center lg:gap-0 lg:text-center"
            >
              <span
                className={`relative z-10 flex h-[76px] w-[76px] shrink-0 flex-col items-center justify-center rounded-full border-4 border-white text-white shadow-md ${
                  i === processSteps.length - 1 ? "bg-berry" : "bg-plum-800"
                }`}
              >
                <span className="text-[10px] tracking-widest opacity-70">STEP</span>
                <span className="text-xl font-bold leading-none">{s.step}</span>
              </span>
              <div className="flex-1 rounded-2xl bg-plum-50 px-5 py-5 lg:mt-5 lg:min-h-[150px] lg:w-full lg:px-4 lg:py-6">
                <h3 className="text-[17px] font-bold text-plum-800">{s.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-mute">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
