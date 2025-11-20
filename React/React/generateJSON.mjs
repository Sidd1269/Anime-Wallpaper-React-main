import fs from "fs";
import path from "path";

// -------------------------
// CONFIG
// -------------------------
const wallpapersDir = path.join(process.cwd(), "public", "Wallpapers");
const outputFile = path.join(process.cwd(), "src", "Data", "Wallpaper.json");

let output = [];
let idCounter = 1;

// -------------------------
// Helper Functions
// -------------------------

// Extract resolution from filename: [1920x1080]
function extractResolution(filename) {
  const match = filename.match(/\[(\d+x\d+)\]/);
  return match ? match[1] : "Unknown";
}

// Convert "Zero no Tsukaima" → "Zero No Tsukaima"
function cleanCategoryName(folder) {
  return folder
    .replace(/-/g, " ")
    .replace(/\s+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

// Convert folder to slug: Zero No Tsukaima → zero-no-tsukaima
function slugifyCategory(folder) {
  return folder.toLowerCase().replace(/\s+/g, "-");
}

// -------------------------
// MAIN LOGIC
// -------------------------

console.log("📁 Scanning folders:", wallpapersDir);

if (!fs.existsSync(wallpapersDir)) {
  console.error("❌ Wallpapers folder not found:", wallpapersDir);
  process.exit(1);
}

const folders = fs.readdirSync(wallpapersDir);

for (const folder of folders) {
  const folderPath = path.join(wallpapersDir, folder);

  if (!fs.statSync(folderPath).isDirectory()) continue;

  const categoryName = cleanCategoryName(folder);
  const categorySlug = slugifyCategory(folder);

  const files = fs.readdirSync(folderPath);

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    const valid = [".jpg", ".jpeg", ".png", ".webp"];

    if (!valid.includes(ext)) continue;

    const resolution = extractResolution(file);

    output.push({
      id: idCounter++,
      title: `${categoryName} Wallpaper (${resolution})`,
      category: categorySlug,
      image: `/Wallpapers/${folder}/${file}`,
      desc: `High-quality ${resolution} wallpaper from ${categoryName}.`
    });
  }
}

// -------------------------
// SAVE JSON
// -------------------------

fs.writeFileSync(outputFile, JSON.stringify(output, null, 2));

console.log("✅ JSON created at:", outputFile);
console.log("📸 Total wallpapers:", output.length);
