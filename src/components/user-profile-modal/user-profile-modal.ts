import { Component } from '@angular/core';

/**
 * Generated class for the UserProfileModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'user-profile-modal',
  templateUrl: 'user-profile-modal.html'
})
export class UserProfileModalComponent {

  text: string;

  constructor() {
    console.log('Hello UserProfileModalComponent Component');
    this.text = 'Hello World';
  }

}
