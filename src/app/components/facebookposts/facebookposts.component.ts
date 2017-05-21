import { Component, OnInit } from '@angular/core';
import { FacebookService } from '../../services/facebook.service';

import { Observable } from 'rxjs/Rx';  
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-facebookposts',
  templateUrl: './facebookposts.component.html',
  styleUrls: ['./facebookposts.component.css'],
  providers: [FacebookService]
})
export class FacebookpostsComponent implements OnInit {

  public posts: Observable<any[]>;

  constructor(private fb:FacebookService) { 
     

  }

  ngOnInit() {

    this.fb.getPosts('alburghpubliclibrary').subscribe(
        res => {console.log(res)
        },
        error =>console.log(error)
      );



  }

}
