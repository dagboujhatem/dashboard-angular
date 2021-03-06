import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { CountToModule } from 'angular-count-to';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';

import { TeamDetailsComponent } from './team-details/team-details.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

import 'hammerjs';
import 'mousetrap';
import { UsersIndexComponent } from './users-index/users-index.component';
import { UsersCreateComponent } from './users-create/users-create.component';
import { UsersUpdateComponent } from './users-update/users-update.component';

@NgModule({
  declarations: [TeamDetailsComponent, ProfileComponent, EditProfileComponent, UsersIndexComponent, UsersCreateComponent, UsersUpdateComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    CountToModule,
    GalleryModule.forRoot(),

  ]
})
export class UsersModule { }
