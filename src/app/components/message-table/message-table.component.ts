import { Component, OnInit } from "@angular/core";
import { MessageService } from "app/services/message.service";
import { Message } from "app/models/message";
import { Subject } from "rxjs";

class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

@Component({
  selector: "app-message-table",
  templateUrl: "./message-table.component.html",
  styleUrls: ["./message-table.component.css"],
})
export class MessageTableComponent implements OnInit {
  constructor(private messageService: MessageService) {}
  public messages: Array<Message> = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  ngOnInit(): void {
    const that = this;
    this.dtOptions = {
      pagingType: "full_numbers",
      pageLength: 10,
    };
    this.messageService.getAll().subscribe((x) => {
      this.messages = x;
      console.log(this.messages);
      this.dtTrigger.next();
    });
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  deleteRecord(id) {
    this.messageService.delete(id).subscribe((x) => {
      this.messages = this.messages.filter((messages) => messages._id != id);
      console.log(this.messages.length);
    });
  }
}
