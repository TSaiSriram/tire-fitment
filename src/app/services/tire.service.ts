import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { VehicleState } from "../store/reducers/vehicle.reduce";

@Injectable({
  providedIn: "root"
})
export class TireService {
  private YEARS_URL = "https://api.mocki.io/v1/bcdf729b";
  constructor(private http: HttpClient) {}

  getTireYear() {
    return this.http.get<VehicleState[]>(this.YEARS_URL);
  }
}
