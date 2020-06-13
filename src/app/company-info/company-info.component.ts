import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.css']
})
export class CompanyInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   
  }
  myFunction() {
    alert("Send your query on +91 9108506090");
  }
}
