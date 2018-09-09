import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController,ToastController } from 'ionic-angular';
import { UserProvider} from '../../providers/user/user';


/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  newuser = {
    email: '',
    password: '',
    username: ''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public userservice: UserProvider,
              public loadingctrl: LoadingController, public toastctrl: ToastController) {
  }

  signup(){
    var toaster = this.toastctrl.create({
      duration: 3000,
      position: 'bottom'
    })
    if (this.newuser.email == '' || this.newuser.password == '' || this.newuser.username == ''){
    toaster.setMessage('All the fields must be filled');
    toaster.present();
    }
    else if(this.newuser.password.length < 7){
    toaster.setMessage('The password should be atleast 7 characters');
    toaster.present();
    }  
    else{
    let loader = this.loadingctrl.create({
      content: 'Please wait'
    });
    loader.present();
    this.userservice.adduser(this.newuser).then((res: any)=>{
      loader.dismiss();
      if (res.success)
      this.navCtrl.push('ProfilepicPage');
      else
      alert('Error' + res);
      
    })
  }
}
  goBack(){
    this.navCtrl.setRoot('LoginPage');
  }

}