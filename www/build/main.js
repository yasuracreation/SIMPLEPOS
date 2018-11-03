webpackJsonp([5],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_add_product_add__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_category_add_product_category_add__ = __webpack_require__(157);
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
    };
    AdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin',template:/*ion-inline-start:"/home/yasura/Desktop/GithubApp/SIMPLEPOS/src/pages/admin/admin.html"*/'<!--\n  Generated template for the AdminPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Admin</ion-title>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 col-md-6 col-lg-6 col-xl-3>\n        <ion-list>\n          <ion-list-header>\n            Master Data\n          </ion-list-header>\n          <ion-item (click)="presentModal(\'product\')"> Product</ion-item>\n          <ion-item>Services</ion-item>\n          <ion-item>Ingradiant</ion-item>\n          <ion-item (click)="presentModal(\'category\')">Category</ion-item>\n          <ion-item>Type</ion-item>\n          <ion-list-header>\n            Cancellation\n          </ion-list-header>\n          <ion-item > Order </ion-item>\n          <ion-item>Reservation </ion-item>\n          <ion-item>Payment </ion-item>\n\n        </ion-list>\n      </ion-col>\n      <ion-col>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/home/yasura/Desktop/GithubApp/SIMPLEPOS/src/pages/admin/admin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], AdminPage);
    return AdminPage;
}());

