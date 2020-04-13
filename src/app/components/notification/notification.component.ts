import { Input, Component } from "@angular/core";

@Component({
  selector: "app-notification",
  templateUrl: "./notification.component.html",
  styleUrls: ["./notification.component.scss"],
})
export class NotificationComponent {
  @Input("type") type: string;
  public alerts: Array<IAlert> = [];
  private backup: Array<IAlert>;
  public showAlert: Array<IAlert> = [];

  constructor() {
    this.alerts.push(
      {
        id: 1,
        type: "success",
        strong: "Well done!",
        message: "You successfully read this important alert message.",
        icon: "ui-2_like",
      },
      {
        id: 2,
        type: "danger",
        strong: "Oh snap!",
        message: "This is a danger alert",
        icon: "objects_support-17",
      }
    );
    console.log(this.type);
    if (this.type == "none") {
    } else {
      this.showAlert.push(this.alerts.find((x) => x.type == this.type));
    }
    this.backup = this.alerts.map((alert: IAlert) => Object.assign({}, alert));
  }

  public closeAlert(alert: IAlert) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }
}

export interface IAlert {
  id: number;
  type: string;
  strong?: string;
  message: string;
  icon?: string;
}
