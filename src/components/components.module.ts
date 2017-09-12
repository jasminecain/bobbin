import { NgModule } from '@angular/core';
import { ProjectEditModalComponent } from './project-edit-modal/project-edit-modal';
import { UserProfileModalComponent } from './user-profile-modal/user-profile-modal';
import { ProjectPhotosComponent } from './project-photos/project-photos';
import { ProjectSuppliesListComponent } from './project-supplies-list/project-supplies-list';
import { HeaderComponent } from './header/header';
@NgModule({
	declarations: [ProjectEditModalComponent,
    UserProfileModalComponent,
    ProjectPhotosComponent,
    ProjectSuppliesListComponent,
    HeaderComponent],
	imports: [],
	exports: [ProjectEditModalComponent,
    UserProfileModalComponent,
    ProjectPhotosComponent,
    ProjectSuppliesListComponent,
    HeaderComponent]
})
export class ComponentsModule {}
