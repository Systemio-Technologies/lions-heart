import {Component, HostListener, OnInit} from '@angular/core';
import * as faBrands from "@fortawesome/free-brands-svg-icons";
import * as faIcons from "@fortawesome/free-solid-svg-icons";
import {animate, sequence, state, style, transition, trigger} from "@angular/animations";

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
          animate(1200, style({ opacity: 1 }))
        ]),
        transition(':leave', [
          animate(1200, style({ opacity: 0 }))
        ])
      ]
    ),
    trigger('slideInOut', [
        state('false', style({ opacity: 0, transform: 'translateX(100%)' })),
        state('true', style({ opacity: 1 })),
        transition('false => true', [
          animate('200ms ease-in', style({opacity: 0.5, transform: 'translateX(50%)'})),
          animate('200ms ease-in', style({opacity: 1, transform: 'translateX(0%)'}))
        ]),
        transition('true => false', [
          animate('200ms ease-in', style({opacity: 0.5, transform: 'translateX(50%)'})),
          animate('200ms ease-in', style({opacity: 0, transform: 'translateX(100%)'})),
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

  howStepOne = false;
  howStepTwo = false;
  howStepThree = false;
  howStepFour = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event: any) {
    const numb = window.scrollY;
    if (numb >= 650 && numb < 1300){
      this.scrolled = 1;
    }
    else {
      if (numb >= 1300 && numb < 1900){
        this.scrolled = 2;
      } else {
        if (numb >= 1900) {
          this.scrolled = 3;
        }
      }
    }

    if (numb < 650) {
      this.scrolled = 0;
    }

    if (numb >= 2700) {
      this.howStepOne = true;
      setTimeout(() => {
        this.howStepTwo = true;
        setTimeout(() => {
          this.howStepThree = true;
          setTimeout(() => {
            this.howStepFour = true;
          }, 500);
        }, 500);
      }, 500);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
