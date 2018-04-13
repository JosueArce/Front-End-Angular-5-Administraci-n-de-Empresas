/*
	Creation date: 12/04/2018
	Author: Josue Arce
	Description: Back part of the process of editting a component
*/

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { ComponentModel } from '../../models/component.models';

@Component({
  selector: 'edit-component',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent{

 /*START----------------DECORATORS-----------------------------*/
  @ViewChild(MatPaginator) paginator: MatPaginator;


/*END------------------DECORATORS-----------------------------*/

/*START----------------DEFINITIOS OF VARS--------------------------------------------*/
  //allows to display the table headers 
  displayedColumns = ['select','Componente','Dimensiones Asociadadas'];

  //contains the data received from the endpoint
  data = Object.assign( ELEMENT_DATA);

  //contains the records, a copy of data
  dataSource = new MatTableDataSource(this.data)

  //allows to check which rows are selected with the checkbox
  selection = new SelectionModel(true, []);

  component_name = "";
  component_dimension = "";

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

  

/*END----------------DEFINITIONS OF VARS----------------------------------------------*/


/*START-----------------------CHECKBOX IN TABLE------------------------------------------*/
  selectItem(row){
    //if there are any other checkbox checked, it'll uncheck the checkbox
    if(this.selection.selected.length > 0){
       this.selection.clear();//unselect all the active checkbox
    }
    this.selection.toggle(row);
    this.component_dimension = "Dimension 1";
    this.component_name = row.Componente;
    console.log(row);
  }

/*END-------------------------CHECKBOX IN TABLE------------------------------------------*/  

/*START-----------------------ONCLICK METHODS---------------------------------------------*/

//calls the method to delete 1 or more rows
delete_data(){
  this.selection.selected.forEach(item => {
      let index: number = this.data.findIndex(pos => pos === item);
      this.data.splice(index,1)
      this.dataSource = new MatTableDataSource<ComponentModel>(this.data);
    });
    this.selection = new SelectionModel<ComponentModel>(true, []);
}
/*END-------------------------ONCLICK METHODS----------------------------------------------*/


/*START-------------------------FILTER FOR TABLE------------------------------------------*/
   applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

 /*END-------------------------FILTER FOR TABLE-------------------------------------------*/ 
   
/*START------------------------PAGINATION--------------------------------------------------*/
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
/*END--------------------------PAGINATION---------------------------------------------------*/


}
export interface Element {
  Dimensiones_Asocidadas: string;
  Componente: number;
  weight: number;
  symbol: string;
}
let ELEMENT_DATA: Element[] = [
  { Componente: 1, Dimensiones_Asocidadas: 'Dimension 1', weight: 1.0079, symbol: 'H' },
  { Componente: 2, Dimensiones_Asocidadas: 'Dimension 2', weight: 4.0026, symbol: 'He' },
  { Componente: 3, Dimensiones_Asocidadas: 'Dimension 1', weight: 6.941, symbol: 'Li' },
  { Componente: 4, Dimensiones_Asocidadas: 'Dimension 2', weight: 9.0122, symbol: 'Be' },
  { Componente: 5, Dimensiones_Asocidadas: 'Dimension 2', weight: 10.811, symbol: 'B' },
  { Componente: 6, Dimensiones_Asocidadas: 'Dimension 1', weight: 12.0107, symbol: 'C' },
  { Componente: 7, Dimensiones_Asocidadas: 'Dimension 2', weight: 14.0067, symbol: 'N' },
  { Componente: 8, Dimensiones_Asocidadas: 'Dimension 1', weight: 15.9994, symbol: 'O' },
  { Componente: 9, Dimensiones_Asocidadas: 'Dimension 1', weight: 18.9984, symbol: 'F' },
  { Componente: 10, Dimensiones_Asocidadas: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { Componente: 11, Dimensiones_Asocidadas: 'Sodium', weight: 22.9897, symbol: 'Na' },
  { Componente: 12, Dimensiones_Asocidadas: 'Magnesium', weight: 24.305, symbol: 'Mg' },
  { Componente: 13, Dimensiones_Asocidadas: 'Aluminum', weight: 26.9815, symbol: 'Al' },
  { Componente: 14, Dimensiones_Asocidadas: 'Silicon', weight: 28.0855, symbol: 'Si' },
  { Componente: 15, Dimensiones_Asocidadas: 'Phosphorus', weight: 30.9738, symbol: 'P' },
  { Componente: 16, Dimensiones_Asocidadas: 'Sulfur', weight: 32.065, symbol: 'S' },
  { Componente: 17, Dimensiones_Asocidadas: 'Chlorine', weight: 35.453, symbol: 'Cl' },
  { Componente: 18, Dimensiones_Asocidadas: 'Argon', weight: 39.948, symbol: 'Ar' },
  { Componente: 19, Dimensiones_Asocidadas: 'Potassium', weight: 39.0983, symbol: 'K' },
  { Componente: 20, Dimensiones_Asocidadas: 'Dimension 2', weight: 40.078, symbol: 'Ca' },
];