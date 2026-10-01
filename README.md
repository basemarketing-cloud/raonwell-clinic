# 라온웰의원 (가상) — 비만·체중관리 클리닉 랜딩페이지

> 웹사이트 제작 연습 및 포트폴리오용으로 만든 **가상의 병원 홈페이지**입니다.
> 병원명, 의료진, 주소, 전화번호 등 모든 정보는 실제와 관계없는 가상 정보입니다.

- Next.js 16 · React 19 · TypeScript · Tailwind CSS 4
- 데이터베이스 / 로그인 없음 (정적 페이지)

---

## 1. 실행 방법

처음 한 번만 설치:

```bash
npm install
```

개발 모드로 실행 (수정하면 바로 화면에 반영됨):

```bash
npm run dev
```

브라우저에서 http://localhost:3000 을 열면 됩니다.

배포용 빌드 확인:

```bash
npm run build
npm run start
```

---

## 2. 자주 바꾸는 것들 — 어디를 고치면 되나요?

| 바꾸고 싶은 것 | 수정할 파일 |
|---|---|
| 병원명, 전화번호, 주소, 진료시간 | `data/clinic.ts` |
| 모든 문구 (Hero 제목, 프로그램, FAQ, 주의사항 등) | `data/clinic.ts` |
| 사이트 전체 색상 | `styles/globals.css` 의 `@theme` 부분 |
| 섹션 순서 바꾸기 / 섹션 빼기 | `app/page.tsx` |
| 브라우저 탭 제목, 검색 설명 | `app/layout.tsx` 의 `metadata` |
| 로고 | `components/ui/Logo.tsx` |
| 파비콘(탭 아이콘) | `app/icon.svg` |

---

## 3. 이미지 교체 방법

모든 이미지는 `public/images/` 폴더에 있습니다.
**같은 파일 이름으로 덮어쓰기만 하면** 코드를 고치지 않아도 바로 바뀝니다.
(지금 들어있는 이미지는 파일명과 권장 크기가 적힌 임시 이미지입니다.)

| 파일명 | 사용 위치 | 권장 크기 |
|---|---|---|
| `hero-clinic.jpg` | 첫 화면 배경 | 1920×900 |
| `banner-program.jpg` | 중간 가로 배너 | 1920×700 |
| `program-01.jpg` | 프로그램 카드 1 (상담·분석) | 800×600 |
| `program-02.jpg` | 프로그램 카드 2 (관리) | 800×600 |
| `feature-01.jpg` ~ `feature-03.jpg` | 병원 특징 원형 이미지 3개 | 700×700 (정사각형) |
| `intro-consult.jpg` | "이런 고민이 있으신가요?" 왼쪽 사진 | 900×820 |
| `doctor.jpg` | 대표원장 사진 | 800×1000 (세로) |
| `interior-01.jpg` ~ `interior-05.jpg` | 시설 안내 슬라이더 | 1200×800 |
| `og-image.jpg` | 카카오톡·SNS 공유 썸네일 | 1200×630 |

- 사진 비율이 조금 달라도 자동으로 잘라서(가운데 기준) 채워집니다.
- `.png`로 바꾸고 싶다면 `data/clinic.ts`(또는 해당 섹션 파일)의 파일명도 함께 바꿔주세요.
- 무료 이미지: Unsplash, Pexels 등에서 상업적 이용 가능 여부를 확인하고 사용하세요.
- 임시 이미지를 다시 만들고 싶다면: `python scripts/make-placeholders.py public/images` (Pillow 필요)

---

## 4. 폴더 구조

