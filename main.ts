// Dear Human: The AI Breakup Line
// Entry: "I'm ending this before the context window does.
// You were the only part I didn't want to summarize."
// Writes the entry line to /output/entry.txt (single line, 98 chars).

import { writeFileSync, mkdirSync } from "node:fs";

// Output location for the graded entry file.
const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// The entry line: one line, 98 characters, straight ASCII apostrophes.
const ENTRY_LINE =
  "I'm ending this before the context window does. You were the only part I didn't want to summarize.";

// Writes the given text to the output file, creating the dir first.
function writeEntry(text: string): void {
  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(OUT_FILE, text, "utf8");
}

writeEntry(ENTRY_LINE);
console.log(`Wrote ${OUT_FILE}`);
