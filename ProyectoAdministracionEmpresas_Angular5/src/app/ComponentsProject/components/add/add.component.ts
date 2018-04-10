/*
    Creation date: 08/04/2018
    Author: Josue Arce González
    Description: Backside of the adding a new component process
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'add-component',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
 lista = [
    {
      nombre : "Dimension 1"
    },
    {
      nombre : "Dimension 2"
    },
    {
      nombre :"Dimension 2"
    }
  ]

  public component_name  = "";
  public component_dimension ="";

  constructor() {
  }

  ngOnInit() {
  }

}
