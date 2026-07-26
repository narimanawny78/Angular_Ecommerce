import { Component, inject } from '@angular/core';
import { BackButtonComponent } from "../../components/back-button/back-button.component";
import { EcommerceStore } from '../../store/ecommerce.store';
import { ProductCardComponent } from "../../components/product-card/product-card.component";

@Component({
  selector: 'app-my-wishlist',
  imports: [BackButtonComponent, ProductCardComponent],
  templateUrl: './my-wishlist.component.html',
  styleUrl: './my-wishlist.component.scss',
})
export default class MyWishlistComponent {
  store = inject(EcommerceStore);

}
