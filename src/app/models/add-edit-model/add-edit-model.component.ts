import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-model',
  templateUrl: './add-edit-model.component.html',
  styleUrls: ['./add-edit-model.component.css']
})
export class AddEditModelComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() tempBrandModel: any;
  brandid: string = '';
  brandname: string = '';
  modelid: string = '';
  modelname: string = '';

  brandList: any=[];
  selectedValue: any;

  ngOnInit(): void 
  {
    this.brandid = this.tempBrandModel.brandid;
    this.brandname = this.tempBrandModel.brandname;
    this.modelid = this.tempBrandModel.modelid;
    this.modelname = this.tempBrandModel.modelname;

    this.service.getBrandList().subscribe(data=>{
      this.brandList = data;
    });
  }

  addBrandModel() {

    var val = {
      brandid: this.selectedValue.id,
      brandname: this.selectedValue.name,
      modelid: this.modelid,
      modelname: this.modelname
    };
    this.service.addModel(val).subscribe(result => {
      alert("Uspjesno ste dodali novi model za brand" + val.brandname);
    });
  }

  updateBrandModel() {
    var val = {
      brandid: this.brandid,
      brandname: this.brandname,
      modelid: this.modelid,
      modelname: this.modelname
    };
    this.service.updateUpdateModel(val).subscribe(result => {
      alert("Uspjesno ste editovali model za brend"+ val.brandname);
    });
  }
}
