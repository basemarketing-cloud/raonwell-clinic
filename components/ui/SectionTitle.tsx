import Reveal from "./Reveal";

type Props = {
  /** 작은 영문 라벨 (예: RAONWELL CLINIC) */
  eyebrow?: string;
  title: string;
  description?: string;
  /** 어두운 배경 위에서 사용할 때 */
  light?: boolean;
  className?: string;
};

/** 섹션 상단 제목 - 영문 라벨 / 한글 제목 / 설명 3단 구조 */
export default function SectionTitle({ eyebrow, title, description, light, className = "" }: Props) {
  return (
    <Reveal className={`mb-10 text-center md:mb-14 ${className}`}>
      {eyebrow && (
        <p
          className={`mb-3 text-[13px] font-medium tracking-[0.3em] md:text-sm ${
            light ? "text-plum-300" : "text-plum-500"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-[26px] font-bold leading-snug tracking-tight md:text-[34px] ${
          light ? "text-white" : "text-plum-800"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mx-auto mt-4 max-w-xl whitespace-pre-line text-[15px] leading-relaxed md:text-[17px] ${
            light ? "text-white/70" : "text-mute"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
