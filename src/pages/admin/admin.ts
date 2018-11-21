import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ProductAddPage } from '../product-add/product-add';
import { ProductCategoryAddPage } from '../product-category-add/product-category-add';
import { SubCategoryAddPage } from '../sub-category-add/sub-category-add';

/**
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPage');
  }
  presentModal(type) {
    if(type == "product"){
      const modal = this.modalCtrl.create(ProductAddPage);
      modal.present();
    }else if(type =="category"){
      const modal = this.modalCtrl.create(ProductCategoryAddPage);
      modal.present();
    }else if(type =="SubCategory"){
      const modal = this.modalCtrl.create(SubCategoryAddPage);
      modal.present();
    }
  }
  

}
