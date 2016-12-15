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
  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }
  ngOnInit() {
    this.changeWaterDateService.getChangeWaterDates().then(changeWaterDates => this.changeWaterDates = changeWaterDates).then(()=>console.log(this.changeWaterDates.length));
  }

}
