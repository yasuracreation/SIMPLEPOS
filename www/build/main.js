webpackJsonp([6],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_add_product_add__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_category_add_product_category_add__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sub_category_add_sub_category_add__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdminPage = /** @class */ (function () {
    function AdminPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    AdminPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminPage');
    };
    AdminPage.prototype.presentModal = function (type) {
        if (type == "product") {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__product_add_product_add__["a" /* ProductAddPage */]);
            modal.present();
        }
        else if (type == "category") {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__product_category_add_product_category_add__["a" /* ProductCategoryAddPage */]);
            modal.present();
        }
        else if (type == "SubCategory") {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__sub_category_add_sub_category_add__["a" /* SubCategoryAddPage */]);
            modal.present();
        }
    };
    AdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin',template:/*ion-inline-start:"/home/yasura/Desktop/GithubApp/new/SIMPLEPOS/src/pages/admin/admin.html"*/'<!--\n  Generated template for the AdminPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Admin</ion-title>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 col-md-6 col-lg-6 col-xl-3>\n        <ion-list>\n          <ion-list-header>\n            Master Data\n          </ion-list-header>\n          <ion-item (click)="presentModal(\'product\')"> Product</ion-item>\n          <ion-item>Services</ion-item>\n          <ion-item>Ingradiant</ion-item>\n          <ion-item (click)="presentModal(\'category\')">Category</ion-item>\n          <ion-item (click)="presentModal(\'SubCategory\')">  Type</ion-item>\n          <ion-list-header>\n            Cancellation\n          </ion-list-header>\n          <ion-item > Order </ion-item>\n          <ion-item>Reservation </ion-item>\n          <ion-item>Payment </ion-item>\n\n        </ion-list>\n      </ion-col>\n      <ion-col>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/home/yasura/Desktop/GithubApp/new/SIMPLEPOS/src/pages/admin/admin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], AdminPage);
    return AdminPage;
}());

