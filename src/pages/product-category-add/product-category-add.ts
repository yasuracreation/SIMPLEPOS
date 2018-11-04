import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { TransactionProvideProvider } from '../../providers/transaction-provide/transaction-provide';
/**
 * Generated class for the ProductCategoryAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-product-category-add',
  templateUrl: 'product-category-add.html',
})
export class ProductCategoryAddPage {


  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, private alertCtrl: AlertController,public transactionProvider:TransactionProvideProvider) {
  }
  searchQuery: string = '';

  Category;
  productfilter;
  productDTO = { Id:'',Name: '' };
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
      this.productfilter = this.Category.filter((item) => {
        return (item.Name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
      this.productfilter = this.Category;
    }
  }
  selectItem(item) {
    console.log(item);    
    this.productDTO.Name = item.Name;
    this.productDTO.Id = item._id
 
  }
  createCategory() {
    // var headers = new Headers();
    // headers.append("Accept", 'application/json');
    // headers.append('Content-Type', 'application/json');
    // const requestOptions = new RequestOptions({ headers: headers });
    // let postData = {
    //   "Name": this.productDTO.Name  

    // }
    if (this.productDTO.Id != "") {
      this.transactionProvider.UpdateProductCategory(this.productDTO,this.productDTO.Id,(result)=>{
        // console.log(result);
                if (result.IsSucess) {
              this.presentConfirm(result.Message);
            } else {
              this.presentConfirm(result.Message.message)
            }
      })
      // this.http.put("http://localhost:4000/api/productCategory/" + this.productDTO.Id, postData, requestOptions)
      //   .subscribe(data => {
      //     if (data['_body']) {
      //       let result = JSON.parse(data['_body']);
      //       console.log(result)
      //       if (result.IsSucess) {
      //         this.presentConfirm(result.Message);
      //       } else {
      //         this.presentConfirm("Product Creation Fail")
      //       }
      //     }
      //     console.log(data['_body']);
      //   }, error => {
      //     console.log(error);
      //   });
    } else {
      this.transactionProvider.CreateProductCategory(this.productDTO,(result)=>{
        console.log(result)
                if (result.IsSucess) {
              this.presentConfirm(result.Message);
            } else {
              this.presentConfirm(result.Message.message)
            }
      })
      // this.http.post("http://localhost:4000/api/productCategory", postData, requestOptions)
      //   .subscribe(data => {
      //     if (data['_body']) {
      //       let result = JSON.parse(data['_body']);
      //       console.log(result)
      //       if (result.IsSucess) {
      //         this.presentConfirm(result.Message);
      //       } else {
      //         this.presentConfirm(result.Message.message)
      //       }
      //     }
      //     console.log(data['_body']);
      //   }, error => {
      //     console.log(error);
      //   });
    }
    this.loadallproduct();

  }
  loadallproduct() {
    
    this.transactionProvider.GetProductCategory((result)=>{
      console.log(result)
      this.Category = result.data;
      this.productfilter = this.Category;
    })
    // this.http.get('http://localhost:4000/api/category').subscribe(result => {
    //   console.log(result);
    //   this.Category = JSON.parse(result['_body']);
    //   this.productfilter = this.Category;
    // })
  }
  newCategory() {
    this.productDTO = { Name: '', Id: '' };
  }
  deleteCategory() {
    if(this.productDTO.Id != ""){
      var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    const requestOptions = new RequestOptions({ headers: headers });

    this.http.delete("http://localhost:4000/api/category/" + this.productDTO.Id, requestOptions)
      .subscribe(data => {
        if (data['_body']) {
          let result = JSON.parse(data['_body']);
          console.log(result)
          if (result.IsSucess) {
            this.presentConfirm(result.Message);
          } else {
            this.presentConfirm("Product Category Delete Fail")
          }
        }
        console.log(data['_body']);
      }, error => {
        console.log(error);
      });
    }else{
      this.presentConfirm("Select Category to delete")
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
