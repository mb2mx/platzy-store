import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/core/service/product/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
    )
  { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) =>{
      const id = params.id;
      //this.product = this.productService.getOne(id);
      this.fetchGetOne(id);
    });

  }

  fetchGetOne(id: string): void{
    this.productService.getOne(id)
    .subscribe(product => {
        this.product = product;
      })
  }

}
