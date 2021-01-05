import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
// import { AddItemsComponent } from "../planning/add-items/add-items.component";
import { ListComponent } from "./list/list.component";

const routes: Routes = [
  { path: "", redirectTo:'list', pathMatch: 'full' },
  { path: "list/:pageName/:id", component: ListComponent },
  // { path: "add/:pageName/:id", component: AddItemsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigurationRoutingModule {}
