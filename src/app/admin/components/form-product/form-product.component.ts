import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/core/service/product/product.service';
import { MyValidators } from 'src/app/utils/Validator';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {
  form: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) { 
    this.build();
  }

  ngOnInit(): void {
  }

  save (event : Event): void{
    event.preventDefault();
    if (this.form.valid){
      const product= this.form.value;
      this.productService.create(product)
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
