import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyC0awTFZhoN9QSFRkaDa1ErA2rnL6QXXLc",
      authDomain: "recipe-book-f67d8.firebaseapp.com",
    });

    //axamit
    /*firebase.initializeApp({
      apiKey: "AIzaSyDz1YgT8_ueYd_qioOdM8Vmw6WzrYa-ayI",
      authDomain: "ng-recipe-book-5b039.firebaseapp.com",
    });*/
  }
}
