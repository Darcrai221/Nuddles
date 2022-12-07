import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.page.html',
  styleUrls: ['./exercises.page.scss'],
})
export class ExercisesPage implements OnInit {

  isModalOpenFlex = false;
  setOpenFlex(isOpenFlex: boolean){
    this.isModalOpenFlex = isOpenFlex
  }

  isModalOpenThigh = false;
  setOpenThigh(isOpenThigh: boolean){
    this.isModalOpenThigh = isOpenThigh
  }

  isModalOpenFullBody = false;
  setOpenFullBody(isOpenFullBody: boolean){
    this.isModalOpenFullBody = isOpenFullBody
  }

  isModalOpenLeg = false;
  setOpenLeg(isOpenLeg: boolean){
    this.isModalOpenLeg = isOpenLeg
  }

  constructor(
    public modalCtrl: ModalController,
  ) {   }

  ngOnInit() {
  }

  async dismiss() {
    await this.modalCtrl.dismiss();
  }

}
