import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import * as faBrands from "@fortawesome/free-brands-svg-icons";
import * as faIcons from "@fortawesome/free-solid-svg-icons";
import {animate, sequence, state, style, transition, trigger} from "@angular/animations";

declare let $: any;

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
    ),
    trigger('slideTitleAnimation', [
        state('false', style({ textAlign: 'center', transform: 'translateX(0%)' })),
        state('true', style({ transform: 'translateX(-5%)' })),
        transition('false => true', [
          animate('200ms ease-in', style({transform: 'translateX(-5%)'})),
        ]),
        transition('true => false', [
          animate('200ms ease-in', style({textAlign: 'center', transform: 'translateX(0%)'})),
        ])
      ]
    ),
    trigger(
      'explodeAnimation', [
        transition(':enter', [
          style({ opacity: 0 }),
          animate(400, style({ opacity: 1 }))
        ])
      ]
    ),
    trigger(
      'showQuestionAnswer', [
        state('false', style({ opacity: 0 })),
        state('true', style({ opacity: 1 })),
        transition('false => true', [
          animate('1200ms ease-in', style({opacity: 1})),
        ]),
        transition('true => false', [
          animate('200ms ease-in', style({opacity: 0})),
        ])
      ]
    ),
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', './home.component.mobile.scss']
})
export class HomeComponent implements OnInit {

  faBrands = faBrands;
  faIcons = faIcons;

  scrolled = 0;

  howStepOne = false;
  howStepTwo = false;
  howStepThree = false;
  howStepFour = false;

  faqClicked = false;

  firstQuestionClicked = false;
  secondQuestionClicked = false;
  thirdQuestionClicked = false;

  scrolledToVideo = false;

  videoPosterUrl = 'https://i.imgur.com/ke2X5ai.jpg';
  videoUrl = 'http://static.videogular.com/assets/videos/videogular.mp4';

  @ViewChild('media') media: ElementRef = new ElementRef(null);

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

    if (numb >= 3600) {
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

    // start video
    if (numb > 2600 && numb < 3000) {
      if (!this.scrolledToVideo) {
        this.scrolledToVideo = true;
        $('.vg-overlay-play').click();
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      $('#hero-button').trigger('click');
    }, 500);
  }

  clickQuestion(param: string) {
    if (!this.faqClicked) {
      this.faqClicked = true;
    }

    switch (param) {
      case 'first':
          this.secondQuestionClicked = this.thirdQuestionClicked = false;
          this.firstQuestionClicked = !this.firstQuestionClicked;
          break;
      case 'second':
        this.firstQuestionClicked = this.thirdQuestionClicked = false;
        this.secondQuestionClicked = !this.secondQuestionClicked;
        break;
      case 'third':
        this.firstQuestionClicked = this.secondQuestionClicked = false;
        this.thirdQuestionClicked = !this.thirdQuestionClicked;
        break;
    }

    if (!this.firstQuestionClicked && !this.secondQuestionClicked && !this.thirdQuestionClicked) {
      this.faqClicked = false;
    }
  }

  scrollToElement($element: any): void {
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
