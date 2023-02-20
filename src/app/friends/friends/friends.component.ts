import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  //NOTES
  // what if birthday same month but is gone , need use case for that too
  // when selecting earlier birthday of same month compared to later bday of same month, shows old friends name
  // save friend area of click needs to be fixed
  // main data array 
  friendsInfo: any[] = [];

  // arrays for randomized sprite 
  hair = ['bangs', 'braids','curlyBob', 'curlyShortHair', 'froBun', 'mohawk', 'shortHair', 'straightHair','wavyBob'];

  mouth =['awkwardSmile', 'kawaii','openSad','teethSmile','unimpressed'];

  skin = ['e2ba87','643d19','f5d7b1','c99c62','a47539','ffe4c0'];

  eyes = ['angry','cheery','confused','normal','sleepy','starstruck','winking'];

  hairColors =[];

  

  // XP Value
  xpVal = 0;
  mylen = 0;
  // level value
  myLevel = 0;

  // Birthday calculation variables
  // take len from mylen
 
  // getting current date
  friendDate = "";
  Month = "";
  Day ="";
  birthdayString = [];

  // variables to extract todays date 

  dateString = [];
  todaysMonth ="";
  todaysDay = "";
  todaysDate = new Date();
  differenceInMonths=0;

  finalMonthsVal = 13;
  finalDaysLeft = 0;

  BirthdayPersonName = "";



  // accessing colour idea
  colors:any[] = [];
  // have a colour array populated in init function
  // let index = i in main ngfor
  // put in values based on index from colour array
  // end of colour idea

  deleteFriendsArrayDummy:any[]=[];
  deleteFriendsArray:any[]=[];

  
  
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.friendsInfo = JSON.parse(localStorage.getItem('friendInfo') || '{}');
    //console.log(this.friendsInfo);
    this.mylen = this.friendsInfo.length;
    // calculating xp value
    for(let i=0; i<this.mylen;i++) {
      this.xpVal = this.xpVal +this.friendsInfo[i].Likes.length;
      // adding to colours list
      this.colors.push(this.friendsInfo[i].Colour.toString());

      // checking for empty colour input
      if(this.colors[i]==='') {
        // adding default
        this.colors[i] = "#F5D33C";
      }
    
      //console.log(this.colors[i].slice(1,-1));
      //console.log(this.xpVal);
    }

    this.xpVal = (100*this.mylen)+(5*this.xpVal); 

    this.myLevel = Math.floor(this.xpVal/400);

    // Birthday Calculation Begin
 
    for(let i = 0;i<this.mylen;i++) {

      // split string - works!!
      this.birthdayString = this.friendsInfo[i].BirthDate.split("-");

      // extract month and day
      this.Month = this.birthdayString[1];
      this.Day = this.birthdayString[2];

      // Get todays date - WORKS!!
      // turn into strings
      this.todaysDay = this.todaysDate.getDate().toString();
      
      this.todaysMonth = this.todaysDate.getMonth().toString();
      
      // Math
  
      if( (parseInt(this.todaysMonth)+1)<=(parseInt(this.Month))) {
        this.differenceInMonths = parseInt(this.Month)-(parseInt(this.todaysMonth)+1);
        //console.log(this.differenceInMonths);
        // calculating days left in case we are in the same month as the birthday 
        if(parseInt(this.Month)==(parseInt(this.todaysMonth))+1 && parseInt(this.Day)>parseInt(this.todaysDay)) {
          this.finalDaysLeft = parseInt(this.Day)-parseInt(this.todaysDay);
        }

      }
      else {
        // why bother calculating if their birthday is gone!! - edit what if we are in december??
        this.differenceInMonths = (12-((parseInt(this.todaysMonth))+1))+parseInt(this.Month);
        //console.log(this.differenceInMonths);
      }


      // setting shortest distance in months as final value
      if(this.differenceInMonths<this.finalMonthsVal) {
       this.finalMonthsVal = this.differenceInMonths;
       // setting latest birthday persons name as final
       this.BirthdayPersonName = this.friendsInfo[i].Name;

      }

    }
    // Birthday Calculation end
    
  }

  // function for key order 
  unsorted() { 
    return 0;
  }

  // deleting a friend

  // This approach looks fast visually but
  // Big O notation is O(n). It is stable but it requires an extra inch of memory
  // There has to be a away to delete the value directly in the local storagr
  // But that key becomes 'undefined'
  // Solution - what if ngfor i have ng if that checks for undefined??


  
  deleteFriend(indexVal: any) {
    this.deleteFriendsArrayDummy = JSON.parse(localStorage.getItem('friendInfo') || '{}');
    
    // idea 
    // iterate through local storage
    // if index matched indexval dont include it in final array

    for(let i = 0;i<this.deleteFriendsArrayDummy.length;i++) {
      if(i!=indexVal) {
        this.deleteFriendsArray.push(this.deleteFriendsArrayDummy[i]);
      }
    }

    // removing current local
    localStorage.removeItem('friendInfo');
    // pushing updated local
    localStorage.setItem('friendInfo',JSON.stringify(this.deleteFriendsArray));

    // resetting deleteFriend array
    this.deleteFriendsArray = [];

    // reload page
    window.location.reload();

  }

}
