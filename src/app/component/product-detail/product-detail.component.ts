import { ProductServiceService } from './../../service/product-service.service';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  // @Input('product') data!: Product;
  Product!: Product;
  constructor(
    private router: ActivatedRoute,
    private ProductService: ProductServiceService
  ) {
    //cách 1
    // this.router.paramMap.subscribe((param) => console.log(param.get('id')));
    //cách 2
    this.router.params.subscribe((param) => {
      const id = param['id'];
      this.ProductService.getById(id).subscribe(
        (product) => (this.Product = product)
      );
    });
    //cách 3
    // console.log(this.router.snapshot.params['id']); // chỉ in ra đc 1 lần duy nhất
  }
}
