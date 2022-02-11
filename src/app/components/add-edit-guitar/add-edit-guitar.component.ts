import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-edit-guitar',
  templateUrl: './add-edit-guitar.component.html',
  styleUrls: ['./add-edit-guitar.component.css'],
})
export class AddEditGuitarComponent implements OnInit {
  imageSrc: any;
  inStock: boolean;
  soldOut: number;
  id: any;
  addMode: boolean;
  guitarAddForm = new FormGroup({
    name: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    longDescription: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    soldOut: new FormControl('', Validators.required),
  });
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {
    this.imageSrc = '';
    this.inStock = true;
    this.soldOut = 0;
    this.id = null;
    this.addMode = true;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id != null) {
      this.addMode = false;
      this.apiService.getEditGuitar(this.id).subscribe((res) => {
        let guitarData = res.data['0'];
        this.guitarAddForm.patchValue({
          name: guitarData.name,
          image:guitarData.image,
          description: guitarData.description,
          longDescription: guitarData.longDescription,
          price: guitarData.price,
          category: guitarData.category,
          soldOut: guitarData.soldOut,
        });
        this.imageSrc = guitarData.image;
        if (guitarData.soldOut == 0) {
          this.inStock = true;
          this.soldOut = 0;
        } else {
          this.inStock = false;
          this.soldOut = 1;
        }
      });
    }
  }
  updateGuitar(){
    this.guitarAddForm.patchValue({ soldOut: this.soldOut });
    if(this.guitarAddForm.valid)
    this.apiService.updateGuitar(this.id,this.guitarAddForm.value).subscribe((res)=>{
      
    })
    this.router.navigate(['guitar/',this.id]);
    
  }
  addGuitar() {
    this.guitarAddForm.patchValue({ soldOut: this.soldOut });
    if (this.guitarAddForm.valid)
      this.apiService
        .createGuitar(this.guitarAddForm.value)
        .subscribe((res) => {
          console.log(res);
          this.router.navigate(['/']);
        });
    this.imageSrc = '';
  }
  imagePrev(evt: any) {
    var files = evt.target.files;
    var file = files[0];
    if (files && file) {
      var reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }
  _handleReaderLoaded(readerEvt: any) {
    var binaryString = readerEvt.target.result;
    this.imageSrc = 'data:image/png;base64,' + btoa(binaryString);
    this.guitarAddForm.patchValue({ image: this.imageSrc });
  }
  toggleStock() {
    if (this.inStock == false) {
      this.inStock = true;
      this.soldOut = 0;
    } else if (this.inStock == true) {
      this.inStock = false;
      this.soldOut = 1;
    }
  }
}
