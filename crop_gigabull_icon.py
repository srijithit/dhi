from PIL import Image

src_path = r"C:\Users\SRIXX\Pictures\DHIGROWTH\NVVB- Hosur\Interior\New folder\Gigabulllogo.1c15808c.webp"
img = Image.open(src_path).convert("RGBA")

# Bounding box of the golden bull emblem symbol (left portion of the image)
# Width is 216, emblem is roughly 65px wide
cropped = img.crop((0, 0, 66, 57))

# Trim trailing transparent padding
bbox = cropped.getbbox()
if bbox:
    cropped = cropped.crop(bbox)

# Add a slight 4px padding
w, h = cropped.size
padded = Image.new("RGBA", (w + 8, h + 8), (0, 0, 0, 0))
padded.paste(cropped, (4, 4))

dest_path_webp = r"C:\Users\SRIXX\.gemini\antigravity\scratch\dhi\next-frontend\public\images\client_gigabull.webp"
dest_path_png = r"C:\Users\SRIXX\.gemini\antigravity\scratch\dhi\next-frontend\public\images\client_gigabull.png"

padded.save(dest_path_webp, "WEBP")
padded.save(dest_path_png, "PNG")

print(f"Successfully cropped Gigabull logo mark to {padded.size}")
