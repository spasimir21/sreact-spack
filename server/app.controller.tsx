import { Controller, Get, Header, Inject, Param } from '@nestjs/common';
import { TemplateService } from './template.service';
import { renderSSR } from '@lib/server/ssr';
import { AppService } from './app.service';
import { Item } from '@app/pages/Item';
import React from 'react';

@Controller()
class AppController {
  constructor(
    @Inject(TemplateService) private readonly templateService: TemplateService,
    @Inject(AppService) private readonly appService: AppService
  ) {}

  @Get('/item/:name')
  @Header('Content-Type', 'text/html')
  async item(@Param('name') itemName: string) {
    const data = await this.appService.getItemSSRData(itemName);

    return renderSSR({
      template: this.templateService.templates.main,
      element: <Item />,
      data,
      title: `Item - ${itemName}`,
      meta: [
        ['author', 'Spasimir Pavlov'],
        ['item:name', itemName]
      ]
    });
  }

  @Get('/*')
  @Header('Content-Type', 'text/html')
  fallbackHandler() {
    return this.templateService.indexSource;
  }
}

export { AppController };
