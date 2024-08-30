import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {RouterLink} from "@angular/router";
import {Dir} from "@angular/cdk/bidi";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    MatIcon,
    RouterLink,
    Dir
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
