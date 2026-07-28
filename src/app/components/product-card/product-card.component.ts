import { Component, inject, input, output } from '@angular/core';
import { Product } from '../../models/product';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { EcommerceStore } from '../../store/ecommerce.store';

@Component({
  selector: 'app-product-card',
  imports: [MatButton, MatIcon],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  product = input.required<Product>();
  // where?
  addToCartClicked = output<Product>();

  store = inject(EcommerceStore);


}
