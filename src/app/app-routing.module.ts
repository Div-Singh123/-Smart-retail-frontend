import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CommonDashboardComponent } from './components/dashboard/common-dashboard/common-dashboard.component';
import { ApplyStoreManagerComponent } from './components/storeManager/apply-store-manager/apply-store-manager.component';
import { ProfileComponent } from './components/storeManager/profile/profile.component';
import { LayoutComponent } from './components/storeManager/layout/layout.component';
import { RealTimeStockComponent } from './components/storemanager/real-time-stock/real-time-stock.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: CommonDashboardComponent},
  {
    path: 'store',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'profile', pathMatch: 'full' },
      { path: 'apply', component: ApplyStoreManagerComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'stock', component: RealTimeStockComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
