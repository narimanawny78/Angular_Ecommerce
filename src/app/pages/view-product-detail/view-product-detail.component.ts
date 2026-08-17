import { Component, computed, inject, input } from '@angular/core';
import { EcommerceStore } from '../../store/ecommerce.store';
import { BackButtonComponent } from '../../components/back-button/back-button.component';
import { ProductInfoComponent } from './product-info/product-info.component';

@Component({
  selector: 'app-view-product-detail',
  imports: [BackButtonComponent, ProductInfoComponent],
  templateUrl: './view-product-detail.component.html',
  styleUrl: './view-product-detail.component.scss',
})
export default class ViewProductDetailComponent {

  productId = input.required<string>();

  store = inject(EcommerceStore);

  constructor(){
    this.store.setProductId(this.productId);
  }

  backRoute = computed(() => `/products/${this.store.category()}`)

}
