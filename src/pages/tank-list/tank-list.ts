import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Tank} from "../../dto/Tank";
import {TankListService} from "../../services/tank-list.service";

/**
 * Generated class for the TankListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
    selector: 'page-tank-list',
    templateUrl: 'tank-list.html',
})
export class TankListPage {

    tank: Tank;
    tanks: Tank[];

    constructor(public navCtrl: NavController, public navParams: NavParams, private tankListService: TankListService) {
        this.tanks = tankListService.tanks;
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad TankListPage');
    }

}
