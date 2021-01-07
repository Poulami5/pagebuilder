import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../../configuration/configuration.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-device-admin',
  templateUrl: './device-admin.component.html',
  styleUrls: ['./device-admin.component.css'],
})
export class DeviceAdminComponent implements OnInit {
  rightDivShow: boolean = false;
  leftDivShow: boolean = true;
  deviceCommand;
  deviceFrequency;
  deviceGroup;
  pageId;
  pageName;
  searchText;
  allDevices: any = [];

  deviceStatus = [
    { id: 0, value: 'Disabled' },
    { id: 1, value: 'Enabled' },
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
    this.configurationService.getDevices().subscribe((data: any) => {
      this.allDevices = data;
    });
    this.getDeviceCommand();
    this.getDeviceFrequency();
    this.getDeviceGroup();
  }

  routeToAddDetails() {
    let url = '/configuration/add/' + this.pageName + '/' + this.pageId + '';
    return url;
  }

  filterValues(event) {
    this.searchText = event.target.value;
  }

  getDeviceCommand() {
    this.configurationService.getDeviceCommand().subscribe((data: any) => {
      this.deviceCommand = data;
      console.log(this.deviceCommand);
    });
  }
  getDeviceFrequency() {
    this.configurationService.getDeviceFrequency().subscribe((data: any) => {
      this.deviceFrequency = data;
      console.log(this.deviceFrequency);
    });
  }
  getDeviceGroup() {
    this.configurationService.getDeviceGroup().subscribe((data: any) => {
      this.deviceGroup = data;
      console.log(this.deviceGroup);
    });
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
