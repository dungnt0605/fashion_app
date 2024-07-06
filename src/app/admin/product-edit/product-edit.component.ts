import { routes } from './../../app.routes';
import { Component } from '@angular/core';
import { ProductServiceService } from '../../service/product-service.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, ReactiveFormsModule],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css',
})
export class ProductEditComponent {
  Product!: Product;
  // constructor(
  //   private route: ActivatedRoute,
  //   private router: Router,
  //   private productService: ProductServiceService
  // ) {
  //   this.route.params.subscribe((params) => {
  //     const id = params['id'];
  //     this.productService.getById(id).subscribe((p) => (this.Product = p));
  //   });
  // }
  // updateProduct(form: any) {
  //   this.productService.updateProduct(form.value).subscribe(() => {
  //     this.router.navigate(['/admin']);
  //   });
  // }

  //cách 1
  // productForm = new FormGroup({
  //   name: new FormControl('hyhy'),
  //   imageUrl: new FormControl('hyhy'),
  //   description: new FormControl('hyhy'),
  // });
  // cách 2
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private productService: ProductServiceService,
    private routes: Router
  ) {}
  async ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.productService.getById(id).subscribe((p) => {
        this.Product = p;
        console.log(p);

        this.productForm.patchValue(p);
      });
    });
  }

  productForm = this.formBuilder.group({
    name: ['Product 3'],
    imageUrl: ['https://picsum.photos/seed/picsum/500/300'],
    description: ['Product description'],
  });

  onSubmit() {
    this.productService
      .updateProduct({ ...this.Product, ...this.productForm.value } as Product)
      .subscribe(() => {
        console.log('Cập nhật thành công');
        this.routes.navigate(['/admin']);
      });
  }
}
