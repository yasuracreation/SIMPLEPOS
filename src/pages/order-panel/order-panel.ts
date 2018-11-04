import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TransactionProvideProvider } from '../../providers/transaction-provide/transaction-provide';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';

/**
 * Generated class for the OrderPanelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-panel',
  templateUrl: 'order-panel.html',
})
export class OrderPanelPage {

  Resources ={ProductItems:[],ProductCategory:[],ProductSubCategory:[]};
  Ordersummery = {Grandtotal:0,NetPrice:0,NoOfItem:0,Discount:0};

  constructor(public navCtrl: NavController, public navParams: NavParams,public transactionProvide:TransactionProvideProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPanelPage');
    this.loadResources()
  }
  loadResources(){
    this.transactionProvide.LoadResources((result)=>{
      console.log(result);
    });

    this.transactionProvide.loadProductItems()

    ///product /productCategory/ProductSubCategory
  }
}
