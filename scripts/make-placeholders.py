"""Generate soft, labelled placeholder JPGs for the Raonwell clinic site."""
import os
import random
import sys

from PIL import Image, ImageDraw, ImageFilter, ImageFont

OUT = sys.argv[1]
os.makedirs(OUT, exist_ok=True)
FONT = "C:/Windows/Fonts/malgunbd.ttf"
FONT_R = "C:/Windows/Fonts/malgun.ttf"

# (filename, w, h, label, top color, bottom color)
IMAGES = [
    ("hero-clinic.jpg", 1920, 900, "메인 상단 배경 (진료실/상담실)", (196, 178, 196), (120, 92, 126)),
    ("banner-program.jpg", 1920, 700, "프로그램 배너 (생활 / 운동 이미지)", (226, 214, 222), (164, 134, 160)),
    ("program-01.jpg", 800, 600, "상담·분석 프로그램", (240, 232, 238), (206, 186, 204)),
    ("program-02.jpg", 800, 600, "체중관리 프로그램", (236, 236, 242), (194, 190, 214)),
    ("feature-01.jpg", 700, 700, "특징 1 : 측정 기반 상담", (238, 230, 236), (196, 172, 194)),
    ("feature-02.jpg", 700, 700, "특징 2 : 개인별 계획", (234, 236, 240), (186, 190, 210)),
    ("feature-03.jpg", 700, 700, "특징 3 : 꾸준한 사후관리", (240, 236, 230), (206, 192, 180)),
    ("intro-consult.jpg", 900, 820, "공감 영역 (상담 장면)", (232, 224, 230), (150, 120, 148)),
    ("doctor.jpg", 800, 1000, "대표원장 프로필 사진", (238, 234, 238), (178, 160, 180)),
    ("interior-01.jpg", 1200, 800, "시설 1 : 접수/대기실", (222, 214, 220), (140, 116, 140)),
    ("interior-02.jpg", 1200, 800, "시설 2 : 상담실", (226, 222, 228), (128, 118, 146)),
    ("interior-03.jpg", 1200, 800, "시설 3 : 체성분 측정실", (230, 224, 216), (150, 132, 120)),
    ("interior-04.jpg", 1200, 800, "시설 4 : 진료실", (220, 220, 226), (120, 112, 136)),
    ("interior-05.jpg", 1200, 800, "시설 5 : 복도", (228, 220, 226), (136, 110, 132)),
    ("og-image.jpg", 1200, 630, "SNS 공유 썸네일", (226, 214, 224), (90, 50, 98)),
]


CORNER_LABEL = {"hero-clinic.jpg", "banner-program.jpg"}


def lerp(a, b, t):
    return tuple(int(a[i] + (b[i] - a[i]) * t) for i in range(3))


for name, w, h, label, c1, c2 in IMAGES:
    random.seed(name)
    img = Image.new("RGB", (w, h))
    px = ImageDraw.Draw(img)
    for y in range(h):
        px.line([(0, y), (w, y)], fill=lerp(c1, c2, y / h))

    # soft blurred circles for depth
    layer = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    ld = ImageDraw.Draw(layer)
    for _ in range(6):
        r = random.randint(int(min(w, h) * 0.15), int(min(w, h) * 0.45))
        x, y = random.randint(0, w), random.randint(0, h)
        a = random.randint(30, 70)
        ld.ellipse([x - r, y - r, x + r, y + r], fill=(255, 255, 255, a))
    layer = layer.filter(ImageFilter.GaussianBlur(min(w, h) // 12))
    img = Image.alpha_composite(img.convert("RGBA"), layer).convert("RGB")

    d = ImageDraw.Draw(img)
    s = min(w, h)
    f1 = ImageFont.truetype(FONT, max(22, s // 18))
    f2 = ImageFont.truetype(FONT_R, max(16, s // 32))
    t1 = label
    t2 = f"public/images/{name}  ·  권장 {w}×{h}"
    b1 = d.textbbox((0, 0), t1, font=f1)
    b2 = d.textbbox((0, 0), t2, font=f2)
    if name in CORNER_LABEL:
        # 글자가 올라가는 배경 이미지는 라벨을 오른쪽 아래 구석에 작게 표시
        f3 = ImageFont.truetype(FONT_R, 22)
        t3 = f"{t2}  ({label})"
        b3 = d.textbbox((0, 0), t3, font=f3)
        d.text((w - (b3[2] - b3[0]) - 40, h - (b3[3] - b3[1]) - 40), t3, font=f3, fill=(255, 255, 255))
    else:
        cy = h // 2
        d.text(((w - (b1[2] - b1[0])) // 2, cy - (b1[3] - b1[1]) - 8), t1, font=f1, fill=(255, 255, 255))
        d.text(((w - (b2[2] - b2[0])) // 2, cy + 12), t2, font=f2, fill=(255, 255, 255, 220))
    img.save(os.path.join(OUT, name), "JPEG", quality=82, optimize=True)
    print("made", name)
