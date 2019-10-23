import { Component, OnInit } from '@angular/core';
import { typeWithParameters } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-booking-window',
  templateUrl: './booking-window.component.html',
  styleUrls: ['./booking-window.component.css']
})
export class BookingWindowComponent implements OnInit {

  constructor() { }

  selectedFrom:any;
  selectedTo:any;
  depart:any;
  destination:any;
  startFrom =[ "Banglore", "Hyderabad", "Chennai", "Indore"];
  endTo =[ "Banglore", "Hyderabad", "Chennai", "Indore"];
  
  ngOnInit() {
    this.depart = this.startFrom;
    this.destination = this.endTo;

  }
  selectDepart(location){
    console.log(location);
    if(location!='none')
    this.selectedFrom =location;
  }

  selectDestination(location){
    console.log(location);
    if(location!='none' && location==this.selectedFrom){
      alert("You can not select same drop and pick up locations");
      

    }

  }


}
