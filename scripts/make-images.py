"""Regenerates the PWA icons and the default social share image in public/."""
import sys
from PIL import Image, ImageDraw, ImageFont

out = sys.argv[1] if len(sys.argv) > 1 else "public"
INDIGO = (38, 32, 98)
SAFFRON = (227, 155, 23)
LIGHT = (241, 239, 255)


def icon(size):
    img = Image.new("RGB", (size, size), INDIGO)
    d = ImageDraw.Draw(img)
    c, r1, r2 = size / 2, size * 0.36, size * 0.2
    d.ellipse([c - r1, c - r1, c + r1, c + r1], fill=LIGHT)
    d.ellipse([c - r2, c - r2, c + r2, c + r2], fill=SAFFRON)
    img.save(f"{out}/icon-{size}.png")


def font(size, bold=False):
    for name in (["segoeuib.ttf", "arialbd.ttf"] if bold else ["segoeui.ttf", "arial.ttf"]):
        try:
            return ImageFont.truetype(f"C:/Windows/Fonts/{name}", size)
        except OSError:
            continue
    return ImageFont.load_default()


def og():
    img = Image.new("RGB", (1200, 630), INDIGO)
    d = ImageDraw.Draw(img)
    for x in range(0, 1200, 36):
        d.rectangle([x + 18, 560, x + 36, 630], fill=(50, 43, 122))
    d.ellipse([80, 80, 160, 160], fill=LIGHT)
    d.ellipse([102, 102, 138, 138], fill=SAFFRON)
    d.text((190, 92), "All About Thailand", font=font(52, True), fill=LIGHT)
    d.text((80, 230), "Thailand, explained before you", font=font(64, True), fill=LIGHT)
    d.text((80, 310), "land and after you stay.", font=font(64, True), fill=SAFFRON)
    d.text((80, 430), "Visas · Money · Safety · Culture · News for foreigners", font=font(34), fill=LIGHT)
    img.save(f"{out}/og-default.png", optimize=True)


icon(192)
icon(512)
og()
