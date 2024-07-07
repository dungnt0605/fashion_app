import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { ProductServiceService } from '../../service/product-service.service';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css',
})
export class ProductAddComponent {
  constructor(
    private router: Router,
    private productService: ProductServiceService,
    private formbuilder: FormBuilder
  ) {}
  form = this.formbuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    gallery: ['', [Validators.required]],
    category: ['', [Validators.required]],
    price: [0, Validators.required],
    discount: [0],
    description: [''],
  });

  addProduct() {
    if (this.form.invalid) return;
    this.productService.addProduct(this.form.value as Product).subscribe(() => {
      alert('Thêm thành công ^^');
      this.router.navigate(['/admin/dashboard']);
    });
  }
}
