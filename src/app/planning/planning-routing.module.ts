import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddItemsComponent } from "./add-items/add-items.component";
import { ListItemsComponent } from "./list-items/list-items.component";

const routes: Routes = [
  { path: "", redirectTo:'list-items', pathMatch: 'full' },
  { path: "list-items/:pageName/:id", component: ListItemsComponent },
  { path: "add-items/:pageName/:id", component: AddItemsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanningRoutingModule {}
