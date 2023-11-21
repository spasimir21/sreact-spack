import { TemplateService } from './template.service';
import { ConfigProvider } from '@lib/server/config';
import { ApiController } from './api.controller';
import { SSRController } from './ssr.controller';
import { Inject, Module } from '@nestjs/common';
import { ApiService } from './api.service';
import { SSRService } from './ssr.service';

@Module({
  controllers: [SSRController, ApiController],
  providers: [ConfigProvider('./config.yml'), ApiService, SSRService, TemplateService]
})
class AppModule {
  constructor(@Inject(TemplateService) private readonly templateService: TemplateService) {}

  async onModuleInit() {
    await this.templateService.loadTemplates();
  }
}

export { AppModule };

