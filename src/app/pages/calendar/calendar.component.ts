import { Component } from '@angular/core';
import {Month} from "../../models/month.model";
import {MatIcon} from "@angular/material/icon";
import {NgClass, NgForOf, NgStyle} from "@angular/common";
import moment from "moment";

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    MatIcon,
    NgForOf,
    NgStyle,
    NgClass
  ],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {
  time: Date = new Date();
  daysOfWeek: string[]=[
    "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"
  ]
  months : Month[] = [
    {name:"January",daysNumber:31,id:1},
    {name:"February",daysNumber:29,id:2},
    {name:"March",daysNumber:31,id:3},
    {name:"April",daysNumber:30,id:4},
    {name:"May",daysNumber:31,id:5},
    {name:"June",daysNumber:30,id:6},
    {name:"July",daysNumber:31,id:7},
    {name:"August",daysNumber:31,id:8},
    {name:"September",daysNumber:30,id:9},
    {name:"October",daysNumber:31,id:10},
    {name:"November",daysNumber:30,id:11},
    {name:"December",daysNumber:31,id:12},
  ]

  year : number = 0;
  month : number = 0;
  day : number = 0;
  days : string[] = [];


  getDayNames (month:number, year:number)  {
    this.days = []
    const daysInMonth = moment(`${month}-01-${year}`, 'MM-DD-YYYY').daysInMonth()

    for (let i = 1; i <= daysInMonth; i++) {
      let date = moment(`${month}-${i}-${year}`, 'MM-DD-YYYY')
      let dayName = date.format('dddd')

      this.days.push(dayName)
    }


  }

  constructor() {
    this.month = this.time.getMonth();
    this.year = this.time.getFullYear();
    this.day = this.time.getDate();



    this.getDayNames(this.month+1, this.year)
  }

  nextMonth () {

    if (this.month <= 10) {
      this.month = this.month + 1;
      this.day = 1;
      if (this.month == this.time.getMonth()) {
        this.day = this.time.getDate();
      }
      this.getDayNames(this.month+1, this.year)
    }else {
      this.year = this.year + 1;
      this.month = 0;
      this.day = 1;
      if (this.month == this.time.getMonth()) {
        this.day = this.time.getDate();
      }
      this.getDayNames(this.month+1, this.year)
    }
  }

  previousMonth () {
    if (this.month > 0) {
      this.month = this.month - 1;
      this.day = 1;
      if (this.month == this.time.getMonth()) {
        this.day = this.time.getDate();
      }
      this.getDayNames(this.month+1, this.year)
    }else {
      this.year = this.year - 1;
      this.month = 11;
      this.day = 1;
      if (this.month == this.time.getMonth()) {
        this.day = this.time.getDate();
      }
      this.getDayNames(this.month+1, this.year)
    }

  }



}
