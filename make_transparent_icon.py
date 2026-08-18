import os
from PIL import Image

src_path = r"C:\Users\SRIXX\.gemini\antigravity\brain\5264e744-4802-46a0-8003-6dd459903750\.user_uploaded\media_1786359490513.png"
img = Image.open(src_path).convert("RGBA")
width, height = img.size

datas = img.getdata()
new_data = []

# Flood fill or color threshold for white background
for item in datas:
    # item is (R, G, B, A)
    # Check if pixel is white / near-white background
    if item[0] > 235 and item[1] > 235 and item[2] > 235:
        new_data.append((255, 255, 255, 0)) # Make transparent
    else:
        new_data.append(item)

img.putdata(new_data)

# Save to destination paths
dest_paths = [
    r"C:\Users\SRIXX\.gemini\antigravity\scratch\dhi\next-frontend\src\app\icon.png",
    r"C:\Users\SRIXX\.gemini\antigravity\scratch\dhi\next-frontend\public\icon.png",
    r"C:\Users\SRIXX\.gemini\antigravity\scratch\dhi\next-frontend\public\logo-icon.png",
]

for p in dest_paths:
    img.save(p, "PNG")
    print(f"Saved transparent icon to {p}")

# Save ICO
ico_paths = [
    r"C:\Users\SRIXX\.gemini\antigravity\scratch\dhi\next-frontend\src\app\favicon.ico",
    r"C:\Users\SRIXX\.gemini\antigravity\scratch\dhi\next-frontend\public\favicon.ico",
]
for p in ico_paths:
    img.save(p, format="ICO", sizes=[(32, 32), (64, 64), (128, 128)])
    print(f"Saved transparent ICO to {p}")
