import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { VehicleState } from "./store/reducers/vehicle.reduce";
import * as fromVehicle from "./store/actions/vehicle.action";
import { map } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  years$: any = [];
  years: any;
  selectedInput: any = [];
  typeFlag: any;
  finalValue: any;
  header: string = "Select vehicle";
  hide: boolean;
  constructor(private store: Store<VehicleState>) {}

  ngOnInit() {
    this.getYears();
  }

  getYears() {
    this.store.dispatch(new fromVehicle.LoadYears());
    this.years$ = this.store.select(store => store.years);
    console.log(this.years$)
    console.log(this.years$.actionsObserver._value.type)
    console.log(this.years$.actionsObserver._value.payload)
    // this.years$.subscribe(res => {
    //   console.log('total response',res)
    //   console.log("res:", res.year);
    // });
    this.years$.subscribe((res:any)=>{
      console.log('ewewgewgeg',res)
    })
  }

}