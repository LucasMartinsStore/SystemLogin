import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  registerForm = this.formBuilder.group({
    username: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(50)],
    ],
    email: ['', [Validators.required, Validators.email]],
    cpf: ['', [Validators.required, Validators.pattern(/^\d{11}$/)]],
    password: [
      '',
      [Validators.required, Validators.minLength(6), Validators.maxLength(20)],
    ],
    birthday: ['', [Validators.required]],
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}
}
