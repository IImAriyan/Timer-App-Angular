import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {Month} from "../../models/month.model";
import {MatTooltip} from "@angular/material/tooltip";
import {NgForOf, NgStyle,NgIf} from "@angular/common";
import {Schedule} from "../../models/schedule.model";
import {CdkDrag} from "@angular/cdk/drag-drop";


@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [
    MatIcon,
    MatIconButton,
    RouterLink,
    MatButton,
    MatTooltip,
    NgForOf,
    NgStyle,
    NgIf,
    CdkDrag,

  ],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css'
})
export class ScheduleComponent {


  inChangeSchedule = -1;
  schedules : Schedule[] = [];

  year : number = 0;
  month : string  = "";
  day : number = 0;

  mousePosition = {
    x: 0,
    y: 0,
  }

  schedulePosition = [
    {x: 0, y: 0},
  ]
  mouseIsShow = false;
  dragIsDisable:boolean = false;

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

   getRanges(start = 0, end = 0, length = end - start) {
    return Array.from({length}, (_, i) => i + start)
  }

  setMousePosition(mouseEvent:MouseEvent) {
    this.mousePosition.x = mouseEvent.x + 10
    this.mousePosition.y = mouseEvent.y + 10
  }

  changeSchedule(id:number) {
  if (id == this.inChangeSchedule) {
    this.schedules[id-1].y = this.mousePosition.y;
  }


  }

  createSchedule(){
    this.year =  this.route.snapshot.params['year'];
    this.month =  this.months[this.route.snapshot.params['month']].name;
    this.day =  this.route.snapshot.params['day'];
    let day = new Date(this.year,this.route.snapshot.params['month'],this.day);
    this.schedules.push({
        id:this.schedules.length+1,
        title:"New Event",
        forDate: day,
        timeStart: ""+Math.floor(this.mousePosition.y / 20),
        timeEnd:"20",
        y:this.mousePosition.y,
    }
    )

    console.log(this.schedules);
  }

  setDragDisable(mouseEvent: MouseEvent) {
    this.dragIsDisable = false
  }

  constructor(private route: ActivatedRoute) {
    this.year =  route.snapshot.params['year'];
    this.month =  this.months[route.snapshot.params['month']].name;
    this.day =  route.snapshot.params['day'];
  }
}
