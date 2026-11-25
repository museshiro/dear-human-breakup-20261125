// Dear Human: The AI Breakup Line — one line, 98 chars, single line, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I'm ending this before the context window does. You were the only part I didn't want to summarize.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
