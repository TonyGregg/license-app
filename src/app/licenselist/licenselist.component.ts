import { Component, OnInit } from '@angular/core';
import {LicenseTemplateComponent} from '../license-template/license-template.component';

@Component({
  selector: 'app-licenselist',
  templateUrl: './licenselist.component.html',
  styleUrls: ['./licenselist.component.css']
})
export class LicenselistComponent implements OnInit {
  title = 'List of licenes';
  public licenses = ['Bike', 'Car', 'Sports Car'];
  constructor() { }

  ngOnInit() {
  }

}
