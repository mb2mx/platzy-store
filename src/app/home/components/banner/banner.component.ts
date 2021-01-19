import { AfterViewInit, Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})

export class BannerComponent implements OnInit {

  images: string [] = [
    '/assets/images/banner/banner-1.jpg',
    '/assets/images/banner/banner-2.jpg',
    '/assets/images/banner/banner-3.jpg',
  ];

  swiper: Swiper;

  constructor() { }

  ngOnInit(): void {
    this.swiper = new Swiper('.swiper-container');
  }

}
