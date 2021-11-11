import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-models',
  templateUrl: './show-models.component.html',
  styleUrls: ['./show-models.component.css']
})
export class ShowModelsComponent implements OnInit {

  constructor(private service:SharedService) { }

  CarModelList:any;

  ModalTitle : string ='';
  ActivateAddEditBrandComp : boolean = false;
  tempBrandModel: any;

  ngOnInit(): void {
    this.RefreshBrandModelList();
  }

  RefreshBrandModelList(){
    this.service.getGetModelByBrandId().subscribe(data=>{
      this.CarModelList = data;
    });
  }

  addClick(){
    var val = {
      brandid: '',
      brandname: '',
      modelid: 0,
      modelname:''
    }
    this.tempBrandModel = val;
    this.ModalTitle = "Add new model";
    this.ActivateAddEditBrandComp = true;
  }
  
  closeClick(){
    this.ActivateAddEditBrandComp = false;
    this.RefreshBrandModelList();
  }

  editClick(item:any){
    this.tempBrandModel=item;
    this.ModalTitle = "Edit brand";
    this.ActivateAddEditBrandComp = true;
  }


  deleteClick(item:any){
    if(confirm("Jeste li sigurni?")){
      this.service.deleteModel(item.modelid).subscribe(result=>{
        alert("Uspjesno izbrisano");
        this.RefreshBrandModelList();
      });
    }
  }
}