//# sourceMappingURL=admin.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubCategoryAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_transaction_provide_transaction_provide__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ProductCategoryAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SubCategoryAddPage = /** @class */ (function () {
    function SubCategoryAddPage(navCtrl, navParams, http, alertCtrl, transactionProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.transactionProvider = transactionProvider;
        this.searchQuery = '';
        this.productDTO = { Id: '', Name: '', CategoryId: '' };
    }
    SubCategoryAddPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductAddPage');
        this.loadallproduct();
    };
    SubCategoryAddPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.productfilter = this.SubCategory.filter(function (item) {
                return (item.Name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.productfilter = this.SubCategory;
        }
    };
    SubCategoryAddPage.prototype.selectItem = function (item) {
        console.log(item);
        this.productDTO.Name = item.Name;
        this.productDTO.Id = item._id;
    };
    SubCategoryAddPage.prototype.createCategory = function () {
        // var headers = new Headers();
        // headers.append("Accept", 'application/json');
        // headers.append('Content-Type', 'application/json');
        // const requestOptions = new RequestOptions({ headers: headers });
        // let postData = {
        //   "Name": this.productDTO.Name  
        var _this = this;
        // }
        if (this.productDTO.Id != "") {
            this.transactionProvider.UpdateProductSubCategory(this.productDTO, this.productDTO.Id, function (result) {
                // console.log(result);
                if (result.IsSucess) {
                    _this.presentConfirm(result.Message);
                }
                else {
                    _this.presentConfirm(result.Message.message);
                }
            });
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
        }
        else {
            this.transactionProvider.CreateProductSubCategory(this.productDTO, function (result) {
                console.log(result);
                if (result.IsSucess) {
                    _this.presentConfirm(result.Message);
                }
                else {
                    _this.presentConfirm(result.Message.message);
                }
            });
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
    };
    SubCategoryAddPage.prototype.loadallproduct = function () {
        var _this = this;
        this.transactionProvider.GetProductSubCategory(function (result) {
            console.log(result);
            _this.SubCategory = result.data;
            _this.productfilter = _this.SubCategory;
        });
        this.transactionProvider.GetProductCategory(function (response) {
            console.log(response);
            _this.Category = response.data;
        });
        // this.http.get('http://localhost:4000/api/category').subscribe(result => {
        //   console.log(result);
        //   this.Category = JSON.parse(result['_body']);
        //   this.productfilter = this.Category;
        // })
    };
    SubCategoryAddPage.prototype.newCategory = function () {
        this.productDTO = { Name: '', Id: '', CategoryId: '' };
    };
    SubCategoryAddPage.prototype.deleteCategory = function () {
        var _this = this;
        if (this.productDTO.Id != "") {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            var requestOptions = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
            this.http.delete("http://localhost:4000/api/category/" + this.productDTO.Id, requestOptions)
                .subscribe(function (data) {
                if (data['_body']) {
                    var result = JSON.parse(data['_body']);
                    console.log(result);
                    if (result.IsSucess) {
                        _this.presentConfirm(result.Message);
                    }
                    else {
                        _this.presentConfirm("Product Category Delete Fail");
                    }
                }
                console.log(data['_body']);
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.presentConfirm("Select Category to delete");
        }
    };
    SubCategoryAddPage.prototype.presentConfirm = function (message) {
        var alert = this.alertCtrl.create({
            title: 'Product ',
            message: message,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Got It',
                    handler: function () {
                        console.log('Buy clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    SubCategoryAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sub-category-add',template:/*ion-inline-start:"/home/yasura/Desktop/GithubApp/new/SIMPLEPOS/src/pages/sub-category-add/sub-category-add.html"*/'<!--\n  Generated template for the ProductAddPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  \n  <ion-navbar>\n      <button ion-button end navPop >\n          <ion-icon  name="close"></ion-icon>\n        </button>\n    <ion-title>SubCategory</ion-title>\n    \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n          <ion-list>\n              <ion-item>\n                <ion-label>Sub Category Name</ion-label>\n                <ion-input [(ngModel)]="productDTO.Name" type="text"></ion-input>\n              </ion-item>   \n              <ion-item>\n                <ion-label>Category Name</ion-label>\n                <ion-select [(ngModel)]="productDTO.CategoryId">\n                  <ion-option *ngFor="let item of Category" value="{{item._id}}">{{item.Name}}</ion-option>\n                </ion-select>\n              </ion-item>     \n            </ion-list>\n            \n      </ion-col>\n      <ion-col col-4  >\n          <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n          <ion-list style="height:30vh; overflow:auto">\n            <ion-item *ngFor="let item of productfilter" (click)="selectItem(item)">\n              {{ item.Name }}\n            </ion-item>\n           \n          </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n \n\n  <button ion-button (click)="newCategory()" >New</button>\n  <button ion-button (click)="createCategory()" >Save</button>\n  <button ion-button (click)="deleteCategory()" >Delete</button>\n</ion-content>'/*ion-inline-end:"/home/yasura/Desktop/GithubApp/new/SIMPLEPOS/src/pages/sub-category-add/sub-category-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_transaction_provide_transaction_provide__["a" /* TransactionProvideProvider */]])
    ], SubCategoryAddPage);
    return SubCategoryAddPage;
}());

//# sourceMappingURL=sub-category-add.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderPanelPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_transaction_provide_transaction_provide__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_printer__ = __webpack_require__(165);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the OrderPanelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrderPanelPage = /** @class */ (function () {
    function OrderPanelPage(navCtrl, navParams, transactionProvide, alertCtrl, printer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.transactionProvide = transactionProvide;
        this.alertCtrl = alertCtrl;
        this.printer = printer;
        this.Resources = { ProductItems: [], ProductCategory: [], ProductSubCategory: [] };
        this.Ordersummery = { Grandtotal: 0, NetPrice: 0, NoOfItem: 0, Discount: 0 };
        this.AddedProductItems = [];
        this.leftPanelIsNew = 1;
    }
    OrderPanelPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrderPanelPage');
        this.loadResources();
    };
    OrderPanelPage.prototype.selectCategory = function (category) {
        this.SelectedCategory = category;
        this.FilterSubCategory = this.Resources.ProductSubCategory.filter(function (item) {
            return item.CategoryId == category._id;
        });
        console.log(this.FilterSubCategory);
        console.log(category);
        console.log(this.Resources);
        // this.FilterProductItems = this.Resources.ProductItems.filter((items)=>{
        //   items.SubCategoryId == this.FilterSubCategory[0]._id;
        // })
    };
    OrderPanelPage.prototype.selectSubCategory = function (subCat) {
        // this.SelectedSubCategory = subCategory;
        console.log(subCat);
        this.SelectedCategory = subCat;
        this.FilterProductItems = this.Resources.ProductItems.filter(function (item) {
            return item.SubCategory == subCat._id;
        });
        console.log(this.FilterProductItems);
    };
    OrderPanelPage.prototype.leftPanelTggle = function (statues) {
        this.leftPanelIsNew = statues;
    };
    OrderPanelPage.prototype.selectProduct = function (product) {
        var found = this.AddedProductItems.find(function (element) {
            return element == product;
        });
        if (found) {
            var index = this.AddedProductItems.indexOf(product);
            var selecteItem = this.AddedProductItems[index];
            selecteItem.Qty++;
            selecteItem.NetPrice = selecteItem.Qty * product.Price;
            this.calculatePrice(this.AddedProductItems);
        }
        else {
            product.Qty = 1;
            product.NetPrice = product.Price;
            this.AddedProductItems.push(product);
            console.log(this.AddedProductItems);
            this.calculatePrice(this.AddedProductItems);
        }
    };
    OrderPanelPage.prototype.calculatePrice = function (addeditems) {
        var _this = this;
        this.Ordersummery = { Grandtotal: 0, NetPrice: 0, NoOfItem: 0, Discount: 0 };
        addeditems.forEach(function (items) {
            _this.Ordersummery.NetPrice += items.NetPrice;
            _this.Ordersummery.NoOfItem = (items.Qty > 0) ? _this.Ordersummery.NoOfItem + items.AddQty : _this.Ordersummery.NoOfItem;
        });
        this.Ordersummery.Grandtotal = this.Ordersummery.NetPrice;
    };
    OrderPanelPage.prototype.delete = function (produc) {
        this.AddedProductItems.splice(this.AddedProductItems.indexOf(produc), 1);
        this.calculatePrice(this.AddedProductItems);
    };
    OrderPanelPage.prototype.AddQty = function (item) {
        var _this = this;
        var qty = item.Qty;
        var alert = this.alertCtrl.create({
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
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Add',
                    handler: function (data) {
                        item.Qty;
                        var index = _this.AddedProductItems.indexOf(item);
                        var selecteItem = _this.AddedProductItems[index];
                        selecteItem.Qty = data.Qty;
                        selecteItem.NetPrice = data.Qty * item.Price;
                        // item.Qty = data.Qty;
                        // item.Price = data.Qty = item.Price;
                        _this.calculatePrice(_this.AddedProductItems);
                    }
                }
            ]
        });
        alert.present();
    };
    OrderPanelPage.prototype.SaveOrder = function () {
        var _this = this;
        var OrderHeader = { CustomerId: 0, UserId: 0, netTotal: 0, Discount: 0, ServiceCharge: 0, ServiceChargeId: 0, ServiceChargeTotal: 0, DiscountTotal: 0, CreatedDate: '', GrandTotal: 0 };
        OrderHeader.CustomerId = 0;
        OrderHeader.UserId = 0;
        OrderHeader.netTotal = this.Ordersummery.NetPrice;
        OrderHeader.Discount = this.Ordersummery.Discount;
        OrderHeader.ServiceCharge = 0;
        OrderHeader.DiscountTotal = this.Ordersummery.Discount;
        OrderHeader.GrandTotal = this.Ordersummery.Grandtotal;
        var OrderDetailsItems = [];
        this.AddedProductItems.forEach(function (item) {
            var OrderDetails = { OrderId: 0, ProductId: 0, Quantity: 0, netTotal: 0, Discount: 0, ServiceCharge: false, ProductPrice: 0, CreatedDate: '', Size: 0, BatchId: 0, Manufacture: '' };
            OrderDetails.OrderId = 0;
            OrderDetails.ProductId = item._id;
            OrderDetails.Quantity = item.Qty;
            OrderDetails.netTotal = item.NetPrice;
            OrderDetails.Discount = 0;
            OrderDetails.ProductPrice = item.Price;
            OrderDetailsItems.push(OrderDetails);
        });
        this.transactionProvide.OrderSave(OrderHeader, OrderDetailsItems).subscribe(function (data) {
            if (data['_body']) {
                var result = JSON.parse(data['_body']);
                console.log(result);
                if (result.IsSucess) {
                    _this.presentConfirm(result.Message);
                    _this.AddedProductItems.splice(0, _this.AddedProductItems.length);
                    _this.Ordersummery = { Grandtotal: 0, NetPrice: 0, NoOfItem: 0, Discount: 0 };
                }
                else {
                    _this.presentConfirm(result.Message);
                }
            }
            console.log(data['_body']);
        }, function (error) {
            console.log(error);
        });
    };
    OrderPanelPage.prototype.loadResources = function () {
        var _this = this;
        this.transactionProvide.LoadResources(function (result) {
            console.log(result);
            _this.Resources.ProductCategory = result.productCategory.data;
            _this.Resources.ProductSubCategory = result.productSubcategory.data;
            _this.Resources.ProductItems = result.productItems.data;
            _this.selectCategory(_this.Resources.ProductCategory[0]);
        });
        // this.transactionProvide.loadProductItems((response)=>{
        //   console.log(response);
        // })
        ///product /productCategory/ProductSubCategory
    };
    OrderPanelPage.prototype.payment = function () {
        this.printer.isAvailable().then(function (success) {
            console.log('available');
        }, function (error) {
            console.log(error);
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
    };
    OrderPanelPage.prototype.presentConfirm = function (message) {
        var alert = this.alertCtrl.create({
            title: 'Product ',
            message: message,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Got It',
                    handler: function () {
                        console.log('Buy clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    OrderPanelPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-order-panel',template:/*ion-inline-start:"/home/yasura/Desktop/GithubApp/new/SIMPLEPOS/src/pages/order-panel/order-panel.html"*/'<!--\n  Generated template for the OrderPanelPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>orderPanel</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-grid>\n    <ion-row>\n\n      <ion-col col-4 class="leftPanel">\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              <button [disabled]="leftPanelIsNew == 1" (click)="leftPanelTggle(1)" ion-button full>New Order</button>\n            </ion-col>\n            <ion-col>\n              <button [disabled]="leftPanelIsNew == 2" (click)="leftPanelTggle(2)" ion-button full>Saved Order</button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n\n        <ion-grid *ngIf="leftPanelIsNew == 1">\n          <ion-row>\n            <ion-grid>\n              <ion-row>\n                <ion-col>\n                  <ion-item>\n                    <ion-label color="primary" floating>Item Code</ion-label>\n                    <ion-input type="text"></ion-input>\n                  </ion-item>\n                  <button ion-button small>Add</button>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-row>\n          <ion-row>\n            <ion-col style="min-height: 48vh;overflow: auto; max-height: 48vh">\n              <table width="100%">\n                <tr>\n                  <th>Item</th>\n                  <th>Qty</th>\n                  <th style="text-align: right">Price</th>\n                  <th style="text-align: right">\n                    <ion-icon name="trash"></ion-icon>\n                  </th>\n                </tr>\n                <tr *ngFor="let product of AddedProductItems">\n                  <td style="text-align: center">{{product.Name}}</td>\n                  <td (click)="AddQty(product)" style="text-align: center">{{product.Qty}}</td>\n                  <td style="text-align: right">{{product.Price}}Rs</td>\n                  <td style="text-align: right" (click)="delete(product)">\n                    <ion-icon name="trash"></ion-icon>\n                  </td>\n                </tr>\n              </table>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-grid>\n                <ion-row>\n                  <ion-col>\n                    no Of Items\n                  </ion-col>\n                  <ion-col>\n                    {{AddedProductItems.length}}\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col>\n                    Net Total\n                  </ion-col>\n                  <ion-col>\n                    {{Ordersummery.NetPrice}}\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col>\n                    Grand Total\n                  </ion-col>\n                  <ion-col>\n                    {{Ordersummery.Grandtotal}}\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n              <button (click)="SaveOrder()" ion-button full>Save</button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        <ion-grid *ngIf="leftPanelIsNew == 2">\n            <ion-row>\n                <ion-grid>\n                  <ion-row>\n                    <ion-col>\n                      <ion-item>\n                        <ion-label color="primary" floating>Item Code</ion-label>\n                        <ion-input type="text"></ion-input>\n                      </ion-item>\n                      <button ion-button small>Add</button>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-row>\n              <ion-row>\n                <ion-col style="min-height: 48vh;overflow: auto; max-height: 48vh">\n                  <table width="100%">\n                    <tr>\n                      <th>Item</th>\n                      <th>Qty</th>\n                      <th style="text-align: right">Price</th>\n                      <th style="text-align: right">\n                        <ion-icon name="trash"></ion-icon>\n                      </th>\n                    </tr>\n                    <tr *ngFor="let product of AddedProductItems">\n                      <td style="text-align: center">{{product.Name}}</td>\n                      <td (click)="AddQty(product)" style="text-align: center">{{product.Qty}}</td>\n                      <td style="text-align: right">{{product.Price}}Rs</td>\n                      <td style="text-align: right" (click)="delete(product)">\n                        <ion-icon name="trash"></ion-icon>\n                      </td>\n                    </tr>\n                  </table>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <ion-grid>\n                    <ion-row>\n                      <ion-col>\n                        no Of Items\n                      </ion-col>\n                      <ion-col>\n                        {{AddedProductItems.length}}\n                      </ion-col>\n                    </ion-row>\n                    <ion-row>\n                      <ion-col>\n                        Net Total\n                      </ion-col>\n                      <ion-col>\n                        {{Ordersummery.NetPrice}}\n                      </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col>\n                          Discount\n                        </ion-col>\n                        <ion-col>\n                          {{Ordersummery.NetPrice}}\n                        </ion-col>\n                      </ion-row>\n                      <ion-row>\n                          <ion-col>\n                            Advance\n                          </ion-col>\n                          <ion-col>\n                            {{Ordersummery.Advance}}\n                          </ion-col>\n                        </ion-row>\n                    <ion-row>\n                      <ion-col>\n                        Grand Total\n                      </ion-col>\n                      <ion-col>\n                        {{Ordersummery.Grandtotal}}\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                  <button (click)="payment()" ion-button full>Pay</button>\n                </ion-col>\n              </ion-row>\n        </ion-grid>\n      </ion-col>\n      <ion-col>\n        <ion-grid>\n          <ion-row style="overflow-x: auto; width:50vw;display:inline-block;">\n            <ion-scroll scrollX="true" style="width:100vw;height:75px">\n              <ion-segment color="secondary">\n                <ion-segment-button (click)="selectCategory(item)" *ngFor="let item of Resources.ProductCategory">\n                  <ion-icon></ion-icon>\n                  {{item.Name}}\n                </ion-segment-button>\n              </ion-segment>\n            </ion-scroll>\n\n          </ion-row>\n          <ion-row>\n            <ion-grid>\n              <ion-row>\n                <ion-col col-3 style="background-color: darkgray; min-height: 100vh">\n\n                  <ion-grid>\n                    <ion-row *ngFor="let item of FilterSubCategory">\n                      <ion-col style="align-items: flex-end " (click)="selectSubCategory(item)" class="square-container">\n\n                        <ion-item>\n                          {{item.Name}}\n                        </ion-item>\n\n                      </ion-col>\n                    </ion-row>\n\n                  </ion-grid>\n\n                </ion-col>\n                <ion-col>\n                  <!-- <ion-col col-2  (click)="selectProduct(item)" *ngFor="let item of FilterProductItems"  class="orderpanelItem">{{item.Name}}</ion-col> -->\n                  <div class="square-container">\n                    <div (click)="selectProduct(item)" *ngFor="let item of FilterProductItems" class="orderpanelItem" class="square">\n                      <div class="content">{{item.Name}}</div>\n                    </div>\n                  </div>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n\n\n          </ion-row>\n        </ion-grid>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"/home/yasura/Desktop/GithubApp/new/SIMPLEPOS/src/pages/order-panel/order-panel.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_transaction_provide_transaction_provide__["a" /* TransactionProvideProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_printer__["a" /* Printer */]])
    ], OrderPanelPage);
    return OrderPanelPage;
}());

//# sourceMappingURL=order-panel.js.map

/***/ }),

/***/ 119:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/admin/admin.module": [
		290,
		5
	],
	"../pages/category/category.module": [
		291,
		1
	],
	"../pages/login/login.module": [
		292,
		4
	],
	"../pages/order-panel/order-panel.module": [
		293,
		3
	],
	"../pages/payment-panel/payment-panel.module": [
		294,
		0
	],
	"../pages/sub-category-add/sub-category-add.module": [
		295,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 160;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_transaction_provide_transaction_provide__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ProductAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductAddPage = /** @class */ (function () {
    function ProductAddPage(navCtrl, navParams, http, alertCtrl, transactionHandeler) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.transactionHandeler = transactionHandeler;
        this.searchQuery = '';
        this.Resources = { ProductItems: [], ProductCategory: [], ProductSubCategory: [] };
        this.productDTO = { Name: '', Category: '', SubCategory: '', Price: '', Size: '', Id: '' };
    }
    ProductAddPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductAddPage');
        this.loadResources();
        this.loadallproduct();
    };
    ProductAddPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.productfilter = this.products.filter(function (item) {
                return (item.Name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.productfilter = this.products;
        }
    };
    ProductAddPage.prototype.selectItem = function (item) {
        console.log(item);
        this.productDTO.Name = item.Name;
        this.productDTO.Category = item.CategoryId;
        this.productDTO.Id = item._id;
        this.productDTO.SubCategory = item.SubCategory;
        this.productDTO.Price = item.Price;
        this.productDTO.Size = item.size;
    };
    ProductAddPage.prototype.loadResources = function () {
        var _this = this;
        this.transactionHandeler.LoadResources(function (result) {
            console.log(result);
            _this.Resources.ProductCategory = result.productCategory.data;
            _this.Resources.ProductSubCategory = result.productSubcategory.data;
            _this.Resources.ProductItems = result.productItems.data;
            _this.ProductCategory = result.productCategory.data;
            // this.selectCategory(this.Resources.ProductCategory[0])
        });
    };
    ProductAddPage.prototype.selectProductCategory = function (category) {
        this.productSubCategory = this.Resources.ProductSubCategory.filter(function (elem) {
            return elem.CategoryId == category;
        });
        console.log(this.productSubCategory);
        console.log(this.Resources.ProductSubCategory);
    };
    ProductAddPage.prototype.createProduct = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postData = {
            "Name": this.productDTO.Name,
            "CategoryId": this.productDTO.Category,
            "SubCategory": this.productDTO.SubCategory,
            "Price": this.productDTO.Price,
            "Size": this.productDTO.Size
        };
        if (this.productDTO.Id != "") {
            this.http.put("http://localhost:4000/api/product/" + this.productDTO.Id, postData, requestOptions)
                .subscribe(function (data) {
                if (data['_body']) {
                    var result = JSON.parse(data['_body']);
                    console.log(result);
                    if (result.IsSucess) {
                        _this.presentConfirm(result.Message);
                    }
                    else {
                        _this.presentConfirm("Product Creation Fail");
                    }
                }
                console.log(data['_body']);
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.http.post("http://localhost:4000/api/product", postData, requestOptions)
                .subscribe(function (data) {
                if (data['_body']) {
                    var result = JSON.parse(data['_body']);
                    console.log(result);
                    if (result.IsSucess) {
                        _this.presentConfirm(result.Message);
                    }
                    else {
                        _this.presentConfirm("Product Creation Fail");
                    }
                }
                console.log(data['_body']);
            }, function (error) {
                console.log(error);
            });
        }
        this.loadallproduct();
    };
    ProductAddPage.prototype.loadallproduct = function () {
        var _this = this;
        this.http.get('http://localhost:4000/api/product').subscribe(function (result) {
            console.log(result);
            _this.products = JSON.parse(result['_body']);
            _this.productfilter = _this.products;
        });
    };
    ProductAddPage.prototype.newProdut = function () {
        this.productDTO = { Name: '', Category: '', SubCategory: '', Price: '', Size: '', Id: '' };
    };
    ProductAddPage.prototype.deleteProduct = function () {
        var _this = this;
        if (this.productDTO.Id != "") {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            var requestOptions = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
            this.http.delete("http://localhost:4000/api/product/" + this.productDTO.Id, requestOptions)
                .subscribe(function (data) {
                if (data['_body']) {
                    var result = JSON.parse(data['_body']);
                    console.log(result);
                    if (result.IsSucess) {
                        _this.presentConfirm(result.Message);
                    }
                    else {
                        _this.presentConfirm("Product Creation Fail");
                    }
                }
                console.log(data['_body']);
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.presentConfirm("Select product to delete");
        }
    };
    ProductAddPage.prototype.presentConfirm = function (message) {
        var alert = this.alertCtrl.create({
            title: 'Product ',
            message: message,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Got It',
                    handler: function () {
                        console.log('Buy clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    ProductAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-product-add',template:/*ion-inline-start:"/home/yasura/Desktop/GithubApp/new/SIMPLEPOS/src/pages/product-add/product-add.html"*/'<!--\n  Generated template for the ProductAddPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button end navPop >\n          <ion-icon  name="close"></ion-icon>\n        </button>\n    <ion-title>Product</ion-title>\n    \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n          <ion-list>\n\n              <ion-item>\n                <ion-label>Product Name</ion-label>\n                <ion-input [(ngModel)]="productDTO.Name" type="text"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label>Product Category</ion-label>\n                <ion-select [(ngModel)]="productDTO.Category" (ionChange)="selectProductCategory(productDTO.Category)">\n                    <ion-option *ngFor="let item of ProductCategory" [value]="item._id">{{item.Name}}</ion-option>\n                    <!-- <ion-option value="2">Frame</ion-option>\n                    <ion-option value="3">Mug</ion-option> -->\n                    \n                  </ion-select>\n                \n              </ion-item>\n              <ion-item>\n                  <ion-label>SubCategory</ion-label>\n                  <ion-select [(ngModel)]="productDTO.SubCategory">\n                    <ion-option *ngFor="let item of productSubCategory" [value]="item._id">{{item.Name}}</ion-option>\n                    \n                    </ion-select>\n                  \n              </ion-item>\n              <ion-item>\n                <ion-label>Product Price</ion-label>\n                <ion-input [(ngModel)]="productDTO.Price" type="nmumber"></ion-input>\n              </ion-item>\n              <ion-item>\n                  <ion-label>Size</ion-label>\n                  <ion-input [(ngModel)]="productDTO.Size" type="number"></ion-input>\n              </ion-item>\n            </ion-list>\n            \n      </ion-col>\n      <ion-col col-4  >\n          <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n          <ion-list style="height:30vh; overflow:auto">\n            <ion-item *ngFor="let item of productfilter" (click)="selectItem(item)">\n              {{ item.Name }}\n            </ion-item>\n           \n          </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n \n\n  <button ion-button (click)="newProdut()" >New</button>\n  <button ion-button (click)="createProduct()" >Save</button>\n  <button ion-button (click)="deleteProduct()" >Delete</button>\n</ion-content>'/*ion-inline-end:"/home/yasura/Desktop/GithubApp/new/SIMPLEPOS/src/pages/product-add/product-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_transaction_provide_transaction_provide__["a" /* TransactionProvideProvider */]])
    ], ProductAddPage);
    return ProductAddPage;
}());

//# sourceMappingURL=product-add.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductCategoryAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_transaction_provide_transaction_provide__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ProductCategoryAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductCategoryAddPage = /** @class */ (function () {
    function ProductCategoryAddPage(navCtrl, navParams, http, alertCtrl, transactionProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.transactionProvider = transactionProvider;
        this.searchQuery = '';
        this.productDTO = { Id: '', Name: '' };
    }
    ProductCategoryAddPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductAddPage');
        this.loadallproduct();
    };
    ProductCategoryAddPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.productfilter = this.Category.filter(function (item) {
                return (item.Name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.productfilter = this.Category;
        }
    };
    ProductCategoryAddPage.prototype.selectItem = function (item) {
        console.log(item);
        this.productDTO.Name = item.Name;
        this.productDTO.Id = item._id;
    };
    ProductCategoryAddPage.prototype.createCategory = function () {
        // var headers = new Headers();
        // headers.append("Accept", 'application/json');
        // headers.append('Content-Type', 'application/json');
        // const requestOptions = new RequestOptions({ headers: headers });
        // let postData = {
        //   "Name": this.productDTO.Name  
        var _this = this;
        // }
        if (this.productDTO.Id != "") {
            this.transactionProvider.UpdateProductCategory(this.productDTO, this.productDTO.Id, function (result) {
                // console.log(result);
                if (result.IsSucess) {
                    _this.presentConfirm(result.Message);
                }
                else {
                    _this.presentConfirm(result.Message.message);
                }
            });
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
        }
        else {
            this.transactionProvider.CreateProductCategory(this.productDTO, function (result) {
                console.log(result);
                if (result.IsSucess) {
                    _this.presentConfirm(result.Message);
                }
                else {
                    _this.presentConfirm(result.Message.message);
                }
            });
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
    };
    ProductCategoryAddPage.prototype.loadallproduct = function () {
        var _this = this;
        this.transactionProvider.GetProductCategory(function (result) {
            console.log(result);
            _this.Category = result.data;
            _this.productfilter = _this.Category;
        });
        // this.http.get('http://localhost:4000/api/category').subscribe(result => {
        //   console.log(result);
        //   this.Category = JSON.parse(result['_body']);
        //   this.productfilter = this.Category;
        // })
    };
    ProductCategoryAddPage.prototype.newCategory = function () {
        this.productDTO = { Name: '', Id: '' };
    };
    ProductCategoryAddPage.prototype.deleteCategory = function () {
        var _this = this;
        if (this.productDTO.Id != "") {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            var requestOptions = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
            this.http.delete("http://localhost:4000/api/category/" + this.productDTO.Id, requestOptions)
                .subscribe(function (data) {
                if (data['_body']) {
                    var result = JSON.parse(data['_body']);
                    console.log(result);
                    if (result.IsSucess) {
                        _this.presentConfirm(result.Message);
                    }
                    else {
                        _this.presentConfirm("Product Category Delete Fail");
                    }
                }
                console.log(data['_body']);
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.presentConfirm("Select Category to delete");
        }
    };
    ProductCategoryAddPage.prototype.presentConfirm = function (message) {
        var alert = this.alertCtrl.create({
            title: 'Product ',
            message: message,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Got It',
                    handler: function () {
                        console.log('Buy clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    ProductCategoryAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-product-category-add',template:/*ion-inline-start:"/home/yasura/Desktop/GithubApp/new/SIMPLEPOS/src/pages/product-category-add/product-category-add.html"*/'<!--\n  Generated template for the ProductAddPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  \n    <ion-navbar>\n        <button ion-button end navPop >\n            <ion-icon  name="close"></ion-icon>\n          </button>\n      <ion-title>Category</ion-title>\n      \n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n            <ion-list>\n                <ion-item>\n                  <ion-label>Category Name</ion-label>\n                  <ion-input [(ngModel)]="productDTO.Name" type="text"></ion-input>\n                </ion-item>     \n              </ion-list>\n              \n        </ion-col>\n        <ion-col col-4  >\n            <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n            <ion-list style="height:30vh; overflow:auto">\n              <ion-item *ngFor="let item of productfilter" (click)="selectItem(item)">\n                {{ item.Name }}\n              </ion-item>\n             \n            </ion-list>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n   \n  \n    <button ion-button (click)="newCategory()" >New</button>\n    <button ion-button (click)="createCategory()" >Save</button>\n    <button ion-button (click)="deleteCategory()" >Delete</button>\n  </ion-content>'/*ion-inline-end:"/home/yasura/Desktop/GithubApp/new/SIMPLEPOS/src/pages/product-category-add/product-category-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_transaction_provide_transaction_provide__["a" /* TransactionProvideProvider */]])
    ], ProductCategoryAddPage);
    return ProductCategoryAddPage;
}());

//# sourceMappingURL=product-category-add.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/home/yasura/Desktop/GithubApp/new/SIMPLEPOS/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/yasura/Desktop/GithubApp/new/SIMPLEPOS/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, http, alertCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.auth = { UserName: '', Password: '', OrgID: '' };
    }
    LoginPage.prototype.logintoSystem = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postData = {
            "UserName": this.auth.UserName,
            "Password": this.auth.Password,
            "OrgID": this.auth.OrgID
        };
        this.http.post("http://localhost:4000/api/login", postData, requestOptions)
            .subscribe(function (data) {
            if (data['_body']) {
                var result = JSON.parse(data['_body']);
                console.log(result);
                if (result.IsSuccess) {
                    _this.presentConfirm(result.Message);
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                    _this.storage.set("token", result.token);
                }
                else {
                    _this.presentConfirm(result.Message);
                }
            }
        }, function (error) {
            var result = JSON.parse(error['_body']);
            _this.presentConfirm(result.Message);
            console.log(error);
        });
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.presentConfirm = function (message) {
        var alert = this.alertCtrl.create({
            title: 'Login ',
            message: message,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Got It',
                    handler: function () {
                        console.log('Buy clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/yasura/Desktop/GithubApp/new/SIMPLEPOS/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Simple POS</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding col-12 col-md-6 col-lg-6 col-xl-3>\n  <section class="home-container" style="text-align: center">\n\n    <div class="row header">\n\n      <div class="col text-center">\n        [Simple POS]\n      </div>\n    </div>\n    <div class="row icon-row" style="text-align: center">\n      POINT OF SALE SYSTEM\n    </div>\n  </section>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-list>\n\n          <ion-item>\n            <ion-label stacked>Username</ion-label>\n            <ion-input [(ngModel)]="auth.UserName"  type="text"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label stacked>Password</ion-label>\n            <ion-input [(ngModel)]="auth.Password" type="password"></ion-input>\n          </ion-item>\n\n        </ion-list>\n\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <button (click)="logintoSystem()" ion-button full>Login</button>\n        <button ion-button clear>Forget Password</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/home/yasura/Desktop/GithubApp/new/SIMPLEPOS/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(231);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_admin_admin__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_product_add_product_add__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_product_category_add_product_category_add__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_storage__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_order_panel_order_panel__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_transaction_provide_transaction_provide__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_sub_category_add_sub_category_add__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pipes_filter_filter__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_bill_calculation_bill_calculation__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_printer__ = __webpack_require__(165);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_admin_admin__["a" /* AdminPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_product_add_product_add__["a" /* ProductAddPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_product_category_add_product_category_add__["a" /* ProductCategoryAddPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_order_panel_order_panel__["a" /* OrderPanelPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_sub_category_add_sub_category_add__["a" /* SubCategoryAddPage */],
                __WEBPACK_IMPORTED_MODULE_17__pipes_filter_filter__["a" /* FilterPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/admin/admin.module#AdminPageModule', name: 'AdminPage', segment: 'admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/category/category.module#CategoryPageModule', name: 'CategoryPage', segment: 'category', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/order-panel/order-panel.module#OrderPanelPageModule', name: 'OrderPanelPage', segment: 'order-panel', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payment-panel/payment-panel.module#PaymentPanelPageModule', name: 'PaymentPanelPage', segment: 'payment-panel', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sub-category-add/sub-category-add.module#SubCategoryAddPageModule', name: 'SubCategoryAddPage', segment: 'sub-category-add', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_13__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_admin_admin__["a" /* AdminPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_product_add_product_add__["a" /* ProductAddPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_product_category_add_product_category_add__["a" /* ProductCategoryAddPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_order_panel_order_panel__["a" /* OrderPanelPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_sub_category_add_sub_category_add__["a" /* SubCategoryAddPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_15__providers_transaction_provide_transaction_provide__["a" /* TransactionProvideProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_bill_calculation_bill_calculation__["a" /* BillCalculationProvider */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_printer__["a" /* Printer */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_admin_admin__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_order_panel_order_panel__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_order_panel_order_panel__["a" /* OrderPanelPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
            { title: 'Admin', component: __WEBPACK_IMPORTED_MODULE_6__pages_admin_admin__["a" /* AdminPage */] },
            { title: 'Order', component: __WEBPACK_IMPORTED_MODULE_7__pages_order_panel_order_panel__["a" /* OrderPanelPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/yasura/Desktop/GithubApp/new/SIMPLEPOS/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/yasura/Desktop/GithubApp/new/SIMPLEPOS/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the FilterPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    FilterPipe.prototype.transform = function (items, filter) {
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return items.filter(function (item) { return item.CategoryId == filter._id; });
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'filter',
        })
    ], FilterPipe);
    return FilterPipe;
}());

//# sourceMappingURL=filter.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillCalculationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the BillCalculationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var BillCalculationProvider = /** @class */ (function () {
    function BillCalculationProvider(http) {
        this.http = http;
        console.log('Hello BillCalculationProvider Provider');
    }
    BillCalculationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], BillCalculationProvider);
    return BillCalculationProvider;
}());

//# sourceMappingURL=bill-calculation.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionProvideProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



/*
  Generated class for the TransactionProvideProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var TransactionProvideProvider = /** @class */ (function () {
    function TransactionProvideProvider(http) {
        this.http = http;
        //veriables 
        this.productItemsResource = { productItems: [], productCategory: [], productSubcategory: [] };
        console.log('Hello TransactionProvideProvider Provider');
    }
    TransactionProvideProvider.prototype.LoadResources = function (calback) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var count, sendDataCalback;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        count = 0;
                        return [4 /*yield*/, this.http.get('http://localhost:4000/api/product').subscribe(function (result) {
                                _this.productItemsResource.productItems = JSON.parse(result['_body']);
                                count += 1;
                                sendDataCalback(_this.productItemsResource);
                                //calback(this.productItemsResource.productItems);
                            })];
                    case 1:
                        _a.sent();
                        //ProductCategory
                        return [4 /*yield*/, this.http.get('http://localhost:4000/api/productCategory').subscribe(function (result) {
                                _this.productItemsResource.productCategory = JSON.parse(result['_body']);
                                count += 1;
                                sendDataCalback(_this.productItemsResource);
                                //calback(this.productItemsResource.productCategory)
                            })];
                    case 2:
                        //ProductCategory
                        _a.sent();
                        //productSubcategory
                        return [4 /*yield*/, this.http.get('http://localhost:4000/api/productSubCategory').subscribe(function (result) {
                                _this.productItemsResource.productSubcategory = JSON.parse(result['_body']);
                                count += 1;
                                sendDataCalback(_this.productItemsResource);
                                //calback(this.productItemsResource.productSubcategory);
                            })];
                    case 3:
                        //productSubcategory
                        _a.sent();
                        sendDataCalback = (function (result) {
                            if (count == 3) {
                                calback(result);
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    TransactionProvideProvider.prototype.loadProductItems = function (calback) {
        this.http.get('http://localhost:4000/api/product').subscribe(function (result) {
            // console.log(result);
            var response = JSON.parse(result['_body']);
            calback(response);
        });
    };
    //adminPanel
    //MasterData 
    //productCategory
    TransactionProvideProvider.prototype.GetProductCategory = function (callback) {
        this.http.get('http://localhost:4000/api/productCategory').subscribe(function (result) {
            console.log(result);
            callback(JSON.parse(result['_body']));
        });
    };
    TransactionProvideProvider.prototype.CreateProductCategory = function (request, callback) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postData = {
            "Name": request.Name
        };
        this.http.post("http://localhost:4000/api/productCategory", postData, requestOptions)
            .subscribe(function (data) {
            if (data['_body']) {
                var result = JSON.parse(data['_body']);
                callback(result);
            }
            console.log(data['_body']);
        }, function (error) {
            console.log(error);
        });
    };
    TransactionProvideProvider.prototype.UpdateProductCategory = function (request, CategoryID, callback) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postData = {
            "Name": request.Name
        };
        this.http.put("http://localhost:4000/api/productCategory/" + request.Id, postData, requestOptions)
            .subscribe(function (data) {
            if (data['_body']) {
                var result = JSON.parse(data['_body']);
                callback(result);
            }
            console.log(data['_body']);
        }, function (error) {
            console.log(error);
        });
    };
    //productCategory
    TransactionProvideProvider.prototype.GetProductSubCategory = function (callback) {
        this.http.get('http://localhost:4000/api/productSubCategory').subscribe(function (result) {
            console.log(result);
            callback(JSON.parse(result['_body']));
        });
    };
    TransactionProvideProvider.prototype.CreateProductSubCategory = function (request, callback) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postData = {
            "Name": request.Name,
            "CategoryId": request.CategoryId
        };
        this.http.post("http://localhost:4000/api/productSubCategory", postData, requestOptions)
            .subscribe(function (data) {
            if (data['_body']) {
                var result = JSON.parse(data['_body']);
                callback(result);
            }
            console.log(data['_body']);
        }, function (error) {
            console.log(error);
        });
    };
    TransactionProvideProvider.prototype.UpdateProductSubCategory = function (request, CategoryID, callback) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postData = {
            "Name": request.Name,
            "CategoryId": request.CategoryId
        };
        this.http.put("http://localhost:4000/api/productSubCategory/" + request.Id, postData, requestOptions)
            .subscribe(function (data) {
            if (data['_body']) {
                var result = JSON.parse(data['_body']);
                callback(result);
            }
            console.log(data['_body']);
        }, function (error) {
            console.log(error);
        });
    };
    TransactionProvideProvider.prototype.OrderSave = function (OrderHeader, orderDetails) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var orderData = { Header: [], Detail: [] };
        orderData.Header = OrderHeader;
        orderData.Detail = orderDetails;
        var postData = {
            "Header": orderData.Header,
            "orderDetails": orderData.Detail
        };
        return this.http.post("http://localhost:4000/api/order", postData, requestOptions);
    };
    TransactionProvideProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], TransactionProvideProvider);
    return TransactionProvideProvider;
}());

//# sourceMappingURL=transaction-provide.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, http, alertCtrl) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.itemcategories = { "categories": [
                {
                    "ProductCategoryid": 1,
                    "Category": "1",
                    "Name": "Photos",
                    "icon": "camera"
                }, {
                    "ProductCategoryid": 2,
                    "Category": "1",
                    "Name": "frames",
                    "icon": "image"
                }, {
                    "ProductCategoryid": 3,
                    "Category": "1",
                    "Name": "Letho Print",
                    "icon": "images"
                },
                {
                    "ProductCategoryid": 4,
                    "Category": "1",
                    "Name": "Photo Albums",
                    "icon": "book"
                }
            ],
            "product": [
                {
                    "productid": "01",
                    "Category": 1,
                    "Name": "4R",
                    "price": 350
                },
                {
                    "productid": "02",
                    "Category": 1,
                    "Name": "8R",
                    "price": 550
                },
                {
                    "productid": "03",
                    "Category": 1,
                    "Name": "12R",
                    "price": 850
                },
                {
                    "productid": "04",
                    "Category": 2,
                    "Name": "4R Frame",
                    "price": "350"
                },
                {
                    "productid": "05",
                    "Category": 2,
                    "Name": "8R Frame",
                    "price": 550
                },
                {
                    "productid": "06",
                    "Category": 2,
                    "Name": "12R Frame",
                    "price": 850
                },
                {
                    "productid": "07",
                    "Category": 3,
                    "Name": "Magic mug",
                    "price": 350
                },
                {
                    "productid": "08",
                    "Category": 3,
                    "Name": "Crustal Print",
                    "price": 550
                },
                {
                    "productid": "09",
                    "Category": 3,
                    "Name": "Granate Print",
                    "price": 850
                }
            ] };
        this.addeditems = [];
        this.selectedcategory = 1;
        this.selectedProduct = { 'price': '', "qty": '', "name": '', "productid": '' };
        this.total = 0;
        this.netQty = 0;
        this.netamount = 0;
        this.grandAmount = 0;
        this.discountAmount = 0;
        this.loaditems();
        this.selectCategory(1);
    }
    HomePage.prototype.loaditems = function () {
        var _this = this;
        this.http.get('http://localhost:4000/api/product').subscribe(function (result) {
            console.log(result);
            _this.products = JSON.parse(result['_body']);
            console.log(_this.products);
        });
        this.http.get('http://localhost:4000/api/category').subscribe(function (result) {
            console.log(result);
            _this.productCategory = JSON.parse(result['_body']);
            console.log(_this.productCategory);
        });
    };
    // loadallproduct() {
    //   this.http.get('http://localhost:4000/api/category').subscribe(result => {
    //     console.log(result);
    //     this.productCategory = JSON.parse(result['_body']);
    //   })
    // }
    HomePage.prototype.selectProduct = function (item) {
        console.log(item);
        this.selectedProduct.productid = item._id;
        this.selectedProduct.name = item.Name;
        this.selectedProduct.price = item.Price;
        // this.selectedProduct = item
    };
    HomePage.prototype.selectCategory = function (categoryid) {
        console.log(categoryid);
        this.items = this.itemcategories.product.filter(function (item) {
            return item.Category == categoryid;
        });
    };
    HomePage.prototype.additem = function (item) {
        item.qty = 1;
        this.addeditems.push(item);
        var balance = parseFloat(item.Price);
        this.AddTotal(balance);
        this.netQty;
        this.selectedProduct = { 'price': '', "qty": '', "name": '', "productid": '' };
    };
    HomePage.prototype.removeitems = function () {
        this.addeditems = [];
        this.total = 0;
    };
    HomePage.prototype.AddTotal = function (value) {
        this.total += value;
    };
    HomePage.prototype.deductTotal = function (value) {
        this.total -= value;
    };
    HomePage.prototype.SaveOrder = function () {
        var _this = this;
        console.log(this.addeditems);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var orderData = { Header: [], Detail: [] };
        orderData.Header;
        orderData.Detail;
        var postData = {
            "Header": orderData.Header,
            "orderDetails": orderData.Detail
        };
        this.http.post("http://localhost:4000/api/order", postData, requestOptions)
            .subscribe(function (data) {
            if (data['_body']) {
                var result = JSON.parse(data['_body']);
                console.log(result);
                if (result.IsSucess) {
                    _this.presentConfirm(result.Message);
                }
                else {
                    _this.presentConfirm("Order Save Fail");
                }
            }
            console.log(data['_body']);
        }, function (error) {
            console.log(error);
        });
    };
    HomePage.prototype.presentConfirm = function (message) {
        var alert = this.alertCtrl.create({
            title: 'Product ',
            message: message,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Got It',
                    handler: function () {
                        console.log('Buy clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/yasura/Desktop/GithubApp/new/SIMPLEPOS/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-grid>\n          <ion-row style="overflow-x: auto; width:50vw">\n            <ion-segment *ngFor="let item of productCategory" [(ngModel)]="icons" color="secondary">\n              <ion-segment-button value="{{item.ProductCategoryid}}" (click)="selectCategory(item.ProductCategoryid)">\n                <ion-icon name="{{item.icon}}"></ion-icon>\n                {{item.Name}}\n              </ion-segment-button>\n            </ion-segment>\n          </ion-row>\n          <ion-row>\n            <ion-col col-4>\n              <ion-item-group>\n                <ion-item-divider color="light">Items</ion-item-divider>\n                <ion-item *ngFor="let item of products" (click)="additem(item)">{{item.Name}}</ion-item>\n                <!-- <ion-item>8R</ion-item>\n                <ion-item>12R</ion-item>\n                <ion-item>12x18</ion-item> -->\n              </ion-item-group>\n            </ion-col>\n            <!-- <ion-col>\n               <ion-grid>\n                <ion-row>\n                  <h2>Item Detail</h2>\n                </ion-row>\n\n                <ion-row>\n\n                  <ion-col col-2>\n                    Name\n                  </ion-col>\n                  <ion-col col-4>\n                    {{selectedProduct.name}}\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-2>\n                    Qty\n                  </ion-col>\n                  <ion-col col-4>\n                    <input type="text" [(ngModel)]="selectedProduct.qty" />\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-2>\n                    Price\n                  </ion-col>\n                  <ion-col col-4>\n                    <input type="text" [(ngModel)]="selectedProduct.price" />\n                  </ion-col>\n                </ion-row>\n              </ion-grid> \n            </ion-col> -->\n          </ion-row>\n          <!-- <ion-row>\n            <ion-col>\n              <button ion-button full (click)="additem()">Add</button>\n            </ion-col>\n            <ion-col>\n             \n            </ion-col>\n          </ion-row> -->\n        </ion-grid>\n      </ion-col>\n      <ion-col>\n        <ion-grid>\n          <ion-row>\n            <h1>Bill</h1>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-list>\n                <ion-item>\n                  <ion-row>\n                    <ion-col col-4>Name</ion-col>\n                    <ion-col>Qty</ion-col>\n                    <ion-col>Price</ion-col>\n                  </ion-row>\n                </ion-item>\n                <ion-item *ngFor="let item of addeditems">\n                  <ion-row>\n                    <ion-col col-4>{{item.Name}}</ion-col>\n                    <ion-col><ion-icon name="arrow-back"></ion-icon> <span>{{item.qty}} </span> <ion-icon name="arrow-forward"></ion-icon></ion-col>\n                    <ion-col>{{item.Price}} RS</ion-col>\n                  </ion-row>\n\n                </ion-item>\n\n              </ion-list>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col></ion-col>\n            <ion-col >\n                <button  ion-button full (click)="removeitems()">Clear</button>\n               \n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              Net Qty\n            </ion-col>\n            <ion-col>\n              {{netQty}}\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              Net Total\n            </ion-col>\n            <ion-col>\n              {{totaln  }}\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              Discount\n            </ion-col>\n            <ion-col>\n              15%\n            </ion-col>\n          </ion-row>\n          <hr>\n          <ion-row>\n            <ion-col>\n              <h2> Grand Total</h2>\n            </ion-col>\n            <ion-col>\n              <h2>{{grandAmount + total }}  Rs</h2>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n                <button  ion-button full (click)="discount()">Discount</button>                \n            </ion-col>\n            <ion-col>\n              <button  ion-button full (click)="SaveOrder()">Save</button>\n            </ion-col>\n            <ion-col>\n                <button  ion-button full (click)="Save()">Cancel</button>\n              </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n\n\n</ion-content>'/*ion-inline-end:"/home/yasura/Desktop/GithubApp/new/SIMPLEPOS/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[210]);
//# sourceMappingURL=main.js.map