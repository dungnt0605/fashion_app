import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductServiceService } from '../../service/product-service.service';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent {
  // @Output() onAdd = new EventEmitter<Product>();

  // ins = true;
  constructor(private productService: ProductServiceService) {}
  addProduct(form: any) {
    this.productService.addProduct(form.value).subscribe(() => {
      form.reset();
      alert('Product added successfully ^^');
    });
  }
}
