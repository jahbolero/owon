import { Component, OnInit } from "@angular/core";
import { RequestService } from "app/services/request.service";
import { Subject } from "rxjs";
import { MaskRequest } from "app/models/request";

class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

@Component({
  selector: "app-request-table",
  templateUrl: "./request-table.component.html",
  styleUrls: ["./request-table.component.css"],
})
export class RequestTableComponent implements OnInit {
  constructor(private requestService: RequestService) {}
  public requests: Array<MaskRequest> = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  ngOnInit(): void {
    const that = this;
    // this.getRequests();
    this.dtOptions = {
      pagingType: "full_numbers",
      pageLength: 10,
    };
    this.requestService.getAll().subscribe((x) => {
      this.requests = x;
      this.dtTrigger.next();
    });
  }
  getRequests() {
    this.requestService.getAll().subscribe((x) => {
      this.requests = x;
    });
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  deleteRecord(id) {
    this.requestService.delete(id).subscribe((x) => {
      this.requests = this.requests.filter((request) => request._id != id);
      console.log(this.requests.length);
    });
  }
}
