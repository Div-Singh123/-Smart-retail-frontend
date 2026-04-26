import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StoreDTO } from 'src/app/models/dto/store-dto';
import { AlertService } from 'src/app/services/alert/alert.service';
import { GetStoreService } from 'src/app/services/store/get-store.service';
import { UpdateStoreService } from 'src/app/services/store/update-store.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  dashboardForm: FormGroup;
  isLoading: boolean = false;

  storeData: StoreDTO = {
    storeId: 101,
    storeName: 'SmartRetail Downtown',
    location: 'Downtown Ave, New York',
    type: 'Supermarket',
    size: 3500,
    numberOfAisles: 18,
    operatingHours: '08:00 - 22:00',
    shelves: []
  };

  constructor(private readonly fb: FormBuilder, 
              private readonly getStoreService: GetStoreService,
              private readonly updateStoreService: UpdateStoreService,
              private readonly alertService: AlertService) {
    this.dashboardForm = this.fb.group({
      store: this.fb.group({
        storeName: [this.storeData.storeName, Validators.required],
        location: [this.storeData.location, Validators.required],
        type: [this.storeData.type, Validators.required],
        size: [this.storeData.size, [Validators.required, Validators.min(1)]],
        numberOfAisles: [this.storeData.numberOfAisles, [Validators.required, Validators.min(1)]],
        operatingHours: [this.storeData.operatingHours, Validators.required]
      })
    });
  }

  ngOnInit(): void {
    this.loadStore();
  }

  private loadStore(): void {
    this.isLoading = true;
    this.getStoreService.getStore().subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.storeData = response.data;
          this.dashboardForm.patchValue({
            store: {
              storeName: this.storeData.storeName,
              location: this.storeData.location,
              type: this.storeData.type,
              size: this.storeData.size,
              numberOfAisles: this.storeData.numberOfAisles,
              operatingHours: this.storeData.operatingHours
            }
          });
          console.log('Store loaded:', this.storeData);
        } else {
          console.error('Failed to load store:', response.message);
        }
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading store:', error);
        this.isLoading = false;
      }
    });
  }

  onUpdateProfile(): void {
    if (this.dashboardForm.invalid) {
      this.dashboardForm.markAllAsTouched();
      return;
    }

    const formValue = this.dashboardForm.value;
    this.storeData = {
      ...this.storeData,
      storeName: formValue.store.storeName,
      location: formValue.store.location,
      type: formValue.store.type,
      size: Number(formValue.store.size),
      numberOfAisles: Number(formValue.store.numberOfAisles),
      operatingHours: formValue.store.operatingHours
    };

    // Replace with API call once backend profile endpoints are ready.
    this.updateStoreService.updateStore(this.storeData).subscribe({
      next: (response) => {
        if (response.success) {
          this.alertService.success('Store profile updated successfully!');
        } else {
          console.error('Failed to update store:', response.message);
        }
      },
      error: (error) => {
        this.alertService.error('Failed to update store. Please try again later.');
        // when this happens i want to notify the user that the update failed and to try again later.
      }
    });
  }
}
