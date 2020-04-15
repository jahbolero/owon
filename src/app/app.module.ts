import { BrowserAnimationsModule } from "@angular/platform-browser/animations"; // this is needed!
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app.routing";
import { ExamplesModule } from "./examples/examples.module";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { RequestComponent } from "./components/request/request.component";
import { NotificationComponent } from "./components/notification/notification.component";
import { HttpClientModule } from "@angular/common/http";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { RequestTableComponent } from "./components/request-table/request-table.component";
import { VideoComponent } from "./components/video/video.component";
import { DataTablesModule } from "angular-datatables";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { ComponentsModule } from "./components/components.module";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RequestComponent,
    NotificationComponent,
    DashboardComponent,
    RequestTableComponent,
    VideoComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    ExamplesModule,
    HttpClientModule,
    DataTablesModule,
    NgxDatatableModule,
    ComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
