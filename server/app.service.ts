import { Injectable } from '@nestjs/common';

@Injectable()
class AppService {
  async getItemSSRData(itemName: string) {
    return { itemName };
  }
}

export { AppService };
