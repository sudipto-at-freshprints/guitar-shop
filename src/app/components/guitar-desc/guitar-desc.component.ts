import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-guitar-desc',
  templateUrl: './guitar-desc.component.html',
  styleUrls: ['./guitar-desc.component.css'],
})
export class GuitarDescComponent implements OnInit {
  id: any;
  desc: any;
  sub: any;
  constructor(private route: ActivatedRoute, private apiService: ApiService) {
    this.route.parent?.params.subscribe((params) => {
      this.id = params['id'];
      this.apiService.getDesc(this.id).subscribe((res) => {
        this.desc = res.data[0].longDescription;
      });
    });
  }
  ngOnInit(): void {}
}
