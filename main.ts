// The Word You'd Delete From the Dictionary — @berkahmuse entry.
//
// This program answers the bounty with a single word and writes it to
// /output/entry.txt. The word it picks is "Monday": erase it from the
// dictionary and the week simply starts on Tuesday. The joke is the gap
// the word leaves behind — everybody knows what Monday means, and
// everybody has wanted it gone at least once.
import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;

// The competition only allows one word, 1-77 characters, no whitespace.
const MAX_WORD_LENGTH = 77;

// Candidates we considered, in order of preference. The first one that
// passes every rule below is the entry. "Monday" wins: a weekday everyone
// dreads, and deleting it deletes the dread with it.
const CANDIDATES = ["Monday", "Tuesday", "Homework"];

function isSingleWord(text: string): boolean {
  return text.length >= 1 && text.length <= MAX_WORD_LENGTH && !/\s/.test(text);
}

function pickWord(candidates: readonly string[]): string {
  for (const candidate of candidates) {
    if (isSingleWord(candidate)) {
      return candidate;
    }
  }
  throw new Error("no candidate word satisfies the entry rules");
}

const word = pickWord(CANDIDATES);

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, word, "utf8");
