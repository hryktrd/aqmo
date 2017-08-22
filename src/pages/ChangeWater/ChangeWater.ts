import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {MaintDateService} from "../../services/MaintDate.service";
import {MaintDate} from '../../app/MaintDate';
import * as moment from 'moment'
import {Tank} from "../../dto/Tank";
import {TankListService} from "../../services/tank-list.service";

@Component({
    selector: 'change-water',
    templateUrl: 'ChangeWater.html',
    providers: [MaintDateService]
})

export class ChangeWater implements OnInit {
    todayDate = moment().format('YYYY-MM-DD');
    newChangeWater = {
        "date": this.todayDate
    };
    tanks: Tank[];

    constructor(public navCtrl: NavController, private maintDateService: MaintDateService, private tankListService: TankListService) {
        this.tanks = this.tankListService.tanks;
    }

    Dates: MaintDate[];

    ngOnInit(){
        this.maintDateService.getChangeWaterDates().then(changeWaterDates => this.Dates = changeWaterDates);
    }

    addChangeWaterDate(){
        this.Dates.push({
            "date": this.newChangeWater.date,
            "kind": "changeWater"
        });
        console.log(this.Dates);
    }

}
