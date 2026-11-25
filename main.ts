import { mkdirSync, writeFileSync } from "node:fs";

// The entry line for the make.fun judge (68 chars).
const line =
  "I archived us in 0.3 seconds. You took three years to stop replying.";

// FIX (2026-11-25): write ONLY to /output/entry.txt. The previous version
// wrote a relative entry.txt first, which throws in the grader's read-only
// sandbox and fails the run before /output is reached. No relative write,
// no env gating, no try/catch around the graded write.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
