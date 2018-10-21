import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  itemcategories = {"categories": [
    {
      "ProductCategoryid": 1,
      "Category": "1",
      "Name": "Photos",
      "icon":"camera"
      
      
    },{
      "ProductCategoryid": 2,
      "Category": "1",
      "Name": "frames",
      "icon":"image"
      
      
    },{
      "ProductCategoryid": 3,
      "Category": "1",
      "Name": "Letho Print",
      "icon":"images"
      
      
    },
    {
      "ProductCategoryid": 4,
      "Category": "1",
      "Name": "Photo Albums",
      "icon":"book"          
      
    }],
    "product":[
      {
        "productid": "01",
        "Category": 1,
        "Name": "4R",
        "price":350
      },
      {
        "productid": "02",
        "Category":1,
        "Name": "8R",
        "price":550
      },
      {
        "productid": "03",
        "Category": 1,
        "Name": "12R",
        "price":850
      },
      
      {
        "productid": "04",
        "Category": 2,
        "Name": "4R Frame",
        "price":"350"
      },
      {
        "productid": "05",
        "Category": 2,
        "Name": "8R Frame",
        "price":550
      },
      {
        "productid": "06",
        "Category": 2,
        "Name": "12R Frame",
        "price":850
      },

      {
        "productid": "07",
        "Category": 3,
        "Name": "Magic mug",
        "price":350
      },
      {
        "productid": "08",
        "Category": 3,
        "Name": "Crustal Print",
        "price":550
      },
      {
        "productid": "09",
        "Category": 3,
        "Name": "Granate Print",
        "price":850
      }

    ]};
  items;
  addeditems = [];
  selectedcategory = 1 ;
  selectedProduct = {'price':'',"qty":'',"name":'',"productid":''};
  total = 0;
  netQty = 0;
  netamount = 0;
  grandAmount = 0;
  discountAmount = 0;
  products;
  productCategory;
  productSubCategory;
  constructor(public navCtrl: NavController,private http: Http) {
    this.loaditems();
    this.selectCategory(1)
  }
  
  loaditems(){
    this.http.get('http://localhost:4000/api/product').subscribe(result => {
      console.log(result);
      this.products = JSON.parse(result['_body']);
      console.log(this.products);
    });
    this.http.get('http://localhost:4000/api/category').subscribe(result => {
      console.log(result);
      this.productCategory = JSON.parse(result['_body']);
      console.log(this.productCategory);
    })
  
  }
  // loadallproduct() {
  //   this.http.get('http://localhost:4000/api/category').subscribe(result => {
  //     console.log(result);
  //     this.productCategory = JSON.parse(result['_body']);
      
  //   })
  // }
  selectProduct(item){
    console.log(item);
      this.selectedProduct.productid = item._id;
      this.selectedProduct.name = item.Name;
      this.selectedProduct.price = item.Price;
     // this.selectedProduct = item
  }
  selectCategory(categoryid){
      console.log(categoryid);
    
      this.items = this.itemcategories.product.filter(item =>{
            return item.Category == categoryid;
      })
  }
  additem(item){
    item.qty = 1;
    this.addeditems.push(item);
    var balance = parseFloat(item.Price);
    this.AddTotal(balance);
    this.netQty;
    this.selectedProduct = {'price':'',"qty":'',"name":'',"productid":''};
  }
  removeitems(){
    this.addeditems = [];
    this.total = 0;
  }
  AddTotal(value){
    this.total += value;
  }
  deductTotal(value){
    this.total -= value;
  }
  SaveOrder(){
      console.log(this.addeditems);
  }
}
