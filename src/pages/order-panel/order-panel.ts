import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
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
  SelectedCategory
  SelectedSubCategory
  FilterSubCategory
  FilterProductItems
  AddedProductItems = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,public transactionProvide:TransactionProvideProvider,private alertCtrl:AlertController) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPanelPage');
    this.loadResources()
  }
  selectCategory(category){
    this.SelectedCategory = category;
    this.FilterSubCategory = this.Resources.ProductSubCategory.filter((item)=>{
      return item.CategoryId == category._id
    });
    console.log(this.FilterSubCategory);
    console.log(category);
    console.log(this.Resources)
    // this.FilterProductItems = this.Resources.ProductItems.filter((items)=>{
    //   items.SubCategoryId == this.FilterSubCategory[0]._id;
    // })
  }
  selectSubCategory(subCat){
    // this.SelectedSubCategory = subCategory;
    console.log(subCat)
    this.SelectedCategory = subCat;
    this.FilterProductItems = this.Resources.ProductItems.filter((item)=>{
      return item.SubCategory == subCat._id
    });
    console.log(this.FilterProductItems)
  }
  selectProduct(product){
    product.Qty = 1;
   console.log(product)
   this.AddedProductItems.push(product);
   console.log(this.AddedProductItems);
   this.calculatePrice(this.AddedProductItems);
  
  }
  calculatePrice (addeditems){
    this.Ordersummery = {Grandtotal:0,NetPrice:0,NoOfItem:0,Discount:0};
    addeditems.forEach(items=>{
      this.Ordersummery.NetPrice += items.Price;
      
    })
    this.calculateGrandTotal();
  }
  AddQty(item) {
    let qty = item.Qty;
    let alert = this.alertCtrl.create({
      title: 'Item Quantity',
      inputs: [
        {
          name: 'Qty',
          placeholder: 'Qty',
          type:'number',
           value:qty
          
        
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
           let index =  this.AddedProductItems.indexOf(item);
           this.AddedProductItems[index].Qty = data.Qty;
           this.AddedProductItems[index].Price = data.Qty * item.Price; 
           this.calculatePrice(this.AddedProductItems);

          }
        }
      ]
    });
    alert.present();
  }
  calculateGrandTotal(){
    let netTotal = 0 , serviceCharge = 0, discount = 0 , premotions = 0 , advans = 0;
    netTotal = this.Ordersummery.NetPrice;
    this.Ordersummery.Grandtotal = this.Ordersummery.NetPrice + serviceCharge; 
    }

  loadResources(){
    this.transactionProvide.LoadResources((result)=>{
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
  // Save order 
  SaveOrder(){
    //grandtotal//netprice//discount//numberofitem//customerid//customername//createddate//updateddate//servicecharge//discounts//
    let OrderHeader = {grandtotal:0,netprice:0,discount:0,numberofitem:0,customerid:0,customername:'',serviceCharge:0};
    OrderHeader.grandtotal = this.Ordersummery.Grandtotal;
    OrderHeader.netprice = this.Ordersummery.NetPrice;
    
    
    //itemids//itemnames//itemprices//itemqty//linediscounts//servicecharge//
    let OrderDetails = [];
    this.AddedProductItems.forEach(items=>{
      OrderDetails.push(items);
    })
    this.transactionProvide.SaveOrder(OrderHeader,OrderDetails,(result)=>{
      
    })
  }
}
