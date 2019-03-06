import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PlayerComponent } from "./components/player/player.component";
import { FormComponent } from "./components/form/form.component";

import { GridwallComponent } from "./components/gridwall/gridwall.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { EmbedVideo } from "ngx-embed-video";
import {
  MatGridListModule,
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatToolbarModule,
  MatTabsModule
} from "@angular/material";
@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    FormComponent,
    GridwallComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatTabsModule,
    EmbedVideo.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
