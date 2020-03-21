import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ELEMENT_DATA } from '../model/GridData/ElementData';
import { HeaderDetails } from '../model/GridData/headers';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  headerDetails = HeaderDetails;
  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  previousIndex: number;

  @ViewChild(MatSort) sort: MatSort;

  constructor() {
  }

  ngOnInit() {
    this.setDisplayedColumns();
    this.dataSource.sort = this.sort;
  }


  setDisplayedColumns() {
    this.headerDetails.forEach((colunm, index) => {
      colunm[index] = index;
      this.displayedColumns[index] = colunm.field;
    });
  }


}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  age: number;
  dateOfBirth: Date;
}

export interface HeaderDetails {
  header: string;
  field: string;
}
