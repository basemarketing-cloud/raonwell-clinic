import Logo from "@/components/ui/Logo";
import { MapPinIcon, PhoneIcon } from "@/components/ui/Icons";
import { clinic, hours } from "@/data/clinic";

/** 하단 정보 영역 - 진료시간 / 오시는 길 / 저작권 */
export default function Footer() {
  return (
    <footer id="location" className="bg-plum-900 text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2 md:gap-16 md:py-20">
        {/* 진료시간 */}
        <div>
          <h2 className="mb-6 flex items-center gap-3 text-lg font-bold">
            <span className="h-px w-6 bg-plum-300" />
            진료시간 안내
          </h2>
          <dl className="divide-y divide-white/15 border-y border-white/15">
            {hours.map((h) => (
              <div key={h.day} className="flex items-center justify-between py-3.5 text-[15px]">
                <dt className="text-white/70">{h.day}</dt>
                <dd className="flex items-center gap-2 font-medium">
                  {h.time}
                  {h.badge && (
                    <span className="rounded-full bg-white/15 px-2.5 py-0.5 text-[11px] font-normal">
                      {h.badge}
                    </span>
                  )}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-[13px] text-white/50">※ 접수 마감은 진료 종료 30분 전입니다.</p>
        </div>

        {/* 오시는 길 */}
        <div>
          <h2 className="mb-6 flex items-center gap-3 text-lg font-bold">
            <span className="h-px w-6 bg-plum-300" />
            오시는 길
          </h2>
          {/* 지도 자리 - 실제 운영 시 네이버/카카오 지도 삽입 */}
          <div className="mb-6 flex aspect-[16/7] items-center justify-center rounded-2xl border border-dashed border-white/25 bg-white/5 text-center text-[13px] text-white/50">
            지도 영역
            <br />
            (실제 운영 시 지도 API 연결)
          </div>
          <ul className="space-y-5">
            <li className="flex gap-3">
              <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-plum-300" />
              <div>
                <p className="text-[13px] text-white/60">주소</p>
                <p className="mt-1 text-[15px] font-medium">{clinic.address}</p>
                <p className="mt-1 text-[13px] text-white/60">{clinic.addressHint}</p>
              </div>
            </li>
            <li className="flex gap-3">
              <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-plum-300" />
              <div>
                <p className="text-[13px] text-white/60">대표전화</p>
                <a href={`tel:${clinic.phone}`} className="mt-1 block text-2xl font-bold tracking-wide">
                  {clinic.phone}
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-plum-950">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-[12px] leading-relaxed text-white/50 md:flex-row md:items-center md:justify-between">
          <Logo light />
          <div className="md:text-right">
            <p>
              {clinic.name} · {clinic.address} · {clinic.phone}
            </p>
            <p>{clinic.businessInfo}</p>
            <p className="mt-2 text-white/70">
              본 웹사이트는 웹 제작 연습 및 포트폴리오용으로 제작된 가상의 병원 홈페이지입니다.
            </p>
            <p className="mt-1">© {new Date().getFullYear()} {clinic.name}. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
