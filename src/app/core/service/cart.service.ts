import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/model/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private products: Product[] = [];
  private cart = new BehaviorSubject<Product[]>([]);
  cart$= this.cart.asObservable();

  constructor() { }

 addCar(product: Product){
  this.products= [...this.products, product];
  this.cart.next(this.products);
 }
}
