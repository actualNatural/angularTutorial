import { Friends } from './products';
import { Injectable } from '@angular/core';
/* . . . */
@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Friends[] = [];
/* . . . */

  addToCart(friends: Friends) {
    this.items.push(friends);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
/* . . . */
}
