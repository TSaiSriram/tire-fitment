import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap, catchError } from "rxjs/operators";

import {
  LoadYears,
  LoadYearsSuccess,
 LoadYearsAll
} from "../actions/vehicle.action";
import { EMPTY} from "rxjs";
import { TireService } from "../../services/tire.service";

@Injectable()
export class TireEffects {
  constructor(private actions$: Actions, private tireService: TireService) {}

  loadTire$ = createEffect(() =>
    this.actions$.pipe(
      ofType<LoadYears>(LoadYearsAll.LOAD_YEARS),
      mergeMap(() =>
        this.tireService.getTireYear().pipe(
          map(tires => {
            console.log("in effect")
            return new LoadYearsSuccess(tires["year"]);
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
