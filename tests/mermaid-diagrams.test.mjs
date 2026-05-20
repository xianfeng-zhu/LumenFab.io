import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";

const page = await readFile(
  new URL("../src/pages/components/laser-source.mdx", import.meta.url),
  "utf8"
);

function mermaidBlocks(source) {
  return Array.from(source.matchAll(/```mermaid\n([\s\S]*?)```/g), (match) => match[1]);
}

test("CPO light-source Mermaid diagrams keep package contents left-to-right", () => {
  const blocks = mermaidBlocks(page);
  const packageBlocks = blocks.filter((block) => block.includes("Package Substrate Boundary"));

  assert.equal(blocks.length, 3);
  assert.equal(packageBlocks.length, 2);
  assert.match(blocks[0], /RM\["In \/ P 原料"\]\s+-->\s+SUB\["InP 衬底"\]/);
  for (const block of packageBlocks) {
    assert.match(
      block,
      /subgraph\s+\w+\s+\[[^\n]+\]\n\s+direction LR/,
      `package subgraph is missing an explicit left-to-right direction:\n${block}`
    );
  }
});
