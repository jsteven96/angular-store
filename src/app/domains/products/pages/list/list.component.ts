import { Component, inject, OnInit, signal } from '@angular/core';
import { ProductComponent } from '@products/components/product/product.component';
import { Product } from '@shared/models/product.model'; 
import { HeaderComponent } from '@shared/components/header/header.component'; 
import { CartService } from '@shared/services/cart.service'; 
import { ProductService } from '@shared/services/product.service'; 

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  
  products = signal<Product[]>([]);
  private cartService = inject(CartService);
  selectedProducts = signal<Product[]>([]);
  productService = inject(ProductService);

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products.set(products);
      },
      error: (error) => {
        console.error(error);
      }
    })
  }


  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
