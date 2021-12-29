import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginPage } from './../login/login.page';
import { SinginPage } from './../singin/singin.page';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() { }

  public async login() {
    const modalLoginController = this.modalController.create({
      component: LoginPage,
      animated: true,
      mode: 'ios',
      backdropDismiss: false,
      cssClass: "login-modal"
    });
    (await modalLoginController).present();
  }

  public async singin() {
    const modalLoginController = this.modalController.create({
      component: SinginPage,
      animated: true,
      mode: 'ios',
      backdropDismiss: false,
      cssClass: "login-modal"
    });
    (await modalLoginController).present();
  }

}
