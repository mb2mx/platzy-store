import { Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChange } from '@angular/core';
import { CartService } from 'src/app/core/service/cart.service';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, DoCheck, OnDestroy {
  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();


  constructor(
    private cartService: CartService
    ) {
    console.log('1.-Constructor ');
  }

  // ngOnChanges(changes: SimpleChange): void {
  //   console.log('2.-change');
  //   console.log(changes);
  // }

  ngDoCheck(): void{
     console.log('2.-doCheck');
  }

  ngOnInit(): void {
    console.log('3.-ngOnInit');

  }

  ngOnDestroy(): void{
    console.log('4.-ngOnInit');
  }

  addCar(): void{
    console.log('Add carrito');
    //this.productClicked.emit(this.product.id);
    this.cartService.addCar(this.product);
  }
}
