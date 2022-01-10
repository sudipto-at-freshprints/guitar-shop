import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-guitar',
  templateUrl: './guitar.component.html',
  styleUrls: ['./guitar.component.css']
})
export class GuitarComponent implements OnInit {
  id: number;
  selectedGuitarData: any;
  imagePath: string;
  isShown: boolean;
  isHidden: boolean;
  addReview: boolean;
  str: string;
  viewMode: string;
  math: any;
  data: any[];
  reviewerName: any;
  reviewPoints: any;
  reviewBody: any;
  newTitle: string;
  constructor(private route: ActivatedRoute, private dataService: DataService) {
    this.id = 0;
    this.route.params.subscribe(params => this.id = Number(params['id']));
    this.imagePath = this.dataService.imagePath;
    this.viewMode = "desc";
    this.str = "Search";
    this.isShown = true;
    this.isHidden = false;
    this.addReview = true;
    this.math = Math;
    this.data = dataService.data;
    this.newTitle = 'Description'
  }

  ngOnInit(): void {
    this.selectedGuitarData = this.data[this.id];
    this.setTitle(this.newTitle);
  };
  setTitle(newTitle: string) {
    this.newTitle = newTitle;
    this.dataService.setTitle(this.selectedGuitarData.name + ' | ' + newTitle)
  }
  showCheckOut() {
    this.isShown = false;
    this.isHidden = true;
    this.str = "Guitars list";
  }
  viewPrevious() {
    if (this.id > 0)
      this.id -= 1;
    this.selectedGuitarData = this.dataService.data[this.id];
    this.setTitle(this.newTitle);

  }
  viewNext() {
    if (this.id < this.dataService.guitarCount - 1)
      this.id += 1;
    this.selectedGuitarData = this.dataService.data[this.id];
    this.setTitle(this.newTitle);
  }
  addReviewTrigger() {
    this.addReview = false;
  }
  closeReviewTrigger(form: any) {
    this.addReview = true;
    form.reset();
  }
  onSubmit() {
    this.dataService.addReview(this.id, this.reviewerName, this.reviewPoints, this.reviewBody);
    this.addReview = true;
  }
}

