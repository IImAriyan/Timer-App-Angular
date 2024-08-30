import { Component } from '@angular/core';
import {NgStyle} from "@angular/common";
import {elementAt} from "rxjs";

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css'
})
export class LoaderComponent {
  colors : [string,string,string,string,string,string,string,string] = [
    "rgb(17, 24, 39)",
    "rgb(17, 24, 39)",
    "rgb(17, 24, 39)",
    "rgb(17, 24, 39)",
    "rgb(17, 24, 39)",
    "rgb(17, 24, 39)",
    "rgb(17, 24, 39)",
    "rgb(17, 24, 39)",
  ]

  elementInLoading : number = -1;

  constructor() {
    setInterval(()=>{
      this.colors = [
        "rgb(17, 24, 39)",
        "rgb(17, 24, 39)",
        "rgb(17, 24, 39)",
        "rgb(17, 24, 39)",
        "rgb(17, 24, 39)",
        "rgb(17, 24, 39)",
        "rgb(17, 24, 39)",
        "rgb(17, 24, 39)",
      ]

      if (this.elementInLoading <= 6) {
        this.elementInLoading ++;
        this.colors[this.elementInLoading] = "rgb(37 ,99 ,235 )"
      }else {
        this.elementInLoading = 0;
        this.colors[this.elementInLoading] = "rgb(37 ,99 ,235 )"
      }

    },200)
  }
}
