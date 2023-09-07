// src/lib/mdx/remarkTocHeadings.ts
import { visit } from "unist-util-visit";
import { slug } from "github-slugger";
import { toString } from "mdast-util-to-string";
import { remark } from "remark";
var remarkTocHeadings = () => (tree, file) => {
  const toc = [];
  visit(tree, "heading", (node) => {
    const textContent = toString(node);
    toc.push({
      value: textContent,
      url: "#" + slug(toString(node)),
      depth: node.depth
    });
  });
  file.data.toc = toc;
};
var extractTocHeadings = async (markdown) => (await remark().use(remarkTocHeadings).process(markdown)).data;

// contentlayer.config.ts
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
//# sourceMappingURL=compiled-contentlayer-config-3TBZ6SML.mjs.map
