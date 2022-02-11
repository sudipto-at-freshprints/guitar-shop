import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-guitar-reviews',
  templateUrl: './guitar-reviews.component.html',
  styleUrls: ['./guitar-reviews.component.css'],
})
export class GuitarReviewsComponent implements OnInit {
  id: any;
  reviews: any;
  reviewerName: any;
  reviewPoints: any;
  reviewBody: any;
  addReview: boolean;
  constructor(private route: ActivatedRoute, private apiService: ApiService) {
    this.addReview = true;
    this.route.parent?.params.subscribe((params) => {
      this.id = params['id'];
      this.apiService.getReviews(this.id).subscribe((res) => {
        this.reviews = res.data;
      });
    });
  }

  ngOnInit(): void {}
  addReviewTrigger() {
    this.addReview = false;
  }
  closeReviewTrigger(form: any) {
    this.addReview = true;
    form.reset();
  }
  onSubmit(form: any) {
    let review = {
      reviewPoints: this.reviewPoints,
      reviewerName: this.reviewerName,
      reviewBody: this.reviewBody,
    };
    this.apiService.createReview(this.id, review).subscribe((res) => {
      this.addReview = true;
      form.reset();
      alert("Review Added");
      window.location.reload();
    });
  }
}
