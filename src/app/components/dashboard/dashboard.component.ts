import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  loggedIn = 0;
  password = "sirachfortuna";

  constructor() {}

  ngOnInit(): void {}

  submitPassword(value: any) {
    console.log("WOW");
    console.log(value);
    if (value == "sirachfortuna") {
      this.loggedIn = 1;
      console.log(this.loggedIn);
    }
  }
}
