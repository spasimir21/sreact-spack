import { parse as parseHTML, HTMLElement } from 'node-html-parser';

type IndexTemplate = [string, string, string, string];

const renderIndexTemplate = (template: IndexTemplate, title: string, headTags: string, content: string) =>
  template[0] + headTags + template[1] + title + template[2] + content + template[3];

function parseIndexTemplate(indexSource: string): IndexTemplate {
  const indexHtml = parseHTML(indexSource);

  const head = indexHtml.querySelector('head')!;
  head.insertAdjacentHTML('afterbegin', '$SSR_HEAD$');

  const title = indexHtml.querySelector('title') ?? head.appendChild(new HTMLElement('title', {}));
  title.set_content('$SSR_TITLE$');

  const root = indexHtml.querySelector('#root')!;
  root.set_content('$SSR_ROOT$');

  const html = indexHtml.toString();

  return html.split(/\$SSR_(?:HEAD|TITLE|ROOT)\$/) as IndexTemplate;
}

export { IndexTemplate, renderIndexTemplate, parseIndexTemplate };
