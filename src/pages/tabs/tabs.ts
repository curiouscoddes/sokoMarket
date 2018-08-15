import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { OrdersPage } from '../orders/orders';
import { ChatPage } from '../chat/chat';
import { LocationPage } from '../location/location';
import { UserPage } from '../user/user';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = OrdersPage;
  tab3Root = ChatPage;
  tab4Root = LocationPage;
  tab5Root = UserPage;

  constructor() {

  }
}
