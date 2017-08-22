import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient} from "../share/http-client";
import {Tank} from "../dto/Tank";

/*
  Generated class for the TankListService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class TankListService {

    public selectedTank: Tank;
    public tanks: Tank[];

    constructor(public http: HttpClient) {
        //    TODO: あとでサーバから取得
        this.tanks = [
            {'id': 1, 'name': 'タンクA', 'uuid': 'test-uuid', 'memo': 'タンクAです。'},
            {'id': 2, 'name': 'タンクB', 'uuid': 'test-uuid', 'memo': 'タンクBです。'},
        ]
    }

}
