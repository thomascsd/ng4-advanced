import { Component, OnInit } from '@angular/core';
import { flotCharts } from './init';

@Component({
  selector: 'app-flot',
  templateUrl: './flot.component.html',
  styleUrls: ['./flot.component.css']
})
export class FlotComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(flotCharts);

  }

}
