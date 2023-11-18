interface PageMetadata {
  title: string;
  meta: [string, string][];
}

const getMetaTags = (metadata: PageMetadata) =>
  metadata.meta
    .map(([name, content]) => `<meta name=${JSON.stringify(name)} content=${JSON.stringify(content)} />`)
    .join('\n');

export { PageMetadata, getMetaTags };
