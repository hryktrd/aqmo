import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {MaintDateService} from "../../services/MaintDateService";
import {MaintDate} from '../../app/MaintDate';
import * as moment from 'moment'

@Component({
    selector: 'change-water',
    templateUrl: 'ChangeWater.html',
    providers: [MaintDateService]
})

export class ChangeWater implements OnInit {
    private todayDate = moment().format('YYYY-MM-DD');
    private newChangeWater = {
        "date": this.todayDate
    };

    constructor(public navCtrl: NavController, private maintDateService: MaintDateService) {

    }

    private Dates: MaintDate[];

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
