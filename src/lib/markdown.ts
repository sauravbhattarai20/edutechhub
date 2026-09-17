import { marked } from 'marked';

/**
 * Custom renderer to attach IDs to h2 and h3 headings for Table of Contents navigation
 */
const renderer = new marked.Renderer();

renderer.heading = function ({ tokens, depth }) {
  const text = this.parser.parseInline(tokens);
  const plainText = text.replace(/<[^>]*>/g, '');
  const id = plainText
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');

  return `<h${depth} id="${id}">${text}</h${depth}>\n`;
};

marked.setOptions({
  renderer,
  gfm: true,
  breaks: false,
});

export async function renderMarkdownToHtml(markdown: string): Promise<string> {
  return marked.parse(markdown);
}
