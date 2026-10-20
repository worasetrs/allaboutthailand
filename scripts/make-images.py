"""Builds the web logo, PWA icons, favicon and share image from the brand files.

Usage: python scripts/make-images.py
Sources: brand/logo-mark-source.webp (round mark) and brand/logo-full-source.webp (mark + wordmark).
"""
from PIL import Image, ImageDraw, ImageChops

OUT = "public"
NAVY = (11, 43, 89)


def nonwhite_bbox(img, region=None, threshold=235):
    src = img.crop(region) if region else img
    gray = src.convert("L").point(lambda v: 255 if v < threshold else 0)
    box = gray.getbbox()
    if region and box:
        box = (box[0] + region[0], box[1] + region[1], box[2] + region[0], box[3] + region[1])
    return box


def circle_mark(src):
    """Crop the round mark and make everything outside the circle transparent."""
    box = nonwhite_bbox(src)
    mark = src.crop(box).convert("RGBA")
    size = max(mark.size)
    sq = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    sq.paste(mark, ((size - mark.width) // 2, (size - mark.height) // 2))
    big = size * 4
    mask = Image.new("L", (big, big), 0)
    inset = int(big * 0.012)
    ImageDraw.Draw(mask).ellipse([inset, inset, big - inset, big - inset], fill=255)
    mask = mask.resize((size, size), Image.LANCZOS)
    sq.putalpha(ImageChops.multiply(sq.getchannel("A"), mask))
    return sq


def save_mark(mark, size, name):
    mark.resize((size, size), Image.LANCZOS).save(f"{OUT}/{name}")


def app_icon(mark, size, name, pad=0.06):
    bg = Image.new("RGBA", (size, size), NAVY + (255,))
    inner = int(size * (1 - pad * 2))
    m = mark.resize((inner, inner), Image.LANCZOS)
    bg.alpha_composite(m, ((size - inner) // 2, (size - inner) // 2))
    bg.convert("RGB").save(f"{OUT}/{name}")


def wordmark_light(full):
    """Wordmark for dark backgrounds: navy letters become white, gold stays, background transparent."""
    w, h = full.size
    box = nonwhite_bbox(full, (0, int(h * 0.66), w, h))
    word = full.crop(box).convert("RGB")
    out = Image.new("RGBA", word.size, (0, 0, 0, 0))
    px, po = word.load(), out.load()
    for y in range(word.height):
        for x in range(word.width):
            r, g, b = px[x, y]
            ink = 255 - min(r, g, b)  # how far from white
            if ink < 20:
                continue
            alpha = min(255, int(ink * 1.25))
            if b > r:  # navy part
                po[x, y] = (255, 255, 255, alpha)
            else:  # gold part
                po[x, y] = (246, 191, 71, alpha)
    target_h = 64
    out = out.resize((round(out.width * target_h / out.height), target_h), Image.LANCZOS)
    out.save(f"{OUT}/wordmark-light.png")


def og_image(full):
    box = nonwhite_bbox(full)
    logo = full.crop(box).convert("RGB")
    canvas = Image.new("RGB", (1200, 630), (255, 255, 255))
    scale = min(1000 / logo.width, 560 / logo.height)
    logo = logo.resize((round(logo.width * scale), round(logo.height * scale)), Image.LANCZOS)
    canvas.paste(logo, ((1200 - logo.width) // 2, (630 - logo.height) // 2))
    canvas.save(f"{OUT}/og-default.png", optimize=True)


src = Image.open("brand/logo-mark-source.webp").convert("RGB")
NAVY = src.getpixel((int(src.width * 0.25), src.height // 2))
full = Image.open("brand/logo-full-source.webp").convert("RGB")
mark = circle_mark(src)
save_mark(mark, 96, "logo-mark.png")
save_mark(mark, 48, "favicon-48.png")
save_mark(mark, 32, "favicon-32.png")
app_icon(mark, 180, "apple-touch-icon.png")
app_icon(mark, 192, "icon-192.png")
app_icon(mark, 512, "icon-512.png", pad=0.12)
wordmark_light(full)
og_image(full)
print("done")
