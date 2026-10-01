import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import { features } from "@/data/clinic";

/** 병원 특징 - 둥근 이미지 3개 + 짧은 설명 */
export default function FeatureSection() {
  return (
    <section id="feature" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-5">
        <SectionTitle
          eyebrow="RAONWELL CLINIC"
          title="체중 관리를 함께 고민하는 라온웰의원"
          description={"결과를 약속하기보다,\n과정을 꼼꼼하게 함께하는 것을 중요하게 생각합니다."}
        />

        <ul className="grid gap-12 sm:grid-cols-3 sm:gap-6 md:gap-10">
          {features.map((f, i) => (
            <Reveal as="li" key={f.title} delay={i * 120} className="text-center">
              <div className="relative mx-auto aspect-square w-[72%] max-w-[260px] overflow-hidden rounded-full sm:w-full">
                <Image src={f.image} alt={f.title} fill sizes="(min-width: 640px) 30vw, 70vw" className="object-cover" />
              </div>
              <h3 className="mt-6 text-[18px] font-bold text-berry md:text-xl">{f.title}</h3>
              <p className="mt-3 whitespace-pre-line text-[14px] leading-relaxed text-mute md:text-[15px]">{f.desc}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
