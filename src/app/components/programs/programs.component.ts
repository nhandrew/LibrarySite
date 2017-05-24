import { Component, OnInit } from '@angular/core';
import { Event } from "../../models/event";
import { FacebookService } from '../../services/facebook.service';

import { Observable } from 'rxjs/Rx';  
import 'rxjs/add/operator/map';



@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css'],
  providers: [FacebookService]
})
export class ProgramsComponent implements OnInit {

  fbEvents: any[];
  events: any[];
  event: Event;
  even
    
  dialogVisible: boolean = false;
    
  idGen: number = 100;

  constructor(private fb:FacebookService) { }

  ngOnInit() {
        this.events
      this.fb.getEvents('alburghpubliclibrary').subscribe(
      res => {this.fbEvents=res
        this.events=[];
        for (let i of this.fbEvents){  
          //console.log(i);
            var ev=new Event();
            ev.start=i.start_time;
            ev.end=i.end_time;
            ev.title=i.name;
            ev.imageObject=i.cover;
            ev.description=i.description;  
            this.events.push(ev); 
            //console.log(ev); 
        }
      },
      error =>console.log(error)
    );


  }
     


     handleEventClick(e) {
       
        this.event = new Event();
        this.event.title = e.calEvent.title;
        this.event.end = e.calEvent.end;


        this.event.id = e.calEvent.id;
        this.event.start = e.calEvent.start;
        
        this.event.allDay = e.calEvent.allDay;
        this.dialogVisible = true;
        this.event.imageObject=e.calEvent.imageObject;
        this.event.description=e.calEvent.description;
        //console.log(this.event);
    }



}
