import {Component, OnInit, NgModule} from '@angular/core';

import { NavController } from 'ionic-angular';

import {ChangeWaterDate} from "../../app/ChangeWaterDate";
import {ChangeWaterDateService} from "../../services/ChangeWaterDateService";

@Component({
  selector: 'change-water',
  templateUrl: 'ChangeWater.html',
  providers: [ChangeWaterDateService]
})

export class ChangeWater implements OnInit{

  constructor(public navCtrl: NavController, private changeWaterDateService: ChangeWaterDateService) {

  }
  changeWaterDates: ChangeWaterDate[];

  ngOnInit() {
    this.changeWaterDateService.getChangeWaterDates().then(changeWaterDates => this.changeWaterDates = changeWaterDates);
  }


}
