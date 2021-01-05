import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { ConfigurationService } from '../../configuration/configuration.service';

@Component({
  selector: 'app-configuration-layout',
  templateUrl: './configuration-layout.component.html',
  styleUrls: ['./configuration-layout.component.css'],
})
export class ConfigurationLayoutComponent implements OnInit {
  pageNa;
  pageI;
  dashboardCount;
  rightDivShow: boolean = true;
  leftDivShow: boolean = false;
  deviceCommand;
  deviceFrequency;
  deviceGroup;
  deviceStatus = [
    { id: 0, value: 'Disabled' },
    { id: 1, value: 'Enabled' },
  ];
  constructor(
    private router: Router,
    private configurationService: ConfigurationService
  ) {}

  menuList = [
    { pageId: 7, Type: 'Page', pageName: 'Device', pageOrder: 7 },
    { pageId: 8, Type: 'Page', pageName: 'Device Admin', pageOrder: 7 },
    { pageId: 9, Type: 'Page', pageName: 'User Admin', pageOrder: 7 },
  ];

  ngOnInit() {
    this.getDashboardCounts();
    this.getDeviceCommand();
    this.getDeviceFrequency();
    this.getDeviceGroup();
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

  getDashboardCounts() {
    this.configurationService
      .getDashboardDeviceCounts()
      .subscribe((data: any) => {
        this.dashboardCount = data.records;
      });
  }

  getImageUrl(ele) {
    return '../../../assets/menu-icon-' + ele.pageName + '.png';
  }

  navigateToMenu(element) {
    let pageID = element.pageId;
    let pageName = element.pageName;
    this.router.navigate([
      '/configuration/list',
      { pageName: pageName, id: pageID },
    ]);
  }

  routeMenu(element) {
    let url =
      '/configuration/list/' + element.pageName + '/' + element.pageId + '';
    return url;
  }

  rightDivClick() {
    this.leftDivShow = true;
    this.rightDivShow = false;
  }

  leftDivClick() {
    this.rightDivShow = true;
    this.leftDivShow = false;
  }

  slideDiv() {
    $('.box').animate({
      width: 'toggle',
    });
  }
}
