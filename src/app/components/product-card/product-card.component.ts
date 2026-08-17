import { Component, inject, input, output } from '@angular/core';
import { Product } from '../../models/product';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { EcommerceStore } from '../../store/ecommerce.store';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-product-card',
  imports: [MatButton, MatIcon, RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  product = input.required<Product>();
  // where?
  addToCartClicked = output<Product>();

  store = inject(EcommerceStore);


}
