import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ConfigurationRoutingModule } from './configuration-routing.module';
import { ListComponent } from './list/list.component';
@NgModule({
  declarations: [ListComponent],
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
