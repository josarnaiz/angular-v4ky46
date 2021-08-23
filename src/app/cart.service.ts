import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './products';
import { Price } from './price';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  constructor(
    private http: HttpClient
  ) { }

  addToCart(product: Product) {
    this.items.push(product);
  }

  removeFromCart(product: Product) {
    var index = this.items.findIndex(p => p.id === product.id);
    this.items.splice(index, 1);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<Price[]>('/assets/shipping.json');
  }

}