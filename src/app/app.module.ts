import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { AddFormComponent } from './addForm/add-form/add-form.component';
import { FriendsComponent } from './friends/friends/friends.component';
import { HomepageComponent } from './HomePage/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    AddFormComponent,
    FriendsComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
