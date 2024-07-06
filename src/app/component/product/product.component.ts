import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductServiceService } from '../../service/product-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
})
export class ProductComponent {
  // @Input() product!: Product;
  // @Output() onRemove = new EventEmitter<string>();
  // @Output() onUpdate = new EventEmitter<Product>();
  // showInfor(name: string) {
  //   this.onRemove.emit(name);
  // }
  // showInfor2(pro: Product) {
  //   this.onUpdate.emit(pro);
  // }
  Products!: Product[];
  constructor(private productService: ProductServiceService) {
    this.productService.getAll().subscribe((pro) => {
      this.Products = pro;
      // console.log(pro);
    });
  }
  removeItem(id: any) {
    const com = window.confirm('Are you sure you want to Delete ???');
    if (com) {
      this.productService.removeItem(id).subscribe(() => {
        alert('Deleted successfully ^^');
        this.Products = this.Products.filter((product) => product.id !== id);
      });
    }
  }
  updateProduct(product: Product) {
    const com = window.confirm('Are you sure you want to update ??');
    if (com) {
      this.productService.updateProduct(product).subscribe((p) => {
        this.Products = this.Products.map((product) =>
          product.id == p.id ? product : p
        );
      });
    }
  }
}
