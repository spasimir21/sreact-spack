import { Controller, Get, Header, Inject } from '@nestjs/common';
import { TemplateService } from './template.service';
import { renderSSR } from '@lib/server/ssr';
import { SSRService } from './ssr.service';
import Products from '@app/pages/Products';
import React from 'react';

@Controller()
class SSRController {
  constructor(
    @Inject(TemplateService) private readonly templateService: TemplateService,
    @Inject(SSRService) private readonly ssrService: SSRService
  ) {}

  @Get('/products')
  @Header('Content-Type', 'text/html')
  async products() {
    const data = await this.ssrService.getProductsSSRData();

    return renderSSR({
      template: this.templateService.templates.centered,
      element: <Products />,
      data,
      title: `Products`
    });
  }

  @Get('/*')
  @Header('Content-Type', 'text/html')
  fallbackHandler() {
    return this.templateService.indexSource;
  }
}

export { SSRController };
