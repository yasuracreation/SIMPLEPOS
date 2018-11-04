import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';



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
  public productItemsResource = { productItems: [], productCategory: [], productSubcategory: [] }

  async LoadResources(calback) {
    //ProductItems
    let count = 0
    await this.http.get('http://localhost:4000/api/product').subscribe(result => {

      this.productItemsResource.productItems = JSON.parse(result['_body']);
      count += 1;

      sendDataCalback(this.productItemsResource);
      //calback(this.productItemsResource.productItems);
    });

    //ProductCategory
    await this.http.get('http://localhost:4000/api/productCategory').subscribe(result => {

      this.productItemsResource.productCategory = JSON.parse(result['_body']);
      count += 1;
      sendDataCalback(this.productItemsResource);
      //calback(this.productItemsResource.productCategory)
    });

    //productSubcategory

    await this.http.get('http://localhost:4000/api/productSubCategory').subscribe(result => {

      this.productItemsResource.productSubcategory = JSON.parse(result['_body']);
      count += 1;
      sendDataCalback(this.productItemsResource);
      //calback(this.productItemsResource.productSubcategory);
    });

    var sendDataCalback = (function (result) {
      if (count == 3) {

        calback(result);

      }
    });
  }

  loadProductItems(calback) {


    this.http.get('http://localhost:4000/api/product').subscribe(result => {
      // console.log(result);
      let response = JSON.parse(result['_body']);

      calback(response);
    });

  }
  //adminPanel
  //MasterData 

  //productCategory
  GetProductCategory(callback) {
    this.http.get('http://localhost:4000/api/productCategory').subscribe(result => {
      console.log(result);
      callback(JSON.parse(result['_body']));

    })

  }
  CreateProductCategory(request, callback) {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    const requestOptions = new RequestOptions({ headers: headers });
    let postData = {
      "Name": request.Name

    }
    this.http.post("http://localhost:4000/api/productCategory", postData, requestOptions)
      .subscribe(data => {
        if (data['_body']) {
          let result = JSON.parse(data['_body']);
          callback(result)
        }
        console.log(data['_body']);
      }, error => {
        console.log(error);
      });

  }

  UpdateProductCategory(request, CategoryID, callback) {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    const requestOptions = new RequestOptions({ headers: headers });
    let postData = {
      "Name": request.Name

    }

    this.http.put("http://localhost:4000/api/productCategory/" + request.Id, postData, requestOptions)
      .subscribe(data => {
        if (data['_body']) {
          let result = JSON.parse(data['_body']);
          callback(result)
        }
        console.log(data['_body']);

      }, error => {
        console.log(error);
      });
  }
}
