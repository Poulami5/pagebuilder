import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

let headers = new HttpHeaders();
headers = headers.set("Content-Type", "application/json; charset=utf-8");

let menuHeaders = new HttpHeaders();
menuHeaders = headers
  .set("Content-Type", "application/json; charset=utf-8")
  .set("user_role", "1,2,3");

@Injectable({
  providedIn: "root",
})
export class PlanningService {
  constructor(private http: HttpClient) {}

  getAllDevice(): Observable<any> {
    return this.http.get(
      environment.baseUrl + environment.apiEndPoint.getAllDevice,
      { headers: headers }
    );
  }

  getMenuItems(): Observable<any> {
    return this.http.get(
      environment.baseUrl + environment.apiEndPoint.getMenu,
      { headers: menuHeaders }
    );
  }

  createPageItems(id): Observable<any> {
    return this.http.get(
      environment.baseUrl + environment.apiEndPoint.createPage + "/" + id,
      { headers: headers }
    );
  }

  createPageValues(actionLink, data): Observable<any> {
    return this.http.post(actionLink, data, { headers: headers });
  }
}
