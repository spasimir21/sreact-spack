import { PageMetadata } from '@lib/server/ssr';
import { Injectable } from '@nestjs/common';

@Injectable()
class AppService {
  async getItemSSRData(itemName: string) {
    const metadata: PageMetadata = {
      title: `Item - ${itemName}`,
      meta: [
        ['author', 'Spasimir Pavlov'],
        ['item:name', itemName]
      ]
    };

    return {
      ssrData: { itemName },
      metadata
    };
  }
}

export { AppService };