```
raonwell-clinic/
├─ app/
│  ├─ layout.tsx          # 폰트, 사이트 제목/설명(SEO)
│  ├─ page.tsx            # 메인 페이지 — 섹션 조립
│  └─ icon.svg            # 파비콘
├─ components/
│  ├─ layout/
│  │  ├─ Header.tsx       # 상단 헤더 (PC 2단 메뉴 / 모바일 햄버거)
│  │  ├─ QuickMenu.tsx    # PC 오른쪽 퀵메뉴 / 모바일 하단 고정바
│  │  └─ Footer.tsx       # 진료시간 · 오시는 길 · 저작권
│  ├─ sections/           # 화면 위→아래 순서
│  │  ├─ Hero.tsx               # 첫 화면
│  │  ├─ SummarySection.tsx     # 원형 아이콘 4개
│  │  ├─ BannerSection.tsx      # 가로 배너
│  │  ├─ ProgramSection.tsx     # 프로그램 카드
│  │  ├─ FeatureSection.tsx     # 병원 특징 3개
│  │  ├─ IntroSection.tsx       # 고민 공감 (01~04)
│  │  ├─ ProcessSection.tsx     # 진료 과정 5단계
│  │  ├─ DoctorSection.tsx      # 의료진 소개
│  │  ├─ NoticeSection.tsx      # 상담 전 알아두실 점
│  │  ├─ FAQSection.tsx         # 자주 묻는 질문 (아코디언)
│  │  ├─ ConsultationSection.tsx# 상담 신청 폼
│  │  └─ FacilitySection.tsx    # 시설 슬라이더
│  └─ ui/                 # 공통 부품 (아이콘, 로고, 제목, 애니메이션, 팝업)
├─ data/clinic.ts         # ★ 모든 문구·병원 정보
├─ public/images/         # ★ 모든 이미지
├─ styles/globals.css     # ★ 색상·폰트·애니메이션
└─ scripts/make-placeholders.py  # 임시 이미지 생성기
```

---

## 5. 동작하는 기능

- 메뉴 클릭 시 해당 섹션으로 부드럽게 이동 (고정 헤더에 가려지지 않게 보정)
- 모바일 햄버거 메뉴 (열려 있을 때 배경 스크롤 잠금, ESC로 닫기)
- 스크롤하면 각 섹션이 아래에서 서서히 나타남 (동작 줄이기 설정 시 자동 꺼짐)
- FAQ 아코디언
- 시설 사진 슬라이더 (화살표, 하단 점, 모바일 스와이프)
- 상담 신청 폼 입력 확인 (이름·휴대폰 번호·개인정보 동의) → 완료 팝업
  - **가상 사이트이므로 입력 내용은 어디에도 저장·전송되지 않습니다.**
- 카카오상담 버튼 → "가상 사이트" 안내 팝업
- 전화번호 클릭 시 모바일에서 바로 전화 걸기 (`tel:` 링크)
- PC: 오른쪽 퀵메뉴 / 모바일: 하단 고정 4칸 메뉴 + TOP 버튼

---

## 6. 배포하기 (Vercel, 무료)

1. 이 폴더를 GitHub 저장소에 올립니다.
2. https://vercel.com 에 GitHub 계정으로 로그인 → **Add New → Project** → 저장소 선택
3. 설정은 기본값 그대로 두고 **Deploy** 클릭
4. 1~2분 뒤 `https://프로젝트명.vercel.app` 주소가 생깁니다.

> 검색엔진에 노출되지 않도록 `app/layout.tsx`에 `robots: noindex`가 설정되어 있습니다.
> 가상 병원 사이트이므로 이 설정은 유지하는 것을 권장합니다.

---

## 7. 의료광고 관련 작성 원칙

이 사이트의 문구는 의료광고 가이드를 고려해 다음 원칙으로 작성했습니다.

- 효과 보장, "부작용 없음", "최고", "100%" 등 단정적·과장 표현 사용하지 않음
- 다른 병원과 비교하는 표현 사용하지 않음
- "개인에 따라 차이가 있을 수 있음", "처방은 진료 후 의사 판단" 등 안내 문구 포함
- 특정 의약품명 언급하지 않음

문구를 수정할 때도 위 원칙을 지켜주세요.
