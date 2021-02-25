import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

let headers = new HttpHeaders();
headers = headers.set("Content-Type", "application/json; charset=utf-8");

@Injectable({
 providedIn: "root",
})
export class ConfigurationService {
 constructor(private http: HttpClient) {}

 getDevices(): Observable<any> {
  return this.http.get(environment.configBaseUrl + environment.configApiEndPoint.getDevice, { headers: headers });
 }

 getDashboardDeviceCounts(): Observable<any> {
  return this.http.get(environment.configBaseUrl + environment.configApiEndPoint.dashboardDeviceCounts, { headers: headers });
 }

 getDeviceCommand(): Observable<any> {
  return this.http.get(environment.configBaseUrl + environment.configApiEndPoint.getAllDeviceCommand, { headers: headers });
 }

 getDeviceFrequency(): Observable<any> {
  return this.http.get(environment.configBaseUrl + environment.configApiEndPoint.getAllDeviceFrequency, { headers: headers });
 }

 getDeviceGroup(): Observable<any> {
  return this.http.get(environment.configBaseUrl + environment.configApiEndPoint.getAllDeviceGroup, { headers: headers });
 }

 getUsers(): Observable<any> {
  return this.http.get(environment.configBaseUrl + environment.configApiEndPoint.getUsers, { headers: headers });
 }

 getCompareFileInfo(): Observable<any> {
  return this.http.get(environment.configBaseUrl + environment.configApiEndPoint.getCompareFilesInfo, { headers: headers });
 }

 Updatedeviceschedule(dataObj): Observable<any> {
  //   let body = new HttpParams();
  //   body = body.set("updatefrequency", updatefrequency);
  //   body = body.set("updateschedule", epochupdateschedule);
  //   body = body.set("deviceId", deviceId);
  return this.http.put(environment.configBaseUrl + environment.configApiEndPoint.Updatedeviceschedule + "/" + dataObj.deviceId, dataObj, { headers: headers });
 }
}
