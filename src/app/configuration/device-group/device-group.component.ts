import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../../configuration/configuration.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-device-group',
  templateUrl: './device-group.component.html',
  styleUrls: ['./device-group.component.css'],
})
export class DeviceGroupComponent implements OnInit {
  rightDivShow: boolean = false;
  leftDivShow: boolean = true;

  pageId;
  pageName;
  searchText;
  allDevices: any = [];
  allUsers: any = [];

  deviceStatus = [
    { id: 1, value: 'Yes' },
    { id: 0, value: 'No' },
  ];

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
    this.configurationService.getDeviceGroup().subscribe((data: any) => {
      this.allDevices = data;
    });
    this.configurationService.getUsers().subscribe((data: any) => {
      this.allUsers = data;
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
