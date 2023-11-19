import { IndexTemplate, renderIndexTemplate } from './template';
import { GLOBAL_SSR_DATA_STACK } from './SSRDataStack';
import { renderToString } from 'react-dom/server';
import { getMetaTags } from './metadata';
import { ReactElement } from 'react';

interface SSRRenderOptions<TData> {
  template: IndexTemplate;
  element: ReactElement;
  data: TData;
  title: string;
  meta?: readonly (readonly [string, string])[];
}

function renderSSR<TData>(options: SSRRenderOptions<TData>) {
  GLOBAL_SSR_DATA_STACK.push(options.data);
  const content = renderToString(options.element);
  GLOBAL_SSR_DATA_STACK.pop();

  const metaTags = options.meta ? getMetaTags(options.meta) : '';

  const headTags = metaTags + `<script id="ssr-data" type="application/json">${JSON.stringify(options.data)}</script>`;

  return renderIndexTemplate(options.template, options.title, headTags, content);
}

export { renderSSR, SSRRenderOptions };
