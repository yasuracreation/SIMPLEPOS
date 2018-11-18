import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AdminPage } from '../pages/admin/admin';
import { ProductAddPage } from '../pages/product-add/product-add';
import { ProductCategoryAddPage } from '../pages/product-category-add/product-category-add'
import { LoginPage } from '../pages/login/login';
import { IonicStorageModule } from '@ionic/storage';
import { OrderPanelPage } from '../pages/order-panel/order-panel';
import { TransactionProvideProvider } from '../providers/transaction-provide/transaction-provide';
import { SubCategoryAddPage } from '../pages/sub-category-add/sub-category-add';
import { FilterPipe } from '../pipes/filter/filter';
import { BillCalculationProvider } from '../providers/bill-calculation/bill-calculation';
import { Printer } from '@ionic-native/printer'
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AdminPage,
    ProductAddPage,
    LoginPage,
    ProductCategoryAddPage,
    OrderPanelPage,
    SubCategoryAddPage,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AdminPage,
    ProductAddPage,
    LoginPage,
    ProductCategoryAddPage,
    OrderPanelPage,
    SubCategoryAddPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TransactionProvideProvider,
    BillCalculationProvider,
    Printer
    
  ]
})
export class AppModule {}
