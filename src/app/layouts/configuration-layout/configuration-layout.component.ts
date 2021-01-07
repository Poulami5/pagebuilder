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

  constructor(
    private router: Router,
    private configurationService: ConfigurationService
  ) {}

  menuList = [
    { pageId: 7, Type: 'Page', pageName: 'Device Admin', pageOrder: 7 },
    { pageId: 8, Type: 'Page', pageName: 'Device Group', pageOrder: 7 },
  ];

  ngOnInit() {
    this.getDashboardCounts();
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
    let url = '/configuration/' + element.pageName;
    return url;
  }
}
