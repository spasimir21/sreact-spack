import { parse as parseHTML } from 'node-html-parser';
import { renderToString } from 'react-dom/server';
import { IndexTemplate } from './template';
import { ReactElement } from 'react';

function layoutToTemplate(parentTemplate: IndexTemplate, layout: ReactElement) {
  const template = [...parentTemplate] as IndexTemplate;

  const layoutHtmlString = renderToString(layout);
  const layoutHtml = parseHTML(layoutHtmlString);

  const layoutContent = layoutHtml.querySelector('#layout-content')!;
  const [contentStart, contentEnd] = layoutContent.range;

  template[2] += layoutHtmlString.slice(0, contentStart);
  template[3] = layoutHtmlString.slice(contentEnd) + template[3];

  return template;
}

export { layoutToTemplate };
