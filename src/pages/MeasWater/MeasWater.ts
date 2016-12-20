import {Component, OnInit} from '@angular/core';
import {MeasResult} from '../../app/MeasResult';
import {NavController, NavParams} from 'ionic-angular';
import {MeasResultService} from "../../services/MeasResultService";

@Component({
    selector: 'meas-water',
    templateUrl: 'MeasWater.html',
    providers: [MeasResultService]
})
export class MeasWater implements OnInit{
    private measResults: MeasResult[];
    constructor(public navCtrl: NavController, public navParams: NavParams, private measResultService: MeasResultService ) {

    }
    ngOnInit(){
        this.measResultService.getMeasResults().then(Results => this.measResults = Results);
    }
}
