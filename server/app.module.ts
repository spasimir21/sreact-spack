import { CONFIG, ConfigProvider } from '@lib/server/config';
import { AppController } from './app.controller';
import { Inject, Module } from '@nestjs/common';
import { SSRService } from '@lib/server/ssr';
import { AppService } from './app.service';
import { Config } from './config';
import * as fs from 'fs/promises';
import path from 'path';

@Module({
  controllers: [AppController],
  providers: [ConfigProvider('./config.yml'), SSRService, AppService]
})
class AppModule {
  constructor(
    @Inject(CONFIG) private readonly config: Config,
    @Inject(SSRService) private readonly ssrService: SSRService
  ) {}

  async onModuleInit() {
    const indexPath = path.join(this.config.appDist, 'index.html');
    const indexSource = (await fs.readFile(indexPath)).toString();

    this.ssrService.loadSSRIndex(indexSource);
  }
}

export { AppModule };
