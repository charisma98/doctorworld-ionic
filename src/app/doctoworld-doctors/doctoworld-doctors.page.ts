import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import SwiperCore, { Autoplay, Pagination, Keyboard, Scrollbar, Zoom, EffectCube, EffectFade, EffectFlip } from 'swiper';
import { IonicSlides } from '@ionic/angular';

SwiperCore.use([Autoplay, Pagination, Keyboard, Scrollbar, Zoom, EffectCube, EffectFade, EffectFlip, IonicSlides]);
@Component({
  selector: 'app-doctoworld-doctors',
  templateUrl: './doctoworld-doctors.page.html',
  styleUrls: ['./doctoworld-doctors.page.scss'],
})
export class DoctoworldDoctorsPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  // search() {
  //   this.route.navigate(['./specilities']);
  // }
  list_of_doctors() {
    this.route.navigate(['./doctoworld-list-of-doctors']);
  }
  // set_location() {
  //   this.route.navigate(['./add-address']);
  // }
}
