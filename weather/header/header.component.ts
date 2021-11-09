import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output()
  myCity: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  getCity(city: string){
    console.log(city);
    this.myCity.emit(city);
  }
}
