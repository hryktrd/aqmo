import {Component, OnInit} from '@angular/core';
import {MeasResult} from '../../app/MeasResult';
import {NavController, NavParams} from 'ionic-angular';
import {MeasResultService} from "../../services/MeasResultService";
import * as moment from 'moment';

@Component({
    selector: 'meas-water',
    templateUrl: 'MeasWater.html',
    providers: [MeasResultService]
})
export class MeasWater implements OnInit{
    private measResults: MeasResult[];
    private todayDate =  moment().format('YYYY-MM-DD');
    private newMeasResult: MeasResult = {
        "date": this.todayDate,
        "kind": "TEMP",
        "value" : 0,
        "comment": "",
    };


    constructor(public navCtrl: NavController, public navParams: NavParams, private measResultService: MeasResultService ) {

    }
    ngOnInit(){
        this.measResultService.getMeasResults().then(Results => this.measResults = Results);
    }

    addMeasResult(){
        this.measResults.push(this.newMeasResult);
    }
}
