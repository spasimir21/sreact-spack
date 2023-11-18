import { Request, Response, NextFunction } from 'express';
import { NestMiddleware } from '@nestjs/common';
import { createReadStream } from 'fs';
import * as fs from 'fs/promises';
import path from 'path';

function createStaticMiddleware(rootPath: string) {
  const requestHandler = async (req: Request, res: Response, next: NextFunction) => {
    if (req.method !== 'GET' && req.method !== 'HEAD') return next();

    try {
      const filePath = path.join(rootPath, req.path);
      const stat = await fs.stat(filePath);
      if (!stat.isFile()) return next();
      createReadStream(filePath).pipe(res);
    } catch (error) {
      next();
    }
  };

  return class implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
      // @ts-ignore
      const pathname = req._parsedUrl.pathname;

      requestHandler(
        new Proxy(req, {
          get: (_, key) => {
            if (key === 'path') return pathname;
            // @ts-ignore
            return req[key];
          }
        }),
        res,
        next
      );
    }
  };
}

export { createStaticMiddleware };
