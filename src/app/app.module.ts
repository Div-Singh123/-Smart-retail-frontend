import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonDashboardComponent } from './components/dashboard/common-dashboard/common-dashboard.component';
import { ApplyStoreManagerComponent } from './components/storeManager/apply-store-manager/apply-store-manager.component';
import { ProfileComponent } from './components/storeManager/profile/profile.component';
import { RealTimeStockComponent } from './components/storemanager/real-time-stock/real-time-stock.component';
import { LayoutComponent } from './components/storeManager/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CommonDashboardComponent,
    ApplyStoreManagerComponent,
    ProfileComponent,
    RealTimeStockComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
