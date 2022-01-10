import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

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
  math:Math;
  constructor(private dataService: DataService) {
    this.imagePath = this.dataService.imagePath;
    this.data = dataService.data;
    this.guitarCount = dataService.guitarCount;
    this.sortOrder = 0;
    this.sortHeader = 'name';
    this.math=this.dataService.math;
  }

  ngOnInit(): void {
  }
  public setTitle(newTitle: string) {
    this.dataService.setTitle(newTitle);
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
        if (a.dateAdded < b.dateAdded) return -1 * order;
        else if (a.dateAdded > b.dateAdded) return order * 1;
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
