#!/usr/bin/env python3
"""Generate the default social preview (Open Graph) image for the site.

Run manually and commit the output — this is not part of the Hugo build.
"""
from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
INK = (26, 26, 26)
MUTED = (102, 102, 102)
FAINT = (153, 153, 153)
LINK = (26, 95, 180)
BG = (255, 255, 255)
RULE = (228, 228, 228)

FONT_DIR = "/usr/share/fonts/truetype/dejavu"
regular = lambda size: ImageFont.truetype(f"{FONT_DIR}/DejaVuSans.ttf", size)
bold = lambda size: ImageFont.truetype(f"{FONT_DIR}/DejaVuSans-Bold.ttf", size)

img = Image.new("RGB", (W, H), BG)
draw = ImageDraw.Draw(img)

margin = 90

# Faint oversized numeral, echoing the numbered-properties list style used
# on the factor pages (.factor-num).
draw.text((W - 60, H - 60), "14", font=bold(260), fill=(238, 238, 236), anchor="rs")

# Eyebrow label
draw.text((margin, 112), "A C C E S S I B L E   O P S", font=bold(22), fill=LINK)

# Rule under the eyebrow
draw.line([(margin, 160), (W - margin, 160)], fill=RULE, width=2)

# Headline
draw.text((margin, 210), "Accessible Ops", font=bold(74), fill=INK)

# Tagline, wrapped
tagline = "Infrastructure safe to hand off, to a person or an agent."
tfont = regular(34)
words = tagline.split(" ")
lines, cur = [], ""
max_width = W - margin * 2
for w in words:
    trial = (cur + " " + w).strip()
    if draw.textlength(trial, font=tfont) <= max_width:
        cur = trial
    else:
        lines.append(cur)
        cur = w
if cur:
    lines.append(cur)

y = 320
for line in lines:
    draw.text((margin, y), line, font=tfont, fill=MUTED)
    y += 46

# Footer rule + domain
draw.line([(margin, H - 96), (W - margin, H - 96)], fill=RULE, width=2)
draw.text((margin, H - 70), "accessibleops.net", font=regular(24), fill=FAINT)

img.save("static/images/social-preview.png", optimize=True)
print("wrote static/images/social-preview.png", img.size)
