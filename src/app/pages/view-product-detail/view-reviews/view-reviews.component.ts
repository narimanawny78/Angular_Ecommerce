import { Component, computed, inject, input } from '@angular/core';
import { Product } from '../../../models/product';
import { ViewPanelDirective } from '../../../directives/view-panel.directive';
import { RatingSummaryComponent } from '../rating-summary/rating-summary.component';
import { ViewReviewItemComponent } from '../view-review-item/view-review-item.component';
import { MatAnchor, MatButton } from "@angular/material/button";
import { EcommerceStore } from '../../../store/ecommerce.store';
import { WriteReviewComponent } from '../write-review/write-review.component';

@Component({
  selector: 'app-view-reviews',
  imports: [ViewPanelDirective, RatingSummaryComponent, ViewReviewItemComponent, MatAnchor , MatButton , WriteReviewComponent],
  templateUrl: './view-reviews.component.html',
  styleUrl: './view-reviews.component.scss',
})
export class ViewReviewsComponent {
  product = input.required<Product>();

  store = inject(EcommerceStore);

  sortedReviews = computed(() => {
  return [...this.product().reviews].sort((a, b) => b.reviewDate.getTime() - a.reviewDate.getTime());
});

}
