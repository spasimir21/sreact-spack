import { TemplateService } from './template.service';
import { ConfigProvider } from '@lib/server/config';
import { AppController } from './app.controller';
import { Inject, Module } from '@nestjs/common';
import { AppService } from './app.service';

@Module({
  controllers: [AppController],
  providers: [ConfigProvider('./config.yml'), AppService, TemplateService]
})
class AppModule {
  constructor(@Inject(TemplateService) private readonly templateService: TemplateService) {}

  async onModuleInit() {
    await this.templateService.loadTemplates();
  }
}

export { AppModule };

