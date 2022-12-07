import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

import { getAuth, onAuthStateChanged } from "firebase/auth";

import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formLogin: FormGroup;

  constructor(
    private userService: UserService,
    public modalCtrl: ModalController,
    private router: Router    
  ) {
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit() {
  }

  async dismiss() {
    await this.modalCtrl.dismiss();
  }

  onSubmit() {
    this.userService.login(this.formLogin.value)
      .then(response => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.email;

                console.log("ID: "+ uid);
            } else {

            }
        });

        this.router.navigate(['/home']);
        this.modalCtrl.dismiss();
      })
      .catch(error => console.log(error));
  }
  
  onClick() {
    this.userService.loginWithGoogle()
      .then(response => {
        console.log(response);
        this.router.navigate(['/home']);
        this.modalCtrl.dismiss();

      })
      .catch(error => console.log(error))
  }
}
