import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeviceAdminComponent } from './device-admin/device-admin.component';
import { DeviceGroupComponent } from './device-group/device-group.component';
import { UserAdminComponent } from './user-admin/user-admin.component';

const routes: Routes = [
  { path: '', redirectTo: 'Device Admin', pathMatch: 'full' },
  { path: 'Device Admin', component: DeviceAdminComponent },
  { path: 'Device Group', component: DeviceGroupComponent },
  { path: 'User Admin', component: UserAdminComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigurationRoutingModule {}
