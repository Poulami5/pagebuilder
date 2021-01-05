import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ServiceService {
  constructor(private http: HttpClient) {}

  public selectValuesAfterSpace(val) {
    let regex = /\s(.*)/;
    let result = val.match(regex);
    return  result;
  }

  createNE(url, obj) {
    return this.http.post(url, obj);
  }
}
