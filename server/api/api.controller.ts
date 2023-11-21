import { Controller, Get, Inject } from '@nestjs/common';
import { ApiService } from './api.service';

@Controller('/api')
class ApiController {
  constructor(@Inject(ApiService) private readonly apiService: ApiService) {}

  @Get('/products')
  async getProducts() {
    return await this.apiService.getProducts();
  }
}

export { ApiController };
