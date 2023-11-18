import { IndexTemplate, fillIndexTemplate, toIndexTemplate } from './template';
import { PageMetadata, getMetaTags } from './metadata';
import { GLOBAL_SSR_DATA_STACK } from './SSRDataStack';
import { renderToString } from 'react-dom/server';
import { Injectable } from '@nestjs/common';
import { ReactElement } from 'react';

@Injectable()
class SSRService {
  private indexTemplate: IndexTemplate = ['', '', '', ''];
  private _indexSource: string = '';

  get indexSource() {
    return this._indexSource;
  }

  loadSSRIndex(indexSource: string) {
    this.indexTemplate = toIndexTemplate(indexSource);
    this._indexSource = indexSource;
  }

  render(element: ReactElement, ssrData: any, metadata: PageMetadata) {
    GLOBAL_SSR_DATA_STACK.push(ssrData);
    const content = renderToString(element);
    GLOBAL_SSR_DATA_STACK.pop();

    const headTags =
      getMetaTags(metadata) + `<script id="ssr-data" type="application/json">${JSON.stringify(ssrData)}</script>`;

    return fillIndexTemplate(this.indexTemplate, metadata.title, headTags, content);
  }
}

export { SSRService };
