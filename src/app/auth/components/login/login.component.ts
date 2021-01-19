import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
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

  login(event: Event): void{
    event.preventDefault();
    if (this.form.valid){
      const value= this.form.value;
      this.authService.login(value.email, value.pwd)
      .then(() => this.router.navigate(['/admin/nav']))
      .catch(() => alert('user o password invalido'));
    }

  }

}
