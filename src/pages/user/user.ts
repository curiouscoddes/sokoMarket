import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ImghandlerProvider} from '../../providers/imghandler/imghandler';
import { UserProvider} from '../../providers/user/user';
import firebase from 'firebase'; 
/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
  avatar: string;
  displayName: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public userservice: UserProvider, public zone: NgZone, 
              public alertctrl: AlertController, public imghandler: ImghandlerProvider) {
  }

  ionViewWillEnter() {
    this.loadUserDetails();

  }
  loadUserDetails(){
    this.userservice.getUserDetails().then((res: any)=>{
      this.displayName = res.displayName;
      this.zone.run(()=>{
        this.avatar = res.photoURL;
      })

    })
  }

editImage(){
  let statusalert = this.alertctrl.create({
    buttons: ['Okay']
  });
this.imghandler.uploadimage().then((url: any)=>{
  /* this.zone.run(()=>{
    this.avatar = url;
  }) */
  this.userservice.updateImage(url).then((res: any)=>{
    if(res.success){
      statusalert.setTitle('Updated');
      statusalert.setSubTitle('Your Profile picture has been updated successfully');
      statusalert.present();
      this.zone.run(()=>{
      this.avatar = url;
      })
    }
  }).catch((err)=>{
    statusalert.setTitle('Failed');
    statusalert.setSubTitle('Your profile picture failed to update was not changed');
    statusalert.present();
  })
})
}


editName(){
  let statusalert = this.alertctrl.create({
    buttons: ['Okay']
  });
this.alertctrl.create({
  title: 'Edit Username',
  inputs:[{
    name: 'username',
    placeholder: 'Username'
  }],
  buttons: [{
    text: 'cancel',
    role: 'cancel',
    handler: data =>{

    }
  },
  {
    text: 'Edit',
    handler: data =>{
      if(data.username){
        this.userservice.updateDisplayName(data.username).then((res: any)=>{
          if(res.success){
            statusalert.setTitle('Updated');
            statusalert.setSubTitle('Your Username has been changed successfully');
            statusalert.present();
            this.zone.run(()=>{
              this.displayName = data.username;
            })
          }
          else{
            statusalert.setTitle('Failed');
            statusalert.setSubTitle('Your Username was not changed');
            statusalert.present();
            
          }
        })
      }
    }
  }]
  
});
//alert.present();

}

logout(){
  firebase.auth().signOut().then(()=>{
    this.navCtrl.parent.parent.setRoot('LoginPage');
  })
}
}
