import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/primeng';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
private items: MenuItem[];

  constructor() { }
  
  ngOnInit() {

     this.items = [
            {label: 'Home', icon: 'fa-home', routerLink: ['']},
            {label: 'Catalog',routerLink: ['/catalog']},
            {label: 'Resources'},
            {label: 'Contact'},
            {label: 'History'}
        ];

   
  }

}
