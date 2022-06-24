import { Component } from '@angular/core';
import {LoadingService} from "./services/loading.service";
import * as faBrands from "@fortawesome/free-brands-svg-icons";
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({ opacity: 0 }),
          animate(400, style({ opacity: 1 }))
        ]),
        transition(':leave', [
          animate(400, style({ opacity: 0 }))
        ])
      ]
    )
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './app.component.mobile.scss']
})
export class AppComponent {
  title = 'LionsHeart';
  faBrands = faBrands;

  constructor(public loadingService: LoadingService) { }

}
