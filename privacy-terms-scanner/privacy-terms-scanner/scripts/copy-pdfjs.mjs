import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "node_modules", "pdfjs-dist", "build");
const destDir = join(root, "vendor", "pdfjs");

mkdirSync(destDir, { recursive: true });
for (const name of ["pdf.min.mjs", "pdf.worker.min.mjs"]) {
  copyFileSync(join(dist, name), join(destDir, name));
}
console.log("Copied pdf.min.mjs and pdf.worker.min.mjs to vendor/pdfjs/");
