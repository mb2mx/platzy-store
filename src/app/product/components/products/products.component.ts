import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/service/product/product.service';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.fetchGetAll();
  }

  productClicked(id: number): void{
    console.log(id);
  }

  fetchGetAll(): void {
    this.productService.getAll()
      .subscribe(products =>{
       this.products= products;
      });
  }

}
