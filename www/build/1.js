webpackJsonp([1],{

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPageModule", function() { return CategoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__category__ = __webpack_require__(295);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CategoryPageModule = /** @class */ (function () {
    function CategoryPageModule() {
    }
    CategoryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__category__["a" /* CategoryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__category__["a" /* CategoryPage */]),
            ],
        })
    ], CategoryPageModule);
    return CategoryPageModule;
}());

//# sourceMappingURL=category.module.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPage; });
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




/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CategoryPage = /** @class */ (function () {
    function CategoryPage(navCtrl, navParams, http, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.searchQuery = '';
        this.productDTO = { Category: '', IndexId: '', Id: '' };
    }
    CategoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CategoryPage');
    };
    CategoryPage.prototype.loadallproduct = function () {
        var _this = this;
        this.http.get('http://localhost:4000/api/productCategory').subscribe(function (result) {
            console.log(result);
            _this.products = JSON.parse(result['_body']);
        });
    };
    CategoryPage.prototype.newCategory = function () {
        this.productDTO = { Category: '', IndexId: '', Id: '' };
    };
    CategoryPage.prototype.createCategory = function () {
        var _this = this;
        console.log("CreateProduct");
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postData = {
            "CategoryId": this.productDTO.Category,
            "IndexId": this.productDTO.IndexId,
        };
        if (this.productDTO.Id != "") {
            this.http.put("http://localhost:4000/api/productCategory/" + this.productDTO.Id, postData, requestOptions)
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
            this.http.post("http://localhost:4000/api/productCategory", postData, requestOptions)
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
    CategoryPage.prototype.presentConfirm = function (message) {
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
    CategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-category',template:/*ion-inline-start:"/Users/studiosalaru/Documents/StudioApp/git/SIMPLEPOS/src/pages/category/category.html"*/'<!--\n  Generated template for the ProductAddPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <button ion-button end navPop >\n            <ion-icon  name="close"></ion-icon>\n          </button>\n      <ion-title>Category</ion-title>\n      \n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n            <ion-list>\n  \n                <ion-item>\n                  <ion-label> IndexId</ion-label>\n                  <ion-input [(ngModel)]="productDTO.IndexId" type="number"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label> Name</ion-label>\n                    <ion-input [(ngModel)]="productDTO.Name" type="text"></ion-input>\n                  </ion-item>\n              \n               \n              </ion-list>\n              \n        </ion-col>\n        <ion-col col-4  >\n            <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n            <ion-list style="height:30vh; overflow:auto">\n              <ion-item *ngFor="let item of Category" (click)="selectItem(item)">\n                {{ item.Name }}\n              </ion-item>\n              <ion-item>\n                Item One\n              </ion-item>\n            </ion-list>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n   \n  \n    <button ion-button (click)="newProdut()" >New</button>\n    <button ion-button (click)="createCategory()" >Save</button>\n    <button ion-button >Delete</button>\n  </ion-content>'/*ion-inline-end:"/Users/studiosalaru/Documents/StudioApp/git/SIMPLEPOS/src/pages/category/category.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], CategoryPage);
    return CategoryPage;
}());

//# sourceMappingURL=category.js.map

/***/ })

});
//# sourceMappingURL=1.js.map