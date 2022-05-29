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
    ),
    trigger(
      'whyAnimation', [
        transition(':enter', [
          style({ opacity: 0 }),
          animate(1500, style({ opacity: 1 }))
        ]),
        transition(':leave', [
          animate(1500, style({ opacity: 0 }))
        ])
      ]
    ),
    trigger('slideInOut', [
        transition(':enter', [
          style({transform: 'translateX(100%)'}),
          animate('400ms ease-in', style({transform: 'translateX(0%)'}))
        ]),
        transition(':leave', [
          animate('400ms ease-in', style({transform: 'translateX(100%)'}))
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
    if (numb >= 650 && numb < 1400){
      this.scrolled = 1;
    }
    else {
      if (numb >= 1400 && numb < 2000){
        this.scrolled = 2;
      } else {
        if (numb >= 2000) {
          this.scrolled = 3;
        }
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
