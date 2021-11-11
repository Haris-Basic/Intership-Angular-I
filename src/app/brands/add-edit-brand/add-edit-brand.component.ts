import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-add-edit-brand',
  templateUrl: './add-edit-brand.component.html',
  styleUrls: ['./add-edit-brand.component.css']
})

export class AddEditBrandComponent implements OnInit {

  constructor(private service:SharedService ) { }

  @Input() tempBrand:any;
  id:string='';
  name:string='';

  ngOnInit(): void {
    this.id=this.tempBrand.id;
    this.name=this.tempBrand.name;
  }

  addBrand()
  {
    var val = {
      id: this.id,
      name: this.name
    };
    this.service.addBrand(val).subscribe(result=>{
      alert("Uspjesno ste dodali novi brend");
    });
  }

  updateBrand()
  {
    var val = {
      id: this.id,
      name: this.name
    };
    this.service.updateBrand(val).subscribe(result=>{
      alert("Uspjesno ste editovali.");
    });
  }

}
