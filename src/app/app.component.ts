import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from './component/product/product.component';
import { AddProductComponent } from './component/add-product/add-product.component';
import { ProductServiceService } from './service/product-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    CommonModule,
    ProductComponent,
    AddProductComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  // isDataView = true;
  // isS = true;
  // isGrid = true;
  // Product!: Product[];
  // constructor(private productService: ProductServiceService) {
  //   this.Product = this.productService.Product;
  // }
  // getAll(Product: Product) {
  //   console.log(Product);
  // }
  // change() {}
  // addchange(e: any) {
  //   // this.Product.age = e.target.value;
  // }
  // remove(id: String) {
  //   const con = window.confirm('Bạn muốn Xóa ??');
  //   if (con) {
  //     this.Product = this.Product.filter((p) => p.id !== id);
  //   }
  // }
  // selectedProduct: Product | undefined = undefined;
  // edit(id: String) {
  //   // this.isGrid = !this.isGrid;
  //   // if (!this.isGrid) {
  //   this.selectedProduct = this.Product.find((p) => p.id == id || null);
  //   // }
  // }
  // onHandleRomve(name: string) {
  //   console.log(name);
  // }
  // onHandleUpdate(pro: Product) {
  //   console.log(pro);
  // }
  // onHandleAdd(product: Product) {
  //   this.Product.push(product);
  // }
}
