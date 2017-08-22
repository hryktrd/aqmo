import {Component, OnInit} from '@angular/core';
import {MeasResult} from '../../app/MeasResult';
import {NavController, NavParams} from 'ionic-angular';
import {MeasResultService} from "../../services/MeasResult.service";
import * as moment from 'moment';
import {Tank} from "../../dto/Tank";
import {TankListService} from "../../services/tank-list.service";

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
    private tanks: Tank[];

    constructor(public navCtrl: NavController, public navParams: NavParams, private measResultService: MeasResultService, public tankListService: TankListService) {
        this.tanks = this.tankListService.tanks;
    }
    ngOnInit(){
        this.measResultService.getMeasResults().then(Results => this.measResults = Results);
    }

    addMeasResult(){
        this.measResults.push(this.newMeasResult);
    }
}
