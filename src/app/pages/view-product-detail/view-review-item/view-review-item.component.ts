import { Component, input } from '@angular/core';
import { UserReview } from '../../../models/user-review';
import { ViewPanelDirective } from '../../../directives/view-panel.directive';
import { StarRatingComponent } from "../../../components/star-rating/star-rating.component";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-view-review-item',
  imports: [ViewPanelDirective, StarRatingComponent , DatePipe],
  templateUrl: './view-review-item.component.html',
  styleUrl: './view-review-item.component.scss',
})
export class ViewReviewItemComponent {
  review = input.required<UserReview>();

  
}
