import { Component, OnInit } from "@angular/core";
import { ConfigurationService } from "../../configuration/configuration.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Observable, Subject } from "rxjs";

export interface DiffCompareConfig {
 leftContent: string;
 rightContent: string;
}
@Component({
 selector: "app-device-admin",
 templateUrl: "./device-admin.component.html",
 styleUrls: ["./device-admin.component.css"],
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

 leftSideCompareVar: string;
 rightSideCompareVar: string;
 compareTextContent: any = [];
 compareTextFormat: string;

 showToolbar: boolean = true;

 contentObservable: Subject<DiffCompareConfig> = new Subject<DiffCompareConfig>();
 contentObservable$: Observable<DiffCompareConfig> = this.contentObservable.asObservable();

 deviceStatus = [
  { id: 0, value: "Disabled" },
  { id: 1, value: "Enabled" },
 ];

 constructor(private router: Router, private configurationService: ConfigurationService, private route: ActivatedRoute) {}

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

  this.configurationService.getCompareFileInfo().subscribe((data: any) => {
   this.compareTextContent = data;
   this.leftSideCompareVar = this.compareTextContent[0].replace(/[\r\"\']/g, "");
   this.rightSideCompareVar = this.compareTextContent[1].replace(/[\r\"\']/g, "");
  });

  this.showToolbar = false;
 }

 routeToAddDetails() {
  let url = "/configuration/add/" + this.pageName + "/" + this.pageId + "";
  return url;
 }

 filterValues(event) {
  this.searchText = event.target.value;
 }

 getDeviceCommand() {
  this.configurationService.getDeviceCommand().subscribe((data: any) => {
   this.deviceCommand = data;
  });
 }
 getDeviceFrequency() {
  this.configurationService.getDeviceFrequency().subscribe((data: any) => {
   this.deviceFrequency = data;
  });
 }
 getDeviceGroup() {
  this.configurationService.getDeviceGroup().subscribe((data: any) => {
   this.deviceGroup = data;
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

 onCompareTextResults() {
  const newContent: DiffCompareConfig = {
   leftContent: this.leftSideCompareVar,
   rightContent: this.rightSideCompareVar,
  };
  this.contentObservable.next(newContent);

  setTimeout(() => {
   var tdLeftHeadElements = document.getElementsByClassName("fit-column line-number-col delete-row");
   var tdLeftRearElements = document.getElementsByClassName("fit-column prefix-col delete-row");
   var tdLeftContentElements = document.getElementsByClassName("content-col delete-row");
   var highLightElements = document.getElementsByClassName("highlight");
   var tdRightHeadElements = document.getElementsByClassName("fit-column line-number-col insert-row");
   var tdRightRearElements = document.getElementsByClassName("fit-column prefix-col insert-row");
   var tdRightContentElements = document.getElementsByClassName("content-col insert-row");

   for (var i = 0; i < tdLeftHeadElements.length; i++) {
    tdLeftHeadElements[i].setAttribute("style", "background-color: #FFFF00 !important");
   }
   for (var j = 0; j < tdLeftRearElements.length; j++) {
    tdLeftRearElements[j].setAttribute("style", "background-color: #FFFF00 !important");
   }
   for (var k = 0; k < tdLeftContentElements.length; k++) {
    tdLeftContentElements[k].setAttribute("style", "background-color: #FFFF00 !important");
   }

   for (var l = 0; l < highLightElements.length; l++) {
    highLightElements[l].setAttribute("style", "background-color: #FFFF00 !important");
   }

   for (var m = 0; m < tdRightHeadElements.length; m++) {
    tdRightHeadElements[m].setAttribute("style", "background-color: #FFFF00 !important");
   }

   for (var n = 0; n < tdRightRearElements.length; n++) {
    tdRightRearElements[n].setAttribute("style", "background-color: #FFFF00 !important");
   }
   for (var o = 0; o < tdRightContentElements.length; o++) {
    tdRightContentElements[o].setAttribute("style", "background-color: #FFFF00 !important");
   }
  }, 0);
 }
 ChangeScheduleSave() {
  let msg = "";
  let timezoneDiff = 19800; // Number of seconds
  //let diffOperator = "-"; // if server timezone is less than user timezone keep minus sign else keep plus sign -->
  // let timeDiff = diffOperator + timezoneDiff; // + " seconds";
  console.log("timeDiff::" + timezoneDiff);
  let frq = (<HTMLSelectElement>document.getElementById("Changefrq")).value;

  let updatefrequency = "";
  if (frq != "") {
   updatefrequency = this.GetFrequencyByID(frq);
  }
  console.log("frq::" + updatefrequency);
  let updateschedule1 = (document.getElementById("txtChangeSchedule") as HTMLInputElement).value;
  console.log("updateschedule1::" + updateschedule1);

  let updateschedul2 = new Date(updateschedule1).setSeconds(new Date(updateschedule1).getSeconds() - timezoneDiff);
  console.log("updateschedule2::" + updateschedul2);
  let updateschedule = updateschedul2.toString().replace("/", "-");
  console.log("updateschedule::" + updateschedule);
  let epochupdateschedule = new Date(updateschedul2).getTime() / 1000; //strtotime(updateschedule);
  console.log("epochupdateschedule::" + epochupdateschedule);
  let deviceId = "4";
  let STATUS = "";
  if (updatefrequency == "" && updateschedule != "") {
   STATUS = this.Updatedeviceschedule(updatefrequency, epochupdateschedule, deviceId);
   // STATUS = mysqli_query($con, "update deviceschedule set nextSchedule = '$epochupdateschedule' where deviceId = '$deviceId'");
   if (STATUS) {
    // writeLog('Updated device schedule( '.$epochupdateschedule.' ) for device('.$deviceName.').');
    msg = "Schedule Updated Successfully.";
   } else {
    // writeLog('Updating device schedule( '.$epochupdateschedule.' ) for device('.$deviceName.') failed.');
    msg = "Schedule Update Failed.";
   }
  } else if (updatefrequency != "" && updateschedule == "") {
   STATUS = this.Updatedeviceschedule(updatefrequency, updateschedule, deviceId);
   // STATUS = mysqli_query($con, "update deviceschedule set scheduleFrequency = '$updatefrequency' where deviceId = '$deviceId'");
   if (STATUS) {
    //writeLog('Updated device frequency to '.$frequency.' for device('.$deviceName.').');
    msg = "Schedule Updated Successfully.";
   } else {
    //writeLog('Updating device frequency to '.$frequency.' for device('.$deviceName.') failed.');
    msg = "Schedule Update Failed.";
   }
  } else if (updatefrequency != "" && updateschedule != "") {
   STATUS = this.Updatedeviceschedule(updatefrequency, epochupdateschedule, deviceId);
   // STATUS = mysqli_query($con, "update deviceschedule set scheduleFrequency = '$updatefrequency',nextSchedule = '$epochupdateschedule' where deviceId = '$deviceId'");
   if (STATUS) {
    //writeLog('Updated device frequency to '.$frequency.' and device schedule('.$epochupdateschedule.') for device('.$deviceName.').');
    msg = "Schedule Updated Successfully.";
   } else {
    //writeLog('Updating device frequency to '.$frequency.' and device schedule('.$epochupdateschedule.') for device('.$deviceName.') failed.');
    msg = "Schedule Update Failed.";
   }
  } else {
   msg = "No updates found";
  }
 }

 GetFrequencyByID(freqID) {
  console.log(JSON.stringify(this.deviceFrequency));
  let dvm = JSON.parse(JSON.stringify(this.deviceFrequency));
  var x = dvm.filter((a) => a.id == freqID);
  let frequency: any;
  for (let item in x) {
   frequency = x[item]["value"];
  }
  return frequency;
 }

 Updatedeviceschedule(updatefrequency, epochupdateschedule, deviceId) {
  let val = "";
  this.configurationService.Updatedeviceschedule(updatefrequency, epochupdateschedule, deviceId).subscribe((data: any) => {
   //this.deviceGroup = data;
   val = data;
  });
  return val;
 }
}
