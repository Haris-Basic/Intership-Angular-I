import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-show-brands',
  templateUrl: './show-brands.component.html',
  styleUrls: ['./show-brands.component.css']
})

export class ShowBrandsComponent implements OnInit {

  constructor(private service:SharedService) { }
  
  BrandList : any = [];

  ModalTitle : string ='';
  ActivateAddEditBrandComp : boolean = false;
  tempBrand: any;


  ngOnInit(): void {
    this.refreshBrandList();
  }

  refreshBrandList(): void {
    this.service.getBrandList().subscribe(data=>{
      this.BrandList=data;
    });
  }

  addClick(){
    var val = {
      id: 0,
      name:''
    }
    this.tempBrand = val;
    this.ModalTitle = "Add new brand";
    this.ActivateAddEditBrandComp = true;
  }

  editClick(item:any){
    this.tempBrand=item;
    this.ModalTitle = "Edit brand";
    this.ActivateAddEditBrandComp = true;
  }

  closeClick(){
    this.ActivateAddEditBrandComp = false;
    this.refreshBrandList();
  }
  deleteClick(item:any){
    if(confirm("Jeste li sigurni?")){
      this.service.deleteBrand(item.id).subscribe(result=>{
        alert("Uspjesno izbrisano");
        this.refreshBrandList();
      });
    }
    
  }

}
