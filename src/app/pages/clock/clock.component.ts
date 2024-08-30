import { Component } from '@angular/core';
import {NgStyle} from "@angular/common";


@Component({
  selector: 'app-clock',
  standalone: true,
  imports: [
    NgStyle

  ],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.css'
})
export class ClockComponent {
  clockTime : string = '00:00:00';
  hour: number | string = 0;
  minute: number | string = 0;
  second: number | string = 0;

  handRotation : string = '0deg';
  rotation : number = 0;



  constructor() {
    setInterval(()=>{
      let time = new Date();

      this.hour = time.getHours();
      this.minute = time.getMinutes();
      this.second = time.getSeconds();

      // Getting Minutes And Seconds And Hours
      if (this.hour < 10) {
        this.hour = '0' + this.hour
      }
      if (this.minute < 10) {
        this.minute = '0' + this.minute
      }
      if (this.second < 10) {
        this.second = '0' + this.second
      }

      this.clockTime = this.hour + ':' + this.minute + ':' + this.second

      if (time.getHours() > 10){ // Getting PM Hour Rotation

        this.rotation = (( ( time.getHours() - 12 ) * 3 ) * 10) + (time.getMinutes() / 3);

        this.handRotation =  this.rotation + 'deg';
      }

    },1000)
  }
}
