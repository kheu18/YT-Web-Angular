import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ViewContainerRef
} from "@angular/core";

@Component({
  selector: "app-gridwall",
  templateUrl: "./gridwall.component.html",
  styleUrls: ["./gridwall.component.css"]
})
export class GridwallComponent implements OnInit {
  @Input() res;
  @ViewChild("container", { read: ViewContainerRef })
  container: ViewContainerRef;

  constructor() {}

  ngOnInit() {}
  remove() {
    this.container.detach();
    this.container.clear();
  }
}
