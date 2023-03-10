import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranslateModule } from '@ngx-translate/core';


import { DoctoworldDoctorInfoPageRoutingModule } from './doctoworld-doctor-info-routing.module';

import { DoctoworldDoctorInfoPage } from './doctoworld-doctor-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    DoctoworldDoctorInfoPageRoutingModule
  ],
  declarations: [DoctoworldDoctorInfoPage]
})
export class DoctoworldDoctorInfoPageModule {}
