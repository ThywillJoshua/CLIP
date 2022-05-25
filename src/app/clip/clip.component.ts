import { DatePipe } from '@angular/common';
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import videojs from 'video.js';
import { IClip } from '../models/clip.model';

@Component({
  selector: 'app-clip',
  templateUrl: './clip.component.html',
  styleUrls: ['./clip.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [DatePipe],
})
export class ClipComponent implements OnInit {
  @ViewChild('videoPlayer', { static: true }) target?: ElementRef;
  player?: videojs.Player;
  clip?: IClip;

  constructor(public route: ActivatedRoute, private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.player = videojs(this.target?.nativeElement, { aspectRatio: '16:9' });

    this.route.data.subscribe((data) => {
      this.clip = data['clip'] as IClip;

      this.player?.src({
        src: this.clip.url,
        type: 'video/mp4',
      });
    });
  }
}
