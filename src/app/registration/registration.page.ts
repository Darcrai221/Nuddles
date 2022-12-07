import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  formReg: FormGroup;
  
  constructor(
    private userService: UserService,
    public modalCtrl: ModalController,
    private router: Router
  ) {
    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
   }

  ngOnInit() {
  }

  async dismiss() {
    return await this.modalCtrl.dismiss();
  }
  
  onSubmit() {
    this.userService.register(this.formReg.value)
      .then(response => {
        this.router.navigate(['/login']);
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
