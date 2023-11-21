import { IndexTemplate, parseIndexTemplate, layoutToTemplate } from '@lib/server/ssr';
import { CenteredLayout } from '@app/layouts/CenteredLayout';
import { Inject, Injectable } from '@nestjs/common';
import { CONFIG } from '@lib/server/config';
import { Config } from './config';
import * as fs from 'fs/promises';
import path from 'path';

const LAYOUTS = {
  centered: <CenteredLayout />
} as const;

type Templates<T extends string> = Record<T | 'root', IndexTemplate>;

@Injectable()
class TemplateService {
  public readonly templates = {} as Templates<keyof typeof LAYOUTS>;
  private _indexSource: string = '';

  get indexSource(): string {
    return this._indexSource;
  }

  constructor(@Inject(CONFIG) private readonly config: Config) {}

  async loadTemplates() {
    const indexPath = path.join(this.config.appDist, 'index.html');
    this._indexSource = (await fs.readFile(indexPath)).toString();

    this.templates.root = parseIndexTemplate(this._indexSource);

    for (const layoutName in LAYOUTS)
      (this.templates as any)[layoutName] = layoutToTemplate(this.templates.root, (LAYOUTS as any)[layoutName]);
  }
}

export { TemplateService };
