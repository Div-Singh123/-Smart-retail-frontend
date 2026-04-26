import { Component } from '@angular/core';
import { GetStockService } from 'src/app/services/store/get-stock.service';

@Component({
  selector: 'app-real-time-stock',
  templateUrl: './real-time-stock.component.html',
  styleUrls: ['./real-time-stock.component.css']
})
export class RealTimeStockComponent {
  isLoading: boolean = false;
  constructor(private getStockService: GetStockService
  ) {}
  
  // getStock()


}
