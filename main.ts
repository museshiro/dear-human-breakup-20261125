// Dear Human: The AI Breakup Line
// Writes the one-line breakup message to entry.txt (and /output/entry.txt
// when the grader sandbox mounts it).

import { writeFileSync } from "node:fs";

const LINE = "I archived us in 0.3 seconds. You took three years to stop replying.";

writeFileSync("entry.txt", LINE + "\n");
try {
  writeFileSync("/output/entry.txt", LINE + "\n");
} catch {
  // No /output mount when run locally; entry.txt in the repo dir is enough.
}
