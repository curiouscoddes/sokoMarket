
import { Injectable } from '@angular/core';
import { AngularFireAuth} from 'angularfire2/auth';
import firebase from 'firebase';
import { resolve } from 'path';
/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {
  firedata = firebase.database().ref('chatusers');
  constructor(public afireauth: AngularFireAuth) {
    //console.log('Hello UserProvider Provider');
  }
adduser(newuser){
  var promise = new  Promise((resolve, reject)=>{
    this.afireauth.auth.createUserWithEmailAndPassword(newuser.email, newuser.password).then(()=>{
      this.afireauth.auth.currentUser.updateProfile({
        displayName: newuser.username,
        photoURL: ''
      }).then(()=>{
        this.firedata.child(this.afireauth.auth.currentUser.uid).set({
          uid: this.afireauth.auth.currentUser.uid,
          displayName: newuser.username,
          photoURL: '/users_profpic'
        }).then(()=>{
          resolve({success: true});
        }).catch((err)=>{
          reject(err);
        })
        }).catch((err)=>{
          reject(err);
        })
      }).catch((err)=>{
        reject(err);
      })
    })
return promise;
}
}
