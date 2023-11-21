import { IProduct } from '../types/IProduct';
import { Injectable } from '@nestjs/common';

@Injectable()
class ApiService {
  async getProducts(): Promise<IProduct[]> {
    return [
      { id: '1', name: 'Product #1', description: 'Description #1' },
      { id: '2', name: 'Product #2', description: 'Description #2' },
      { id: '3', name: 'Product #3', description: 'Description #3' }
    ];
  }
}

export { ApiService };
