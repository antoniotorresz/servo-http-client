import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  basePath = "http://localhost:5000";
  toggleStatus: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get(this.basePath + "/log").subscribe(
      (data: any) => {
        this.toggleStatus = data.actions[0].is_activated;
       }
    );
  }

  onToggleClick(event: any){
    this.http.post(this.basePath + "/switch-action", {}).subscribe(
      (data: any) => {
        console.log(data);
        this.toggleStatus = data.action.is_activated;
      }
    );
  }

}
