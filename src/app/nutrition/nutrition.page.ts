import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.page.html',
  styleUrls: ['./nutrition.page.scss'],
})
export class NutritionPage implements OnInit {
  //IMC
  title = 'BMIWebApp'
  name:string = ''
  height:number
  weight:number
  bmi:number
  imcMessage:string=''
  
  // Calorie Calc
  titleCal = 'BMIWebApp'
  sex:number 
  heightCal:number
  weightCal:number
  age:number
  bmiCal:number
  calMessage:string=''

  isModalOpenRecipes = false;
  setOpenRecipes(isOpenRecipes: boolean){
    this.isModalOpenRecipes = isOpenRecipes
  }

  isModalOpenIMC = false;
  setOpenIMC(isOpenIMC: boolean){
    this.isModalOpenIMC = isOpenIMC
  }

  isModalOpenCalories = false;
  setOpenCalories(isOpenCalories: boolean){
    this.isModalOpenCalories = isOpenCalories
  }

  constructor(
    public modalCtrl: ModalController,
  ) {   }

  ngOnInit() {
  }

  async dismiss() {
    await this.modalCtrl.dismiss();
  }

  calcBMI() {
    this.bmi = ((this.weight / (this.height * this.height)) * 10000)
    if (this.bmi<=18.5) {
      this.imcMessage="Low Weight: It is below a healthy value"
    } else if(this.bmi >= 18.6 && this.bmi <= 24.9) {
      this.imcMessage="Healthy Weight: There is no risk to the health of the person"
    }else if(this.bmi >= 25.0 && this.bmi <= 29.9) {
      this.imcMessage="Overweight: Abnormal or excessive accumulation of fat that can be detrimental to health"
    }else if(this.bmi >= 30.0 ) {
      this.imcMessage="Obesity: It is a complex disease that consists of having an excessive amount of body fat"
    }
  }

  calcCalorieBMI() {
    if (this.sex<=1) {
      this.bmiCal = (((10*this.weight)+(6.25*this.height)-(5*this.age)+5))
        }else if(this.sex>=2) {
          this.bmiCal = (((10*this.weight)+(6.25*this.height)-(5*this.age)-161))
    }
  } 
}
