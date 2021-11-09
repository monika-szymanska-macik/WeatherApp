import { City } from "./City";
import { Overview } from "./Overview";

export class ApiResponse{
    cod: string;
    message: number;
    cnt: number;
    city: City;
    list: Overview[];
}