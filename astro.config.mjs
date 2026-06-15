import mdx from "@astrojs/mdx";
import { defineConfig } from "astro/config";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isProjectPage =
  process.env.GITHUB_ACTIONS === "true" &&
  repoName.length > 0 &&
  !repoName.endsWith(".github.io");

export default defineConfig({
  site: process.env.SITE,
  base: process.env.ASTRO_BASE ?? (isProjectPage ? `/${repoName}` : "/"),
  markdown: {
    shikiConfig: {
      theme: "github-light"
    }
  },
  integrations: [
    mdx({
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, {
          behavior: "append",
          properties: {
            className: ["heading-anchor"],
            ariaHidden: "true",
            tabIndex: -1,
          },
          content: {
            type: "text",
            value: " #"
          }
        }]
      ]
    })
  ]
});
