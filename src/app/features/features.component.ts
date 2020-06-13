import { Component, OnInit } from '@angular/core';
import $ from 'jquery'
declare var $: $
@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  $(document).ready(function(){
    $('[data-toggle="popover"]').popover();   
});
  }

}
