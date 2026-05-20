const fs = require('fs');
const { JSDOM } = require('jsdom');

const html = fs.readFileSync('/Users/zhuxianfeng/dev/codes/LumenFab.io/dist/components/laser-source/index.html', 'utf8');
const dom = new JSDOM(html);
const doc = dom.window.document;

const preElements = doc.querySelectorAll("pre");
for (const pre of preElements) {
  const code = pre.querySelector("code");
  const isMermaid =
    pre.classList.contains("language-mermaid") ||
    (code && code.classList.contains("language-mermaid")) ||
    pre.getAttribute("data-language") === "mermaid" ||
    pre.getAttribute("data-lang") === "mermaid";

  if (isMermaid) {
    const content = code ? code.textContent : pre.textContent;
    console.log("--- MERMAID CONTENT ---");
    console.log(JSON.stringify(content));
    console.log(content);
    console.log("------------------------");
  }
}
