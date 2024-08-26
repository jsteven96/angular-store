import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  httpClient = inject(HttpClient);

  constructor() {

  }

  getProducts(){
    return this.httpClient.get<Product[]>('https://api.escuelajs.co/api/v1/products').pipe(
      map(products => 
        products.map(product => ({
          ...product,
          images: product.images.map(_ => 
            `https://picsum.photos/640/640?r=${product.id}`
          )
        }))
      )
    );
  }

}
