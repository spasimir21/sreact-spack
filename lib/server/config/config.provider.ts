import { Provider } from '@nestjs/common';
import { readFile } from 'fs/promises';
import * as yaml from 'yaml';

const CONFIG = Symbol('CONFIG');

async function loadConfig<T>(path: string): Promise<T> {
  const source = await readFile(path);
  return yaml.parse(source.toString());
}

function ConfigProvider<T>(path: string): Provider<Promise<T>> {
  return {
    provide: CONFIG,
    useFactory: () => loadConfig<T>(path)
  };
}

export { ConfigProvider, CONFIG };
