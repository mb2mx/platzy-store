import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.build();
   }

  ngOnInit(): void {
  }

  build(): void {
    this.form = this.formBuilder.group({
      email: ['',[Validators.required]],
      pwd: ['',[Validators.required]]
    });
  }

  register(event: Event): void {
    event.preventDefault();
    if (this.form.valid){
      const values= this.form.value;
      this.authService.register(values.email, values.pwd)
        .then( () => this.router.navigate(['/auth/login']));
    }
  }

}
