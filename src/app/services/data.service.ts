import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import Data from '../../assets/data/data.json'
@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: any;
  guitarCount: number;
  imagePath: string;
  math: Math;
  constructor(private titleService: Title) {
    this.guitarCount = 0;
    this.data = this.setGuitarData();
    this.imagePath = '../../assets/images/'
    this.math = Math;
  }
  private setGuitarData() {
    let det: any[] = [];
    for (let guitar of Data) {
      if (guitar.soldOut == 'false') {
        det.push(guitar);
        this.guitarCount += 1;
      }
    }
    return det;
  }
  addReview(index: number, name: string, star: string, body: string) {
    let review: any;
    review = { "star": star, "body": body, "name": name }
    this.data[index].reviews.push(review);
  }
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
