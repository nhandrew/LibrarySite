import { Component, OnInit } from '@angular/core';
import { FacebookService } from '../../services/facebook.service';

import { Observable } from 'rxjs/Rx';  
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-facebookevents',
  templateUrl: './facebookevents.component.html',
  styleUrls: ['./facebookevents.component.css'],
  providers: [FacebookService]
})
export class FacebookeventsComponent implements OnInit {

  //public events: Observable<any[]>;
  private events:any[];
  private today:string;

  constructor(private fb:FacebookService) { }

  ngOnInit() {
      this.today=new Date().toISOString();

      this.fb.getEvents('alburghpubliclibrary').subscribe(
      res => {this.events=res
        console.log(this.events)
      },
      error =>console.log(error)
    );
  }

}
