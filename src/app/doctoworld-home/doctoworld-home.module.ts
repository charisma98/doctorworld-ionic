import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctoworldHomePageRoutingModule } from './doctoworld-home-routing.module';

import { TranslateModule } from '@ngx-translate/core';

import { DoctoworldHomePage } from './doctoworld-home.page';

import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    DoctoworldHomePageRoutingModule,
    SwiperModule
  ],
  declarations: [DoctoworldHomePage]
})
export class DoctoworldHomePageModule { }
