// contentlayer.config.ts
import { extractTocHeadings } from "@/lib/mdx";
import { makeSource, defineDocumentType } from "@contentlayer/source-files";
import remarkGfm from "remark-gfm";
import remarkSectionize from "remark-sectionize";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrism from "rehype-prism-plus";
import rehypePresetMinify from "rehype-preset-minify";
var computedFields = {
  toc: { type: "json", resolve: (doc) => extractTocHeadings(doc.body.raw) },
  slug: {
    type: "string",
    resolve: (doc) => `/writing/${doc._raw.sourceFileName.replace(/\.mdx$/, "")}`
  }
};
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "**/*.md",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    published: { type: "string", required: true }
  },
  computedFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm, remarkSectionize],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      rehypePrism,
      rehypePresetMinify,
      [rehypeAutolinkHeadings, { properties: { className: ["anchor"] } }]
    ]
  }
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-32FSIVW5.mjs.map
