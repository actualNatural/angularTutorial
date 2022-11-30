import { Component, OnInit } from '@angular/core';
import { friends, wishlist } from '../products';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent {
  friends = [...friends];
  wishlist = [...wishlist];
}





