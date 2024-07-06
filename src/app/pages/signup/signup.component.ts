import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
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
    this.AuthService.signup(formValue).subscribe((u) => {
      alert('Đăng ký thành công ^^ , Vui lòng Đăng Nhập :3 ');
      console.log(u);
      this.route.navigate(['/signin']);
    });
  }
}
