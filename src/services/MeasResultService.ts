import { Injectable } from "@angular/core";
import { MaintDate } from '../app/MaintDate';
import {MeasResult} from "../app/MeasResult";

@Injectable()
export class MeasResultService{

    getMeasResults(): Promise<MeasResult[]> {
        return Promise.resolve(MeasResultsMock);
    }

}

export const MeasResultsMock: MeasResult[] = [
    {"date": "2016-06-19", "kind": "changeWater", "value": 6.0, "comment": "test"},
    {"date": "2016-06-19", "kind": "changeWater", "value": 7.0, "comment": ""},
    {"date": "2016-06-19", "kind": "changeWater", "value": 6.5, "comment": ""},
    {"date": "2016-06-19", "kind": "changeWater", "value": 6.2, "comment": ""},
]



