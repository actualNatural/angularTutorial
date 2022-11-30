import { Component } from '@angular/core';
import { friends, wishlist, Friends } from '../products';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent {
  friends = [...friends];
  wishlist = [...wishlist];
  products = [...products];

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  addToCart(friends: Friends) {
    this.cartService.addToCart(friends);
    window.alert('Your product has been added to the cart!');
  }
}





