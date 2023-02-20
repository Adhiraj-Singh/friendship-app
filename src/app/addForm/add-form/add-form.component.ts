import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  title='Welcome, friend';

  //trigger boolean for roster button
  loadRosterButton = false;

  Name: string = '';
  Birthday: string= '';
  BirthDate: string='';
  Likes: string='';
  Colour: string='';
  

  friendInfo:  string[] = [];
  // create empty array
  // call the array and store
  // append latest value
  // send back to the local storage 



  constructor() { }

  ngOnInit(): void {
    // only initialis if it doesnt exist to prevent over writing 
    if(localStorage.getItem('friendInfo') === null) {
      localStorage.setItem('friendInfo', JSON.stringify(this.friendInfo));

    }
    
  }

  saveFriend(data:any) {
    // call latest array
    this.friendInfo = JSON.parse(localStorage.getItem('friendInfo') || '{}');
    // add latest data to array
    this.friendInfo.push(data);
    // push updated array back to LS
    localStorage.setItem('friendInfo', JSON.stringify(this.friendInfo));
    // loading friends dashboard button
    this.loadRosterButton=true;
    //alert("Friend Added!");

    // resetting form values
    this.Name = '';
    this.Likes= '';
    this.Birthday= '';
    this.Colour = '';

    
 
  }

  loadRoster() {
    //console.log('reached here');
    this.loadRosterButton = true;
  }

}
