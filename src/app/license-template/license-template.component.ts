import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lic-component',
  templateUrl: './license-template.component.html',
  styleUrls: ['./license-template.component.css']
})
export class LicenseTemplateComponent implements OnInit {
  title = 'License Template title.';

  constructor() { }

  ngOnInit() {
  }

}
