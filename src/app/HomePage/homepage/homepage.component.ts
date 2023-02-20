import { Component, OnInit } from '@angular/core';
import { AddFormComponent } from 'src/app/addForm/add-form/add-form.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  // bool for form trigger
  loadComponent = false;
  
  
  
  title = 'Welcome, friend.';
  constructor() { }

  ngOnInit(): void {
  }

  // function to turn loading form true
  loadForm() {
    
    this.loadComponent = true;
  }

  

  

}
