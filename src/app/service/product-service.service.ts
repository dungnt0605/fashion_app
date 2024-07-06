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
  getById(id: number | string): Observable<Product> {
    return this.http.get<Product>('http://localhost:3000/Products/' + id);
  }
  addProduct(product: Product) {
    return this.http.post<Product>('http://localhost:3000/Products/', product);
  }
  removeItem(id: any): Observable<Product | {}> {
    return this.http.delete<Product | {}>(
      `http://localhost:3000/Products/${id}`
    );
  }
  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(
      `http://localhost:3000/Products/${product.id}`,
      product
    );
  }
}
