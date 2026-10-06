import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private cartService: CartService) {}

  addToCart(product: any) {
    this.cartService.addToCart(product);

    alert(product.name + ' added to cart');
  }

}