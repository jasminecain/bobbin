import { Component } from '@angular/core';

/**
 * Generated class for the ProjectEditModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'project-edit-modal',
  templateUrl: 'project-edit-modal.html'
})
export class ProjectEditModalComponent {

  text: string;

  constructor() {
    console.log('Hello ProjectEditModalComponent Component');
    this.text = 'Hello World';
  }

}
