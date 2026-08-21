import { Component, computed, input } from '@angular/core';
import { Product } from '../../../models/product';
import { StarRatingComponent } from "../../../components/star-rating/star-rating.component";

@Component({
  selector: 'app-rating-summary',
  imports: [StarRatingComponent],
  templateUrl: './rating-summary.component.html',
  styleUrl: './rating-summary.component.scss',
})
export class RatingSummaryComponent {
  product = input.required<Product>();

  totalReviews = computed(() => this.product().reviews.length);

  ratingBreakdown = computed(() => {
    const reviews = this.product().reviews;
    const total = reviews.length;

    if (total === 0)
      return [5, 4, 3, 2, 1].map((stars) => ({
        stars,
        count: 0,
        percentage: 0,
      }));

    const counts = [5, 4, 3, 2, 1].map((stars) => {
      const count = reviews.filter((review) => review.rating === stars).length;
      return {
        stars,
        count,
        percentage: (count / total) * 100,
      };
    });

    return counts;
  });
}
