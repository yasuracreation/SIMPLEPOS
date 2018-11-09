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
  SelectedCategory
  SelectedSubCategory
  FilterSubCategory
  FilterProductItems
  constructor(public navCtrl: NavController, public navParams: NavParams,public transactionProvide:TransactionProvideProvider) {
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
  selectProduct(subCat){
   
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
}
