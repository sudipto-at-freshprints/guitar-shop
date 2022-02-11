import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-guitar',
  templateUrl: './guitar.component.html',
  styleUrls: ['./guitar.component.css']
})
export class GuitarComponent implements OnInit {
  id: number;
  selectedGuitarData: any;
  isShown: boolean;
  isHidden: boolean;
  addReview: boolean;
  str: string;
  viewMode: string;
  math: any;
  reviewerName: any;
  reviewPoints: any;
  reviewBody: any;
  newTitle: string;
  guitarCount: number;
  constructor(private route: ActivatedRoute, private router: Router, private apiService: ApiService) {
    this.id = 0;
    this.guitarCount = 0;
    this.viewMode = "desc";
    this.str = "Search";
    this.isShown = true;
    this.isHidden = false;
    this.addReview = true;
    this.math = Math;
    this.newTitle = 'Description';

  }

  ngOnInit(): void {
    this.setTitle(this.newTitle);
    this.route.params.subscribe(params => {
      this.id = Number(params['id']);
      this.apiService.getGuitar(this.id).subscribe((res) => {
        this.selectedGuitarData = res.data['0'];
        this.guitarCount = res.count;
      });
    });
  }
  setTitle(newTitle: string) {
    this.newTitle = newTitle;
    //this.dataService.setTitle(this.selectedGuitarData.name + ' | ' + newTitle)
  }
  showCheckOut() {
    this.isShown = false;
    this.isHidden = true;
    this.str = "Guitars list";
  }
  viewPrevious() {
    if (this.id > 1)
      this.id -= 1;
    this.router.navigate(['/guitar/' + this.id]);
    this.setTitle(this.newTitle);
    this.viewMode="desc";

  }
  viewNext() {
    if (this.id < this.guitarCount)
      this.id += 1;
    this.router.navigate(['/guitar/' + this.id]);
    this.setTitle(this.newTitle);
    this.viewMode="desc";
  }
}

