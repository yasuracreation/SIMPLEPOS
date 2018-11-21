import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderPanelPage } from './order-panel';

@NgModule({
  declarations: [
    OrderPanelPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderPanelPage),
  ],
})
export class OrderPanelPageModule {}
