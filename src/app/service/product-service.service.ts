import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:8080/api/products');
  }
  getById(slug: number | string): Observable<Product> {
    return this.http.get<Product>('http://localhost:8080/api/products/' + slug);
  }
  addProduct(product: Product) {
    return this.http.post<Product>(
      'http://localhost:8080/api/products',
      product
    );
  }
  removeItem(slug: any): Observable<Product | {}> {
    return this.http.delete<Product | {}>(
      `http://localhost:8080/api/products/${slug}`
    );
  }
  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(
      `http://localhost:8080/api/products/${product.slug}`,
      product
    );
  }
}
