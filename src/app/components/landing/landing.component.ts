import { Component, OnInit, ViewChild } from "@angular/core";
import * as Rellax from "rellax";
import { RequestService } from "app/services/request.service";
import { FormGroup } from "@angular/forms";
import { Message } from "app/models/message";
import { MessageService } from "app/services/message.service";
import {
  NgbCarousel,
  NgbSlideEvent,
  NgbSlideEventSource,
} from "@ng-bootstrap/ng-bootstrap";

interface Result {
  result: string;
}

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.scss"],
})
export class LandingComponent implements OnInit {
  images = ["page1", "page2", "page3", "page4"];

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;

  @ViewChild("carousel", { static: true }) carousel: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (
      this.unpauseOnArrow &&
      slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT ||
        slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
    ) {
      this.togglePaused();
    }
    if (
      this.pauseOnIndicator &&
      !slideEvent.paused &&
      slideEvent.source === NgbSlideEventSource.INDICATOR
    ) {
      this.togglePaused();
    }
  }
  ///
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

  onSubmit(entity: FormGroup) {
    let message: Message;
    message = Object.assign(new Message(), entity.value);
    this.success = 3;
    let isValid = 1;
    for (var key in message) {
      if (message[key] === "" || message[key] === null) {
        isValid = 0;
      }
    }
    if (isValid) {
      this.messageService.post(message).subscribe(
        (response) => {
          if (response != undefined) {
            if (response.result == "success") {
              this.success = 1;
              this.formValues.resetForm();
            } else if (response.result == "fail") {
              this.success = 2;
            }
          }
        },
        (error) => {
          console.log(error);
          this.success = 2;
        }
      );
    }
  }
}
