import { Component, OnInit } from "@angular/core";
import { RequestService } from "app/services/request.service";

@Component({
  selector: "app-request-table",
  templateUrl: "./request-table.component.html",
  styleUrls: ["./request-table.component.css"],
})
export class RequestTableComponent implements OnInit {
  constructor(private requestService: RequestService) {}
  public requests: Array<Request>;

  ngOnInit(): void {
    this.getRequests();
  }
  getRequests() {
    this.requestService.getAll().subscribe((x) => (this.requests = x));
  }
}
