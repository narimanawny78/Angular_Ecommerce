import { Component, inject } from '@angular/core';
import { EcommerceStore } from '../../../store/ecommerce.store';
import { ViewPanelDirective } from "../../../directives/view-panel.directive";
import { MatIcon } from "@angular/material/icon";
import { MatAnchor } from "@angular/material/button";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-tease-wishlist',
  imports: [ViewPanelDirective, MatIcon, MatAnchor, RouterLink],
  templateUrl: './tease-wishlist.component.html',
  styleUrl: './tease-wishlist.component.scss',
})
export class TeaseWishlistComponent {
  store= inject(EcommerceStore);
}
