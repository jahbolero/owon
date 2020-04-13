import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { DataService } from "./data.service";

@Injectable({
  providedIn: "root",
})
export class RequestService extends DataService {
  constructor(httpService: HttpClient) {
    super("https://api-owon.herokuapp.com/requests/", httpService);
  }
}
