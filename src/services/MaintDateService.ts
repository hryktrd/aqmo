import { Injectable } from "@angular/core";
import { MaintDate } from '../app/MaintDate';

@Injectable()
export class MaintDateService{
    changeWaterDates: MaintDate[];

    getChangeWaterDates(): Promise<MaintDate[]> {
        return Promise.resolve(ChangeWaterDatesMock);
    }
    getTrimmingDates(): Promise<MaintDate[]> {
        return Promise.resolve(TrimmingDatesMock);
    }
}

export const ChangeWaterDatesMock: MaintDate[] = [
    {"date": "2016-06-19", "kind": "changeWater"},
    {"date": "2016-07-20", "kind": "changeWater"},
    {"date": "2016-08-17", "kind": "changeWater"},
]

export const TrimmingDatesMock: MaintDate[] = [
    {"date": "2016-06-29", "kind": "trimming"},
    {"date": "2016-07-30", "kind": "trimming"},
    {"date": "2016-08-27", "kind": "trimming"},
]

