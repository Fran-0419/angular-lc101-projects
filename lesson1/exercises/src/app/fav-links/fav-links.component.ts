import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks:string[]= ['https://www.launchcode.org/lc101', 'https://flexboxfroggy.com/', 'https://www.w3schools.com/css/css_padding.asp']; 
  
  constructor() { }
  
  ngOnInit() {
  }

}
