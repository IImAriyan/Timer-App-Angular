import { Component } from '@angular/core';
import {NgStyle} from "@angular/common";
import colors from "tailwindcss/colors";


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
  elemColors : [string,string,string,string,string,string,string,string] = [
    colors.gray["900"],
    colors.gray["900"],
    colors.gray["900"],
    colors.gray["900"],
    colors.gray["900"],
    colors.gray["900"],
    colors.gray["900"],
    colors.gray["900"],
  ]

  elementInLoading : number = -1;

  constructor() {
    setInterval(()=>{
      this.elemColors = [
        colors.gray["900"],
        colors.gray["900"],
        colors.gray["900"],
        colors.gray["900"],
        colors.gray["900"],
        colors.gray["900"],
        colors.gray["900"],
        colors.gray["900"],
      ]

      if (this.elementInLoading <= 6) {
        this.elementInLoading ++;
        this.elemColors[this.elementInLoading] = colors.blue["600"]
      }else {
        this.elementInLoading = 0;
        this.elemColors[this.elementInLoading] = colors.blue["600"]
      }

    },200)
  }
}
