/*
	Creation date: 08/04/2018 
	Author: Josue David Arce Gonzalez
	Description: Component View
*/

import { Component, OnInit } from '@angular/core';
import { ComponentModel } from '../models/component.models';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {
  
  public component_records : Array<ComponentModel>;



  constructor() { 
  	this.component_records = [
  		new ComponentModel(1,"C1",1,"D1"),
  		new ComponentModel(2,"C2",2,"D2")
  	]
  }

  ngOnInit() {
  
  	console.log(this.component_records);
  }

}
