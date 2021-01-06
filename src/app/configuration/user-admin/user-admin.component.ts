import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../../configuration/configuration.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.css'],
})
export class UserAdminComponent implements OnInit {
  rightDivShow: boolean = true;
  leftDivShow: boolean = false;

  pageId;
  pageName;
  searchText;
  allDevices: any = [];

  constructor(
    private router: Router,
    private configurationService: ConfigurationService,
    private route: ActivatedRoute
  ) {}

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
    let url = '/configuration/add/' + this.pageName + '/' + this.pageId + '';
    return url;
  }

  filterValues(event) {
    this.searchText = event.target.value;
  }

  rightDivClick() {
    this.leftDivShow = true;
    this.rightDivShow = false;
  }

  leftDivClick() {
    this.rightDivShow = true;
    this.leftDivShow = false;
  }
}
