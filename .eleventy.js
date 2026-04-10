export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    "./_artefacts/style.css": "./style.css",
  });
  eleventyConfig.addWatchTarget("./assets/tailwind.css");
  eleventyConfig.addWatchTarget("./_artefacts/style.css");
}
