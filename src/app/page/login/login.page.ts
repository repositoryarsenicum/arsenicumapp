import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private static ICON_EYE_OPEN = "eye";
  private static ICON_EYE_CLOSE = "eye-off";

  public isShowPassword: boolean = false;
  public iconEyeOpen: string = LoginPage.ICON_EYE_OPEN;

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() { }

  public async fecharModal() {
    this.modalController.dismiss();
  }

  public apresentarValorCampo(): void {
    this.isShowPassword = !this.isShowPassword;
    if(this.iconEyeOpen == LoginPage.ICON_EYE_OPEN) {
      this.iconEyeOpen = LoginPage.ICON_EYE_CLOSE;
    } else {
      this.iconEyeOpen = LoginPage.ICON_EYE_OPEN;
    }
  }

  public realizarLoginUsuario() {

  }

}
