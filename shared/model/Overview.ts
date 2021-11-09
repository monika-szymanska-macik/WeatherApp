
import { Clouds } from "./Clouds";
import { Main } from "./Main";
import { Sys } from "./Sys";
import { Weather } from "./Weather";
import { Wind } from "./Wind";

export class Overview {
    dt: number;
    dt_txt : string;
    clouds: Clouds;
    main: Main;
    sys: Sys;
    weather: Weather;
    wind: Wind;
    pop: number;
    visibility: number;
}