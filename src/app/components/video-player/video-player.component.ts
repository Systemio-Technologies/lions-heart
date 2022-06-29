import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {

  @Input() videoUrl = '';
  @Input() posterUrl = '';

  modalIsOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  onPlay(video: HTMLVideoElement) {
    this.modalIsOpen = true;
    video.play();
  }

  onClose(video: HTMLVideoElement) {
    this.modalIsOpen = false;
    video.pause();
  }
}
