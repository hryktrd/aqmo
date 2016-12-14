import { Injectable } from "@angular/core";
import { ChangeWaterDate } from '../app/ChangeWaterDate';
@Injectable()
export class ChangeWaterDateService{
    changeWaterDates: ChangeWaterDate[];

    getChangeWaterDates(): Promise<ChangeWaterDate[]> {
        return Promise.resolve(ChangeWaterDatesMock);
    }
}

export const ChangeWaterDatesMock: ChangeWaterDate[]= [
    {"startTime": new Date(Date.UTC(2016, 12, 3)), title: "test1", allDay: true},
    {"startTime": new Date(Date.UTC(2016, 12, 8)), title: "test2", allDay: true},
    {"startTime": new Date(Date.UTC(2016, 12, 14)), title: "", allDay: true}
]


