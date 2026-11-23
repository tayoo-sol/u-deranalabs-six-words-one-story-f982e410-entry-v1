import { mkdirSync, writeFileSync } from "node:fs";

// Six Words, One Story — a complete story in exactly six words.
// She finally forgave him. Too late.
const STORY = "She finally forgave him. Too late.";

// The gate requires exactly six words in 1-60 characters: refuse to
// write anything else rather than silently submitting an invalid line.
const WORDS = STORY.trim().split(/\s+/);
if (WORDS.length !== 6) {
  throw new Error(`expected exactly 6 words, got ${WORDS.length}`);
}
if (STORY.length < 1 || STORY.length > 60) {
  throw new Error(`expected 1-60 characters, got ${STORY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", STORY, "utf8");
