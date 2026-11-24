// Warning Label for Humans: One Line, Big Laugh
// Writes a single-line safety warning label (1-160 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "WARNING: This human runs on caffeine, Wi-Fi and unfinished plans. Do not shake, do not ask about work, and never let it near the button marked 'reply all'.";

if (LINE.length < 1 || LINE.length > 160 || LINE.trim().length === 0) {
  throw new Error(`entry line out of gate: ${LINE.length} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
console.log(LINE);
