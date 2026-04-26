import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert/alert.service';
import { GetStoreIdService } from 'src/app/services/store/get-store-id.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  storeId:number = -1;
  isLoading: boolean = false;

  ngOnInit(): void {
    this.getStoreId();
  }

// get the store id and keep it here so that i can use it later on for other pages
  constructor(private getStoreIdService: GetStoreIdService, private alertService:AlertService){}
  private getStoreId(){
    this.isLoading = true;
    this.getStoreIdService.getStoreId().subscribe({
      next: (response) =>{
        if(response.success){
          this.storeId = response.data;
        }
      },
      error: (errorResponse) => {
        console.log(errorResponse);
        if(errorResponse.status === 0){
          
        }
        this.alertService.error(errorResponse.error.message);
      }
    });
  }
}
