import { Component, inject } from '@angular/core';
import { BackButtonComponent } from "../../components/back-button/back-button.component";
import { ListCartItemsComponent } from './list-cart-items/list-cart-items.component';
import { TeaseWishlistComponent } from './tease-wishlist/tease-wishlist.component';
import { SummarizeOrderComponent } from '../../components/summarize-order/summarize-order.component';
import { MatAnchor } from "@angular/material/button";
import { EcommerceStore } from '../../store/ecommerce.store';

@Component({
  selector: 'app-view-cart',
  imports: [BackButtonComponent, ListCartItemsComponent, TeaseWishlistComponent, SummarizeOrderComponent, MatAnchor],
  templateUrl: './view-cart.component.html',
  styleUrl: './view-cart.component.scss',
})
export default class ViewCartComponent {
  store = inject(EcommerceStore);
}
