import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { TransactionProvideProvider } from '../../providers/transaction-provide/transaction-provide';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';
import { Printer } from '@ionic-native/printer';

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

  Resources = { ProductItems: [], ProductCategory: [], ProductSubCategory: [] };
  Ordersummery = { Grandtotal: 0, NetPrice: 0, NoOfItem: 0, Discount: 0 };
  SelectedCategory
  SelectedSubCategory
  FilterSubCategory
  FilterProductItems
  AddedProductItems = [];
  leftPanelIsNew = 1;
  constructor(public navCtrl: NavController, public navParams: NavParams, public transactionProvide: TransactionProvideProvider, private alertCtrl: AlertController, private printer: Printer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPanelPage');
    this.loadResources()
  }
  selectCategory(category) {
    this.SelectedCategory = category;
    this.FilterSubCategory = this.Resources.ProductSubCategory.filter((item) => {
      return item.CategoryId == category._id
    });
    console.log(this.FilterSubCategory);
    console.log(category);
    console.log(this.Resources)
    // this.FilterProductItems = this.Resources.ProductItems.filter((items)=>{
    //   items.SubCategoryId == this.FilterSubCategory[0]._id;
    // })
  }
  selectSubCategory(subCat) {
    // this.SelectedSubCategory = subCategory;
    console.log(subCat)
    this.SelectedCategory = subCat;
    this.FilterProductItems = this.Resources.ProductItems.filter((item) => {
      return item.SubCategory == subCat._id
    });
    console.log(this.FilterProductItems)
  }
  leftPanelTggle(statues) {
    this.leftPanelIsNew = statues;
  }
  selectProduct(product) {

    var found = this.AddedProductItems.find(function (element) {
      return element == product;
    });
    if (found) {
      let index = this.AddedProductItems.indexOf(product);
      let selecteItem = this.AddedProductItems[index];
      selecteItem.Qty++;
      selecteItem.NetPrice = selecteItem.Qty * product.Price;
      this.calculatePrice(this.AddedProductItems);
    } else {
      product.Qty = 1;
      product.NetPrice = product.Price;
      this.AddedProductItems.push(product);
      console.log(this.AddedProductItems);
      this.calculatePrice(this.AddedProductItems);
    }


  }
  calculatePrice(addeditems) {
    this.Ordersummery = { Grandtotal: 0, NetPrice: 0, NoOfItem: 0, Discount: 0 };
    addeditems.forEach(items => {
      this.Ordersummery.NetPrice += items.NetPrice;
      this.Ordersummery.NoOfItem = (items.Qty > 0) ? this.Ordersummery.NoOfItem + items.AddQty : this.Ordersummery.NoOfItem;

    });
    this.Ordersummery.Grandtotal = this.Ordersummery.NetPrice
  }
  delete(produc) {
    this.AddedProductItems.splice(this.AddedProductItems.indexOf(produc), 1);
    this.calculatePrice(this.AddedProductItems);
  }
  AddQty(item) {
    let qty = item.Qty;
    let alert = this.alertCtrl.create({
      title: 'Item Quantity',
      inputs: [
        {
          name: 'Qty',
          placeholder: 'Qty',
          type: 'number',
          value: qty


        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');

          }
        },
        {
          text: 'Add',
          handler: data => {
            item.Qty
            let index = this.AddedProductItems.indexOf(item);
            let selecteItem = this.AddedProductItems[index];
            selecteItem.Qty = data.Qty;
            selecteItem.NetPrice = data.Qty * item.Price;
            // item.Qty = data.Qty;
            // item.Price = data.Qty = item.Price;
            this.calculatePrice(this.AddedProductItems);

          }
        }
      ]
    });
    alert.present();
  }

  SaveOrder() {
    let OrderHeader = { CustomerId: 0, UserId: 0, netTotal: 0, Discount: 0, ServiceCharge: 0, ServiceChargeId: 0, ServiceChargeTotal: 0, DiscountTotal: 0, CreatedDate: '', GrandTotal: 0 };

    OrderHeader.CustomerId = 0;
    OrderHeader.UserId = 0;
    OrderHeader.netTotal = this.Ordersummery.NetPrice;
    OrderHeader.Discount = this.Ordersummery.Discount;
    OrderHeader.ServiceCharge = 0;
    OrderHeader.DiscountTotal = this.Ordersummery.Discount;
    OrderHeader.GrandTotal = this.Ordersummery.Grandtotal;

    let OrderDetailsItems = []
    this.AddedProductItems.forEach(item => {
      let OrderDetails = { OrderId: 0, ProductId: 0, Quantity: 0, netTotal: 0, Discount: 0, ServiceCharge: false, ProductPrice: 0, CreatedDate: '', Size: 0, BatchId: 0, Manufacture: '' };
      OrderDetails.OrderId = 0;
      OrderDetails.ProductId = item._id;
      OrderDetails.Quantity = item.Qty;
      OrderDetails.netTotal = item.NetPrice;
      OrderDetails.Discount = 0;
      OrderDetails.ProductPrice = item.Price;
      OrderDetailsItems.push(OrderDetails);
    })
    this.transactionProvide.OrderSave(OrderHeader, OrderDetailsItems).subscribe(data => {
      if (data['_body']) {
        let result = JSON.parse(data['_body']);
        console.log(result)
        if (result.IsSucess) {
          this.presentConfirm(result.Message);
          this.AddedProductItems.splice(0, this.AddedProductItems.length);

          this.Ordersummery = { Grandtotal: 0, NetPrice: 0, NoOfItem: 0, Discount: 0 };
        } else {
          this.presentConfirm(result.Message);
        }

      }
      console.log(data['_body']);
    }, error => {
      console.log(error);
    });
  }

  loadResources() {
    this.transactionProvide.LoadResources((result) => {
      console.log(result);
      this.Resources.ProductCategory = result.productCategory.data;
      this.Resources.ProductSubCategory = result.productSubcategory.data;
      this.Resources.ProductItems = result.productItems.data;
      this.selectCategory(this.Resources.ProductCategory[0])
    });

    // this.transactionProvide.loadProductItems((response)=>{
    //   console.log(response);
    // })

    ///product /productCategory/ProductSubCategory
  }
  payment() {
    this.printer.isAvailable().then(success => {
      console.log('available');

    }, error => {
      console.log(error)
    });
    this.printer.isAvailable().then(function () {
      this.printer.print("https://www.techiediaries.com").then(function () {
        alert("printing done successfully !");
      }, function () {
        alert("Error while printing !");
      });
    }, function () {
      alert('Error : printing is unavailable on your device ');
    });
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
