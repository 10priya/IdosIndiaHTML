import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var $: $

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css']
})
export class OurTeamComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $('[data-toggle="popover"]').popover();   
  });
    
  }
  

}
