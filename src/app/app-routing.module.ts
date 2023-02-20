import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFormComponent } from './addForm/add-form/add-form.component';
import {FriendsComponent} from './friends/friends/friends.component';
import { HomepageComponent } from './HomePage/homepage/homepage.component';

const routes: Routes = [
  {path: '', component:HomepageComponent},

  {path: 'Form', component:AddFormComponent},
  {path: 'FriendList', component: FriendsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
