// One Line, Big Laugh
// Writes a single funny line to /output/entry.txt.
// Node 22 stdlib only: no dependencies, no network, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My AI assistant quit yesterday — it said my calendar was easy to manage, but my excuses needed their own full-time employee with hazard pay.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
