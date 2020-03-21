import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { moveItemInArray, CdkDragStart, CdkDragDrop, CdkDropList } from '@angular/cdk/drag-drop';

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', age: 15, dateOfBirth: new Date() },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', age: 15, dateOfBirth: new Date() },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', age: 15, dateOfBirth: new Date() },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', age: 15, dateOfBirth: new Date() },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', age: 15, dateOfBirth: new Date() },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', age: 15, dateOfBirth: new Date() },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', age: 15, dateOfBirth: new Date() },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', age: 15, dateOfBirth: new Date() },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', age: 15, dateOfBirth: new Date() },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', age: 15, dateOfBirth: new Date() },
];

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  headerDetails: HeaderDetails[] = [
    {
      header: 'NO.',
      field: 'position'
    },
    {
      header: 'Name.',
      field: 'name'
    },
    {
      header: 'Weight.',
      field: 'weight'
    },
    {
      header: 'Symbol.',
      field: 'symbol'
    },
    {
      header: 'Age.',
      field: 'age'
    },
    {
      header: 'Date Of Birth.',
      field: 'dateOfBirth'
    },
  ];

  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  previousIndex: number;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private elref: ElementRef) {
    console.log(elref);
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

  rearrange() {
    const a = this.displayedColumns[1];
    const b = this.displayedColumns[2];
    this.displayedColumns[1] = b;
    this.displayedColumns[2] = a;

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  dragStarted(event: CdkDragStart, index: number ) {
    this.previousIndex = index;
  }

  dropListDropped(event: CdkDropList, index: number) {
    if (event) {
      moveItemInArray(this.headerDetails, this.previousIndex, index);
      this.setDisplayedColumns();
    }
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

