import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit {
  listItems = [
    { from: 'name1', to: 'code1', emailid:"1@gmail.com"},
    { from: 'name1', to: 'code1', emailid:"2@gmail.com"},
    { from: 'name1', to: 'code1', emailid:"3@gmail.com"},
    { from: 'name1', to: 'code1', emailid:"4@gmail.com"}
];
  keys:any;
  constructor() { 
    
  }
  
  
  ngOnInit() {
    this.keys = Object.keys(this.listItems[0])
    console.log(this.keys);
  }

}
