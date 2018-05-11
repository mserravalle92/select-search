import { Component } from '@angular/core';
import { NavController,ModalController } from 'ionic-angular';
import { SearchPage } from "../search/search";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  selectedBand:any = {id:0,name:''}

  constructor(public navCtrl: NavController,public modalCtrl:ModalController) {

  }

  searchBand(){
    let modal = this.modalCtrl.create(SearchPage);
    modal.present();
    
    modal.onDidDismiss((band:any)=>{
      this.selectedBand.name = band.name;
      this.selectedBand.id = band.id;
    })
  }

}
