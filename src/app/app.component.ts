import { Component, OnInit, Inject } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

import { APP_CONFIG, AppConfig } from './app.config';

import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  // private pages: Array<{ title: string, component: any }>;
  [x: string]: any;
  constructor(@Inject(APP_CONFIG) public config: AppConfig,
    // private platform: Platform, private menu: MenuController,
    // private splashScreen: SplashScreen,
    // private statusBar: StatusBar,
    // private modalController: ModalController,
    private translate: TranslateService,
    private route: Router,
    // private navCtrl: NavController, private myEvent: MyEventsService
  ) {
    // this.myEvent.getMenuIdObservable().subscribe(mId => { this.menu.enable(true, mId); if (mId != "zero") this.menu.open(mId) });
    // this.initializeApp();
    this.translate.setDefaultLang('en');
  }
}
