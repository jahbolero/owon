import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: "root",
})
export class DataService {
  constructor(private url: string, private httpService: HttpClient) {}

  public getAll(): Observable<any> {
    return this.httpService.get(this.url);
  }

  public post(entity: any): Observable<any> {
    console.log(entity);
    return this.httpService.post(this.url, entity);
  }

  public getOne(id: string) {
    return this.httpService.get(this.url + `/${id}`);
  }
  public delete(id: string) {
    return this.httpService.delete(this.url + `${id}`);
  }
}
