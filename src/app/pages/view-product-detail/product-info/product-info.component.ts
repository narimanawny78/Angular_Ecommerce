import { Component, inject, input, signal } from '@angular/core';
import { Product } from '../../../models/product';
import { TitleCasePipe } from '@angular/common';
import { StockStatusComponent } from '../stock-status/stock-status.component';
import { QtySelectorComponent } from "../../../components/qty-selector/qty-selector.component";
import { ToggleWishlistButtonComponent } from "../../../components/toggle-wishlist-button/toggle-wishlist-button.component";
import { MatIcon } from "@angular/material/icon";
import { EcommerceStore } from '../../../store/ecommerce.store';
import { MatButton, MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-product-info',
  imports: [TitleCasePipe, StockStatusComponent, QtySelectorComponent, ToggleWishlistButtonComponent, MatIcon , MatButton, MatIconButton],
  templateUrl: './product-info.component.html',
  styleUrl: './product-info.component.scss',
})
export class ProductInfoComponent {

  store = inject(EcommerceStore);
  product = input.required<Product>();
  quantity = signal(1);

}
