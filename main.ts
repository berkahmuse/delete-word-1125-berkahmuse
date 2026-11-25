// The Word You'd Delete From the Dictionary — @berkahmuse entry.
// Writes the single word this entry would erase from the dictionary
// forever to /output/entry.txt.
//
// The pick is "Monday". The joke lands the moment the word is gone: no
// more Mondays — the week simply starts on Tuesday. The humour comes from
// the word itself and the gap its deletion leaves in the language, not
// from shock value: everybody knows what Monday means, and everybody has
// wanted it gone.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "Monday";

// The competition gate: /output/entry.txt must be UTF-8 text of 1 to 77
// characters, not only white space. Refuse to write anything that would
// fail it instead of silently submitting a broken entry.
if (
  WORD.length < 1 ||
  WORD.length > 77 ||
  WORD.trim().length === 0 ||
  /\s/.test(WORD)
) {
  throw new Error(
    `entry must be a single word of 1-77 characters, got ${JSON.stringify(WORD)} (${WORD.length} chars)`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
