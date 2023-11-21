import { Inject, Injectable } from '@nestjs/common';
import { ApiService } from './api.service';

@Injectable()
class SSRService {
  constructor(@Inject(ApiService) private readonly apiService: ApiService) {}

  async getProductsSSRData() {
    return { products: await this.apiService.getProducts() };
  }
}

export { SSRService };
