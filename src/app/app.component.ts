import {
  Component,
  OnInit,
  Inject,
  Renderer2,
  ElementRef,
  ViewChild,
} from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import "rxjs/add/operator/filter";
import { DOCUMENT } from "@angular/common";
import { LocationStrategy, PlatformLocation, Location } from "@angular/common";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { Title, Meta } from "@angular/platform-browser";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  private _router: Subscription;
  @ViewChild(NavbarComponent) navbar: NavbarComponent;

  constructor(
    private renderer: Renderer2,
    private router: Router,
    @Inject(DOCUMENT) private document: any,
    private element: ElementRef,
    public location: Location,
    private titleService: Title,
    private metaService: Meta
  ) {}
  ngOnInit() {
    this.titleService.setTitle("One World One Nation");
    this.metaService.addTags([
      { name: "keywords", content: "Angular, Universal, Example" },
      {
        name: "description",
        content:
          "We aim to sustain the Healed Earth through Love, Common Sense, Creativity and Innovation",
      },
      { name: "robots", content: "index, follow" },
    ]);
    var navbar: HTMLElement = this.element.nativeElement.children[0]
      .children[0];
    this._router = this.router.events
      .filter((event) => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => {
        if (window.outerWidth > 991) {
          window.document.children[0].scrollTop = 0;
        } else {
          window.document.activeElement.scrollTop = 0;
        }
        this.navbar.sidebarClose();

        this.renderer.listen("window", "scroll", (event) => {
          const number = window.scrollY;
          var _location = this.location.path();
          _location = _location.split("/")[2];

          if (number > 150 || window.pageYOffset > 150) {
            navbar.classList.remove("navbar-transparent");
          } else if (
            _location !== "login" &&
            this.location.path() !== "/nucleoicons"
          ) {
            // remove logic
            navbar.classList.add("navbar-transparent");
          }
        });
      });
  }
}
