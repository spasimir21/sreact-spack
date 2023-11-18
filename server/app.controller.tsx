import { Controller, Get, Header, Inject, Param } from '@nestjs/common';
import { SSRService } from '@lib/server/ssr';
import { AppService } from './app.service';
import { Item } from '@app/pages/Item';
import React from 'react';

@Controller()
class AppController {
  constructor(
    @Inject(SSRService) private readonly ssrService: SSRService,
    @Inject(AppService) private readonly appService: AppService
  ) {}

  @Get('/item/:name')
  @Header('Content-Type', 'text/html')
  async item(@Param('name') itemName: string) {
    const data = await this.appService.getItemSSRData(itemName);
    return this.ssrService.render(<Item />, data.ssrData, data.metadata);
  }

  @Get('/*')
  @Header('Content-Type', 'text/html')
  fallbackHandler() {
    return this.ssrService.indexSource;
  }
}

export { AppController };
