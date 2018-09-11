import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { UserProvider} from '../../providers/user/user';
/**
 * Generated class for the PasswordresetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-passwordreset',
  templateUrl: 'passwordreset.html',
})
export class PasswordresetPage {
  email: string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public userservice: UserProvider, public alertctrl: AlertController) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad PasswordresetPage');
  }
resetPass(){
  var alert =  this.alertctrl.create({
    buttons: ['Ok']
  });
this.userservice.passwordReset(this.email).then((res: any )=>{
if (res.success){
  alert.setTitle('Email sent');
  alert.setSubTitle('Please follow the instructions in the email to reset your password');
}
}).catch((err)=>{
  alert.setTitle('Failed');
  alert.setSubTitle(err);
})
}
goBack(){
  this.navCtrl.setRoot('LoginPage');
}
}
