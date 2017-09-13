import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { ProjectsPage } from '../pages/projects/projects';
import { ProjectDetailPage } from '../pages/project-detail/project-detail';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // rootPage: any = TabsPage;
  // rootPage: any = ProjectsPage;
  rootPage: any = ProjectDetailPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
