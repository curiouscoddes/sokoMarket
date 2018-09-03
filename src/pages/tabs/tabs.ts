import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1: string = "HomePage";
  tab2: string = "OrdersPage";
  tab3: string = "ChatPage";
  tab4: string = "LocationPage";
  tab5: string = "UserPage";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
