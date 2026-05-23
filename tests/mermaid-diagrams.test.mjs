import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";

const laserSourcePage = await readFile(
  new URL("../src/pages/components/laser-source.mdx", import.meta.url),
  "utf8"
);
const packagingPage = await readFile(
  new URL("../src/pages/components/packaging.mdx", import.meta.url),
  "utf8"
);

function mermaidBlocks(source) {
  return Array.from(source.matchAll(/```mermaid\n([\s\S]*?)```/g), (match) => match[1]);
}

test("CPO packaging Mermaid diagrams keep package contents left-to-right", () => {
  const blocks = mermaidBlocks(packagingPage);
  const packageBlocks = blocks.filter((block) => block.includes("Package Substrate Boundary"));

  assert.equal(blocks.length, 2);
  assert.equal(packageBlocks.length, 2);
  for (const block of packageBlocks) {
    assert.match(
      block,
      /subgraph\s+\w+\s+\[[^\n]+\]\n\s+direction LR/,
      `package subgraph is missing an explicit left-to-right direction:\n${block}`
    );
  }
});

test("CPO light-source manufacturing overview uses readable stage cards", () => {
  assert.match(laserSourcePage, /<ol className="stage-list">/);
  assert.match(laserSourcePage, /InP 单晶生长与衬底制备/);
  assert.match(laserSourcePage, /外延生长/);
  assert.match(laserSourcePage, /波导、DFB 光栅与工艺容差/);
  assert.match(laserSourcePage, /电流注入、绝缘与电流约束/);
  assert.match(laserSourcePage, /解理、腔长与端面工程/);
  assert.match(laserSourcePage, /芯片测试、分档与可靠性筛选/);
});
