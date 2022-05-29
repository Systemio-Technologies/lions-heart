import {Component, HostListener, OnInit} from '@angular/core';
import * as faBrands from "@fortawesome/free-brands-svg-icons";
import * as faIcons from "@fortawesome/free-solid-svg-icons";
import {animate, sequence, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-home',
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
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  faBrands = faBrands;
  faIcons = faIcons;

  scrolled = 0;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event: any) {
    const numb = window.scrollY;
    if (numb >= 650 && numb < 900){
      this.scrolled = 1;
    }
    else {
      if (numb >= 900 && numb < 1150){
        this.scrolled = 2;
      } else {
        if (numb >= 1150) {
          this.scrolled = 3;
        }
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
