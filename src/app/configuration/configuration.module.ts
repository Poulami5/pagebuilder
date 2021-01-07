import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ConfigurationRoutingModule } from './configuration-routing.module';
import { DeviceGroupComponent } from './device-group/device-group.component';
import { UserAdminComponent } from './user-admin/user-admin.component';
import { DeviceAdminComponent } from './device-admin/device-admin.component';
@NgModule({
  declarations: [
    DeviceGroupComponent,
    UserAdminComponent,
    DeviceAdminComponent,
  ],
  imports: [
    CommonModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ConfigurationRoutingModule,
  ],
})
export class ConfigurationModule {}
