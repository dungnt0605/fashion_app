import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { ProductServiceService } from '../../service/product-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css',
})
export class ProductAddComponent {
  constructor(
    private router: Router,
    private productService: ProductServiceService
  ) {}
  addProduct(form: any) {
    this.productService
      .addProduct(form.value)
      .subscribe(() => this.router.navigate(['/admin']));
  }
}
