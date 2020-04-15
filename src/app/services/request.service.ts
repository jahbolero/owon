import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { DataService } from "./data.service";
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: "root",
})
export class RequestService extends DataService {
  constructor(httpService: HttpClient) {
    super(environment.baseUrl + "/request/", httpService);
  }
}
