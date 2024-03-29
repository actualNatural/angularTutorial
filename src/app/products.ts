export interface Products {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens'
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras'
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: ''
  }
];

export interface Friends {
  id: number;
  name: string;
}

export const friends =[
  {
    id: 1,
    name: 'Bob Sagget'
  },
  {
    id: 2,
    name: 'Rick Ross'
  }
  
]

export interface WishList {
  id: number;
  name: string;
  price: number;
}

export const wishlist =[
  {
    id:1,
    name: '',
    price: 300
  }
  
]

export interface User{
  id:number;
  username:string;
  password: string;
}

export const user = [
  
  {
    id:1,
    username: 'Kenneth',
    password: 'Ken123',
  }

]




/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/