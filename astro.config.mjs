import mdx from "@astrojs/mdx";
import { defineConfig } from "astro/config";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isProjectPage =
  process.env.GITHUB_ACTIONS === "true" &&
  repoName.length > 0 &&
  !repoName.endsWith(".github.io");

export default defineConfig({
  site: process.env.SITE,
  base: process.env.ASTRO_BASE ?? (isProjectPage ? `/${repoName}` : "/"),
  integrations: [mdx()]
});
