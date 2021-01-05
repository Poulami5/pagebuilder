import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PlanningRoutingModule } from "./planning-routing.module";
import { ListItemsComponent } from "./list-items/list-items.component";
import { AddItemsComponent } from "./add-items/add-items.component";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ListItemsComponent, AddItemsComponent],
  imports: [
    CommonModule,
    PlanningRoutingModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
})
export class PlanningModule {}
