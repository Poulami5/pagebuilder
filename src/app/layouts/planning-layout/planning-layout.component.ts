import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { PlanningService } from 'src/app/planning/planning.service';

@Component({
  selector: 'app-planning-layout',
  templateUrl: './planning-layout.component.html',
  styleUrls: ['./planning-layout.component.css'],
})
export class PlanningLayoutComponent implements OnInit {
  pageNa;
  pageI;
  rightDivShow: boolean = true;
  leftDivShow: boolean = false;
  constructor(
    private router: Router,
    private planningService: PlanningService
  ) {}

  menuList;

  ngOnInit() {
    this.planningService.getMenuItems().subscribe((data: any) => {
      this.menuList = data.pages_list[0].pages;
      localStorage.setItem(
        'pageName',
        JSON.stringify(this.menuList[0].pageName)
      );
      localStorage.setItem('pageID', this.menuList[0].pageId);
    });
  }

  getImageUrl(ele) {
    return '../../../assets/menu-icon-' + ele.pageName + '.png';
  }

  navigateToMenu(element) {
    let pageID = element.pageId;
    let pageName = element.pageName;
    this.router.navigate([
      '/planning/list-items',
      { pageName: pageName, id: pageID },
    ]);
  }

  routeMenu(element) {
    let url =
      '/planning/list-items/' + element.pageName + '/' + element.pageId + '';
    console.log(url);
    return url;
  }

  rightDivClick(){
    this.leftDivShow = true;
    this.rightDivShow = false;
  }

  leftDivClick(){
    this.rightDivShow = true;
    this.leftDivShow = false;
  }
  
}
