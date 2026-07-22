import { Component, computed, inject, input, signal } from '@angular/core';
import { Product } from '../../models/product';
import { ProductCardComponent } from "../../components/product-card/product-card.component";
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav'
import { MatNavList, MatListItemTitle , MatListItem } from '@angular/material/list'
import { RouterLink } from "@angular/router";
import { TitleCasePipe } from '@angular/common';
import { EcommerceStore } from '../../store/ecommerce.store';

@Component({
  selector: 'app-products-grid',
  imports: [
    ProductCardComponent,
    MatSidenav,
    MatSidenavContainer,
    MatSidenavContent,
    MatNavList,
    MatListItem,
    MatListItemTitle,
    RouterLink,
    TitleCasePipe
],
  templateUrl: './products-grid.component.html',
  styleUrl: './products-grid.component.scss',
})
export default class ProductsGridComponent {
  category = input<string>('all');

  categories = signal<string[]>([
    'all',
    'electronics',
    'clothing',
    'home & kitchen',
    'footwear',
    'books',
    'accessories',
  ]);

  store = inject(EcommerceStore);

  constructor(){
    this.store.setCategory(this.category);
  }


}
