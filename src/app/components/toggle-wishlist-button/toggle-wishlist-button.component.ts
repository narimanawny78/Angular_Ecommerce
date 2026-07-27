import { Component, computed, inject, input } from '@angular/core';
import { Product } from '../../models/product';
import { EcommerceStore } from '../../store/ecommerce.store';
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-toggle-wishlist-button',
  imports: [MatIcon],
  templateUrl: './toggle-wishlist-button.component.html',
  styleUrl: './toggle-wishlist-button.component.scss',
})
export class ToggleWishlistButtonComponent {

  product = input.required<Product>()

   store = inject(EcommerceStore);

   isInWishlist = computed(()=> this.store.wishlistItems().find(p => p.id === this.product().id) )

  toggleWishlist(product : Product){
    if(this.isInWishlist()){
      this.store.removeFromWishlist(product);
    }else{
      this.store.addToWishList(product);
    }
  }

}
