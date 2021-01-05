import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { ConfigurationService } from "../configuration.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private configurationService: ConfigurationService
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
    this.configurationService.getDevices().subscribe((data: any) => {
      this.allDevices = data;
    });
  }

  routeToAddDetails() {
    let url = "/configuration/add/"+this.pageName+"/"+this.pageId+""
    return url
  }

  filterValues(event){
    this.searchText = event.target.value;
  }

}
