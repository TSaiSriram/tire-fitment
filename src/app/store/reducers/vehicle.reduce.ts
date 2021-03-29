// HOW TO SET UP A reducer.ts FILE:
// Import actions and interfaces
// Create interface for initial state
// Create initial state
// Create reducer function and pass in initial state and actions.
// Return new state

import * as fromVehicle from "../actions/vehicle.action";

export interface VehicleState {
  years: string[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: VehicleState = {
  years: [],
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: fromVehicle.VehicleAction
): VehicleState {
  switch (action.type) {
    case fromVehicle.LoadYearsAll.LOAD_YEARS_SUCCESS: {
    let years = ["2021", "2020"];
      const data =  {
        years,
        loaded: true,
        loading: false
      };
      console.log("in reducers",data);
      return data;
    }

    case fromVehicle.LoadYearsAll.LOAD_YEARS: {
      console.log("load");
      return {
        ...state,
        loading: true
      };
    }
    case fromVehicle.LoadYearsAll.LOAD_YEARS_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }

    default:
      return state;
  }

  // return state;
}
