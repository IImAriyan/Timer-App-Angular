import { Component } from '@angular/core';
import {NgIf, NgStyle} from "@angular/common";
import {LoaderComponent} from "../../components/loader/loader.component";
import colors from "tailwindcss/colors";
import {FooterComponent} from "../../components/footer/footer.component";


@Component({
  selector: 'app-clock',
  standalone: true,
    imports: [
        NgStyle,
        LoaderComponent,
        NgIf,
        FooterComponent

    ],

  templateUrl: './clock.component.html',
  styleUrl: './clock.component.css'
})
export class ClockComponent {
  isLoading: boolean = false;

  clockTime : string = '00:00:00';
  hour: number | string = 0;
  minute: number | string = 0;
  second: number | string = 0;

  handRotation : string = '0deg';
  rotation : number = 0;



  constructor() {
    this.isLoading = true;
    setInterval(()=>{
      if (this.isLoading) {
        this.isLoading = false;

      }
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

        this.rotation = (( ( time.getHours() - 12 ) * 3 ) * 10) + (time.getMinutes() / 2.2);

        this.handRotation =  this.rotation + 'deg';
      }
      else if (4 < 10) { // Getting AM Hour Rotation
        this.rotation = (( 4  * 3 ) * 10) + (time.getMinutes() / 2.2);

        this.handRotation =  this.rotation + 'deg';
      }

    },1000)
  }
}
