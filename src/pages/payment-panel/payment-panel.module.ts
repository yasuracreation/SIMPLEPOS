import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaymentPanelPage } from './payment-panel';

@NgModule({
  declarations: [
    PaymentPanelPage,
  ],
  imports: [
    IonicPageModule.forChild(PaymentPanelPage),
  ],
})
export class PaymentPanelPageModule {}
