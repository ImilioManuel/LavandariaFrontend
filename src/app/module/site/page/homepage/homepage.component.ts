import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { BtnComponent } from "../../components/btn/btn.component";


@Component({
  selector: 'app-homepage',
  imports: [HeaderComponent, BtnComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
