import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { ComponentModel } from '../../models/component.models';

@Component({
  selector: 'delete-component',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent  {

  displayedColumns = ['select','Componente','Dimensiones Asocidadas'];
  dataSource = new MatTableDataSource<ComponentModel>(ELEMENT_DATA);
  selection = new SelectionModel<ComponentModel>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
  	console.log(this.selection.selected);
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

   applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
   @ViewChild(MatPaginator) paginator: MatPaginator;

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}

const ELEMENT_DATA: ComponentModel[{}] = [
  { ID_Component: 1, Component: 'Daniel', ID_Dimension: 1, Dimension: 'H' },
  { ID_Component: 1, Component: 'se', ID_Dimension: 1, Dimension: 'H' },
  { ID_Component: 1, Component: 'la', ID_Dimension: 1, Dimension: 'H' },
  { ID_Component: 1, Component: 'come', ID_Dimension: 1, Dimension: 'H' },
  { ID_Component: 1, Component: 'asdadadad', ID_Dimension: 1, Dimension: 'H' }
  
];
