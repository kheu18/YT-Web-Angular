import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class HttpServiceService {
  api =
    "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=";
  key = "&type=video&key=AIzaSyC67DB0G2XbWJNnImfYpHRCinojl4V-O_k";
  api2 = "http://localhost:3000/api";
  constructor(private httpClient: HttpClient) {}

  getSearchResult(param): Observable<any> {
    return this.httpClient.get(`${this.api}${param}${this.key}`);
  }
  getSearchResultLocal(): Observable<any> {
    return this.httpClient.get(`${this.api2}`);
  }
}
