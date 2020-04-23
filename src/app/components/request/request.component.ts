import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { MaskRequest } from "../../models/request";
import { RequestService } from "app/services/request.service";

@Component({
  selector: "app-request",
  templateUrl: "./request.component.html",
  styleUrls: ["./request.component.scss"],
})
export class RequestComponent implements OnInit {
  @ViewChild("requestForm") formValues;
  formStatus = "none";
  focus2: any;
  success = 0;
  constructor(private requestService: RequestService) {}

  ngOnInit(): void {}

  onSubmit(entity: FormGroup) {
    let request: MaskRequest;
    request = Object.assign(new MaskRequest(), entity.value);
    this.success = 3;
    let isValid = 1;
    for (var key in request) {
      if (request[key] === "" || request[key] === null) {
        isValid = 0;
      }
    }
    if (isValid) {
      this.requestService.post(request).subscribe(
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
