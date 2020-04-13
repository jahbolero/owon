import { Component, OnInit } from "@angular/core";
import * as Rellax from "rellax";
import { RequestService } from "app/services/request.service";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.scss"],
})
export class LandingComponent implements OnInit {
  data: Date = new Date();
  focus;
  focus1;
  requests;
  constructor(private requestService: RequestService) {}

  ngOnInit() {
    var rellaxHeader = new Rellax(".rellax-header");
    this.getRequests();
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("landing-page");
    var navbar = document.getElementsByTagName("nav")[0];
    navbar.classList.add("navbar-transparent");
  }
  getRequests() {
    this.requestService.getAll().subscribe((x) => (this.requests = x));
  }

  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("landing-page");
    var navbar = document.getElementsByTagName("nav")[0];
    navbar.classList.remove("navbar-transparent");
  }
}
