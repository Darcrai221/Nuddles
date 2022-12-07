import { Component, OnInit } from '@angular/core';
import { getAuth, onAuthStateChanged } from "firebase/auth";
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  Email = '';
  constructor() { }

  ngOnInit() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.email;

        this.Email = uid;
        console.log("ID" + uid);
      } else {
        
      }
    });
  }

}
