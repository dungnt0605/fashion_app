import { Component } from '@angular/core';
import { ProductServiceService } from '../../service/product-service.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  Products!: Product[];
  constructor(private productService: ProductServiceService) {
    this.productService.getAll().subscribe((p) => (this.Products = p));
  }
  remove(id: string | number) {
    this.productService
      .removeItem(id)
      .subscribe(
        () => (this.Products = this.Products.filter((pro) => id !== pro.id))
      );
  }
}
