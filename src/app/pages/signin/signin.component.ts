import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule , RouterLink],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
})
export class SigninComponent {
  formBuilder = inject(FormBuilder);
  AuthService = inject(AuthService);
  route = inject(Router);
  form = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  async onSubmit() {
    if (this.form.invalid) return;
    const formValue = this.form.value as { email: string; password: string };
    this.AuthService.signin(formValue).subscribe((u) => {
      alert('Đăng nhập thành công ^^ ');
      console.log(u);
      this.route.navigate(['/']);
    });
  }
}
