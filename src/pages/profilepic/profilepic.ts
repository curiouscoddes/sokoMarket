import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ImghandlerProvider} from '../../providers/imghandler/imghandler';
import { UserProvider} from '../../providers/user/user';

/**
 * Generated class for the ProfilepicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profilepic',
  templateUrl: 'profilepic.html',
})
export class ProfilepicPage {
/*  */  
  imgurl ='https://firebasestorage.googleapis.com/v0/b/myapp-4eadd.appspot.com/o/chatterplace.png?alt=media&token=e51fa887-bfc6-48ff-87c6-e2c61976534e';
  moveon = true;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public imgservice: ImghandlerProvider, public zone: NgZone, 
              public userservice: UserProvider) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad ProfilepicPage');
  }
  chooseImage(){
    this.imgservice.uploadimage().then((uploadedurl: any)=>{
      this.zone.run(()=>{
        this.imgurl = uploadedurl;
        this.moveon = false;
      })
    })
  }
  
updateProceed(){
 this.userservice.updateImage(this.imgurl).then((res: any)=>{
   if (res.succes){
     this.navCtrl.setRoot('TabsPage');
   }
   else{
       alert(res);
     }
   })
  }
proceed(){
this.navCtrl.setRoot('TabsPage');
  }

}
