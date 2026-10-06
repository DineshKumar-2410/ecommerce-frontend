import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products = [
    {
      id: 1,
      name: 'Laptop',
      price: 55000,
      image: 'https://via.placeholder.com/300'
    },
    {
      id: 2,
      name: 'Phone',
      price: 25000,
      image: 'https://via.placeholder.com/300'
    },
    {
      id: 3,
      name: 'Headphones',
      price: 3000,
      image: 'https://via.placeholder.com/300'
    }
  ];

  getProducts() {
    return this.products;
  }

  getProduct(id: number) {
    return this.products.find(product => product.id == id);
  }
}