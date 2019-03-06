import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PlayerComponent } from "./components/player/player.component";
import { FormComponent } from "./components/form/form.component";

const routes: Routes = [
  { path: "", redirectTo: "search", pathMatch: "full" },

  { path: "videoplayer/:id", component: PlayerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
