import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  searchQuery: string = '';
  items: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams,private viewCtrl:ViewController) {
    this.initializeItems();
  }

  initializeItems() {
   this.items = [
     {id:1,name:'Metallica'},
     {id:2,name:'Pantera'},
     {id:3,name:'Slayer'},
     {id:4,name:'Iron Maiden'},
     {id:5,name:'Lamb of God'},
     {id:6,name:'CrisiX'},
     {id:7,name:'Sodom'},
     {id:8,name:'Megadeth'},
   ];
 }

 getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  dismiss(item:any){

    this.viewCtrl.dismiss(item);

  }

}
