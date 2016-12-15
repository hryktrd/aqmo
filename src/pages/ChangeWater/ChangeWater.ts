import {Component, OnInit} from '@angular/core';

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
  private changeWaterDates: ChangeWaterDate[];
  calendar = {
    "mode": 'month',
    "currentDate": new Date()
  };

  ngOnInit() {
    this.changeWaterDateService.getChangeWaterDates().then(changeWaterDates => this.changeWaterDates = changeWaterDates).then(()=>console.log(this.changeWaterDates.length));
    this.calendar.mode = 'month';
  }

}
