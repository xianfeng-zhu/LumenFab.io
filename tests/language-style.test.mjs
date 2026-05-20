import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import { extname, join } from "node:path";
import test from "node:test";

const root = new URL("../", import.meta.url).pathname;
const checkedExtensions = new Set([
  ".astro",
  ".css",
  ".js",
  ".md",
  ".mdx",
  ".mjs",
  ".ts"
]);
const skippedDirectories = new Set([".astro", ".git", "dist", "node_modules"]);
const skippedFiles = new Set(["package-lock.json"]);

const negative = "不" + "是";
const notOnly = "不只" + "是";
const positiveTurn = "而" + "是";
const reverseTurn = "而" + negative;
const bannedPatterns = [
  new RegExp(`${negative}[^\\n。；]*${positiveTurn}`),
  new RegExp(`${notOnly}[^\\n。；]*${positiveTurn}`),
  new RegExp(`并${negative}[^\\n。；]*${positiveTurn}`),
  new RegExp(`并非[^\\n。；]*${positiveTurn}`),
  new RegExp(`${negative}[^\\n。；]*也${negative}`),
  new RegExp(reverseTurn)
];

async function collectTextFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      if (!skippedDirectories.has(entry.name)) {
        files.push(...(await collectTextFiles(path)));
      }
      continue;
    }

    if (!skippedFiles.has(entry.name) && checkedExtensions.has(extname(entry.name))) {
      files.push(path);
    }
  }

  return files;
}

test("project prose avoids paired negative correction style", async () => {
  const files = await collectTextFiles(root);
  const failures = [];

  for (const file of files) {
    const source = await readFile(file, "utf8");
    const lines = source.split("\n");

    for (const [index, line] of lines.entries()) {
      if (bannedPatterns.some((pattern) => pattern.test(line))) {
        failures.push(`${file.replace(root, "")}:${index + 1}: ${line.trim()}`);
      }
    }
  }

  assert.deepEqual(failures, []);
});
