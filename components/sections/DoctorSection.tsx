import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { clinic, doctor } from "@/data/clinic";

/** 의료진 소개 - 왼쪽 프로필 사진 + 오른쪽 인사말 / 이력 */
export default function DoctorSection() {
  return (
    <section id="doctor" className="bg-plum-50 py-20 md:py-28">
      <div className="mx-auto grid max-w-5xl items-center gap-10 px-5 md:grid-cols-[5fr_6fr] md:gap-16">
        <Reveal className="relative mx-auto w-full max-w-sm md:max-w-none">
          <div className="absolute -bottom-4 -right-4 h-full w-full rounded-3xl bg-plum-100" aria-hidden />
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image
              src={doctor.image}
              alt={`${clinic.name} ${clinic.doctorName} ${clinic.doctorTitle}`}
              fill
              sizes="(min-width: 768px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={150}>
          <p className="text-[13px] font-medium tracking-[0.3em] text-plum-500 md:text-sm">DOCTOR</p>
          <p className="mt-5 whitespace-pre-line text-[20px] font-bold leading-snug sm:text-[22px] tracking-tight text-plum-800 md:text-[28px]">
            “{doctor.quote}”
          </p>
          <p className="mt-5 text-[15px] leading-relaxed text-mute md:text-base">{doctor.message}</p>

          <div className="mt-8 border-t border-plum-300/60 pt-7">
            <p className="text-[15px] text-mute">
              {clinic.name} {clinic.doctorTitle}
            </p>
            <p className="mt-1 text-[26px] font-bold text-ink">{clinic.doctorName}</p>
            <ul className="mt-5 space-y-2.5">
              {doctor.career.map((c) => (
                <li key={c} className="flex items-center gap-3 text-[15px] text-ink">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-berry" aria-hidden />
                  {c}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[12px] text-mute">{doctor.careerNote}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
