import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { LandingComponent } from "./components/landing/landing.component";
import { NucleoiconsComponent } from "./components/nucleoicons/nucleoicons.component";
import { RequestComponent } from "./components/request/request.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { VideoComponent } from "./components/video/video.component";

const routes: Routes = [
  { path: "", redirectTo: "index", pathMatch: "full" },
  { path: "index", component: LandingComponent },
  { path: "request", component: RequestComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "videos", component: VideoComponent },
];

@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes)],
  exports: [],
})
export class AppRoutingModule {}
