import { Component } from '@angular/core';

/**
 * Generated class for the ProjectSuppliesListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'project-supplies-list',
  templateUrl: 'project-supplies-list.html'
})
export class ProjectSuppliesListComponent {

  text: string;

  constructor() {
    console.log('Hello ProjectSuppliesListComponent Component');
    this.text = 'Hello World';
  }

}
