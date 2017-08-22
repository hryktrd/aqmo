import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ErrorHandler} from '@angular/core';
import { HttpModule } from '@angular/http';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {MeasWater} from '../pages/MeasWater/MeasWater';
import {ChangeWater} from "../pages/ChangeWater/ChangeWater";
import {Config} from "../services/config";
import {MaintDateService} from "../services/MaintDate.service";
import {MeasResultService} from "../services/MeasResult.service";
import {HttpClient} from "../share/http-client";
import {TankListPage} from "../pages/tank-list/tank-list";
import { TankListService } from '../services/tank-list.service';
@NgModule({
    declarations: [
        MyApp,
        ChangeWater,
        MeasWater,
        TankListPage
    ],
    imports: [
        BrowserModule,
        HttpModule,
        IonicModule.forRoot(MyApp),
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        ChangeWater,
        MeasWater,
        TankListPage
    ],
    providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Config, MaintDateService, MeasResultService, HttpClient,
    TankListService]
})
export class AppModule {
}
