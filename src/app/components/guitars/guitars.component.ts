import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-guitars',
  templateUrl: './guitars.component.html',
  styleUrls: ['./guitars.component.css']
})
export class GuitarsComponent implements OnInit {
  @Input() searchText: any;
  data: any[];
  imagePath: string;
  guitarCount: number;
  sortHeader: string;
  sortOrder: number;
  math: Math;
  constructor(private apiService: ApiService) {
    this.sortOrder = 0;
    this.sortHeader = 'name';
    this.data=[];
    this.imagePath = '../../../assets/images/';
    this.math=Math;
    this.guitarCount=0;
  }

  ngOnInit(): void {
    this.apiService.getGuitars().subscribe((res) => {
      this.data = res.data;
      this.guitarCount=res.count;
    });
  }
  public setTitle(newTitle: string) {
    //this.dataService.setTitle(newTitle);
  }
  updateSortHeader(event: any) {
    this.sortHeader = event.target.value;
    this.sort();
  }
  updateSortOrder(event: any) {
    this.sortOrder = event.target.value;
    this.sort();
  }
  sort() {
    let order: number;
    if (this.sortOrder == 0) order = 1;
    else order = -1;
    if (this.sortHeader === 'name') {
      this.data.sort((a, b) => {
        if (a.name < b.name) {
          return -1 * order;
        } else if (a.name > b.name) {
          return order * 1;
        } else {
          return 0;
        }
      });
    } else if (this.sortHeader === 'date') {
      this.data.sort((a, b) => {
        if (a.dateModified < b.dateModified) return -1 * order;
        else if (a.dateModified > b.dateModified) return order * 1;
        else return 0;
      });
    } else if (this.sortHeader === 'price') {
      this.data.sort((a, b) => {
        if (a.price < b.price) return -1 * order;
        else if (a.price > b.price) return order * 1;
        else return 0;
      });
    }
  }
}
