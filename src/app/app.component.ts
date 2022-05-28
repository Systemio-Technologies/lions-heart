import { Component } from '@angular/core';
import {LoadingService} from "./services/loading.service";
import * as faBrands from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Lions Heart';
  faBrands = faBrands;

  constructor(public loadingService: LoadingService) { }

}
