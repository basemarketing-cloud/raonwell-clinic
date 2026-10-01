import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { banner } from "@/data/clinic";

/** 가로 전체 이미지 배너 - 섹션 사이를 시각적으로 나눠주는 역할 */
export default function BannerSection() {
  return (
    <section className="relative flex h-[300px] items-center justify-center overflow-hidden md:h-[420px]">
      <Image src="/images/banner-program.jpg" alt="" fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-plum-950/45" />
      <Reveal className="relative px-5 text-center text-white">
        <p className="text-[24px] font-bold tracking-tight md:text-[38px]">{banner.title}</p>
        <span className="mx-auto my-5 block h-px w-12 bg-white/60" aria-hidden />
        <p className="text-[15px] text-white/85 md:text-lg">{banner.description}</p>
      </Reveal>
    </section>
  );
}
