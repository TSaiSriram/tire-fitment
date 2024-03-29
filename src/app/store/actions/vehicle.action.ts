import { Action } from "@ngrx/store";
import { VehicleState } from "../reducers/vehicle.reduce";
// import model/interface from db.json here...

// Action constants
export enum LoadYearsAll  {
LOAD_YEARS = "[Fitment] Load Years",
LOAD_YEARS_FAIL = "[Fitment] Load Years Fail",
LOAD_YEARS_SUCCESS = "[Fitment] Load Years Success",
}

// Action creators
export class LoadYears implements Action {
  readonly type = LoadYearsAll.LOAD_YEARS;
}
export class LoadYearsFail implements Action {
  readonly type = LoadYearsAll.LOAD_YEARS_FAIL;
  constructor(public payload: any) {}
}
export class LoadYearsSuccess implements Action {
  readonly type = LoadYearsAll.LOAD_YEARS_SUCCESS;
  constructor(public payload: any) {} // Replace 'any' with interface
}

// Action types
export type VehicleAction = LoadYears | LoadYearsFail | LoadYearsSuccess;
