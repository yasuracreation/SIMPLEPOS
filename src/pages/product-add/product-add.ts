import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the ProductAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-add',
  templateUrl: 'product-add.html',
})
export class ProductAddPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, private alertCtrl: AlertController) {
  }
  searchQuery: string = '';

  products;
  productfilter;
  productDTO = { Name: '', Category: '', SubCategory: '', Price: '', Size: '', Id: '' };
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductAddPage');
    this.loadallproduct();
  }
  getItems(ev: any) {
    // Reset items back to all of the items


    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.products = this.products.filter((item) => {
        return (item.Name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {

    }
  }
  selectItem(item) {
    console.log(item);
    this.productDTO.Name = item.Name;
    this.productDTO.Category = item.CategoryId;
    this.productDTO.Id = item._id;
    this.productDTO.SubCategory = item.SubCategory;
    this.productDTO.Price = item.Price;
    this.productDTO.Size = item.size;
  }
  createProduct() {

    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    const requestOptions = new RequestOptions({ headers: headers });

    let postData = {
      "Name": this.productDTO.Name,
      "CategoryId": this.productDTO.Category,
      "SubCategory": this.productDTO.SubCategory,
      "Price": this.productDTO.Price,
      "Size": this.productDTO.Size

    }

    if (this.productDTO.Id != "") {
      this.http.put("http://localhost:4000/api/product/" + this.productDTO.Id, postData, requestOptions)
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
      this.http.post("http://localhost:4000/api/product", postData, requestOptions)
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
  loadallproduct() {
    this.http.get('http://localhost:4000/api/product').subscribe(result => {
      console.log(result);
      this.products = JSON.parse(result['_body']);
    })
  }
  newProdut() {
    this.productDTO = { Name: '', Category: '', SubCategory: '', Price: '', Size: '', Id: '' };
  }
  deleteProduct() {
    if(this.productDTO.Id != ""){
      var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    const requestOptions = new RequestOptions({ headers: headers });

    this.http.delete("http://localhost:4000/api/product/" + this.productDTO.Id, requestOptions)
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
    }else{
      this.presentConfirm("Select product to delete")
    }
    

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
