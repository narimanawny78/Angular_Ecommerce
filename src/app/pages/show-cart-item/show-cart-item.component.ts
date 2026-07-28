import { Component, computed, inject, input } from '@angular/core';
import { CartItem } from '../../models/cart';
import { QtySelectorComponent } from '../../components/qty-selector/qty-selector.component';
import { EcommerceStore } from '../../store/ecommerce.store';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-show-cart-item',
  imports: [QtySelectorComponent, MatIconButton, MatIcon],
  templateUrl: './show-cart-item.component.html',
  styleUrl: './show-cart-item.component.scss',
})
export class ShowCartItemComponent {
  item = input.required<CartItem>();
  store = inject(EcommerceStore);

  total = computed(()=> ( this.item().product.price * this.item().quantity).toFixed(2))
}
