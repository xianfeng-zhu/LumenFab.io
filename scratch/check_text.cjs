const fs = require('fs');

const html = fs.readFileSync('/Users/zhuxianfeng/dev/codes/LumenFab.io/dist/components/laser-source/index.html', 'utf8');

// Find pre blocks with data-language="mermaid"
const preRegex = /<pre[^>]*data-language="mermaid"[^>]*>([\s\S]*?)<\/pre>/g;
let match;
while ((match = preRegex.exec(html)) !== null) {
  let content = match[1];
  
  // Extract text inside <code> if it exists
  const codeMatch = /<code[^>]*>([\s\S]*?)<\/code>/.exec(content);
  if (codeMatch) {
    content = codeMatch[1];
  }

  // Strip all HTML tags like <span style="..."> or </span>
  let text = content.replace(/<[^>]+>/g, '');
  
  // Decode HTML entities
  text = text
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&#39;/g, "'");

  console.log("--- EXTRACTED MERMAID CONTENT ---");
  console.log(JSON.stringify(text));
  console.log(text);
  console.log("---------------------------------");
}
