import { TemplateService } from './template/template.service';
import { ApiController } from './api/api.controller';
import { SSRController } from './ssr/ssr.controller';
import { ConfigProvider } from '@lib/server/config';
import { Inject, Module } from '@nestjs/common';
import { SSRService } from './ssr/ssr.service';
import { ApiService } from './api/api.service';

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

