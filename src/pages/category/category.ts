import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, private alertCtrl: AlertController) {
  }
  searchQuery: string = '';

  products;
  productfilter;
  productDTO = {Category: '',IndexId: '',Id:'' };
  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }
  loadallproduct() {
    this.http.get('http://localhost:4000/api/category').subscribe(result => {
      console.log(result);
      this.products = JSON.parse(result['_body']);
    })
  }
  newCategory() {
    this.productDTO = { Category: '', IndexId: '' ,Id:''};
  }
  createProduct() {

    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    const requestOptions = new RequestOptions({ headers: headers });

    let postData = {
      "CategoryId": this.productDTO.Category,
      "IndexId": this.productDTO.IndexId,
      

    }

    if (this.productDTO.Id != "") {
      this.http.put("http://localhost:4000/api/category/" + this.productDTO.Id, postData, requestOptions)
        .subscribe(data => {
          if (data['_body']) {
            let result = JSON.parse(data['_body']);
            console.log(result)
            if (result.IsSucess) {
              this.presentConfirm(result.Message);
            } else {
              this.presentConfirm("Product Creation Fail")
            }
          }
          console.log(data['_body']);
        }, error => {
          console.log(error);
        });
    } else {
      this.http.post("http://localhost:4000/api/category", postData, requestOptions)
        .subscribe(data => {
          if (data['_body']) {
            let result = JSON.parse(data['_body']);
            console.log(result)
            if (result.IsSucess) {
              this.presentConfirm(result.Message);
            } else {
              this.presentConfirm("Product Creation Fail")
            }
          }
          console.log(data['_body']);
        }, error => {
          console.log(error);
        });
    }
    this.loadallproduct();

  }
  presentConfirm(message) {
    let alert = this.alertCtrl.create({
      title: 'Product ',
      message: message,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Got It',
          handler: () => {
            console.log('Buy clicked');
          }
        }
      ]
    });
    alert.present();
  }
}