//# sourceMappingURL=admin.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(158);
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
            selector: 'page-login',template:/*ion-inline-start:"/home/yasura/Desktop/GithubApp/SIMPLEPOS/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Simple POS</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding col-12 col-md-6 col-lg-6 col-xl-3>\n  <section class="home-container" style="text-align: center">\n\n    <div class="row header">\n\n      <div class="col text-center">\n        [Simple POS]\n      </div>\n    </div>\n    <div class="row icon-row" style="text-align: center">\n      POINT OF SALE SYSTEM\n    </div>\n  </section>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-list>\n\n          <ion-item>\n            <ion-label stacked>Username</ion-label>\n            <ion-input [(ngModel)]="auth.UserName"  type="text"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label stacked>Password</ion-label>\n            <ion-input [(ngModel)]="auth.Password" type="password"></ion-input>\n          </ion-item>\n\n        </ion-list>\n\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <button (click)="logintoSystem()" ion-button full>Login</button>\n        <button ion-button clear>Forget Password</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/home/yasura/Desktop/GithubApp/SIMPLEPOS/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 113:
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
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/admin/admin.module": [
		278,
		4
	],
	"../pages/category/category.module": [
		279,
		2
	],
	"../pages/login/login.module": [
		280,
		3
	],
	"../pages/order-panel/order-panel.module": [
		281,
		1
	],
	"../pages/payment-panel/payment-panel.module": [
		282,
		0
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
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(41);
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




/**
 * Generated class for the ProductAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductAddPage = /** @class */ (function () {
    function ProductAddPage(navCtrl, navParams, http, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.searchQuery = '';
        this.productDTO = { Name: '', Category: '', SubCategory: '', Price: '', Size: '', Id: '' };
    }
    ProductAddPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductAddPage');
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
            selector: 'page-product-add',template:/*ion-inline-start:"/home/yasura/Desktop/GithubApp/SIMPLEPOS/src/pages/product-add/product-add.html"*/'<!--\n  Generated template for the ProductAddPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button end navPop >\n          <ion-icon  name="close"></ion-icon>\n        </button>\n    <ion-title>Product</ion-title>\n    \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n          <ion-list>\n\n              <ion-item>\n                <ion-label>Product Name</ion-label>\n                <ion-input [(ngModel)]="productDTO.Name" type="text"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label>Product Category</ion-label>\n                <ion-select [(ngModel)]="productDTO.Category">\n                    <ion-option value="1">Photo</ion-option>\n                    <ion-option value="2">Frame</ion-option>\n                    <ion-option value="3">Mug</ion-option>\n                    \n                  </ion-select>\n                \n              </ion-item>\n              <ion-item>\n                  <ion-label>SubCategory</ion-label>\n                  <ion-select [(ngModel)]="productDTO.SubCategory">\n                      <ion-option value="1">Mate</ion-option>\n                      <ion-option value="2">Gloss </ion-option>\n                    </ion-select>\n                  \n              </ion-item>\n              <ion-item>\n                <ion-label>Product Price</ion-label>\n                <ion-input [(ngModel)]="productDTO.Price" type="nmumber"></ion-input>\n              </ion-item>\n              <ion-item>\n                  <ion-label>Size</ion-label>\n                  <ion-input [(ngModel)]="productDTO.Size" type="number"></ion-input>\n              </ion-item>\n            </ion-list>\n            \n      </ion-col>\n      <ion-col col-4  >\n          <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n          <ion-list style="height:30vh; overflow:auto">\n            <ion-item *ngFor="let item of productfilter" (click)="selectItem(item)">\n              {{ item.Name }}\n            </ion-item>\n           \n          </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n \n\n  <button ion-button (click)="newProdut()" >New</button>\n  <button ion-button (click)="createProduct()" >Save</button>\n  <button ion-button (click)="deleteProduct()" >Delete</button>\n</ion-content>'/*ion-inline-end:"/home/yasura/Desktop/GithubApp/SIMPLEPOS/src/pages/product-add/product-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ProductAddPage);
    return ProductAddPage;
}());

//# sourceMappingURL=product-add.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductCategoryAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(41);
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




/**
 * Generated class for the ProductCategoryAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductCategoryAddPage = /** @class */ (function () {
    function ProductCategoryAddPage(navCtrl, navParams, http, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
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
    };
    ProductCategoryAddPage.prototype.createCategory = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postData = {
            "Name": this.productDTO.Name
        };
        if (this.productDTO.Id != "") {
            this.http.put("http://localhost:4000/api/category/" + this.productDTO.Id, postData, requestOptions)
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
            this.http.post("http://localhost:4000/api/category", postData, requestOptions)
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
    ProductCategoryAddPage.prototype.loadallproduct = function () {
        var _this = this;
        this.http.get('http://localhost:4000/api/category').subscribe(function (result) {
            console.log(result);
            _this.Category = JSON.parse(result['_body']);
            _this.productfilter = _this.Category;
        });
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
            selector: 'page-product-category-add',template:/*ion-inline-start:"/home/yasura/Desktop/GithubApp/SIMPLEPOS/src/pages/product-category-add/product-category-add.html"*/'<!--\n  Generated template for the ProductAddPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  \n    <ion-navbar>\n        <button ion-button end navPop >\n            <ion-icon  name="close"></ion-icon>\n          </button>\n      <ion-title>Category</ion-title>\n      \n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n            <ion-list>\n                <ion-item>\n                  <ion-label>Category Name</ion-label>\n                  <ion-input [(ngModel)]="productDTO.Name" type="text"></ion-input>\n                </ion-item>     \n              </ion-list>\n              \n        </ion-col>\n        <ion-col col-4  >\n            <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n            <ion-list style="height:30vh; overflow:auto">\n              <ion-item *ngFor="let item of productfilter" (click)="selectItem(item)">\n                {{ item.Name }}\n              </ion-item>\n             \n            </ion-list>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n   \n  \n    <button ion-button (click)="newCategory()" >New</button>\n    <button ion-button (click)="createCategory()" >Save</button>\n    <button ion-button (click)="deleteCategory()" >Delete</button>\n  </ion-content>'/*ion-inline-end:"/home/yasura/Desktop/GithubApp/SIMPLEPOS/src/pages/product-category-add/product-category-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ProductCategoryAddPage);
    return ProductCategoryAddPage;
}());

//# sourceMappingURL=product-category-add.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
            selector: 'page-list',template:/*ion-inline-start:"/home/yasura/Desktop/GithubApp/SIMPLEPOS/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/yasura/Desktop/GithubApp/SIMPLEPOS/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_admin_admin__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_product_add_product_add__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_product_category_add_product_category_add__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_storage__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_order_panel_order_panel__ = __webpack_require__(284);
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
                __WEBPACK_IMPORTED_MODULE_14__pages_order_panel_order_panel__["a" /* OrderPanelPage */]
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
                        { loadChildren: '../pages/payment-panel/payment-panel.module#PaymentPanelPageModule', name: 'PaymentPanelPage', segment: 'payment-panel', priority: 'low', defaultHistory: [] }
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
                __WEBPACK_IMPORTED_MODULE_14__pages_order_panel_order_panel__["a" /* OrderPanelPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_admin_admin__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_order_panel_order_panel__ = __webpack_require__(284);
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
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]) === "function" && _a || Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/yasura/Desktop/GithubApp/SIMPLEPOS/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/yasura/Desktop/GithubApp/SIMPLEPOS/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderPanelPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
    function OrderPanelPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OrderPanelPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrderPanelPage');
    };
    OrderPanelPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-order-panel',template:/*ion-inline-start:"/home/yasura/Desktop/GithubApp/SIMPLEPOS/src/pages/order-panel/order-panel.html"*/'<!--\n  Generated template for the OrderPanelPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>orderPanel</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-4 style="background-color:blueviolet; min-height: 100vh">\n        <ion-grid>\n          <ion-row>\n            <ion-col style="min-height: 48vh;overflow: auto; max-height: 48vh">\n              <table width="100%">\n                <tr>\n                  <th>Item</th>\n                  <th>Qty</th>\n                  <th>Price</th>\n                </tr>\n                <tr>\n                  <td>Test</td>\n                  <td>2</td>\n                  <td>120 Rs</td>\n                </tr>\n                <tr>\n                  <td>Test</td>\n                  <td>2</td>\n                  <td>120 Rs</td>\n                </tr>\n              </table>\n\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-grid>\n                <ion-row>\n                  <ion-col>\n                    no Of Items\n                  </ion-col>\n                  <ion-col>\n                    5\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col>\n                    Net Total\n                  </ion-col>\n                  <ion-col>\n                    150\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col>\n                    Grand Total\n                  </ion-col>\n                  <ion-col>\n                    450\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-col>\n          </ion-row>\n\n        </ion-grid>\n\n      </ion-col>\n      <ion-col style="background-color:bisque">\n        <ion-grid>\n          <ion-row style="overflow-x: auto; width:50vw;display:inline-block;">\n              <ion-scroll scrollX="true" style="width:100vw;height:75px" >\n                  <ion-segment color="secondary">\n                      <ion-segment-button>\n                        <ion-icon></ion-icon>\n                        Books\n                      </ion-segment-button>\n                      <ion-segment-button>\n                        <ion-icon></ion-icon>\n                        Books\n                      </ion-segment-button>\n                      <ion-segment-button>\n                        <ion-icon></ion-icon>\n                        Books\n                      </ion-segment-button>\n                      <ion-segment-button>\n                        <ion-icon></ion-icon>\n                        Books\n                      </ion-segment-button>\n                      <ion-segment-button>\n                        <ion-icon></ion-icon>\n                        Books\n                      </ion-segment-button>\n                      <ion-segment-button>\n                        <ion-icon></ion-icon>\n                        Books\n                      </ion-segment-button>\n                    </ion-segment> \n              </ion-scroll>\n             \n          </ion-row>\n          <ion-row>\n            <ion-col style="background-color:brown; height: 150px;padding: 15px; margin: 5px;">Items</ion-col>\n            <ion-col  style="background-color:brown; height: 150px;padding: 15px; margin: 5px;">Items</ion-col>\n            <ion-col  style="background-color:brown; height: 150px;padding: 15px; margin: 5px;">Items</ion-col>\n            <ion-col  style="background-color:brown; height: 150px;padding: 15px; margin: 5px;">Items</ion-col>\n            <ion-col  style="background-color:brown; height: 150px;padding: 15px; margin: 5px;">Items</ion-col>\n            <ion-col  style="background-color:brown; height: 150px;padding: 15px; margin: 5px;">Items</ion-col>\n\n          </ion-row>\n        </ion-grid>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"/home/yasura/Desktop/GithubApp/SIMPLEPOS/src/pages/order-panel/order-panel.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], OrderPanelPage);
    return OrderPanelPage;
}());

//# sourceMappingURL=order-panel.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(41);
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
                    _this.presentConfirm("Product Creation Fail");
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
            selector: 'page-home',template:/*ion-inline-start:"/home/yasura/Desktop/GithubApp/SIMPLEPOS/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-grid>\n          <ion-row style="overflow-x: auto; width:50vw">\n            <ion-segment *ngFor="let item of productCategory" [(ngModel)]="icons" color="secondary">\n              <ion-segment-button value="{{item.ProductCategoryid}}" (click)="selectCategory(item.ProductCategoryid)">\n                <ion-icon name="{{item.icon}}"></ion-icon>\n                {{item.Name}}\n              </ion-segment-button>\n            </ion-segment>\n          </ion-row>\n          <ion-row>\n            <ion-col col-4>\n              <ion-item-group>\n                <ion-item-divider color="light">Items</ion-item-divider>\n                <ion-item *ngFor="let item of products" (click)="additem(item)">{{item.Name}}</ion-item>\n                <!-- <ion-item>8R</ion-item>\n                <ion-item>12R</ion-item>\n                <ion-item>12x18</ion-item> -->\n              </ion-item-group>\n            </ion-col>\n            <!-- <ion-col>\n               <ion-grid>\n                <ion-row>\n                  <h2>Item Detail</h2>\n                </ion-row>\n\n                <ion-row>\n\n                  <ion-col col-2>\n                    Name\n                  </ion-col>\n                  <ion-col col-4>\n                    {{selectedProduct.name}}\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-2>\n                    Qty\n                  </ion-col>\n                  <ion-col col-4>\n                    <input type="text" [(ngModel)]="selectedProduct.qty" />\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-2>\n                    Price\n                  </ion-col>\n                  <ion-col col-4>\n                    <input type="text" [(ngModel)]="selectedProduct.price" />\n                  </ion-col>\n                </ion-row>\n              </ion-grid> \n            </ion-col> -->\n          </ion-row>\n          <!-- <ion-row>\n            <ion-col>\n              <button ion-button full (click)="additem()">Add</button>\n            </ion-col>\n            <ion-col>\n             \n            </ion-col>\n          </ion-row> -->\n        </ion-grid>\n      </ion-col>\n      <ion-col>\n        <ion-grid>\n          <ion-row>\n            <h1>Bill</h1>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-list>\n                <ion-item>\n                  <ion-row>\n                    <ion-col col-4>Name</ion-col>\n                    <ion-col>Qty</ion-col>\n                    <ion-col>Price</ion-col>\n                  </ion-row>\n                </ion-item>\n                <ion-item *ngFor="let item of addeditems">\n                  <ion-row>\n                    <ion-col col-4>{{item.Name}}</ion-col>\n                    <ion-col><ion-icon name="arrow-back"></ion-icon> <span>{{item.qty}} </span> <ion-icon name="arrow-forward"></ion-icon></ion-col>\n                    <ion-col>{{item.Price}} RS</ion-col>\n                  </ion-row>\n\n                </ion-item>\n\n              </ion-list>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col></ion-col>\n            <ion-col >\n                <button  ion-button full (click)="removeitems()">Clear</button>\n               \n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              Net Qty\n            </ion-col>\n            <ion-col>\n              {{netQty}}\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              Net Total\n            </ion-col>\n            <ion-col>\n              {{totaln  }}\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              Discount\n            </ion-col>\n            <ion-col>\n              15%\n            </ion-col>\n          </ion-row>\n          <hr>\n          <ion-row>\n            <ion-col>\n              <h2> Grand Total</h2>\n            </ion-col>\n            <ion-col>\n              <h2>{{grandAmount + total }}  Rs</h2>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n                <button  ion-button full (click)="discount()">Discount</button>                \n            </ion-col>\n            <ion-col>\n              <button  ion-button full (click)="SaveOrder()">Save</button>\n            </ion-col>\n            <ion-col>\n                <button  ion-button full (click)="Save()">Cancel</button>\n              </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n\n\n</ion-content>'/*ion-inline-end:"/home/yasura/Desktop/GithubApp/SIMPLEPOS/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map