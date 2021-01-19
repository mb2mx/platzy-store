import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/service/product/product.service';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'action'];
  constructor(
    private productService: ProductService,
  ){

   }

  ngOnInit(): void {
    this.fetchGatAll();
  }

  fetchGatAll(): void {
    this.productService.getAll()
      .subscribe( products => {
        this.products=products;
      });
  }

  delete(id: string ): void{
    this.productService.delete(id)
      .subscribe(r => console.log(r) );
  }


}
