import { Component, OnInit, ViewChild } from "@angular/core";
import * as Rellax from "rellax";
import { RequestService } from "app/services/request.service";
import { FormGroup } from "@angular/forms";
import { Message } from "app/models/message";
import { MessageService } from "app/services/message.service";

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
  success = 0;
  @ViewChild("messageForm") formValues;
  constructor(
    private requestService: RequestService,
    private messageService: MessageService
  ) {}

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

  onSubmit(entity: FormGroup) {
    let message: Message;
    message = Object.assign(new Message(), entity.value);
    this.success = 2;
    let isValid = 1;
    for (var key in message) {
      if (message[key] === "" || message[key] === null) {
        isValid = 0;
      }
    }
    if (isValid) {
      this.messageService.post(message).subscribe((response) => {
        console.log(response);
        if (response != undefined) {
          this.success = 1;
          this.formValues.resetForm();
        }
      });
    }
  }
}
