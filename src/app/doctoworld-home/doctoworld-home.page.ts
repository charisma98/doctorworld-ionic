import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import SwiperCore, { Autoplay, Pagination, Keyboard, Scrollbar, Zoom, EffectCube, EffectFade, EffectFlip } from 'swiper';
import { IonicSlides } from '@ionic/angular';

SwiperCore.use([Autoplay, Pagination, Keyboard, Scrollbar, Zoom, EffectCube, EffectFade, EffectFlip, IonicSlides]);


@Component({
  selector: 'app-doctoworld-home',
  templateUrl: './doctoworld-home.page.html',
  styleUrls: ['./doctoworld-home.page.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class DoctoworldHomePage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  seller_profile() {
    this.route.navigate(['./doctoworld-medicines']);
  }
  categories() {
    this.route.navigate(['./doctoworld-medicines']);
  }
  cart() {
    this.route.navigate(['./doctoworld-cart']);
  }
  // search() {
  //   this.route.navigate(['./specilities']);
  // }
}
