import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { CategoryComponent } from './category/category.component';
import { DeviceDetailComponent } from './device-detail/device-detail.component';
import { DevicesComponent } from './devices/devices.component';

const routes: Routes = [
  { path: '', redirectTo: '/devices', pathMatch: 'full' },
  { path: 'categories', component: CategoryComponent },
  { path: 'devices', component: DevicesComponent },
  { path: 'categories/:id', component: CategoryDetailComponent },
  { path: 'devices/:id', component: DeviceDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
