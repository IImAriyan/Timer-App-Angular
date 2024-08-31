import { Component } from '@angular/core';
import {FooterComponent} from "../../components/footer/footer.component";

@Component({
  selector: 'app-alarm',
  standalone: true,
    imports: [
        FooterComponent
    ],
  templateUrl: './alarm.component.html',
  styleUrl: './alarm.component.css'
})
export class AlarmComponent {

}
