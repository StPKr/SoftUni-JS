import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(5)]),
    email: new FormControl('', [Validators.required]),
    tel: new FormControl(''),

    //TODO put passwords in group
    password: new FormControl('', [Validators.required]),
    rePassword: new FormControl('', [Validators.required]),
  });

  register() {
    if (this.form.invalid) {
      return;
    }

    console.log(this.form.value);
  }
}
