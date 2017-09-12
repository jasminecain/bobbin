import { Component } from '@angular/core';

/**
 * Generated class for the ProjectPhotosComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'project-photos',
  templateUrl: 'project-photos.html'
})
export class ProjectPhotosComponent {

  text: string;

  constructor() {
    console.log('Hello ProjectPhotosComponent Component');
    this.text = 'Hello World';
  }

}
