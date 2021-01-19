import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  email: FormControl;

  constructor() {
    this.email = new FormControl(
      'uriel@', 
      [Validators.required,
      Validators.minLength(4),
      Validators.maxLength(10),
      Validators.email ]);

    this.email.valueChanges.subscribe(value => console.log(value));
   }

  ngOnInit(): void {
  }

  send(): void {
    if (this.email.valid){
      console.log(this.email.value);
    }
  }

}
