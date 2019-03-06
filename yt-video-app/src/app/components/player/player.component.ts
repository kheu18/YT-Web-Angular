import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EmbedVideoService } from "ngx-embed-video";

@Component({
  selector: "app-player",
  templateUrl: "./player.component.html",
  styleUrls: ["./player.component.css"],
  template: `
    <mat-card> <div class="flex" [innerHtml]="iframe_html"></div> </mat-card>
  `
})
export class PlayerComponent implements OnInit {
  id: string;
  iframe_html: any;
  embedVideo;
  constructor(
    private video: EmbedVideoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(param => (this.id = param.id));
    this.embedVideo = this.video.embed_youtube(this.id);
    this.iframe_html = this.embedVideo;
  }
  ngDoCheck(): void {
    this.route.params.subscribe(param => (this.id = param.id));
    this.embedVideo = this.video.embed_youtube(this.id, {
      attr: { width: 640, height: 480 }
    });
    this.iframe_html = this.embedVideo;
  }
}
