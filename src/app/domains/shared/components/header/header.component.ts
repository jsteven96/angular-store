import { Component, inject, signal } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  private cartService = inject(CartService);
  cart = this.cartService.cart;
  total = this.cartService.total;

  hideSiteMenu = signal(true);

  toogleSiteMenu(){
    this.hideSiteMenu.update(prevState => !prevState);
  }

}
