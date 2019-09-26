import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MsAdalAngular6Service } from "microsoft-adal-angular6";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  constructor(private http: HttpClient, private adal: MsAdalAngular6Service) {}

  ngOnInit() {
    //SAMPLE CODE to connect to back end/view user info (with roles, if applicable)
    //Use settings instead of hardcoded URL for non-test purposes
    console.log(this.adal.userInfo);
    this.http
      .get("https://wa-sensai-api-ussc-dev.azurewebsites.net/api/Location") //https://wa-sensai-api-ussc-dev.azurewebsites.net
      //Using API Management URL.
      .subscribe((result: any) => {
        console.log(result);
      });
  }
}
