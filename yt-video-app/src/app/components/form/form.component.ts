import { Component, OnInit } from "@angular/core";
import { HttpServiceService } from "../../services/http-service.service";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  searchParm = "";
  submit = false;
  data;
  constructor(private http: HttpServiceService) {}
  onSubmit() {
    this.submit = true;
    console.log(this.searchParm);
    this.http
      .getSearchResult(this.searchParm)
      .subscribe(data => (this.data = data));
  }

  /* onSubmit() {
    this.submit = true;
    this.http.getSearchResultLocal().subscribe(data => (this.data = data));
  } */
  ngOnInit() {}
}
