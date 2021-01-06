import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeviceGroupComponent } from './device-group/device-group.component';
import { ListComponent } from './list/list.component';
import { UserAdminComponent } from './user-admin/user-admin.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list/Device Admin', component: ListComponent },
  { path: 'list/Device Group', component: DeviceGroupComponent },
  { path: 'list/User Admin', component: UserAdminComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigurationRoutingModule {}
