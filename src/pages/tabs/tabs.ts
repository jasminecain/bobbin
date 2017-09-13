import { Component } from '@angular/core';

import { ModalController } from 'ionic-angular';
// import { UserProfileModalComponent } from '../user-profile-modal/user-profile-modal';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor(
    public modalCtrl: ModalController,
  ) {
  }
  // showProfileModal(): void {
  //   let profileModal = this.modalCtrl.create(UserProfileModalComponent);
  //   profileModal.present();
  // }
}
