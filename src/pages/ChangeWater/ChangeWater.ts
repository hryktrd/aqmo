import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ChangeWaterDateService} from "../../services/ChangeWaterDateService";
import * as moment from 'moment'

@Component({
    selector: 'change-water',
    templateUrl: 'ChangeWater.html',
    providers: [ChangeWaterDateService]
})

export class ChangeWater implements OnInit {
    private todayDate = moment().format('YYYY-MM-DD');
    private newChangeWater = {
        "date": this.todayDate
    };

    constructor(public navCtrl: NavController, private changeWaterDateService: ChangeWaterDateService) {

    }

    private changeWaterDates = [
        {
            "date": '2016-02-19',
        },
        {
            "date": '2016-03-19',
        },
        {
            "date": '2016-04-19',
        },
    ];

    ngOnInit(){
        // this.changeWaterDateService.getChangeWaterDates().then(changeWaterDates => this.changeWaterDates = changeWaterDates).then(() => console.log(this.changeWaterDates.length));
    }

    addChangeWaterDate(){
        this.changeWaterDates.push({
            "date": this.newChangeWater.date
        });
        console.log(this.changeWaterDates);
    }
}
