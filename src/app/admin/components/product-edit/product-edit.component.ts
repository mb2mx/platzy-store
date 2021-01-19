import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductService } from 'src/app/core/service/product/product.service';
import { MyValidators } from 'src/app/utils/Validator';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})

export class ProductEditComponent implements OnInit {
  form: FormGroup;
  id: string;
  
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { 
    this.build();
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((p: Params)  => {
      this.id = p.id;
      this.productService.getOne(this.id).subscribe( product => {
        this.form.patchValue(product);
      });
    });
  }

  update (event : Event): void{
    event.preventDefault();
    if (this.form.valid){
      const product= this.form.value;
      this.productService.update(this.id, product)
      .subscribe(p => {
        console.log(p);
        this.router.navigate(['/admin/products']);
        }
      );

    }
  }

  build(): void {
    this.form= this.formBuilder.group({
      id: ['',[Validators.required]],
      title: ['',[Validators.required]],
      price: ['',[Validators.required,  MyValidators.isPricevalid]],
      image: '',
      description: ['',[Validators.required]]
    });

  }

}
