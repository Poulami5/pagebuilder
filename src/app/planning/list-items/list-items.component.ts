import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { PlanningService } from "../../planning/planning.service";
import * as $ from "jquery";

@Component({
  selector: "app-list-items",
  templateUrl: "./list-items.component.html",
  styleUrls: ["./list-items.component.css"],
})
export class ListItemsComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private planningService: PlanningService
  ) {}
  allDevices: any=[];
  pageId;
  pageName;
  searchText;
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.pageId = params.id;
      this.pageName = params.pageName;
    });
    this.planningService.getAllDevice().subscribe((data: any) => {
      this.allDevices = data.deviceList;
    });
  }

  routeToAddDetails() {

    let url = "/planning/add-items/"+this.pageName+"/"+this.pageId+""
    console.log(url);
    return url
    // this.router.navigate([
    //   "/planning/add-items",
    //   { pageName: this.pageName, id: this.pageId },
    // ]);
  }

  filterValues(event){
    this.searchText = event.target.value;
  }
}
