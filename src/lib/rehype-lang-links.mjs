// Markdown links such as "/guides/visa-exemption/" are written without a language.
// This prefixes them with the language folder the file lives in (content/<collection>/<lang>/).
const LANG_DIR = /[\\/]content[\\/](?:guides|news)[\\/]([a-z]{2})[\\/]/;
const HAS_LANG = /^\/[a-z]{2}\//;

export default function rehypeLangLinks() {
  return (tree, file) => {
    const match = String(file.path ?? file.history?.[0] ?? '').match(LANG_DIR);
    if (!match) return;
    const lang = match[1];
    const visit = (node) => {
      if (node.type === 'element' && node.tagName === 'a') {
        const href = node.properties?.href;
        if (typeof href === 'string' && href.startsWith('/') && !href.startsWith('//') && !HAS_LANG.test(href)) {
          node.properties.href = `/${lang}${href}`;
        }
      }
      node.children?.forEach(visit);
    };
    visit(tree);
  };
}
