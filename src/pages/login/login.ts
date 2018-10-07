import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, private alertCtrl: AlertController,private storage:Storage) {
  }
  auth ={UserName:'',Password:'',OrgID:''}
  logintoSystem(){
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    const requestOptions = new RequestOptions({ headers: headers });

    let postData = {
      "UserName": this.auth.UserName,
      "Password": this.auth.Password,
      "OrgID": this.auth.OrgID
    }
    this.http.post("http://localhost:4000/api/login", postData, requestOptions)
    .subscribe(data => {
      if (data['_body']) {
        let result = JSON.parse(data['_body']);
        console.log(result)
        if (result.IsSuccess) {
          this.presentConfirm(result.Message);
          this.navCtrl.setRoot(HomePage);
          this.storage.set("token",result.token);
        } else {
          this.presentConfirm(result.Message)
          
        }
      }
      
    }, error => {
      let result = JSON.parse(error['_body']);
      this.presentConfirm(result.Message);
      console.log(error);
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  presentConfirm(message) {
    let alert = this.alertCtrl.create({
      title: 'Login ',
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
