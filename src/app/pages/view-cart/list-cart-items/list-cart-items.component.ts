import { Component, inject } from '@angular/core';
import { ViewPanelDirective } from "../../../directives/view-panel.directive";
import { EcommerceStore } from '../../../store/ecommerce.store';
import { ShowCartItemComponent } from '../../show-cart-item/show-cart-item.component';

@Component({
  selector: 'app-list-cart-items',
  imports: [ViewPanelDirective , ShowCartItemComponent],
  templateUrl: './list-cart-items.component.html',
  styleUrl: './list-cart-items.component.scss',
})
export class ListCartItemsComponent {
  store = inject(EcommerceStore);
}
