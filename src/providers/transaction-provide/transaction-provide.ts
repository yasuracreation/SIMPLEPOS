import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the TransactionProvideProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TransactionProvideProvider {

  constructor(public http: Http) {
    console.log('Hello TransactionProvideProvider Provider');
  }
//veriables 
  public productItemsResource = {productItems:[],productCategory:[],productSubcategory:[]}

  async LoadResources(calback){
    //ProductItems

   await this.http.get('http://localhost:4000/api/product').subscribe(result => {
      console.log(result);
      this.productItemsResource.productItems = JSON.parse(result['_body']);
      console.log(this.productItemsResource.productItems);
      calback(this.productItemsResource.productItems);
    });

    //ProductCategory
    await this.http.get('http://localhost:4000/api/productCategory').subscribe(result => {
      console.log(result);
      this.productItemsResource.productCategory = JSON.parse(result['_body']);
      console.log(this.productItemsResource.productCategory);
      calback(this.productItemsResource.productCategory);
    });
    
    //productSubcategory

    await this.http.get('http://localhost:4000/api/productSubCategory').subscribe(result => {
      console.log(result);
      this.productItemsResource.productSubcategory = JSON.parse(result['_body']);
      console.log(this.productItemsResource.productSubcategory);
      calback(this.productItemsResource.productSubcategory);
    });
    


  }

  loadProductItems(calback){
    

       this.http.get('http://localhost:4000/api/product').subscribe(result => {
        console.log(result);
        let response = JSON.parse(result['_body']);
      
        calback(response);
      });
    
  }
}
