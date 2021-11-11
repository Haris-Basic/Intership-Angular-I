import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private APIUrl1 = "https://localhost:44315/EmployeeAngAPI";
  private APIUrl = "https://localhost:44330/EmployeeAngAPI"

  constructor(private http: HttpClient) { }

  getBrandList(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + "/GetBrands")
  }

  addBrand(val: any) {
    return this.http.post(this.APIUrl + "/AddBrand", val);
  }

  updateBrand(val: any) {
    return this.http.put(this.APIUrl + "/EditBrand", val);
  }

  deleteBrand(val: any) {
    return this.http.delete(this.APIUrl + "/DeleteBrand?id="+ val);
  }



  getGetModelByBrandId(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + "/GetModelByBrandId");
  }

  addModel(val: any) {
    return this.http.post(this.APIUrl + "/AddModel", val);
  }

  updateUpdateModel(val: any) {
    return this.http.put(this.APIUrl + "/EditModel", val);
  }

  deleteModel(val: any) {
    return this.http.delete(this.APIUrl + "/DeleteModel?id=" + val);
  }
}
