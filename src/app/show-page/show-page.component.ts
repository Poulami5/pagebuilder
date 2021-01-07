import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { concat } from 'rxjs';
import { field, value } from '../global.model';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-show-page',
  templateUrl: './show-page.component.html',
  styleUrls: ['./show-page.component.css'],
})
export class ShowPageComponent implements OnInit {
  success = false;

  modelFields: Array<field> = [];
  model: any = {
    // name:'App name...',
    // description:'App Description...',
    theme: {
      bgColor: 'ffffff',
      textColor: '555555',
      bannerImage: '',
    },
    attributes: this.modelFields,
  };
  constructor(private router: Router, private service: ServiceService) {}

  ngOnInit() {
    // this.router.navigate(['/', 'red-pill'])
    this.model = JSON.parse(localStorage.getItem('modal'));
    // console.log(this.model);
  }
  toggleValue(item) {
    item.selected = !item.selected;
  }

  submit() {
    // console.log("Attributes : ", this.model.attributes);
    let obj = {};
    this.model.attributes.forEach((element) => {
      obj[element.name] = element.value;
      if (element.type === 'button') {
        // console.log("obj : " + JSON.stringify(obj));
        // this.service.createNE(element.endpoint, obj).subscribe(res=>{
        //   console.log(res);
        // })
        alert('api called : ' + element.endpoint);
      }
    });
  }

  customFunction() {
    this.model.attributes.forEach((element) => {
      if (element.customFun != '' && element.customFun != undefined) {
        let el = document.querySelector('#' + element.name); //vendorId
        if (el === document.activeElement) {
          let firstArg = element.firstArg;
          let secondArg = element.secondArg;
          let firstArgVal;
          let secondArgVal;
          let thirdArgVal;
          let funName = element.customFun;

          switch (funName) {
            case 'concat':
              this.model.attributes.forEach((e) => {
                if (e.name === firstArg) {
                  firstArgVal = e.value;
                }
                if (e.name === secondArg) {
                  secondArgVal = e.value;
                }
                if (firstArgVal && secondArg) {
                  if (e.name === element.name) {
                    e.value = this.concatFunc(firstArgVal, secondArgVal);
                  }
                }
              });

              break;
            case 'split':
              this.model.attributes.forEach((e) => {
                if (e.name === firstArg) {
                  firstArgVal = e.value;
                }
                secondArgVal = e.secondArg;
                thirdArgVal = e.thirdArg;
                if (firstArgVal && secondArg) {
                  if (e.name === element.name) {
                    e.value = this.splitFunc(
                      firstArgVal,
                      secondArgVal,
                      thirdArgVal
                    );
                  }
                }
              });
              break;

            default:
              console.log('No Custom Func!');
              break;
          }

          // if(elem[1].includes("concat")) {
          //   let str2 = elem[1].split("concat(");
          //   let eVal2;
          //   if(e.name === str2[1]){
          //     eVal2 = e.value;
          //   }
          //   let res = eval(
          //     `(function(){ let va = "${eVal}".concat(${eVal2}); return va})();`
          //   );
          //   console.log(res);
          // }
          // let res = eval(
          //   `(function(){ let va = "${eVal}".${elem[1]}; return va})();`
          // );
          // if (e.name === element.name) {
          //   if (elem[1].includes("split")) {
          //     e.value = res[1];
          //   }
          //   if (elem[1].includes("replace")) {
          //     e.value = res;
          //   }

          // }
        }
      }
    });
  }
  concatFunc(fArg, sArg) {
    console.log(fArg, sArg);

    let val = fArg.concat(sArg);
    return val;
  }
  splitFunc(fArg, sArg, tArg) {
    let seperator;
    let indexVal;
    if (tArg === 'show first') {
      tArg = 0;
    }
    if (tArg === 'show second') {
      tArg = 1;
    }

    let val = fArg.split(sArg);
    return val[tArg];
  }

  clear() {
    localStorage.clear();
    this.router.navigate(['/createPage']);
  }
}
